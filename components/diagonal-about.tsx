"use client"

import { Button } from "@/components/ui/button"
import { Award, Users, Target, Zap } from "lucide-react"

const achievements = [
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: Users, value: "1000+", label: "Happy Clients" },
  { icon: Target, value: "95%", label: "Goal Achievement" },
  { icon: Zap, value: "24/7", label: "Support Available" },
]

export function DiagonalAbout() {
  return (
    <section id="about" className="py-12 lg:py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8 bg-card p-6 lg:p-12 rounded-lg lg:clip-diagonal-reverse order-2 lg:order-1 shadow-lg">
            <div className="space-y-4 lg:space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-center lg:text-left">
                We Are Digital
                <span className="block text-primary">Innovators</span>
              </h2>
              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                Founded on the principle that every business deserves exceptional digital presence, 
                we combine creativity with data-driven strategies to deliver measurable results.
              </p>
              <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                Our team of experts specializes in transforming brands through innovative digital marketing 
                solutions that drive engagement, increase conversions, and accelerate growth.
              </p>
            </div>

            <div className="text-center lg:text-left">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Discover Our Story
              </Button>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-2 gap-4 lg:gap-6 pt-6 lg:pt-8 border-t border-border">
              {achievements.map((achievement, index) => (
                <div key={achievement.label} className="text-center group">
                  <div className="w-10 lg:w-12 h-10 lg:h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-2 lg:mb-3 group-hover:bg-primary/20 transition-colors">
                    <achievement.icon className="h-5 lg:h-6 w-5 lg:w-6 text-primary" />
                  </div>
                  <div className="text-xl lg:text-2xl font-bold text-foreground">{achievement.value}</div>
                  <div className="text-xs lg:text-sm text-muted-foreground">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side Visual (Instead of 3D Torus) */}
          <div className="h-64 lg:h-96 xl:h-[500px] relative order-1 lg:order-2 flex items-center justify-center">
            
            {/* Animated Ring */}
            <div className="w-48 h-48 lg:w-72 lg:h-72 border-4 border-primary/40 rounded-full animate-spin-slow"></div>
            
            {/* Inner Pulsing Circle */}
            <div className="absolute w-24 h-24 lg:w-40 lg:h-40 bg-primary/30 rounded-full animate-ping"><img src="/logo.png" alt="" /></div>

            {/* Floating Decorative Elements */}
            <div className="absolute top-4 lg:top-10 right-4 lg:right-10 w-12 lg:w-20 h-12 lg:h-20 bg-accent/20 rounded-full animate-float-slow"></div>
            <div className="absolute bottom-8 lg:bottom-20 left-4 lg:left-10 w-10 lg:w-16 h-10 lg:h-16 bg-primary/30 rounded-lg animate-bounce"></div>
            <div className="absolute top-1/2 left-1/4 w-8 lg:w-12 h-8 lg:h-12 bg-secondary/40 rounded-xl animate-rotate"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
