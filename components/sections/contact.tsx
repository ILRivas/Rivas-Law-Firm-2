"use client"

import { useState, useEffect, type FormEvent } from "react"
import { useSearchParams } from "next/navigation"
import Script from "next/script"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, MapPin, Clock, Send } from "lucide-react"

declare global {
  interface Window {
    grecaptcha?: {
      getResponse: () => string
      reset: () => void
    }
  }
}

type ContactInfoItem = {
  icon: typeof Phone
  title: string
  content?: string
  href?: string | null
  numbers?: { label: string; href: string }[]
}

const contactInfo: ContactInfoItem[] = [
  {
    icon: Phone,
    title: "Phone",
    numbers: [
      { label: "(956) 331-8777", href: "tel:+19563318777" },
      { label: "(956) 787-6261", href: "tel:+19567876261" },
    ],
  },
  {
    icon: MapPin,
    title: "Address",
    content: "125 E. Caffery Ave, Pharr, TX 78577",
    href: "https://www.google.com/maps/search/?api=1&query=125%20E.%20Caffery%20Ave%2C%20Pharr%2C%20TX%2078577",
  },
  {
    icon: Clock,
    title: "Office Hours",
    content: "Mon-Fri: 8AM-5PM",
    href: null,
  },
]

const practiceAreas = [
  { value: "personal-injury", label: "Personal Injury" },
  { value: "family-law", label: "Family Law" },
  { value: "criminal-defense", label: "Criminal Defense" },
  { value: "property-law", label: "Property Law" },
  { value: "other", label: "Other" },
]

const preferredContactOptions = [
  { value: "phone", label: "Phone" },
  { value: "email", label: "Email" },
  { value: "text", label: "Text Message" },
]

interface ContactSectionProps {
  showHeader?: boolean
}

