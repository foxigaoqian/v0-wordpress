import Header from "@/components/header";
import Footer from "@/components/footer";
import ImpactReport from "@/components/sustainability/impact-report";

export const metadata = {
  title: "Impact Report | Mewepak",
  description: "Download our annual sustainability and impact reports.",
};

export default function ImpactReportPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <ImpactReport />
      <Footer />
    </main>
  );
}
