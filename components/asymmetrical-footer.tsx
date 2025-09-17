import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, ArrowRight } from "lucide-react"

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
]

const footerLinks = {
  Services: [
    "SEO Optimization",
    "Social Media Marketing",
    "Web Development",
    "Digital Advertising",
    "Brand Design",
    "Analytics & Insights",
  ],
  Company: ["About Us", "Our Team", "Careers", "Case Studies", "Blog", "Contact"],
  Resources: ["Documentation", "Help Center", "Privacy Policy", "Terms of Service", "Cookie Policy", "Sitemap"],
}

export function AsymmetricalFooter() {
  return (
    <footer className="bg-foreground text-background relative overflow-hidden">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Side - Brand & Newsletter */}
          <div className="lg:col-span-5 space-y-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-2xl">D</span>
              </div>
              <h3 className="text-2xl font-bold">Digital Revolution</h3>
              <p className="text-background/80 leading-relaxed max-w-md">
                Transforming businesses through innovative digital marketing strategies and cutting-edge technology
                solutions.
              </p>
            </div>

            {/* Newsletter */}
            <div className="space-y-4 clip-diagonal bg-primary/10 p-6">
              <div className="flex items-center gap-2 mb-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="font-semibold">Stay Updated</span>
              </div>
              <p className="text-sm text-background/70">
                Get the latest digital marketing insights and tips delivered to your inbox.
              </p>
              <div className="flex gap-2">
                <Input placeholder="Enter your email" className="bg-background text-foreground flex-1" />
                <Button size="icon" className="bg-primary hover:bg-primary/90">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Right Side - Links */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category} className="space-y-4">
                  <h4 className="font-bold text-lg text-primary">{category}</h4>
                  <ul className="space-y-3">
                    {links.map((link) => (
                      <li key={link}>
                        <a
                          href="#"
                          className="text-background/80 hover:text-background hover:underline transition-colors"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="text-background/60 text-sm">© 2024 Digital Revolution. All rights reserved.</div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="ghost"
                  size="icon"
                  className="w-10 h-10 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                  asChild
                >
                  <a href={social.href} aria-label={social.label}>
                    <social.icon className="h-4 w-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-primary/10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-20 h-20 bg-accent/10 clip-triangle animate-float-asymmetric"></div>
    </footer>
  )
}
