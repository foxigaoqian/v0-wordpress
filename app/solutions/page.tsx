import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SolutionsOverview } from "@/components/solutions/solutions-overview"

export const metadata: Metadata = {
  title: "Solutions | Mewepak - Manufacturing Capabilities",
  description: "Explore our advanced manufacturing capabilities including prepress, printing, technical processes, recycling, and retort packaging.",
}

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <SolutionsOverview />
      <Footer />
    </main>
  )
}
