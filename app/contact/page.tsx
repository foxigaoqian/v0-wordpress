import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactPage } from "@/components/contact/contact-page"

export const metadata: Metadata = {
  title: "Contact Us | Mewepak - Get a Quote",
  description: "Contact Mewepak for custom packaging solutions. Request a quote, schedule a consultation, or visit our factory.",
}

export default function Contact() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <ContactPage />
      <Footer />
    </main>
  )
}
