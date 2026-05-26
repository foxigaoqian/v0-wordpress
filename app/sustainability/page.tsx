import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import SustainabilityOverview from "@/components/sustainability/sustainability-overview";

export const metadata = {
  title: "Sustainability | Mewepak",
  description: "Our commitment to sustainable packaging solutions and environmental responsibility.",
};

export default function SustainabilityPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <SustainabilityOverview />
      <Footer />
    </main>
  );
}
