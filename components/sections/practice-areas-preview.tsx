import Link from "next/link"
import { ArrowRight, Car, Users, Gavel, Home } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const practiceAreas = [
  {
    id: "personal-injury",
    icon: Car,
    title: "Personal Injury",
    description:
      "Aggressive representation for accident victims. We fight for the compensation you deserve.",
  },
  {
    id: "family-law",
    icon: Users,
    title: "Family Law",
    description:
      "Compassionate guidance through divorce, custody, and other family matters.",
  },
  {
    id: "criminal-defense",
    icon: Gavel,
    title: "Criminal Defense",
    description:
      "Strong defense strategies to protect your rights and freedom.",
  },
  {
    id: "property-law",
    icon: Home,
    title: "Property Law",
    description:
      "Expert counsel for real estate transactions and property disputes.",
  },
]

export function PracticeAreasPreview() {
  return (
    <section className="py-20 sm:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">
            Our Expertise
          </p>
          <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            <span className="text-balance">Practice Areas</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            <span className="text-pretty">
              Comprehensive legal services tailored to meet your specific needs.
            </span>
          </p>
        </div>

        {/* Practice Area Cards */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {practiceAreas.map((area) => (
            <Card
              key={area.id}
              className="group overflow-hidden border-border/50 transition-all duration-300 hover:border-primary hover:shadow-lg"
            >
              <CardHeader className="pb-4">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary transition-transform duration-300 group-hover:scale-110">
                  <area.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="font-serif text-xl">{area.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{area.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <Button asChild size="lg" className="gap-2">
            <Link href="/practice-areas">
              View All Practice Areas
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
