import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, ArrowRight } from "lucide-react"

interface CTASectionProps {
  variant?: "default" | "dark"
}

export function CTASection({ variant = "default" }: CTASectionProps) {
  const isDark = variant === "dark"

  return (
    <section
      className={`relative overflow-hidden py-16 sm:py-20 ${
        isDark ? "bg-primary" : "bg-muted"
      }`}
    >
      {/* Background Pattern */}
      {isDark && (
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
      )}

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <h2
            className={`font-serif text-3xl font-bold sm:text-4xl lg:text-5xl ${
              isDark ? "text-primary-foreground" : "text-foreground"
            }`}
          >
            <span className="text-balance">Ready to Discuss Your Case?</span>
          </h2>

          <p
            className={`mt-4 max-w-2xl text-lg leading-relaxed ${
              isDark ? "text-primary-foreground/80" : "text-muted-foreground"
            }`}
          >
            <span className="text-pretty">
              Schedule a free consultation with our experienced legal team. We
              are here to help you navigate your legal challenges with confidence
              and expertise.
            </span>
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-6">
            <Button
              asChild
              size="lg"
              className={`gap-2 ${
                isDark
                  ? "bg-accent text-accent-foreground hover:bg-accent/90"
                  : "bg-primary text-primary-foreground hover:bg-primary/90"
              }`}
            >
              <Link href="/contact">
                Schedule Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className={`gap-2 ${
                isDark
                  ? "border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                  : "border-primary/30 text-primary hover:bg-primary/5"
              }`}
            >
              <a href="tel:+19563318777">
                <Phone className="h-4 w-4" />
                (956) 331-8777
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}