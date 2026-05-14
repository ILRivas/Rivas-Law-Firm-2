"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Award, Users, Clock } from "lucide-react"
import { useCountUp } from "@/hooks/use-count-up"

function CountUpStat({ 
  icon: Icon, 
  endValue, 
  suffix = "", 
  prefix = "",
  label 
}: { 
  icon: React.ComponentType<{ className?: string }>
  endValue: number
  suffix?: string
  prefix?: string
  label: string 
}) {
  const { count, elementRef } = useCountUp({ end: endValue, duration: 2500 })

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
          {prefix}{count.toLocaleString()}{suffix}
        </p>
        <p className="text-sm text-muted-foreground">
          {label}
        </p>
      </div>
    </div>
  )
}

const stats = [
  { icon: Award, endValue: 25, suffix: "+", label: "Years Experience" },
  { icon: Users, endValue: 1000, suffix: "+", label: "Cases Won" },
  { icon: Clock, endValue: 24, suffix: "/7", label: "Available" },
]

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/flipped-truck.webp"
          alt="Professional law office"
          fill
          className="object-"
          priority
          quality={85}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-primary/85" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-screen flex-col justify-center pb-20 pt-32">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Content */}
            <div className="text-center lg:text-left">
              <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
                Trusted Legal Representation in Pharr, Texas
              </p>
              <h1 className="font-serif text-4xl font-bold leading-tight text-primary-foreground sm:text-5xl lg:text-6xl">
                <span className="text-balance">
                  Fighting for Justice,{" "}
                  <span className="text-accent">Protecting Your Rights</span>
                </span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80 sm:text-xl">
                <span className="text-pretty">
                  With decades of experience serving the Rio Grande Valley, our
                  dedicated legal team is committed to providing exceptional
                  representation in personal injury, family law, criminal
                  defense, and property matters.
                </span>
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  <Link href="/contact">
                    Free Consultation
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="gap-2 border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                >
                  <a href="tel:+19565551234">
                    <Phone className="h-4 w-4" />
                    Call Now
                  </a>
                </Button>
              </div>
            </div>

            {/* Stats Card */}
            <div className="mx-auto w-full max-w-md lg:mx-0 lg:ml-auto">
              <div className="rounded-2xl bg-card p-8 shadow-2xl">
                <h3 className="mb-6 text-center font-serif text-xl font-semibold text-foreground">
                  Why Choose Us
                </h3>
                <div className="space-y-6">
                  {stats.map((stat) => (
                    <CountUpStat
                      key={stat.label}
                      icon={stat.icon}
                      endValue={stat.endValue}
                      suffix={stat.suffix}
                      label={stat.label}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
