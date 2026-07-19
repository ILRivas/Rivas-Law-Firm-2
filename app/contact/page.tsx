import type { Metadata } from "next"
import { Suspense } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactSection } from "@/components/sections/contact"
import { PageHeader } from "@/components/page-header"

const title = "Contact Rivas Law Firm, PLLC. | Pharr, TX"
const description = "Reach Rivas Law Firm, PLLC. in Pharr, Texas by phone or online form. We serve personal injury, family law, criminal defense, and property law clients across the Rio Grande Valley."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/contact" },
  openGraph: {
    type: "website",
    url: "https://www.rivaslawrgv.com/contact",
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

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1">
        <PageHeader 
          title="Contact Us"
          subtitle="Get in Touch"
          description="Take the first step towards resolving your legal matter. Contact us today to schedule a consultation with our experienced legal team."
        />
        
        <Suspense fallback={null}>
          <ContactSection showHeader={false} />
        </Suspense>
      </main>
      
      <Footer />
    </div>
  )
}
