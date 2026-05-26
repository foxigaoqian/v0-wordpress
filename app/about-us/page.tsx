import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import AboutOverview from "@/components/about/about-overview";

export const metadata = {
  title: "About Us | Mewepak",
  description: "Learn about Mewepak - your trusted partner for flexible packaging solutions.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <AboutOverview />
      <Footer />
    </main>
  );
}
