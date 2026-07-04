import Link from "next/link"
import { Phone, MapPin, Facebook, Linkedin, Twitter } from "lucide-react"

const practiceAreas = [
  { href: "/practice-areas#personal-injury", label: "Personal Injury" },
  { href: "/practice-areas#family-law", label: "Family Law" },
  { href: "/practice-areas#criminal-defense", label: "Criminal Defense" },
  { href: "/practice-areas#property-law", label: "Property Law" },
]

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/practice-areas", label: "Practice Areas" },
  { href: "/contact", label: "Contact" },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-background text-primary">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col justify-start space-y-2">
            <p className="text-sm leading-relaxed text-primary">
              Dedicated to serving the Rio Grande Valley community with
              experienced legal representation across multiple practice areas.
              Your trusted advocate in the Rio Grande Valley.
            </p>

            <div className="mt-4 flex gap-6">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-accent hover:text-accent-foreground"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-accent hover:text-accent-foreground"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-accent hover:text-accent-foreground"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          

          <div>
            <h3 className="mb-6 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-accent" />
                <span className="text-sm text-primary">
                  125 E. Caffery Ave,
                  <br />
                  Pharr, TX 78577
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-accent" />
                <a
                  href="tel:+19563318777"
                  className="text-sm text-primary transition-colors hover:text-accent"
                >
                  (956) 331-8777
                </a>
                 
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-accent" />
                <a
                  href="tel:+19567876261"
                  className="text-sm text-primary transition-colors hover:text-accent"
                >
                  (956) 787-6261
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-6 sm:py-8">
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <p className="text-sm text-primary">
              © {new Date().getFullYear()} Rivas Law Firm, PLLC. All rights
              reserved.
            </p>

            <div className="flex gap-6">
              <Link
                href="#"
                className="text-sm text-primary transition-colors hover:text-accent"
              >
                Privacy Policy
              </Link>

              <Link
                href="#"
                className="text-sm text-primary transition-colors hover:text-accent"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}