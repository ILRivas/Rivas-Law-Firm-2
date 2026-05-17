"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import Image from "next/image"
import { Languages, Clock } from "lucide-react"

// Featured Attorney Data
const attorney = {
  name: "Israel Lee Rivas",
  title: "Founding Attorney",
  initials: "IR",
  image: "/images/Attorney-Headshot.webp",
  bio: `Israel lee Rivas is a dedicated attorney and the visionary founder of the Rivas Law firm, PLLC. With a relentless commitment to justice and an impressive track record of securing millions in settlements for his clients, he combines legal expertise with a compassionate approach to advocacy.
  
  His leadership and unwaivering determination have established the firm as a trusted partner for individuals seeking fair compensation and effective legal representation.`,
  education: [
    { degree: "Juris Doctor", school: "Ohio Northern University"},
    { degree: "B.A. Political Science", school: "UT Pan American" },
  ],
  barAdmissions: [
    "State Bar of Texas",
    "U.S. District Court, Southern District of Texas",
    "U.S. Court of Appeals, Fifth Circuit",
  ],
  languages: ["English", "Spanish"],
}

// Support Staff Data
const staff = [
  {
    name: "Zachary R.",
    role: "Senior Paralegal",
    initials: "ZR",
    image: "/images/Zack-Headshot.webp",
    bio: "Zachary R. is a dedicated paralegal and pre-law student at UTRGV, whose commitment to client care is evident in every case he manages. He ensures that every client receives exceptional care and attention throughout their legal journey, addressing all concerns promptly and providing clear guidance.",
    languages: ["English", "Spanish"],
  },
  {
    name: "Samantha T.",
    role: "Case Manager",
    initials: "SJ",
    image: "/images/Sam-Headshot.webp",
    bio: "Samantha T. is an accomplished case manager who coordinates and manages client cases . She is known for her exceptional organizational skills and her ability to streamline case progress, ensuring that every client receives the personalized support they deserve. ",
    languages: ["English", "Spanish"],
  },
  

]

interface TeamSectionProps {
  showHeader?: boolean
}

export function TeamSection({ showHeader = true }: TeamSectionProps) {
  return (
    <section id="team" className="py-20 sm:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Featured Attorney Section - Half/Half Layout */}
        <div className="mb-24">
          {showHeader && (
            <div className="text-center mb-12">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">
                Your Legal Advocate
              </p>
              <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
                <span className="text-balance">Meet Your Attorney</span>
              </h2>
            </div>
          )}

          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            {/* Attorney Photo - Left Half */}
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-muted">
                <Avatar className="h-full w-full rounded-2xl">
                  <Image
                    src={attorney.image}
                    alt={attorney.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <AvatarFallback className="h-full w-full rounded-2xl bg-primary text-primary-foreground text-8xl font-serif">
                    {attorney.initials}
                  </AvatarFallback>
                </Avatar>
              </div>
              {/* Decorative border */}
              <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl border-2 border-accent" />
            </div>

            {/* Attorney Details - Right Half */}
            <div className="lg:pl-8">
              <h3 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
                {attorney.name}
              </h3>
              <p className="mt-2 text-lg font-medium text-accent">{attorney.title}</p>
              
              {/* Bio */}
              <div className="mt-6">
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {attorney.bio}
                </p>
              </div>

              {/* Education */}
              <div className="mt-8">
                <h4 className="font-semibold text-foreground mb-3">Education</h4>
                <ul className="space-y-2">
                  {attorney.education.map((edu) => (
                    <li key={edu.degree} className="text-sm text-muted-foreground">
                      <span className="font-medium text-foreground">{edu.degree}</span>
                      <span className="mx-2">·</span>
                      {edu.school}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bar Admissions */}
              <div className="mt-6">
                <h4 className="font-semibold text-foreground mb-3">Bar Admissions</h4>
                <ul className="space-y-1">
                  {attorney.barAdmissions.map((bar) => (
                    <li key={bar} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      {bar}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Languages */}
              <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
                <Languages className="h-4 w-4 text-accent" />
                <span className="font-medium text-foreground">Languages:</span>
                {attorney.languages.join(", ")}
              </div>
            </div>
          </div>
        </div>

        {/* Support Staff Section */}
        <div>
          <div className="text-center mb-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">
              The Team Behind Your Case
            </p>
            <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">
              <span className="text-balance">Our Dedicated Support Staff</span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              <span className="text-pretty">
                Behind every successful case is a team of dedicated professionals working to ensure 
                you receive the attention and support you deserve.
              </span>
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {staff.map((member) => (
              <Card key={member.name} className="overflow-hidden border-border/50 hover:border-primary/50 transition-colors">
                <CardContent className="p-0">
                  <div className="flex flex-col sm:flex-row">
                    {/* Photo */}
                    <div className="relative w-full sm:w-44 h-64 sm:h-auto shrink-0 overflow-hidden bg-muted">
                      <Avatar className="h-full w-full rounded-none">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover object-top transition-transform duration-300 hover:scale-105"
                          sizes="(max-width: 640px) 100vw, 160px"
                        />
                        <AvatarFallback className="h-full w-full rounded-none bg-primary/10 text-primary text-3xl font-serif">
                          {member.initials}
                        </AvatarFallback>
                      </Avatar>
                    </div>

                    {/* Content */}
                    <div className="p-5 flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h3 className="font-serif text-lg font-semibold text-foreground">
                            {member.name}
                          </h3>
                          <p className="text-sm font-medium text-accent">{member.role}</p>
                        </div>
                        
                      </div>
                      
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                        {member.bio}
                      </p>

                      {member.languages.length > 0 && (
                        <div className="mt-3 flex items-center gap-1 text-xs text-muted-foreground">
                          <Languages className="h-3 w-3" />
                          <span>{member.languages.join(", ")}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
