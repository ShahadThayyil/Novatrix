"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Search, Share2, Code, BarChart3, Megaphone, Smartphone } from "lucide-react"
import { Canvas } from "@react-three/fiber"
import { Float, OrbitControls } from "@react-three/drei"
import { Suspense } from "react"

function ServiceIcon({ icon: Icon, color }: { icon: any; color: string }) {
  return (
    <div className="w-16 h-16 mx-auto mb-4 relative">
      <Canvas>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <mesh>
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial color={color} />
            </mesh>
          </Float>
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={2} />
        </Suspense>
      </Canvas>
      <div className="absolute inset-0 flex items-center justify-center">
        <Icon className="h-8 w-8 text-white z-10" />
      </div>
    </div>
  )
}

export function Services() {
  const services = [
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Boost your search rankings with our proven SEO strategies and technical expertise.",
      color: "#8b5cf6",
      features: ["Keyword Research", "On-Page SEO", "Technical Audits", "Link Building"],
    },
    {
      icon: Share2,
      title: "Social Media Marketing",
      description: "Engage your audience and build brand awareness across all social platforms.",
      color: "#ec4899",
      features: ["Content Strategy", "Community Management", "Paid Advertising", "Analytics"],
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Create stunning, responsive websites that convert visitors into customers.",
      color: "#f59e0b",
      features: ["Custom Design", "Mobile Responsive", "E-commerce", "CMS Integration"],
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      description: "Make data-driven decisions with comprehensive analytics and reporting.",
      color: "#10b981",
      features: ["Performance Tracking", "Conversion Analysis", "Custom Reports", "ROI Measurement"],
    },
    {
      icon: Megaphone,
      title: "Digital Advertising",
      description: "Maximize your reach with targeted advertising campaigns across all channels.",
      color: "#8b5cf6",
      features: ["Google Ads", "Facebook Ads", "Display Advertising", "Retargeting"],
    },
    {
      icon: Smartphone,
      title: "Mobile Marketing",
      description: "Reach customers on-the-go with mobile-optimized marketing strategies.",
      color: "#ec4899",
      features: ["App Store Optimization", "Mobile Ads", "SMS Marketing", "Push Notifications"],
    },
  ]

  return (
    <section id="services" className="py-24 bg-gray-950 text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400">Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive digital marketing solutions designed to grow your business and maximize your online presence.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gray-900 border-gray-800 rounded-3xl"
            >
              <CardHeader className="text-center">
                <ServiceIcon icon={service.icon} color={service.color} />
                <CardTitle className="text-xl font-bold text-white">{service.title}</CardTitle>
                <CardDescription className="text-gray-400">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 group-hover:text-white transition-all text-gray-200 border-gray-700"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
