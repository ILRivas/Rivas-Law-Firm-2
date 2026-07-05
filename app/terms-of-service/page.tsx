import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Terms of Service | Rivas Law Firm, PLLC",
  description:
    "Read the terms of service for using the Rivas Law Firm, PLLC website.",
}

export default function TermsOfServicePage() {
  return (
    <main className="bg-background">
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">
              Rivas Law Firm, PLLC
            </p>

            <h1 className="font-serif text-4xl font-bold text-foreground sm:text-5xl">
              Terms of Service
            </h1>

            <p className="mt-4 text-muted-foreground">
              Last Updated: July 4, 2026
            </p>
          </div>

          <div className="space-y-10 text-base leading-7 text-muted-foreground">
            <section>
              <h2 className="mb-3 font-serif text-2xl font-semibold text-foreground">
                1. Use of This Website
              </h2>

              <p>
                These Terms of Service govern your use of the Rivas Law Firm,
                PLLC website. By using this website, you agree to these terms.
                If you do not agree, please do not use this website.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-serif text-2xl font-semibold text-foreground">
                2. General Information Only
              </h2>

              <p>
                The information on this website is provided for general
                informational purposes only. It is not intended to be legal
                advice and should not be relied upon as legal advice for any
                specific situation.
              </p>

              <p className="mt-4">
                Legal matters depend on specific facts and circumstances. You
                should speak with an attorney about your individual situation.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-serif text-2xl font-semibold text-foreground">
                3. No Attorney Client Relationship
              </h2>

              <p>
                Your use of this website, including submitting a contact form,
                sending an email, or calling the firm, does not create an
                attorney client relationship.
              </p>

              <p className="mt-4">
                An attorney client relationship is only formed after Rivas Law
                Firm, PLLC agrees to represent you in writing.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-serif text-2xl font-semibold text-foreground">
                4. Contact Form Disclaimer
              </h2>

              <p>
                Please do not send confidential, privileged, or highly sensitive
                information through the website contact form. Information
                submitted through the form may not be treated as confidential
                unless and until an attorney client relationship has been
                established.
              </p>

              <p className="mt-4">
                By submitting the contact form, you agree that Rivas Law Firm,
                PLLC may contact you about your inquiry.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-serif text-2xl font-semibold text-foreground">
                5. No Guarantees
              </h2>

              <p>
                Past results, case outcomes, testimonials, or statements on this
                website do not guarantee any future result. Every legal matter
                is different, and outcomes depend on the facts and law
                applicable to each case.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-serif text-2xl font-semibold text-foreground">
                6. Website Content
              </h2>

              <p>
                We make reasonable efforts to keep the information on this
                website accurate and current, but we do not guarantee that all
                content is complete, accurate, or up to date.
              </p>

              <p className="mt-4">
                Rivas Law Firm, PLLC may update, modify, or remove website
                content at any time without notice.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-serif text-2xl font-semibold text-foreground">
                7. Third Party Links and Services
              </h2>

              <p>
                This website may link to third party websites or use third party
                services, such as maps, security tools, or form processing
                services. Rivas Law Firm, PLLC is not responsible for the
                content, policies, or practices of third party websites or
                services.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-serif text-2xl font-semibold text-foreground">
                8. Intellectual Property
              </h2>

              <p>
                The text, graphics, images, logos, layout, and other materials
                on this website are owned by or licensed to Rivas Law Firm, PLLC
                unless otherwise stated. You may not copy, reproduce, modify, or
                distribute website materials without prior written permission.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-serif text-2xl font-semibold text-foreground">
                9. Limitation of Liability
              </h2>

              <p>
                To the fullest extent allowed by law, Rivas Law Firm, PLLC is
                not responsible for any damages arising from your use of this
                website, your inability to use this website, or your reliance on
                information contained on this website.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-serif text-2xl font-semibold text-foreground">
                10. Privacy
              </h2>

              <p>
                Your use of this website is also governed by our Privacy Policy.
                You can review it here:{" "}
                <Link
                  href="/privacy-policy"
                  className="font-medium text-primary transition-colors hover:text-accent"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-serif text-2xl font-semibold text-foreground">
                11. Governing Law
              </h2>

              <p>
                These Terms of Service are governed by the laws of the State of
                Texas, without regard to conflict of law principles.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-serif text-2xl font-semibold text-foreground">
                12. Changes to These Terms
              </h2>

              <p>
                We may update these Terms of Service from time to time. Any
                changes will be posted on this page with an updated effective
                date.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-serif text-2xl font-semibold text-foreground">
                13. Contact Us
              </h2>

              <p>
                If you have questions about these Terms of Service, please
                contact Rivas Law Firm, PLLC.
              </p>

              <div className="mt-4 rounded-lg border border-border bg-card p-5 text-foreground">
                <p className="font-semibold">Rivas Law Firm, PLLC</p>
                <p>125 E. Caffery Ave</p>
                <p>Pharr, TX 78577</p>
                <p className="mt-2">
                  Phone:{" "}
                  <a
                    href="tel:+19563318777"
                    className="text-primary hover:text-accent"
                  >
                    (956) 331-8777
                  </a>
                </p>
              </div>
            </section>
          </div>

          <div className="mt-12 border-t border-border pt-8 text-center">
            <Link
              href="/"
              className="text-sm font-medium text-primary transition-colors hover:text-accent"
            >
              Return Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}