export function ContactSection({ showHeader = true }: ContactSectionProps) {
  const searchParams = useSearchParams()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")
  const [practiceArea, setPracticeArea] = useState("")
  const [preferredContact, setPreferredContact] = useState("")

  useEffect(() => {
    const requested = searchParams.get("practiceArea")
    if (requested && practiceAreas.some((area) => area.value === requested)) {
      setPracticeArea(requested)
    }
  }, [searchParams])

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    const form = e.currentTarget
    const formData = new FormData(form)

    const token = window.grecaptcha?.getResponse()

    if (!token) {
      setError("Please complete the reCAPTCHA.")
      setIsSubmitting(false)
      return
    }

    if (!preferredContact) {
      setError("Please select a preferred contact method.")
      setIsSubmitting(false)
      return
    }

    if (!practiceArea) {
      setError("Please select a practice area.")
      setIsSubmitting(false)
      return
    }

    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      preferredContact,
      practiceArea,
      message: formData.get("message"),
      consent: formData.get("consent") === "on",
      website: formData.get("website"),
      token,
    }

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      const result = await res.json().catch(() => ({}))

      if (!res.ok || !result.success) {
        throw new Error(result.error || "Something went wrong.")
      }

      setSubmitted(true)
      setPracticeArea("")
      setPreferredContact("")
      form.reset()
      window.grecaptcha?.reset()
    } catch (err) {
      const message =
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again or call us directly."

      setError(message)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="bg-muted py-20 sm:py-28">
      <Script
        src="https://www.google.com/recaptcha/api.js"
        strategy="lazyOnload"
        async
        defer
      />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {showHeader && (
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">
              Get in Touch
            </p>

            <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
              <span className="text-balance">
                Schedule Your Free Consultation
              </span>
            </h2>

            <p className="mt-4 text-lg text-muted-foreground">
              <span className="text-pretty">
                Take the first step towards resolving your legal matter. Contact
                us today to schedule a consultation with our experienced legal
                team.
              </span>
            </p>
          </div>
        )}

        <div className="mx-auto grid w-full max-w-[calc(100vw-2rem)] gap-8 sm:max-w-[680px] lg:max-w-none lg:grid-cols-3">
          {/* Contact Info Cards */}
          <div className="w-full min-w-0 space-y-4 lg:col-span-1">
            {contactInfo.map((item) => (
              <Card key={item.title} className="w-full min-w-0 border-border/50">
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary">
                    <item.icon className="h-6 w-6 text-primary-foreground" />
                  </div>

                  <div className="min-w-0">
                    <h3 className="font-semibold text-foreground">
                      {item.title}
                    </h3>

                    {item.numbers ? (
                      <div className="flex flex-col">
                        {item.numbers.map((number) => (
                          <a
                            key={number.href}
                            href={number.href}
                            className="break-words text-muted-foreground transition-colors hover:text-primary"
                          >
                            {number.label}
                          </a>
                        ))}
                      </div>
                    ) : item.href ? (
                      <a
                        href={item.href}
                        className="break-words text-muted-foreground transition-colors hover:text-primary"
                        target={
                          item.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          item.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                      >
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{item.content}</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Google Map */}
            <Card className="w-full min-w-0 overflow-hidden border-border/50">
              <div className="aspect-video">
                <iframe
                  title="Rivas Law Firm Google Map"
                  src="https://www.google.com/maps?q=125%20E.%20Caffery%20Ave,%20Pharr,%20TX%2078577&output=embed"
                  className="block h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="w-full min-w-0 border-border/50 lg:col-span-2">
            <CardContent className="p-6 sm:p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/20">
                    <Send className="h-8 w-8 text-accent" />
                  </div>

                  <h3 className="font-serif text-2xl font-semibold text-foreground">
                    Thank You!
                  </h3>

                  <p className="mt-2 text-muted-foreground">
                    We have received your message and will contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <p className="text-sm text-muted-foreground">
                    We personally review every message and follow up as soon
                    as we can.
                  </p>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        required
                        placeholder="John"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        required
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="john@example.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="(956) 555-1234"
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="preferredContact">
                        Preferred Contact Method *
                      </Label>
                      <Select
                        value={preferredContact}
                        onValueChange={setPreferredContact}
                        required
                      >
                        <SelectTrigger id="preferredContact" className="w-full">
                          <SelectValue placeholder="How should we contact you?" />
                        </SelectTrigger>

                        <SelectContent>
                          {preferredContactOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="practiceArea">Practice Area *</Label>
                      <Select
                        value={practiceArea}
                        onValueChange={setPracticeArea}
                        required
                      >
                        <SelectTrigger id="practiceArea" className="w-full">
                          <SelectValue placeholder="Select an area" />
                        </SelectTrigger>

                        <SelectContent>
                          {practiceAreas.map((area) => (
                            <SelectItem key={area.value} value={area.value}>
                              {area.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">How Can We Help? *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      placeholder="Briefly describe your legal matter. Please do not include sensitive personal information."
                      rows={5}
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      id="consent"
                      name="consent"
                      type="checkbox"
                      required
                      className="mt-1 h-4 w-4"
                    />

                    <Label
                      htmlFor="consent"
                      className="text-xs leading-relaxed text-muted-foreground"
                    >
                      I understand that submitting this form does not create an
                      attorney-client relationship. I agree that Rivas Law Firm,
                      PLLC may contact me about my inquiry.
                    </Label>
                  </div>

                  <input
                    type="text"
                    name="website"
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <div className="overflow-hidden rounded-lg border border-border/50 bg-background p-4">
                    <div
                      className="g-recaptcha"
                      data-sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                    />
                  </div>

                  {error && (
                    <p className="text-sm font-medium text-red-600">{error}</p>
                  )}

                  <p className="text-xs text-muted-foreground">
                    * Required fields. Please do not submit confidential or
                    highly sensitive information through this form.
                  </p>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full sm:w-auto"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Request Consultation"}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}