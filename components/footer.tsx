import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Linkedin, Instagram, Mail } from "lucide-react"

export function Footer() {
  const footerLinks = {
    Services: [
      "SEO Optimization",
      "Social Media Marketing",
      "Web Development",
      "Digital Advertising",
      "Analytics & Insights",
      "Mobile Marketing",
    ],
    Company: ["About Us", "Our Team", "Careers", "Case Studies", "Blog", "Contact"],
    Resources: ["Free Tools", "Marketing Guide", "Industry Reports", "Webinars", "Templates", "Support"],
  }

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ]

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-primary mb-4">DigitalPro</h3>
            <p className="text-background/80 mb-6 text-pretty">
              Transform your digital presence with our comprehensive marketing solutions. We help businesses grow
              through innovative strategies and data-driven results.
            </p>

            {/* Newsletter */}
            <div className="space-y-4">
              <h4 className="font-semibold">Stay Updated</h4>
              <div className="flex space-x-2">
                <Input
                  placeholder="Enter your email"
                  className="bg-background/10 border-background/20 text-background placeholder:text-background/60"
                />
                <Button variant="secondary" size="sm">
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-background/80 hover:text-primary transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-background/60 text-sm">© 2024 DigitalPro. All rights reserved.</div>

            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-background/60 hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
