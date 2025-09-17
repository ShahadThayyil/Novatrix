"use client"

import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

const team = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Chief Executive Officer (CEO)",
    bio: "Visionary leader driving innovation and growth at Novatrix.",
    image: "/team/ceo.jpg",
    color: "#f97316",
  },
  {
    id: 2,
    name: "David Miller",
    role: "Chief Operating Officer (COO)",
    bio: "Ensures smooth operations and efficiency across all departments.",
    image: "/logov2.png",
    color: "#ea580c",
  },
  {
    id: 3,
    name: "Sophia Lee",
    role: "Head of Marketing",
    bio: "Creative strategist building global brand presence and impact.",
    image: "/team/marketing.jpg",
    color: "#facc15",
  },
  {
    id: 4,
    name: "James Carter",
    role: "Lead Developer",
    bio: "Tech innovator specializing in scalable and futuristic solutions.",
    image: "/team/lead-dev.jpg",
    color: "#22c55e",
  },
  {
    id: 5,
    name: "Emma Davis",
    role: "Head of Design",
    bio: "Designs unique digital experiences with bold creativity.",
    image: "/team/design.jpg",
    color: "#3b82f6",
  },
]

export function CreativePortfolio() {
  return (
    <section id="team" className="py-20 bg-muted relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
            Meet Our{" "}
            <span className="block text-primary transform -rotate-3 skew-y-6 bg-card px-8 py-2 inline-block">
              Smart Team
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The dream team making the impossible possible with a touch of madness.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {team.map((member, index) => (
            <Card
              key={member.id}
              className={`group overflow-hidden relative rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 
                transform hover:-translate-y-4 hover:rotate-2
                ${index % 2 === 0 ? "rotate-2 -skew-y-2" : "-rotate-3 skew-y-2"}
                ${index % 3 === 0 ? "translate-y-4" : ""}
              `}
            >
              {/* Image */}
              <div className="relative w-full h-64  overflow-hidden">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-semibold">{member.role}</span>
                </div>
              </div>

              {/* Content */}
              <CardContent className="p-6 relative z-10">
                <span
                  className="text-xs font-medium px-3 py-1 rounded-full text-white shadow-md"
                  style={{ backgroundColor: member.color }}
                >
                  {member.role.split(" ")[0]}
                </span>

                <h3 className="text-2xl font-extrabold text-foreground mt-3 mb-2 group-hover:text-primary transition-colors">
                  {member.name}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{member.bio}</p>

                <div className="flex items-center text-primary font-medium text-sm group-hover:underline cursor-pointer">
                  View Profile
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
