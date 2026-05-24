import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { MarqueeSection } from "@/components/marquee-section"
import { WorkSection } from "@/components/work-section"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { ClientsSection } from "@/components/clients-section"
import { ProcessSection } from "@/components/process-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <MarqueeSection />
      <WorkSection />
      <ServicesSection />
      <AboutSection />
      <ClientsSection />
      <ProcessSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
