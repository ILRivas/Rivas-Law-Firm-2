import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

function escapeHtml(value: unknown) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;")
}

function formatLabel(value: string) {
  return value
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const {
      firstName,
      lastName,
      email,
      phone,
      preferredContact,
      practiceArea,
      message,
      consent,
      website,
      token,
    } = body

    // Honeypot spam check
    if (website) {
      return NextResponse.json({ success: true }, { status: 200 })
    }

    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !preferredContact ||
      !practiceArea ||
      !message ||
      !consent
    ) {
      return NextResponse.json(
        { success: false, error: "Missing required fields." },
        { status: 400 }
      )
    }

    if (!token) {
      return NextResponse.json(
        { success: false, error: "Missing reCAPTCHA token." },
        { status: 400 }
      )
    }

    const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY

    if (!recaptchaSecret) {
      return NextResponse.json(
        { success: false, error: "Missing reCAPTCHA secret key." },
        { status: 500 }
      )
    }

    const verificationRes = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          secret: recaptchaSecret,
          response: token,
        }),
      }
    )

    const verification = await verificationRes.json()

    if (!verification.success) {
      return NextResponse.json(
        { success: false, error: "reCAPTCHA failed." },
        { status: 400 }
      )
    }

    const fromEmail = process.env.CONTACT_FROM_EMAIL
    const toEmail = process.env.CONTACT_TO_EMAIL

    if (!process.env.RESEND_API_KEY || !fromEmail || !toEmail) {
      return NextResponse.json(
        { success: false, error: "Email settings are missing." },
        { status: 500 }
      )
    }

    const safeFirstName = escapeHtml(firstName)
    const safeLastName = escapeHtml(lastName)
    const safeEmail = escapeHtml(email)
    const safePhone = escapeHtml(phone)
    const safePreferredContact = escapeHtml(formatLabel(preferredContact))
    const safePracticeArea = escapeHtml(formatLabel(practiceArea))
    const safeMessage = escapeHtml(message)

    await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: safeEmail,
      subject: `New Consultation Request from ${safeFirstName} ${safeLastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New Consultation Request</h2>

          <p><strong>Name:</strong> ${safeFirstName} ${safeLastName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Phone:</strong> ${safePhone}</p>
          <p><strong>Preferred Contact:</strong> ${safePreferredContact}</p>
          <p><strong>Practice Area:</strong> ${safePracticeArea}</p>

          <hr />

          <p><strong>Message:</strong></p>
          <p>${safeMessage.replaceAll("\n", "<br />")}</p>

          <hr />

          <p style="font-size: 12px; color: #666;">
            The visitor checked the consent/disclaimer box before submitting.
          </p>

          <p style="font-size: 12px; color: #666;">
            This message was submitted through the Rivas Law Firm website contact form.
          </p>
        </div>
      `,
      text: `
New Consultation Request

Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}
Preferred Contact: ${formatLabel(preferredContact)}
Practice Area: ${formatLabel(practiceArea)}

Message:
${message}

The visitor checked the consent/disclaimer box before submitting.
      `,
    })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error("Email sending failed:", error)

    return NextResponse.json(
      { success: false, error: "Email failed." },
      { status: 500 }
    )
  }
}