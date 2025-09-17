"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, Target, Zap } from "lucide-react"
import { Canvas } from "@react-three/fiber"
import { Float, OrbitControls, Sphere } from "@react-three/drei"
import { Suspense } from "react"

function AnimatedSphere() {
  return (
    <Canvas className="w-full h-full">
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Float speed={1} rotationIntensity={1} floatIntensity={2}>
          <Sphere args={[1, 32, 32]}>
            <meshStandardMaterial color="#059669" wireframe />
          </Sphere>
        </Float>
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1} />
      </Suspense>
    </Canvas>
  )
}

export function About() {
  const stats = [
    { icon: Users, label: "Team Members", value: "25+" },
    { icon: Award, label: "Years Experience", value: "10+" },
    { icon: Target, label: "Success Rate", value: "98%" },
    { icon: Zap, label: "Projects Delivered", value: "500+" },
  ]

  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
                About <span className="text-primary">DigitalPro</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 text-pretty">
                We are a team of passionate digital marketing experts, developers, and strategists dedicated to helping
                businesses thrive in the digital landscape. With over a decade of experience, we've helped hundreds of
                companies achieve their online goals.
              </p>
              <p className="text-lg text-muted-foreground mb-8 text-pretty">
                Our approach combines creativity with data-driven insights to deliver measurable results that drive real
                business growth. We don't just create campaigns – we build long-term partnerships that evolve with your
                business.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Learn More About Us
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="w-full h-96 animate-pulse3d">
              <AnimatedSphere />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="text-center p-6 hover:shadow-lg transition-shadow animate-float"
              style={{ animationDelay: `${index * 0.5}s` }}
            >
              <CardContent className="p-0">
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                <div className="text-2xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
