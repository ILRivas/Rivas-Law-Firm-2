"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/practice-areas", label: "Practice Areas" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo - Replace with your client's logo */}
          <Link href="/" className="flex items-center gap-3">
            {/* 
              To change the logo:
              1. Replace /images/logo.png with your client's logo file
              2. Adjust width/height as needed
            */}
            <Image
              src={
                isScrolled
                  ? "/images/Rivas-Law-Logo-Black.webp"
                  : "/images/Rivas-Law-Logo-White.webp"
              }
              alt="Law Office Logo"
              width={180}
              height={50}
              className="pt-4 h-25 w-auto"
              priority
            />
            <div className="flex flex-col">
              <span
                className={` font-serif text-lg font-semibold leading-none ${
                  isScrolled ? "text-black" : "text-white"
                }`}
                  >
                    Rivas Law Firm, PLLC.
                  </span>

            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className=" font-sans hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-md font-medium transition-colors hover:text-accent ${
                  isScrolled ? "text-foreground/80" : "text-primary-foreground/90 hover:text-accent"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+19563318777"
              className={`flex items-center gap-2 text-sm font-medium ${
                isScrolled ? "text-primary" : "text-primary-foreground"
              }`}
            >
              <Phone className="h-4 w-4" />
              (956) 331-8777
            </a>
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/contact">Free Consultation</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button 
                variant="ghost" 
                size="icon"
                className={isScrolled ? "" : "text-primary-foreground hover:bg-primary-foreground/10"}
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-80">
              <SheetTitle className="flex items-center gap-3">
                <Image
                  src="/images/Rivas-Law-Logo-White.webp"
                  alt="Law Office Logo"
                  width={150}
                  height={40}
                  className="h-10 w-auto"
                />
              </SheetTitle>
              <SheetDescription className="sr-only">
                Navigation menu
              </SheetDescription>
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-foreground/80 transition-colors hover:text-primary py-2 border-b border-border"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="mt-6 flex flex-col gap-4">
                  <a
                    href="tel:+19563318777"
                    className="flex items-center gap-2 text-lg font-medium text-primary"
                  >
                    <Phone className="h-5 w-5" />
                    (956) 331-8777
                  </a>
                  <Button asChild size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                      Free Consultation
                    </Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
