import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactSection } from "@/components/sections/contact"
import { PageHeader } from "@/components/page-header"

export const metadata: Metadata = {
  title: "Contact Us | Law Office - Pharr, Texas",
  description: "Schedule a free consultation with our experienced legal team. Contact our Pharr, Texas law office today.",
}

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1">
        <PageHeader 
          title="Contact Us"
          subtitle="Get in Touch"
          description="Take the first step towards resolving your legal matter. Contact us today to schedule a confidential consultation with our experienced legal team."
        />
        
        <ContactSection showHeader={false} />
      </main>
      
      <Footer />
    </div>
  )
}
