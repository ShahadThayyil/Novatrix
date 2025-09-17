"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"
import { useState, useEffect } from "react"

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      avatar: "/professional-woman-ceo.png",
      content:
        "DigitalPro transformed our online presence completely. Our website traffic increased by 400% and our conversion rates doubled within just 3 months.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Marketing Director, GrowthCorp",
      avatar: "/professional-marketing-director.png",
      content:
        "The team at DigitalPro is exceptional. Their strategic approach to digital marketing helped us achieve a 250% ROI on our marketing spend.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Founder, LocalBiz",
      avatar: "/professional-woman-founder.png",
      content:
        "Working with DigitalPro was a game-changer for our local business. We now dominate local search results and our customer base has tripled.",
      rating: 5,
    },
    {
      name: "David Thompson",
      role: "VP Marketing, Enterprise Solutions",
      avatar: "/professional-man-vp-marketing.jpg",
      content:
        "Their data-driven approach and attention to detail is unmatched. DigitalPro helped us scale our digital marketing efforts across multiple markets.",
      rating: 5,
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Don't just take our word for it. Here's what our clients have to say about working with DigitalPro and the
            results we've achieved together.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Card className="bg-card border-border shadow-lg animate-pulse3d">
            <CardContent className="p-8 md:p-12">
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>

                <blockquote className="text-xl md:text-2xl text-foreground mb-8 text-pretty">
                  "{testimonials[currentIndex].content}"
                </blockquote>

                <div className="flex items-center justify-center space-x-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage
                      src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                      alt={testimonials[currentIndex].name}
                    />
                    <AvatarFallback>
                      {testimonials[currentIndex].name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-left">
                    <div className="font-semibold text-lg">{testimonials[currentIndex].name}</div>
                    <div className="text-muted-foreground">{testimonials[currentIndex].role}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Testimonial indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-muted"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Client logos */}
        <div className="mt-16">
          <p className="text-center text-muted-foreground mb-8">Trusted by leading companies</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="text-center">
                <img
                  src={`/generic-company-logo.png?height=60&width=120&query=company logo ${i}`}
                  alt={`Client ${i}`}
                  className="h-12 mx-auto grayscale hover:grayscale-0 transition-all"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
