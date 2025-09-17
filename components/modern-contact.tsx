"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    content: "hello@digitalrevolution.com",
    description: "Send us an email anytime",
  },
  {
    icon: Phone,
    title: "Call Us",
    content: "+1 (555) 123-4567",
    description: "Mon-Fri from 8am to 6pm",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    content: "123 Innovation Street, Tech City",
    description: "Come say hello at our office",
  },
]

export function ModernContact() {
  return (
    <section id="contact" className="py-20 bg-muted relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Contact Info */}
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-center lg:text-left">
                Let's Create
                <span className="block text-primary px-2 py-1 inline-block">
                  Something Amazing
                </span>
              </h2>
              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed text-center lg:text-left">
                Ready to transform your digital presence? Get in touch and let's discuss how we can help your business grow.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="grid gap-4">
              {contactInfo.map((info) => (
                <Card key={info.title} className="group hover:shadow-md transition-all">
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <info.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{info.title}</div>
                      <div className="text-primary font-medium">{info.content}</div>
                      <div className="text-sm text-muted-foreground">{info.description}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="order-1 lg:order-2">
            <Card>
              <CardContent className="p-6 lg:p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1 block">First Name</label>
                      <Input placeholder="John" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1 block">Last Name</label>
                      <Input placeholder="Doe" />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">Email</label>
                    <Input type="email" placeholder="john@example.com" />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">Company</label>
                    <Input placeholder="Your Company" />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">Message</label>
                    <Textarea placeholder="Tell us about your project..." rows={4} />
                  </div>

                  <Button size="lg" className="w-full bg-primary hover:bg-primary/90 group">
                    Send Message
                    <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
