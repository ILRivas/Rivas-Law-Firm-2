import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { HeroSection } from "@/components/sections/hero"
import { PracticeAreasPreview } from "@/components/sections/practice-areas-preview"
import { AboutPreview } from "@/components/sections/about-preview"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Practice Areas Preview */}
        <PracticeAreasPreview />
        
        {/* About Preview */}
        <AboutPreview />
        
        {/* Final CTA */}
        <CTASection variant="dark" />
      </main>
      
      <Footer />
    </div>
  )
}
