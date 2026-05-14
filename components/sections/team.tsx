"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import Image from "next/image"
import { Languages, Clock } from "lucide-react"

// Featured Attorney Data
const attorney = {
  name: "John Smith",
  title: "Founding Attorney",
  initials: "JS",
  image: "/images/team/attorney.jpg",
  bio: `With over 25 years of dedicated legal practice in South Texas, John Smith has built a reputation as a fierce advocate for his clients. Born and raised in the Rio Grande Valley, he understands the unique challenges our community faces and is committed to providing accessible, compassionate legal representation.

After witnessing the impact of workplace injuries on his own family, John was inspired to pursue law to help others navigate difficult times. His approach combines aggressive representation with genuine care for each client's wellbeing and peace of mind.

John is fluent in both English and Spanish, allowing him to connect with and serve the diverse communities of the Rio Grande Valley. When he's not in the courtroom, he's actively involved in local community organizations and enjoys spending time with his family.`,
  education: [
    { degree: "Juris Doctor", school: "South Texas College of Law", year: "1998" },
    { degree: "B.A. Political Science", school: "UT Pan American", year: "1995" },
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
    name: "Maria Garcia",
    role: "Senior Paralegal",
    initials: "MG",
    image: "/images/team/maria.jpg",
    yearsWithFirm: "15 years",
    bio: "Maria is the backbone of our litigation team. With 15 years of experience, she expertly manages complex case files, coordinates with medical providers, and ensures every detail is in order for trial preparation.",
    specialties: ["Case Management", "Medical Records", "Trial Preparation"],
    languages: ["English", "Spanish"],
  },
  {
    name: "Sarah Johnson",
    role: "Paralegal",
    initials: "SJ",
    image: "/images/team/sarah.jpg",
    yearsWithFirm: "8 years",
    bio: "Sarah specializes in family law documentation and maintains close communication with clients throughout their cases. Her attention to detail and empathetic approach helps families navigate difficult transitions.",
    specialties: ["Family Law", "Client Communication", "Document Drafting"],
    languages: ["English"],
  },
  {
    name: "Rosa Martinez",
    role: "Office Manager & Receptionist",
    initials: "RM",
    image: "/images/team/rosa.jpg",
    yearsWithFirm: "10 years",
    bio: "Rosa is often the first voice you'll hear when you call our office. She manages scheduling, coordinates appointments, and ensures every client feels welcomed and valued from the moment they reach out.",
    specialties: ["Client Relations", "Scheduling", "Office Administration"],
    languages: ["English", "Spanish"],
  },
  {
    name: "David Chen",
    role: "Legal Assistant",
    initials: "DC",
    image: "/images/team/david.jpg",
    yearsWithFirm: "5 years",
    bio: "David supports our attorneys with thorough legal research and document preparation. His analytical skills and dedication help build strong foundations for every case we take on.",
    specialties: ["Legal Research", "Document Preparation", "Case Analysis"],
    languages: ["English", "Mandarin"],
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
                      {edu.school}, {edu.year}
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
                    <div className="relative w-full sm:w-40 h-48 sm:h-auto shrink-0 bg-muted">
                      <Avatar className="h-full w-full rounded-none">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover"
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
                        <div className="flex items-center gap-1 text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                          <Clock className="h-3 w-3" />
                          {member.yearsWithFirm}
                        </div>
                      </div>
                      
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                        {member.bio}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-1">
                        {member.specialties.map((specialty) => (
                          <span 
                            key={specialty} 
                            className="bg-secondary text-secondary-foreground text-xs px-2 py-0.5 rounded-full"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>

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
