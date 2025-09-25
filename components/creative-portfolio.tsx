"use client"

import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

const team = [
  {
    id: 1,
    name: "Shahina",
    role: "Chief Executive Officer (CEO)",
    bio: "Visionary leader driving innovation and growth at Novatrix.",
    image: "/shahina.jpeg",
    color: "#f97316",
  },
  {
    id: 2,
    name: "Shahad T",
    role: "Chief Operating Officer (COO)",
    bio: "Ensures smooth operations and efficiency across all departments.",
    image: "/shahad.jpeg",
    color: "#ea580c",
  },
  {
    id: 3,
    name: "Hisham",
    role: "Head of Marketing",
    bio: "Creative strategist building global brand presence and impact.",
    image: "/hisham.jpeg",
    color: "#facc15",
  },
  {
    id: 4,
    name: "Vishnu",
    role: "Lead Developer",
    bio: "Tech innovator specializing in scalable and futuristic solutions.",
    image: "/vishnu.jpeg",
    color: "#22c55e",
  },
  {
    id: 5,
    name: "Abhishek",
    role: "Head of Design",
    bio: "Designs unique digital experiences with bold creativity.",
    image: "/Abhishek.jpeg",
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
            <span className="block text-primary bg-card px-8 py-2 inline-block rounded-xl shadow-sm">
              Smart Team
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The dream team making the impossible possible with a touch of madness.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
          {team.map((member) => (
            <Card
              key={member.id}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-b from-card/80 to-card/40 backdrop-blur-md border border-white/10 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              {/* Image with hexagon shape */}
              <div className="flex justify-center mt-6">
                <div className="w-32 h-32 relative overflow-hidden clip-hexagon shadow-lg">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>

              {/* Content */}
              <CardContent className="text-center p-6">
                <span
                  className="inline-block text-xs font-medium px-3 py-1 rounded-full text-white shadow-md"
                  style={{ backgroundColor: member.color }}
                >
                  {member.role.split(" ")[0]}
                </span>

                <h3 className="text-2xl font-extrabold text-foreground mt-3 mb-2 group-hover:text-primary transition-colors">
                  {member.name}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {member.bio}
                </p>

                <div className="flex items-center justify-center text-primary font-medium text-sm group-hover:underline cursor-pointer">
                  View Profile
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Hexagon clip-path */}
      <style jsx>{`
        .clip-hexagon {
          clip-path: polygon(
            25% 6%,
            75% 6%,
            100% 50%,
            75% 94%,
            25% 94%,
            0% 50%
          );
        }
      `}</style>
    </section>
  )
}
