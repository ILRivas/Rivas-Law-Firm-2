import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { PracticeAreasSection } from "@/components/sections/practice-areas"
import { PageHeader } from "@/components/page-header"

export const metadata: Metadata = {
  title: "Practice Areas | Law Office - Pharr, Texas",
  description: "Comprehensive legal services in personal injury, family law, criminal defense, and property law. Serving Pharr, Texas and the Rio Grande Valley.",
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
