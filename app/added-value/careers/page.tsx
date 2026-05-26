import Header from "@/components/header";
import Footer from "@/components/footer";
import Careers from "@/components/added-value/careers";

export const metadata = {
  title: "Careers | Mewepak",
  description: "Join our team and build your career in flexible packaging.",
};

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Careers />
      <Footer />
    </main>
  );
}
