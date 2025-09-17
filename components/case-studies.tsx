"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, TrendingUp } from "lucide-react"

export function CaseStudies() {
  const caseStudies = [
    {
      title: "E-commerce Growth Strategy",
      client: "TechStore Inc.",
      description: "Increased online sales by 300% through comprehensive SEO and PPC campaigns.",
      image: "/modern-ecommerce-dashboard.png",
      results: [
        { metric: "Sales Increase", value: "300%" },
        { metric: "Traffic Growth", value: "250%" },
        { metric: "Conversion Rate", value: "45%" },
      ],
      tags: ["SEO", "PPC", "E-commerce"],
      duration: "6 months",
    },
    {
      title: "Brand Awareness Campaign",
      client: "StartupXYZ",
      description: "Built brand recognition from zero to industry leader through social media marketing.",
      image: "/social-media-marketing-campaign-dashboard.jpg",
      results: [
        { metric: "Brand Awareness", value: "400%" },
        { metric: "Social Followers", value: "50K+" },
        { metric: "Engagement Rate", value: "8.5%" },
      ],
      tags: ["Social Media", "Branding", "Content"],
      duration: "8 months",
    },
    {
      title: "Local Business Optimization",
      client: "City Restaurant Group",
      description: "Dominated local search results and increased foot traffic through local SEO.",
      image: "/local-business-google-maps-results.jpg",
      results: [
        { metric: "Local Rankings", value: "#1" },
        { metric: "Foot Traffic", value: "180%" },
        { metric: "Online Reviews", value: "4.8★" },
      ],
      tags: ["Local SEO", "Google My Business", "Reviews"],
      duration: "4 months",
    },
  ]

  return (
    <section id="case-studies" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
            Success <span className="text-primary">Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Real results from real clients. See how we've helped businesses like yours achieve remarkable growth through
            our digital marketing strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={study.image || "/placeholder.svg"}
                  alt={study.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-primary text-primary-foreground">
                    {study.duration}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <div className="flex flex-wrap gap-2 mb-3">
                  {study.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <CardTitle className="text-xl">{study.title}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">{study.client}</CardDescription>
                <p className="text-sm text-muted-foreground mt-2">{study.description}</p>
              </CardHeader>

              <CardContent>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {study.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="text-center">
                      <div className="text-lg font-bold text-primary flex items-center justify-center">
                        {result.value}
                        <TrendingUp className="h-4 w-4 ml-1" />
                      </div>
                      <div className="text-xs text-muted-foreground">{result.metric}</div>
                    </div>
                  ))}
                </div>

                <Button
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                >
                  View Case Study
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            View All Case Studies
          </Button>
        </div>
      </div>
    </section>
  )
}
