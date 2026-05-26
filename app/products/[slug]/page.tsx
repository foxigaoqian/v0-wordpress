import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCategoryDetail } from "@/components/products/product-category-detail"
import { notFound } from "next/navigation"

const categories: Record<string, { name: string; description: string }> = {
  "stand-up-pouch": {
    name: "Stand Up Pouch",
    description: "Versatile pouches that stand upright on shelves, perfect for food, snacks, and retail products."
  },
  "flat-bottom-pouch": {
    name: "Flat Bottom Pouch",
    description: "Box-style pouches with a flat base for superior shelf stability and premium presentation."
  },
  "retort-pouch": {
    name: "Retort Pouch",
    description: "High-temperature resistant pouches for sterilized food products with extended shelf life."
  },
  "spout-pouch": {
    name: "Spout Pouch",
    description: "Convenient pouches with integrated spouts for liquid and semi-liquid products."
  },
  "roll-stock-films": {
    name: "Roll Stock & Lidding Films",
    description: "High-quality laminated films for automatic packaging machines and lidding applications."
  },
  "quad-seal-bag": {
    name: "Quad Seal Bag",
    description: "Four-corner sealed bags offering maximum shelf impact and filling capacity."
  },
  "flat-pouch": {
    name: "Flat Pouch",
    description: "Simple three-side sealed pouches for sachets, samples, and lightweight products."
  },
  "shaped-pouch": {
    name: "Shaped Pouch",
    description: "Custom die-cut pouches in unique shapes for standout shelf presence."
  },
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const category = categories[slug]
  
  if (!category) {
    return { title: "Product Not Found" }
  }

  return {
    title: `${category.name} | Mewepak Custom Packaging`,
    description: category.description,
  }
}

export default async function ProductCategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const category = categories[slug]

  if (!category) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <ProductCategoryDetail slug={slug} category={category} />
      <Footer />
    </main>
  )
}

export function generateStaticParams() {
  return Object.keys(categories).map((slug) => ({ slug }))
}
