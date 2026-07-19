import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { PracticeAreasSection } from "@/components/sections/practice-areas"
import { PageHeader } from "@/components/page-header"

const title = "Practice Areas | Rivas Law Firm, PLLC. — Pharr, TX"
const description = "Personal injury, family law, criminal defense, and property law representation from Rivas Law Firm, PLLC., serving Pharr, Texas and the Rio Grande Valley."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/practice-areas" },
  openGraph: {
    type: "website",
    url: "https://www.rivaslawrgv.com/practice-areas",
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

export default function PracticeAreasPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1">
        <PageHeader 
          title="Practice Areas"
          subtitle="Our Expertise"
          description="Comprehensive legal services tailored to meet your specific needs. Our experienced attorneys are ready to help you navigate complex legal challenges."
        />
        
        <PracticeAreasSection showHeader={false} />
        
        <CTASection variant="dark" />
      </main>
      
      <Footer />
    </div>
  )
}
