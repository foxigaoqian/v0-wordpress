"use client";

import { useParams } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import SingleProduct from "@/components/products/single-product";

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const product = params.product as string;

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <SingleProduct categorySlug={slug} productSlug={product} />
      <Footer />
    </main>
  );
}
