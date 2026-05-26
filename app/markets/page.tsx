import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MarketsArchive } from "@/components/markets/markets-archive"

export const metadata: Metadata = {
  title: "Markets | Mewepak - Packaging by Industry",
  description: "Custom packaging solutions for every industry. From food & beverage to cosmetics and pet food.",
}

export default function MarketsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <MarketsArchive />
      <Footer />
    </main>
  )
}
