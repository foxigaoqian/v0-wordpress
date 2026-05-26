import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FAQPage } from "@/components/added-value/faq-page"

export const metadata: Metadata = {
  title: "FAQ | Mewepak - Frequently Asked Questions",
  description: "Find answers to common questions about our packaging products, ordering process, and services.",
}

export default function FAQ() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <FAQPage />
      <Footer />
    </main>
  )
}
