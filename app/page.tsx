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
    <div className="flex min-h-screen bg-background scroll-smooth">
      <SidebarNavigation />
      <main className="flex-1 ml-0 lg:ml-20 xl:ml-24">
        <section id="hero">
          <SplitHero />
        </section>

        <section id="services">
          <AsymmetricalServices />
        </section>

        <section id="about">
          <DiagonalAbout />
        </section>

        <section id="portfolio">
          <CreativePortfolio />
        </section>

        <section id="testimonials">
          <InteractiveTestimonials />
        </section>

        <section id="contact">
          <ModernContact />
        </section>

        <section id="footer">
          <AsymmetricalFooter />
        </section>
      </main>
    </div>
  )
}
