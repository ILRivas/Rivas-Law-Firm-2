import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy | Rivas Law Firm, PLLC",
  description:
    "Read the privacy policy for Rivas Law Firm, PLLC. Learn how information submitted through our website may be collected, used, and protected.",
}

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-background">
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">
              Rivas Law Firm, PLLC
            </p>

            <h1 className="font-serif text-4xl font-bold text-foreground sm:text-5xl">
              Privacy Policy
            </h1>

            <p className="mt-4 text-muted-foreground">
              Last Updated: July 4, 2026
            </p>
          </div>

          <div className="space-y-10 text-base leading-7 text-muted-foreground">
            <section>
              <h2 className="mb-3 font-serif text-2xl font-semibold text-foreground">
                1. Introduction
              </h2>

              <p>
                Rivas Law Firm, PLLC respects your privacy. This Privacy Policy
                explains how we may collect, use, and protect information that
                you provide when visiting our website or submitting a contact
                form.
              </p>

              <p className="mt-4">
                By using this website, you agree to the practices described in
                this Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-serif text-2xl font-semibold text-foreground">
                2. Information We Collect
              </h2>

              <p>
                We may collect information that you choose to provide through
                our website, including:
              </p>

              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>Your first and last name</li>
                <li>Your email address</li>
                <li>Your phone number</li>
                <li>Your preferred contact method</li>
                <li>The practice area related to your inquiry</li>
                <li>The message or information you submit through our form</li>
              </ul>

              <p className="mt-4">
                We may also collect basic technical information, such as browser
                type, device information, IP address, and security information
                used to help protect the website from spam or abuse.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-serif text-2xl font-semibold text-foreground">
                3. How We Use Your Information
              </h2>

              <p>
                We use information submitted through this website to review your
                inquiry, respond to you, communicate with you about a potential
                legal matter, improve our website, and protect our website from
                spam, abuse, or unauthorized activity.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-serif text-2xl font-semibold text-foreground">
                4. Contact Form Submissions
              </h2>

              <p>
                When you submit a contact form, the information you provide is
                sent to Rivas Law Firm, PLLC so that the firm may review your
                inquiry and contact you.
              </p>

              <p className="mt-4">
                Please do not submit confidential, privileged, or highly
                sensitive information through the website contact form. An
                attorney client relationship is only formed after Rivas Law
                Firm, PLLC agrees to represent you in writing.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-serif text-2xl font-semibold text-foreground">
                5. Google reCAPTCHA
              </h2>

              <p>
                This website may use Google reCAPTCHA to help protect our
                contact form from spam and abuse. reCAPTCHA may collect
                information about your device, browser, and interaction with the
                website to determine whether the submission appears legitimate.
                Use of reCAPTCHA is subject to Google&apos;s Privacy Policy and
                Terms of Service.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-serif text-2xl font-semibold text-foreground">
                6. How We Share Information
              </h2>

              <p>
                We do not sell your personal information. We may share
                information with service providers who help operate our website,
                process contact form submissions, maintain website security, or
                provide related technical services.
              </p>

              <p className="mt-4">
                We may also disclose information if required by law, court
                order, legal process, or to protect the rights, safety, and
                property of Rivas Law Firm, PLLC or others.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-serif text-2xl font-semibold text-foreground">
                7. Data Security
              </h2>

              <p>
                We use reasonable measures to help protect information submitted
                through this website. However, no website, internet
                transmission, or electronic storage system can be guaranteed to
                be completely secure.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-serif text-2xl font-semibold text-foreground">
                8. Third Party Links
              </h2>

              <p>
                This website may contain links to third party websites. We are
                not responsible for the privacy practices, content, or security
                of third party websites.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-serif text-2xl font-semibold text-foreground">
                9. Children&apos;s Privacy
              </h2>

              <p>
                This website is not intended for children under the age of 13.
                We do not knowingly collect personal information from children
                under 13 through this website.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-serif text-2xl font-semibold text-foreground">
                10. Updates to This Policy
              </h2>

              <p>
                We may update this Privacy Policy from time to time. Any changes
                will be posted on this page with an updated effective date.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-serif text-2xl font-semibold text-foreground">
                11. Contact Us
              </h2>

              <p>
                If you have questions about this Privacy Policy, please contact
                Rivas Law Firm, PLLC.
              </p>

              <div className="mt-4 rounded-lg border border-border bg-card p-5 text-foreground">
                <p className="font-semibold">Rivas Law Firm, PLLC</p>
                <p>125 E. Caffery Ave</p>
                <p>Pharr, TX 78577</p>
                <p className="mt-2">
                  Phone:{" "}
                  <a
                    href="tel:+19563318777"
                    className="text-primary hover:text-accent"
                  >
                    (956) 331-8777
                  </a>
                </p>
              </div>
            </section>
          </div>

          <div className="mt-12 border-t border-border pt-8 text-center">
            <Link
              href="/"
              className="text-sm font-medium text-primary transition-colors hover:text-accent"
            >
              Return Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}