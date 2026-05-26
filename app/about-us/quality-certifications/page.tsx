import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import QualityCertifications from "@/components/about/quality-certifications";

export const metadata = {
  title: "Quality Certifications | Mewepak",
  description: "Our commitment to quality through industry-leading certifications.",
};

export default function QualityCertificationsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <QualityCertifications />
      <Footer />
    </main>
  );
}
