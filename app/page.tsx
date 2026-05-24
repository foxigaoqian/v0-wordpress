import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ExploreSection } from "@/components/explore-section"
import { ProductShowcase } from "@/components/product-showcase"
import { VisualizeSection } from "@/components/visualize-section"
import { IndustrialSection } from "@/components/industrial-section"
import { SustainabilitySection } from "@/components/sustainability-section"
import { BlogSection } from "@/components/blog-section"
import { TestimonialSection } from "@/components/testimonial-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ExploreSection />
      <ProductShowcase />
      <VisualizeSection />
      <IndustrialSection />
      <SustainabilitySection />
      <BlogSection />
      <TestimonialSection />
      <CTASection />
      <Footer />
    </main>
  )
}
