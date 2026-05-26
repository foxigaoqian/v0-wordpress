import Header from "@/components/header";
import Footer from "@/components/footer";
import SustainablePackaging from "@/components/sustainability/sustainable-packaging";

export const metadata = {
  title: "Sustainable Packaging | Mewepak",
  description: "Innovative recyclable and eco-friendly packaging solutions.",
};

export default function SustainablePackagingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <SustainablePackaging />
      <Footer />
    </main>
  );
}
