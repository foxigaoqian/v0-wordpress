import Header from "@/components/header";
import Footer from "@/components/footer";
import GlobalReach from "@/components/about/global-reach";

export const metadata = {
  title: "Global Reach | Mewepak",
  description: "Discover our worldwide presence and export capabilities.",
};

export default function GlobalReachPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <GlobalReach />
      <Footer />
    </main>
  );
}
