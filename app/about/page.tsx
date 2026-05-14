import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { AboutSection } from "@/components/sections/about"
import { TeamSection } from "@/components/sections/team"
import { PageHeader } from "@/components/page-header"

export const metadata: Metadata = {
  title: "About Us | Law Office - Pharr, Texas",
  description: "Learn about our law firm's 25+ years of experience serving the Pharr, Texas community with dedicated legal representation.",
}

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1">
        <PageHeader 
          title="About Our Firm"
          subtitle="Who We Are"
          description="Founded on the principles of integrity, dedication, and excellence, our law firm has been a cornerstone of the Pharr legal community for over two decades."
        />
        
        <AboutSection showHeader={false} />

        <TeamSection showHeader={true} />
        
        <CTASection variant="dark" />
      </main>
      
      <Footer />
    </div>
  )
}
