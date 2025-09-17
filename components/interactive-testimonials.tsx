"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    company: "TechStart Inc.",
    content:
      "The team transformed our digital presence completely. Our website traffic increased by 400% and conversions by 250% within just 3 months.",
    rating: 5,
    image: "/professional-woman-ceo.png",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Marketing Director",
    company: "GrowthCorp",
    content:
      "Outstanding results! Their SEO strategy helped us dominate our industry keywords and achieve #1 rankings across all target terms.",
    rating: 5,
    image: "/professional-marketing-director.png",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Founder",
    company: "Creative Studios",
    content:
      "The social media campaigns they created went viral and brought us thousands of new customers. ROI exceeded all expectations.",
    rating: 5,
    image: "/creative-professional-woman-founder.jpg",
  },
  {
    id: 4,
    name: "David Thompson",
    role: "E-commerce Manager",
    company: "RetailMax",
    content:
      "Their web development and optimization work increased our online sales by 300%. The new site is both beautiful and highly functional.",
    rating: 5,
    image: "/professional-man-ecommerce-manager.jpg",
  },
]

export function InteractiveTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section id="testimonials" className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
            Client
            <span className="block text-primary transform rotate-2 bg-accent/10 px-6 py-2 inline-block">
              Success Stories
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients say about working with us.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto mb-8 sm:mb-12">
          <Card className="relative overflow-hidden bg-gradient-to-br from-card to-muted border-2 border-primary/20">
            <CardContent className="p-4 sm:p-6 lg:p-12">
              <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6 lg:gap-8">
                {/* Quote Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 sm:w-20 h-16 sm:h-20 bg-primary rounded-full flex items-center justify-center">
                    <Quote className="h-8 sm:h-10 w-8 sm:w-10 text-primary-foreground" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="flex justify-center lg:justify-start mb-3 sm:mb-4">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 sm:h-5 w-4 sm:w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <blockquote className="text-base sm:text-lg lg:text-xl xl:text-2xl text-foreground mb-4 sm:mb-6 leading-relaxed">
                    "{currentTestimonial.content}"
                  </blockquote>

                  <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4">
                    <img
                      src={currentTestimonial.image || "/placeholder.svg"}
                      alt={currentTestimonial.name}
                      className="w-10 sm:w-12 h-10 sm:h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-bold text-sm sm:text-base text-foreground">{currentTestimonial.name}</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">
                        {currentTestimonial.role}, {currentTestimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <Button
            variant="outline"
            size="icon"
            onClick={prevTestimonial}
            className="rounded-full hover:bg-primary hover:text-primary-foreground bg-transparent"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={nextTestimonial}
            className="rounded-full hover:bg-primary hover:text-primary-foreground bg-transparent"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-2xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className={`cursor-pointer transition-all duration-300 ${
                index === currentIndex ? "ring-2 ring-primary shadow-lg scale-105" : "hover:shadow-md hover:scale-102"
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              <CardContent className="p-4 text-center">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mx-auto mb-2 object-cover"
                />
                <div className="text-sm font-medium text-foreground">{testimonial.name}</div>
                <div className="text-xs text-muted-foreground">{testimonial.company}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
