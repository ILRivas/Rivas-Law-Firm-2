import Image from "next/image"
import { CheckCircle } from "lucide-react"

const highlights = [
  "Proudly serving the Rio Grande Valley",
  "Bilingual services in English and Spanish",
  "Strategic negotiation and litigation support",
  "Results-driven legal representation",
  "Personalized guidance for every client",
  "Clear and consistent communication",
]

interface AboutSectionProps {
  showHeader?: boolean
}

export function AboutSection({
  showHeader = true,
}: AboutSectionProps) {
  return (
    <section id="about" className="bg-muted py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">

          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border/50 shadow-sm">
              <Image
                src="/images/Texas-Capitol.webp"
                alt="Rivas Law Firm"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />

              {/* Text Overlay */}
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="mt-3 max-w-md font-serif text-2xl font-bold leading-tight text-white">
                  Trusted Representation for Individuals & Families
                </h3>
              </div>
            </div>

            {/* Decorative Border */}
            <div className="absolute -bottom-4 -right-4 -z-10 hidden h-full w-full rounded-3xl border-2 border-accent lg:block" />
          </div>

          {/* Content */}
          <div>
            {showHeader && (
              <>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                  About Our Firm
                </p>

                <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
                  <span className="text-balance">
                    Dedicated Legal Advocates for Our Community
                  </span>
                </h2>
              </>
            )}

            <p
              className={`${
                showHeader ? "mt-6" : ""
              } text-lg leading-relaxed text-muted-foreground`}
            >
              <span className="text-pretty">
                Founded by Israel Lee Rivas, Rivas Law Firm, PLLC was built on
                a foundation of dedication, integrity, and client-focused
                representation. The firm is committed to helping individuals and
                families navigate difficult legal matters with confidence and
                trusted guidance.
              </span>
            </p>

            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              <span className="text-pretty">
                Through strategic advocacy and personalized attention, Attorney
                Rivas and his team work tirelessly to pursue the best possible
                outcomes for every client. From the initial consultation to the
                resolution of the case, the firm prioritizes communication,
                transparency, and relentless representation.
              </span>
            </p>

            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              <span className="text-pretty">
                At Rivas Law Firm, PLLC, every client is treated with the care,
                respect, and attention they deserve because protecting your
                rights and your future is always the priority.
              </span>
            </p>

            {/* Highlights */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent" />

                  <span className="text-sm font-medium leading-relaxed text-foreground">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}