import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Car, Users, Gavel, Home } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const practiceAreas = [
  {
    id: "personal-injury",
    icon: Car,
    image: "/images/flipped-truck.webp",
    title: "Personal Injury",
    description:
      "Aggressive representation for accident victims. We fight to get you the compensation you deserve for medical bills, lost wages, and pain and suffering.",
    services: [
      "Auto Accidents",
      "Truck Accidents",
      "Slip and Fall",
      "Workplace Injuries",
      "Medical Malpractice",
    ],
  },
  {
    id: "family-law",
    icon: Users,
    image: "/images/divorce.webp",
    title: "Family Law",
    description:
      "Compassionate guidance through life's most challenging family matters. We protect your interests and your children's well-being.",
    services: [
      "Divorce",
      "Child Custody",
      "Child Support",
      "Adoption",
      "Prenuptial Agreements",
    ],
  },
  {
    id: "criminal-defense",
    icon: Gavel,
    image: "/images/handcuffs-crim.webp",
    title: "Criminal Defense",
    description:
      "Strong defense strategies to protect your rights and freedom. Every case deserves a dedicated advocate who will fight tirelessly.",
    services: ["DUI/DWI", "Drug Charges", "Assault", "Theft Crimes", "Federal Crimes"],
  },
  {
    id: "property-law",
    icon: Home,
    image: "/images/home-keys.webp",
    title: "Property Law",
    description:
      "Expert legal counsel for all real estate and property matters. We ensure your property transactions and disputes are handled with precision.",
    services: [
      "Real Estate Transactions",
      "Property Disputes",
      "Landlord/Tenant Issues",
      "Zoning Matters",
      "Title Issues",
    ],
  },
]

interface PracticeAreasSectionProps {
  showHeader?: boolean
}

export function PracticeAreasSection({
  showHeader = true,
}: PracticeAreasSectionProps) {
  return (
    <section id="practice-areas" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {showHeader && (
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">
              Our Expertise
            </p>
            <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
              <span className="text-balance">Practice Areas</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              <span className="text-pretty">
                Comprehensive legal services tailored to meet your specific
                needs. Our experienced legal team is ready to help you navigate
                complex legal challenges.
              </span>
            </p>
          </div>
        
        )}

        <div className="grid gap-8 md:grid-cols-2">
          {practiceAreas.map((area) => (
            <Card
              key={area.id}
              id={area.id}
              className="group relative overflow-hidden border-border/50 transition-all duration-300 hover:border-primary hover:shadow-lg"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={area.image}
                  alt=""
                  fill
                  className="scale-110 object-cover blur-[3px] transition-transform duration-500 group-hover:scale-125"
                />
                <div className="absolute inset-0 bg-background/80" />
              </div>

              {/* Content */}
              <div className="relative">
                <CardHeader className="pb-4">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary transition-transform duration-300 group-hover:scale-110">
                    <area.icon className="h-7 w-7 text-primary-foreground" />
                  </div>

                  <CardTitle className="font-serif text-2xl">
                    {area.title}
                  </CardTitle>

                  <CardDescription className="text-base text-primary leading-relaxed">
                    {area.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <ul className="mb-6 grid grid-cols-2 gap-2">
                    {area.services.map((service) => (
                      <li
                        key={service}
                        className="flex items-center gap-2 text-sm text-primary"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                        {service}
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant="outline"
                    className="gap-2 group-hover:bg-primary group-hover:text-primary-foreground"
                    asChild
                  >
                    <Link href="/contact">
                      Learn More
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}