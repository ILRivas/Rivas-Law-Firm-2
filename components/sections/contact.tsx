"use client"

import { useState } from "react"
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

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    content: "(956) 331-8777",
    href: "tel:+19563318777",
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

interface ContactSectionProps {
  showHeader?: boolean
}

export function ContactSection({ showHeader = true }: ContactSectionProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-muted py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
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
                us today to schedule a confidential consultation with our
                experienced legal team.
              </span>
            </p>
          </div>
        )}

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Contact Info Cards */}
          <div className="space-y-4 lg:col-span-1">
            {contactInfo.map((item) => (
              <Card key={item.title} className="border-border/50">
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary">
                    <item.icon className="h-6 w-6 text-primary-foreground" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground">
                      {item.title}
                    </h3>

                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-muted-foreground transition-colors hover:text-primary"
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
            <Card className="overflow-hidden border-border/50">
              <div className="aspect-video">
                <iframe
                  title="Rivas Law Firm Google Map"
                  src="https://www.google.com/maps?q=125%20E.%20Caffery%20Ave,%20Pharr,%20TX%2078577&output=embed"
                  width="100%"
                  height="100%"
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border-border/50 lg:col-span-2">
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

                  <Button
                    className="mt-6"
                    variant="outline"
                    onClick={() => setSubmitted(false)}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
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
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="(956) 555-1234"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="practiceArea">Practice Area *</Label>
                      <Select name="practiceArea" required>
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
                      placeholder="Please briefly describe your legal matter..."
                      rows={5}
                    />
                  </div>

                  <p className="text-xs text-muted-foreground">
                    * Required fields. Your information is kept strictly
                    confidential.
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