"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Leaf, Factory, Users, FileText, BarChart3, Play } from "lucide-react";

const pillars = [
  {
    icon: Leaf,
    title: "Sustainable Packaging",
    description: "Innovative recyclable and eco-friendly packaging solutions",
    href: "/sustainability/sustainable-packaging",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=300&fit=crop",
  },
  {
    icon: Factory,
    title: "Operations Sustainability",
    description: "Reducing our environmental footprint in manufacturing",
    href: "/sustainability/operations",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
  },
  {
    icon: Users,
    title: "Social Sustainability",
    description: "Commitment to our people and communities",
    href: "/sustainability/social",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop",
  },
];

const reports = [
  { year: "2025", title: "2025 Impact Report", size: "4.2 MB" },
  { year: "2024", title: "2024 Impact Report", size: "3.8 MB" },
  { year: "2023", title: "2023 ESG Report", size: "3.5 MB" },
];

export default function SustainabilityOverview() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#00cfca]/10 to-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-2 bg-[#00cfca]/10 text-[#00cfca] rounded-full text-sm font-semibold mb-6">
              Our Commitment
            </span>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              ProActive{" "}
              <span className="text-[#00cfca]">Sustainability</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We are committed to creating packaging solutions that protect both your products 
              and our planet. Our sustainability initiatives span across products, operations, 
              and social responsibility.
            </p>
          </motion.div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-[#00cfca]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-40 w-48 h-48 bg-[#00cfca]/10 rounded-full blur-2xl" />
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-[#0f4c5c]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-xl text-white/80">
              To lead the flexible packaging industry toward a more sustainable future through 
              innovation, responsibility, and collaboration with our partners and communities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Three Pillars of Sustainability</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our comprehensive approach addresses environmental impact at every level
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Link href={pillar.href} className="group block">
                  <div className="relative rounded-3xl overflow-hidden mb-6">
                    <img
                      src={pillar.image}
                      alt={pillar.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-6 left-6">
                      <div className="w-12 h-12 bg-[#00cfca] rounded-xl flex items-center justify-center mb-3">
                        <pillar.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#00cfca] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{pillar.description}</p>
                  <span className="inline-flex items-center gap-2 text-[#00cfca] font-semibold">
                    Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Sustainability Journey
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Watch how we are transforming the packaging industry through sustainable 
                innovation and responsible manufacturing practices.
              </p>
              <ul className="space-y-4">
                {[
                  "100% recyclable packaging options",
                  "Carbon-neutral manufacturing by 2030",
                  "Zero waste to landfill initiatives",
                  "Renewable energy powered facilities",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-[#00cfca] rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-video rounded-3xl overflow-hidden bg-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&h=450&fit=crop"
                  alt="Sustainability Video"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-20 h-20 bg-[#00cfca] rounded-full flex items-center justify-center hover:bg-[#00b8b4] transition-colors shadow-xl">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reports & Tools */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Impact Reports */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-[#00cfca]/10 rounded-xl flex items-center justify-center">
                  <FileText className="w-6 h-6 text-[#00cfca]" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Impact Reports</h2>
              </div>
              <p className="text-gray-600 mb-8">
                Download our annual sustainability reports to learn more about our progress 
                and commitments.
              </p>
              <div className="space-y-4">
                {reports.map((report, idx) => (
                  <Link
                    key={idx}
                    href="/sustainability/impact-report"
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#00cfca] rounded-xl flex items-center justify-center text-white font-bold">
                        {report.year}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{report.title}</h4>
                        <p className="text-sm text-gray-500">PDF - {report.size}</p>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400" />
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* LCA Tool */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-[#00cfca]/10 rounded-xl flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-[#00cfca]" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">LCA Tool</h2>
              </div>
              <p className="text-gray-600 mb-8">
                Use our Life Cycle Analysis tool to understand the environmental impact 
                of your packaging choices and make informed decisions.
              </p>
              <div className="bg-gradient-to-br from-[#00cfca]/10 to-[#00cfca]/5 rounded-3xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">ProActive CHART</h3>
                <p className="text-gray-600 mb-6">
                  Our comprehensive tool helps you calculate carbon footprint, compare materials, 
                  and identify opportunities for reducing environmental impact.
                </p>
                <Link
                  href="/sustainability/lca-tool"
                  className="inline-flex items-center gap-2 bg-[#00cfca] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#00b8b4] transition-colors"
                >
                  Explore the Tool
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0f4c5c]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Partner With Us for Sustainable Solutions
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Let us help you achieve your sustainability goals with innovative packaging solutions.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#00cfca] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#00b8b4] transition-colors"
            >
              Contact Our Team
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
