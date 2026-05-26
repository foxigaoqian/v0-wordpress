import Header from "@/components/header";
import Footer from "@/components/footer";
import KeepinItGreen from "@/components/added-value/keepin-it-green";

export const metadata = {
  title: "Keepin It Green | Mewepak",
  description: "Our commitment to sustainable and eco-friendly packaging.",
};

export default function KeepinItGreenPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <KeepinItGreen />
      <Footer />
    </main>
  );
}
