import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductsArchive } from "@/components/products/products-archive"

export const metadata: Metadata = {
  title: "Products | Mewepak - Custom Packaging Solutions",
  description: "Explore our complete range of flexible packaging products including stand up pouches, flat bottom bags, retort pouches, and more.",
}

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <ProductsArchive />
      <Footer />
    </main>
  )
}
