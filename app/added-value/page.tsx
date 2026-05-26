import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AddedValueOverview } from "@/components/added-value/added-value-overview"

export const metadata: Metadata = {
  title: "Added Value | Mewepak - Extra Services & Support",
  description: "Discover our added value services including expert support, trade show events, sustainability initiatives, and career opportunities.",
}

export default function AddedValuePage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <AddedValueOverview />
      <Footer />
    </main>
  )
}
