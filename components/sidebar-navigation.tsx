"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Home, Briefcase, User, FolderOpen, MessageSquare, Mail, Menu, X } from "lucide-react"

const navItems = [
  { id: "hero", icon: Home, label: "Home" },
  { id: "services", icon: Briefcase, label: "Services" },
  { id: "about", icon: User, label: "About" },
  { id: "portfolio", icon: FolderOpen, label: "Portfolio" },
  { id: "testimonials", icon: MessageSquare, label: "Reviews" },
  { id: "contact", icon: Mail, label: "Contact" },
]

export function SidebarNavigation() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <>
   {/* Mobile Menu Button */}
<Button
  variant="outline"
  size="icon"
  className="fixed top-4 left-4 z-50 lg:hidden bg-background/80 backdrop-blur-sm border-primary/20"
  onClick={() => setIsOpen(!isOpen)}
>
  {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
</Button>

      {/* Sidebar */}
      <nav
        className={`
        fixed left-0 top-0 h-full w-20 lg:w-24 bg-sidebar border-r border-sidebar-border z-40
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
      >
        <div className="flex flex-col items-center py-8 space-y-6">
          {/* Logo */}
          {/* Logo (move slightly right on mobile) */}
<div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-8 mt-8 lg:mt-8 lg:ml-0 ml-0 ">
  <span className="text-primary-foreground font-bold text-xl">N</span>
</div>
          {/* Navigation Items */}
          {navItems.map((item, index) => (
            <Button
              key={item.id}
              variant="ghost"
              size="icon"
              className="w-12 h-12 rounded-xl hover:bg-sidebar-accent hover:text-sidebar-accent-foreground group relative"
              onClick={() => scrollToSection(item.id)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <item.icon className="h-5 w-5" />
              <span className="absolute left-full ml-4 px-2 py-1 bg-sidebar-primary text-sidebar-primary-foreground text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden lg:block">
                {item.label}
              </span>
            </Button>
          ))}
        </div>

        {/* Bottom Decoration */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-8 h-8 bg-accent/20 rounded-full animate-pulse"><img src="/logo.png" alt="" /></div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black/50 z-30 lg:hidden" onClick={() => setIsOpen(false)} />}
    </>
  )
}
