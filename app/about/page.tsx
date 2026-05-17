import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { AboutSection } from "@/components/sections/about"
import { TeamSection } from "@/components/sections/team"
import { PageHeader } from "@/components/page-header"

export const metadata: Metadata = {
  title: "About Us | Rivas Law Firm, PLLC. - Rio Grande Valley, Texas",
  description: "Learn about our law firm's commitment to serving the Rio Grande Valley with integrity, dedication, and excellence. Meet our experienced team and discover how we can help you with your legal needs.",
}

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1">
        <PageHeader 
          title="About Our Firm"
          subtitle="Who We Are"
          description="Committed to helping clients navigate difficult legal matters with clarity, preparation, and client-focused representation."
        />
        <TeamSection showHeader={true} />
        <AboutSection showHeader={false} />

        
        
        <CTASection variant="dark" />
      </main>
      
      <Footer />
    </div>
  )
}
