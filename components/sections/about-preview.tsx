import Link from "next/link"
import { CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const highlights = [
  "Personalized attention to every case",
  "Proven track record of success",
  "Deep roots in the Rio Grande Valley",
  "Bilingual legal services (English/Spanish)",
]

export function AboutPreview() {
  return (
    <section className="py-20 sm:py-28 bg-muted">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Image/Visual */}
          <div className="relative">
            <div className="aspect-6/9 overflow-hidden rounded-2xl bg-primary/10">
              <Image
                src="/images/Attorney-Headshot.webp"
                alt="Attorney Israel Rivas"
                fill
                className="object-cover object-center rounded-3xl"
                priority
                quality={85}
                />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl border-2 border-accent" />
          </div>

          {/* Content */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">
              About Our Firm
            </p>
            <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
              <span className="text-balance">
                Dedicated Legal Advocates for Our Community
              </span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              <span className="text-pretty">
                Founded by Israel Lee Rivas, the Rivas Law Firm, PLLC. is built
                on a strong foundation of passion, commitment, and unparalleled legal expertise. Since its inception,
                our firm has been dedicated to securing justice for our clients, and assisting
                in recovering millions of dollars in settlements.
              </span>
            </p>

            {/* Highlights */}
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 shrink-0 text-accent" />
                  <span className="text-sm font-medium text-foreground">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button asChild size="lg" variant="outline" className="gap-2">
                <Link href="/about">
                  Learn More About Us
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
