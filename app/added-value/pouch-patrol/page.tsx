import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import PouchPatrol from "@/components/added-value/pouch-patrol";

export const metadata = {
  title: "Pouch Patrol - Our Team | Mewepak",
  description: "Meet our team of packaging experts dedicated to your success.",
};

export default function PouchPatrolPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <PouchPatrol />
      <Footer />
    </main>
  );
}
