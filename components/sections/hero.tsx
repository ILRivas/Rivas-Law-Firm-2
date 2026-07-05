"use client"

import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  Phone,
  Award,
  Clock,
  DollarSign,
  type LucideIcon,
} from "lucide-react"
import { useCountUp } from "@/hooks/use-count-up"

function CountUpStat({
  icon: Icon,
  endValue,
  suffix = "",
  prefix = "",
  label,
  finalDisplay,
}: {
  icon: LucideIcon
  endValue: number
  suffix?: string
  prefix?: string
  label: string
  finalDisplay?: string
}) {
  const { count, elementRef } = useCountUp({
    end: endValue,
    duration: 2500,
  })

  const isComplete = count === endValue

  return (
    <div
      ref={elementRef}
      className="flex items-center gap-4 rounded-lg bg-muted p-4"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
        <Icon className="h-6 w-6 text-primary-foreground" />
      </div>

      <div>
        <p className="text-2xl font-bold text-foreground">
          {isComplete && finalDisplay
            ? finalDisplay
            : `${prefix}${count.toLocaleString()}${suffix}`}
        </p>

        <p className="text-sm text-muted-foreground">{label}</p>
      </div>
    </div>
  )
}

const stats = [
  {
    icon: Award,
    endValue: 100,
    suffix: "%",
    label: "Client Focused",
  },
  {
    icon: DollarSign,
    prefix: "$",
    endValue: 5000000,
    finalDisplay: "$ Millions",
    label: "Recovered for Clients",
  },
  {
    icon: Clock,
    endValue: 24,
    suffix: "/7",
    label: "Availability",
  },
]

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/Flipped-Truck.webp"
          alt="Truck accident"
          fill
          className="object-cover"
          priority
          quality={85}
        />

        {/* Dark Overlay */}
        <div className="pointer-events-none absolute inset-0 bg-primary/85" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-screen flex-col justify-center pb-20 pt-32">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Content */}
            <div className="text-center lg:text-left">
              <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
                Trusted Legal Representation in the Rio Grande Valley
              </p>

              <h1 className="font-serif text-4xl font-bold leading-tight text-primary-foreground sm:text-5xl lg:text-6xl">
                <span className="text-balance">
                  Rivas Law Firm, PLLC.
                  <br />
                  <span className="text-accent">
                    Wrangling Every Legal Challenge You Face
                  </span>
                </span>
              </h1>

              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80 sm:text-xl">
                <span className="text-pretty">
                  Our dedicated legal team is committed to providing exceptional
                  representation in personal injury, family law, criminal
                  defense, and property matters.
                </span>
              </p>

              {/* CTA Buttons */}
              <div className="relative z-20 mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-accent px-6 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90"
                >
                  Schedule Consultation
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <a
                  href="tel:+19563318777"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-primary-foreground/30 bg-transparent px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10 hover:text-primary-foreground"
                >
                  <Phone className="h-4 w-4" />
                  Call Now
                </a>
              </div>
            </div>

            {/* Stats Card */}
            <div className="mx-auto w-full max-w-md lg:mx-0 lg:ml-auto">
              <div className="rounded-2xl bg-card p-8 shadow-2xl">
                <h3 className="mb-6 text-center font-serif text-3xl font-semibold text-foreground">
                  Why Choose Us
                </h3>

                <div className="space-y-6 font-serif">
                  {stats.map((stat) => (
                    <CountUpStat
                      key={stat.label}
                      icon={stat.icon}
                      endValue={stat.endValue}
                      suffix={stat.suffix}
                      prefix={stat.prefix}
                      label={stat.label}
                      finalDisplay={stat.finalDisplay}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}