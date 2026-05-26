import Header from "@/components/header";
import Footer from "@/components/footer";
import SustainabilityChild from "@/components/sustainability/sustainability-child";

export const metadata = {
  title: "Operations Sustainability | Mewepak",
  description: "Our commitment to sustainable manufacturing operations.",
};

export default function OperationsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <SustainabilityChild 
        title="Operations Sustainability"
        subtitle="Reducing our environmental footprint through responsible manufacturing"
        stats={[
          { value: "20%", label: "Recycled content in paper products" },
          { value: "100%", label: "Sites with waste reduction programs" },
          { value: "5", label: "Awards for green practices" },
          { value: "100%", label: "Sites with water management" },
        ]}
        sections={[
          {
            title: "Improving Air and Water Quality",
            description: "We continuously invest in technologies that reduce emissions and protect water resources.",
            image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop",
          },
          {
            title: "Reducing Energy Consumption",
            description: "Our facilities are equipped with energy-efficient systems and renewable energy sources.",
            image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop",
          },
          {
            title: "Recycling Initiatives",
            description: "We maintain comprehensive recycling programs across all our manufacturing facilities.",
            image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&h=400&fit=crop",
          },
        ]}
      />
      <Footer />
    </main>
  );
}
