import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { AboutSection } from "@/components/sections/about"
import { TeamSection } from "@/components/sections/team"
import { PageHeader } from "@/components/page-header"

const title = "About Us | Rivas Law Firm, PLLC. - Rio Grande Valley, Texas"
const description = "Learn about our law firm's commitment to serving the Rio Grande Valley with integrity, dedication, and excellence. Meet our experienced team and discover how we can help you with your legal needs."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/about" },
  openGraph: {
    type: "profile",
    url: "https://www.rivaslawrgv.com/about",
    title,
    description,
    images: [{ url: "/images/Rivas-Headshot2.webp", alt: "Attorney Israel Rivas" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/Rivas-Headshot2.webp"],
  },
}

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://www.rivaslawrgv.com/about#israel-rivas",
  name: "Israel Lee Rivas",
  jobTitle: "Founding Attorney",
  worksFor: { "@id": "https://www.rivaslawrgv.com/#firm" },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Ohio Northern University" },
    { "@type": "CollegeOrUniversity", name: "UT Pan American" },
  ],
  knowsLanguage: ["English", "Spanish"],
  memberOf: { "@type": "Organization", name: "State Bar of Texas" },
}

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
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
