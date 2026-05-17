"use client"

import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"

const testimonials = [
  {
    name: "Adilene A.",
    source: "Google Review",
    text: "Thank you so much to the Rivas team for working to get the maximum amount for me and my kids. This allowed us to do something we didn’t think was possible at this point in our lives, and now we’re on the path to hopefully purchasing our first home. Again, thank you!",
  },
  {
    name: "Giovanna A.",
    source: "Google Review",
    text: "10/10 best law firm. My case manager Zack was so helpful and informative throughout the process. They explained everything and truly care for their clients. I would absolutely recommend them to others.",
  },
  {
    name: "David R.",
    source: "Google Review",
    text: "Excellent communication and outstanding representation. I always felt informed and supported every step of the way.",
  },
]

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextTestimonial = () => {
    setActiveIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    )
  }

  const previousTestimonial = () => {
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    )
  }

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 7000)
    return () => clearInterval(interval)
  }, [])

  const activeTestimonial = testimonials[activeIndex]

  return (
    <section id="testimonials" className="bg-muted py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Client Testimonials
          </p>

          <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Trusted by Clients Across South Texas
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Real experiences from clients who trusted Rivas Law Firm, PLLC
            during important moments in their lives.
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-3xl border border-border/50 bg-card p-8 shadow-sm sm:p-10 lg:p-12">
            <div className="absolute right-8 top-8 hidden h-16 w-16 items-center justify-center rounded-full bg-primary/10 sm:flex">
              <Quote className="h-7 w-7 text-primary" />
            </div>

            <div className="mb-6 flex gap-1">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  className="h-5 w-5 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>

            <p className="max-w-3xl text-xl leading-relaxed text-muted-foreground sm:text-2xl">
              “{activeTestimonial.text}”
            </p>

            <div className="mt-8 border-t border-border/50 pt-6">
              <p className="font-semibold text-foreground">
                {activeTestimonial.name}
              </p>

              <p className="mt-1 text-sm text-muted-foreground">
                {activeTestimonial.source}
              </p>
            </div>

            <div className="mt-8 flex items-center justify-between gap-4">
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    aria-label={`View testimonial ${index + 1}`}
                    className={`h-2.5 rounded-full transition-all ${
                      activeIndex === index
                        ? "w-8 bg-primary"
                        : "w-2.5 bg-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>

              <div className="flex gap-3">
                <button
                  onClick={previousTestimonial}
                  aria-label="Previous testimonial"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                <button
                  onClick={nextTestimonial}
                  aria-label="Next testimonial"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          <p className="mt-5 text-center text-xs text-muted-foreground">
            Reviews may be lightly edited for clarity, grammar, and formatting
            without changing the meaning.
          </p>
        </div>
      </div>
    </section>
  )
}