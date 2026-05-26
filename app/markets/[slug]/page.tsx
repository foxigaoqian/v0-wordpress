import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MarketDetail } from "@/components/markets/market-detail"
import { notFound } from "next/navigation"

const markets: Record<string, { name: string; description: string; icon: string }> = {
  "coffee-tea": { name: "Coffee & Tea", description: "Premium packaging for specialty coffee and tea brands.", icon: "☕" },
  "snacks-sweets": { name: "Snacks & Sweets", description: "Eye-catching packaging for snacks and confectionery.", icon: "🍿" },
  "supplement": { name: "Supplement", description: "Compliant packaging for vitamins and supplements.", icon: "💊" },
  "pet-food": { name: "Pet Food", description: "Durable packaging for pet food and treats.", icon: "🐕" },
  "sauce-soup": { name: "Sauce & Soup", description: "Leak-proof packaging for sauces and liquid foods.", icon: "🥣" },
  "baby-food": { name: "Baby Food", description: "Safe and convenient packaging for infant nutrition.", icon: "🍼" },
  "beverage": { name: "Beverage", description: "Flexible packaging for drinks and liquid products.", icon: "🥤" },
  "frozen-food": { name: "Frozen Food", description: "Cold-resistant packaging for frozen products.", icon: "❄️" },
  "cosmetics": { name: "Cosmetics", description: "Elegant packaging for beauty products.", icon: "💄" },
  "cbd": { name: "CBD", description: "Compliant packaging for CBD products.", icon: "🌿" },
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const market = markets[slug]
  
  if (!market) {
    return { title: "Market Not Found" }
  }

  return {
    title: `${market.name} Packaging | Mewepak`,
    description: market.description,
  }
}

export default async function MarketPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const market = markets[slug]

  if (!market) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <MarketDetail slug={slug} market={market} />
      <Footer />
    </main>
  )
}

export function generateStaticParams() {
  return Object.keys(markets).map((slug) => ({ slug }))
}
