"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Download, BarChart3, Leaf, Users, Globe, TrendingUp, Award } from "lucide-react";

const highlights = [
  {
    icon: Leaf,
    value: "45%",
    label: "Carbon Reduction",
    description: "Reduction in carbon emissions since 2020",
  },
  {
    icon: Users,
    value: "10,000+",
    label: "Employees Worldwide",
    description: "Talented professionals driving innovation",
  },
  {
    icon: Globe,
    value: "50+",
    label: "Countries Served",
    description: "Global reach with local expertise",
  },
  {
    icon: TrendingUp,
    value: "25%",
    label: "Sustainable Products",
    description: "Of our portfolio now eco-friendly",
  },
];

const reportSections = [
  {
    title: "Environmental Stewardship",
    description: "Our commitment to reducing environmental impact through innovative packaging solutions and sustainable manufacturing processes.",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&h=400&fit=crop",
  },
  {
    title: "Social Responsibility",
    description: "Investing in our communities, ensuring workplace safety, and promoting diversity and inclusion across all operations.",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop",
  },
  {
    title: "Governance & Ethics",
    description: "Maintaining the highest standards of corporate governance, transparency, and ethical business practices.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
  },
];

export function ImpactReportPage() {
  return (
    <main className="min-h-screen bg-white pt-32 lg:pt-36">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#00cfca]/5 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
              <Link href="/" className="hover:text-[#00cfca]">Home</Link>
              <span>/</span>
              <Link href="/about-us" className="hover:text-[#00cfca]">About Us</Link>
              <span>/</span>
              <span className="text-gray-900">Impact Report</span>
            </nav>

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00cfca]/10 rounded-full mb-6">
              <BarChart3 className="w-4 h-4 text-[#00cfca]" />
              <span className="text-sm font-medium text-[#00cfca]">Annual Report 2024</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-[#00cfca]">Impact</span> Report
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Discover how we&apos;re making a positive difference for our planet, people, and communities 
              through sustainable practices and responsible business operations.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="inline-flex items-center gap-2 h-14 px-8 bg-[#00cfca] text-white font-semibold rounded-full hover:bg-[#00b8b3] transition-colors shadow-lg shadow-[#00cfca]/25">
                <Download className="w-5 h-5" />
                Download Full Report
              </button>
              <Link 
                href="/sustainability"
                className="inline-flex items-center gap-2 h-14 px-8 border-2 border-gray-200 text-gray-700 font-semibold rounded-full hover:border-[#00cfca] hover:text-[#00cfca] transition-colors"
              >
                Learn About Sustainability
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">2024 Highlights</h2>
            <p className="text-xl text-gray-600">Key achievements from our sustainability journey</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow text-center"
              >
                <div className="w-16 h-16 bg-[#00cfca]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-[#00cfca]" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{item.value}</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">{item.label}</div>
                <p className="text-sm text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Report Sections */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Report Overview</h2>
            <p className="text-xl text-gray-600">Explore our commitment across key areas</p>
          </motion.div>

          <div className="space-y-16">
            {reportSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
              >
                <div className="lg:w-1/2">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-80 object-cover rounded-3xl"
                  />
                </div>
                <div className="lg:w-1/2">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{section.title}</h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">{section.description}</p>
                  <button className="inline-flex items-center gap-2 text-[#00cfca] font-semibold hover:gap-3 transition-all">
                    Read More
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0f4c5c]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Award className="w-16 h-16 text-[#00cfca] mx-auto mb-8" />
            <h2 className="text-4xl font-bold text-white mb-6">Committed to Excellence</h2>
            <p className="text-xl text-white/80 mb-8">
              Our impact report reflects our dedication to creating a sustainable future 
              while delivering exceptional value to our customers and stakeholders.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="inline-flex items-center gap-2 h-14 px-8 bg-[#00cfca] text-white font-semibold rounded-full hover:bg-[#00b8b3] transition-colors">
                <Download className="w-5 h-5" />
                Download PDF Report
              </button>
              <Link 
                href="/contact"
                className="inline-flex items-center gap-2 h-14 px-8 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
              >
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
