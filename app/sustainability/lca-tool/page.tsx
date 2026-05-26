import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import LCATool from "@/components/sustainability/lca-tool";

export const metadata = {
  title: "Life Cycle Analysis Tool | Mewepak",
  description: "Understand the environmental impact of your packaging choices.",
};

export default function LCAToolPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <LCATool />
      <Footer />
    </main>
  );
}
