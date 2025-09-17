import { SidebarNavigation } from "@/components/sidebar-navigation"
import { SplitHero } from "@/components/split-hero"
import { AsymmetricalServices } from "@/components/asymmetrical-services"
import { DiagonalAbout } from "@/components/diagonal-about"
import { CreativePortfolio } from "@/components/creative-portfolio"
import { InteractiveTestimonials } from "@/components/interactive-testimonials"
import { ModernContact } from "@/components/modern-contact"
import { AsymmetricalFooter } from "@/components/asymmetrical-footer"

export default function Home() {
  return (
    <div className="flex min-h-screen bg-background">
      <SidebarNavigation />
      <main className="flex-1 ml-0 lg:ml-20 xl:ml-24">
        <SplitHero id="hero" />
        <AsymmetricalServices id="services" />
        <DiagonalAbout id="about" />
        <CreativePortfolio id="portfolio" />
        <InteractiveTestimonials id="testimonials" />
        <ModernContact id="contact" />
        <AsymmetricalFooter id="footer" />
      </main>
    </div>
  )
}
