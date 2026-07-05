"use client"


import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, Phone, Home, Briefcase, ChevronRight, Scale, User, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet"


const navLinks = [
  {
    href: "/",
    label: "Home",
    icon: Home,
  },
  {
    href: "/practice-areas",
    label: "Practice Areas",
    icon: Briefcase,
  },
  {
    href: "/about",
    label: "About",
    icon: User,
  },
  {
    href: "/contact",
    label: "Contact",
    icon: Mail,
  },
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
                className={` font-serif text-xl font-semibold leading-none ${
                  isScrolled ? "text-black" : "text-white"
                }`}
                  >
                    Rivas Law Firm, PLLC.
                  </span>

            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className=" font-serif hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-lg font-medium transition-colors hover:text-accent ${
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
              className={`flex items-center gap-2 text-lg font-serif font-medium ${
                isScrolled ? "text-primary" : "text-primary-foreground"
              }`}
            >
              <Phone className="h-4 w-4" />
              (956) 331-8777
            </a>
            <Button asChild className="bg-accent text-accent-foreground font-serif hover:bg-accent/90">
              <Link href="/contact">Schedule Consultation</Link>
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
            <SheetContent
              side="right"
              className="h-dvh w-full overflow-y-auto border-l border-accent/30 bg-[#ffffff] px-6 py-7 sm:w-[390px]"
            >
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <SheetDescription className="sr-only">
                Mobile navigation menu
              </SheetDescription>

              <div className="mb-8 border-b border-accent/30 pb-6">
                <div className="flex flex-col items-center text-center">
                  <Image
                    src="/images/Rivas-Law-Logo-Black.webp"
                    alt="Rivas Law Firm Logo"
                    width={95}
                    height={95}
                    className="mb-4 h-50 w-auto"
                    priority
                  />
                    <h2 className="font-serif text-3xl font-semibold tracking-wide text-primary">
                      Rivas Law Firm, PLLC.
                    </h2>
                  </div>
                </div>

              <nav className="flex flex-col">
                {navLinks.map((link) => {
                  const Icon = link.icon

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="group flex items-center justify-between border-b border-accent/25 py-5 text-primary transition-colors hover:text-accent"
                    >
                      <span className="flex items-center gap-4">
                        <Icon className="h-5 w-5 text-accent" />
                        <span className="font-serif text-2xl font-medium">
                          {link.label}
                        </span>
                      </span>
                    </Link>
                  )
                })}
              </nav>

              <a
                href="tel:+19563318777"
                className="mt-8 block rounded-xl border border-accent/30 bg-white/70 p-5 shadow-sm transition-all hover:border-accent hover:shadow-md active:scale-[0.98]"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <Phone className="h-6 w-6" />
                  </div>

                  <div className="flex-1">
                    <p className="text-xs font-serif uppercase tracking-[0.2em] text-accent">
                      Call Us
                    </p>

                    <p className="font-serif text-2xl font-semibold text-primary">
                      (956) 331-8777
                    </p>
                  </div> 
                  </div>
              </a>

              <Button
                asChild
                size="lg"
                className="mt-5 h-16 w-full rounded-xl border border-accent bg-primary font-serif text-xl text-white shadow-md hover:bg-primary/90"
              >
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  <Scale className="mr-2 h-5 w-5 text-accent" />
                  Schedule Consultation
                </Link>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
