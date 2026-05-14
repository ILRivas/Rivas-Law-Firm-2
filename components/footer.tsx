import Link from "next/link"
import Image from "next/image"
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
  { href: "/contact", label: "Contact" },
]

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo & Description */}
          <div className="flex flex-col justify-start space-y-2">
            
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Dedicated to serving the Pharr, Texas community with experienced
              legal representation across multiple practice areas. Your trusted
              advocate in the Rio Grande Valley.
            </p>
            {/* Social Links */}
            <div className="flex gap-6 mt-4">
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

          {/* Practice Areas */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">Practice Areas</h3>
            <ul className="space-y-3">
              {practiceAreas.map((area) => (
                <li key={area.href}>
                  <Link
                    href={area.href}
                    className="text-sm text-primary-foreground/80 transition-colors hover:text-accent"
                  >
                    {area.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/80 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-accent" />
                <span className="text-sm text-primary-foreground/80">
                  3920 S Jackson Rd,
                  <br />
                  Pharr, TX 78577
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-accent" />
                <a
                  href="tel:+19563318777"
                  className="text-sm text-primary-foreground/80 transition-colors hover:text-accent"
                >
                  (956) 331-8777
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 py-6">
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <p className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} Rivas Law Firm, PLLC. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="#"
                className="text-sm text-primary-foreground/60 transition-colors hover:text-accent"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-sm text-primary-foreground/60 transition-colors hover:text-accent"
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
