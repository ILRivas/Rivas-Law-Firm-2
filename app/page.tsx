import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { HeroSection } from "@/components/sections/hero"
import { PracticeAreasPreview } from "@/components/sections/practice-areas-preview"
import { AboutPreview } from "@/components/sections/about-preview"

const title = "Rivas Law Firm, PLLC. | Representing the Rio Grande Valley"
const description = "Experienced attorney representing the Rio Grande Valley, providing legal services in personal injury, family law, property law, and criminal defense."

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://www.rivaslawrgv.com",
    siteName: "Rivas Law Firm, PLLC.",
    title,
    description,
    images: [{ url: "/images/LawFirm.webp", alt: "Rivas Law Firm, PLLC." }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/LawFirm.webp"],
  },
}

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />
        
        {/* About Preview */}
        <AboutPreview />
        {/* Practice Areas Preview */}
        <PracticeAreasPreview />
        
        
        
        {/* Final CTA */}
        <CTASection variant="dark" />
      </main>
      
      <Footer />
    </div>
  )
}
