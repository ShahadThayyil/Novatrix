"use client"

import { Search, Smartphone, BarChart3, Megaphone, Code, Palette } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Dominate search results with our advanced SEO strategies and technical expertise.",
    color: "from-orange-400 to-orange-600",
  },
  {
    icon: Smartphone,
    title: "Social Media Marketing",
    description: "Build engaged communities and drive conversions across all social platforms.",
    color: "from-red-400 to-red-600",
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description: "Data-driven decisions powered by comprehensive analytics and reporting.",
    color: "from-orange-400 to-orange-600",
  },
  {
    icon: Megaphone,
    title: "Digital Advertising",
    description: "Maximize ROI with targeted campaigns across Google, Facebook, and beyond.",
    color: "from-red-400 to-red-600",
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Custom websites and applications built for performance and conversion.",
    color: "from-orange-400 to-orange-600",
  },
  {
    icon: Palette,
    title: "Brand Design",
    description: "Create memorable brand identities that resonate with your target audience.",
    color: "from-red-400 to-red-600",
  },
]

// Floating background square
function FloatingShape({ className }: { className?: string }) {
  return (
    <div
      className={`absolute w-24 h-24 lg:w-40 lg:h-40 rounded-xl bg-gradient-to-tr opacity-10 animate-float-slow ${className}`}
    />
  )
}

export function AsymmetricalServices() {
  return (
    <section id="services" className="py-12 lg:py-20 bg-muted relative overflow-hidden">
      {/* Background floating shapes */}
      <FloatingShape className="top-10 left-10 from-orange-400 to-orange-600" />
      <FloatingShape className="bottom-20 right-16 from-red-400 to-red-600" />
      <FloatingShape className="top-1/3 right-1/4 from-orange-400 to-orange-600" />
      <FloatingShape className="bottom-10 left-1/3 from-red-400 to-red-600" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 lg:mb-16 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-foreground mb-4 lg:mb-6">
            Services That
            <span className="block text-primary bg-card px-2 lg:px-4 py-1 lg:py-2 inline-block mt-2 lg:ml-8 rounded lg:clip-diagonal-reverse">
              Drive Results
            </span>
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
            Our comprehensive suite of digital marketing services is designed to accelerate your business growth and
            maximize your online presence.
          </p>
        </div>

        {/* Asymmetrical Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className={`group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2
                ${index % 2 === 0 ? "lg:translate-y-8" : ""}
                ${index === 2 ? "sm:col-span-2 lg:col-span-1" : ""}
                ${index === 4 ? "lg:translate-y-16" : ""}
              `}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-4 sm:p-6 lg:p-8 h-full flex flex-col">
                <div
                  className={`w-10 sm:w-12 lg:w-16 h-10 sm:h-12 lg:h-16 rounded-2xl flex items-center justify-center mb-3 sm:mb-4 lg:mb-6 group-hover:scale-110 transition-transform bg-gradient-to-br ${service.color}`}
                >
                  <service.icon className="h-5 sm:h-6 lg:h-8 w-5 sm:w-6 lg:w-8 text-white" />
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-foreground mb-2 sm:mb-3 lg:mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-muted-foreground leading-relaxed flex-1">
                  {service.description}
                </p>
                <div className="mt-3 sm:mt-4 lg:mt-6 pt-2 sm:pt-3 lg:pt-4 border-t border-border">
                  <span className="text-xs sm:text-sm font-medium text-primary group-hover:underline cursor-pointer">
                    Learn More →
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
