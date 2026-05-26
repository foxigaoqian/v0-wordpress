import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import HelpCenter from "@/components/added-value/help-center";

export const metadata = {
  title: "Help Center | Mewepak",
  description: "Resources and support for all your packaging needs.",
};

export default function HelpCenterPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HelpCenter />
      <Footer />
    </main>
  );
}
