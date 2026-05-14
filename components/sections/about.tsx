import { CheckCircle } from "lucide-react"

const highlights = [
  "Personalized attention to every case",
  "Proven track record of success",
  "Deep roots in the Rio Grande Valley",
  "Bilingual legal services (English/Spanish)",
  "Aggressive negotiation and litigation",
  "Transparent communication throughout",
]

interface AboutSectionProps {
  showHeader?: boolean
}

export function AboutSection({ showHeader = true }: AboutSectionProps) {
  return (
    <section id="about" className="py-20 sm:py-28 bg-muted">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Image/Visual */}
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-primary/10">
              <div className="flex h-full w-full items-center justify-center">
                <div className="text-center p-8">
                  <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-primary">
                    <span className="font-serif text-4xl font-bold text-primary-foreground">
                      25+
                    </span>
                  </div>
                  <p className="font-serif text-2xl font-semibold text-foreground">
                    Years of Legal Excellence
                  </p>
                  <p className="mt-2 text-muted-foreground">
                    Serving Pharr, Texas and the Rio Grande Valley
                  </p>
                </div>
              </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl border-2 border-accent" />
          </div>

          {/* Content */}
          <div>
            {showHeader && (
              <>
                <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">
                  About Our Firm
                </p>
                <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
                  <span className="text-balance">
                    Dedicated Legal Advocates for Our Community
                  </span>
                </h2>
              </>
            )}
            <p className={`${showHeader ? 'mt-6' : ''} text-lg leading-relaxed text-muted-foreground`}>
              <span className="text-pretty">
                Founded on the principles of integrity, dedication, and
                excellence, our law firm has been a cornerstone of the Pharr
                legal community for over two decades. We understand that facing
                legal challenges can be overwhelming, which is why we approach
                every case with compassion and determination.
              </span>
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              <span className="text-pretty">
                Our diverse practice areas allow us to serve clients with a wide
                range of legal needs, from personal injury claims to family
                matters and criminal defense. We take pride in building lasting
                relationships with our clients based on trust and results.
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
          </div>
        </div>
      </div>
    </section>
    
  )
}
