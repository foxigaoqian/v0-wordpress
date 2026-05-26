import Header from "@/components/header";
import Footer from "@/components/footer";
import SustainabilityChild from "@/components/sustainability/sustainability-child";

export const metadata = {
  title: "Social Sustainability | Mewepak",
  description: "Our commitment to our people and communities.",
};

export default function SocialPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <SustainabilityChild 
        title="Social Sustainability"
        subtitle="Commitment to our people, communities, and creating positive impact"
        sections={[
          {
            title: "Employee Engagement",
            description: "We foster a culture of inclusion, growth, and well-being for all our team members. Our employees are the heart of our success.",
            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
          },
          {
            title: "Diversity, Equity & Inclusion",
            description: "We celebrate diversity and ensure equal opportunities for everyone. Our workplace reflects the communities we serve.",
            image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop",
          },
          {
            title: "Community Impact",
            description: "We actively support local communities through charitable initiatives, education programs, and volunteer opportunities.",
            image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&h=400&fit=crop",
          },
        ]}
      />
      <Footer />
    </main>
  );
}
