import Header from "@/components/header";
import Footer from "@/components/footer";
import OnTheRoad from "@/components/added-value/on-the-road";

export const metadata = {
  title: "On The Road - Trade Shows | Mewepak",
  description: "Meet us at trade shows and events around the world.",
};

export default function OnTheRoadPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <OnTheRoad />
      <Footer />
    </main>
  );
}
