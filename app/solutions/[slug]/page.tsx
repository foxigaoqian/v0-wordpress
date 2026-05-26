import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SolutionDetail } from "@/components/solutions/solution-detail"
import { notFound } from "next/navigation"

const solutions: Record<string, { name: string; description: string }> = {
  prepress: { name: "Prepress", description: "Graphic design, color management, and cylinder preparation for perfect print quality." },
  printing: { name: "Printing", description: "State-of-the-art rotogravure printing with up to 10 colors and premium finishes." },
  technical: { name: "Technical", description: "Advanced lamination, coating, and converting processes for superior packaging." },
  recycling: { name: "Recycling", description: "Sustainable mono-material solutions for recyclable packaging." },
  retort: { name: "Retort", description: "High-temperature resistant packaging for sterilized food products." },
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const solution = solutions[slug]
  
  if (!solution) {
    return { title: "Solution Not Found" }
  }

  return {
    title: `${solution.name} | Mewepak Solutions`,
    description: solution.description,
  }
}

export default async function SolutionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const solution = solutions[slug]

  if (!solution) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <SolutionDetail slug={slug} solution={solution} />
      <Footer />
    </main>
  )
}

export function generateStaticParams() {
  return Object.keys(solutions).map((slug) => ({ slug }))
}
