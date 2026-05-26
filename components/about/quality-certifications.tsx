"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronRight, Award, Shield, CheckCircle } from "lucide-react";

const certifications = [
  {
    name: "BRC Global Standard",
    description: "Global Standard for Packaging Materials, ensuring the highest levels of food safety and quality management.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=200&h=200&fit=crop",
  },
  {
    name: "ISO 9001:2015",
    description: "International standard for quality management systems, demonstrating our commitment to consistent quality.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=200&h=200&fit=crop",
  },
  {
    name: "ISO 14001",
    description: "Environmental management system certification, showing our dedication to sustainable practices.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=200&h=200&fit=crop",
  },
  {
    name: "ISO 22000:2018",
    description: "Food safety management system certification for comprehensive food safety control.",
    image: "https://images.unsplash.com/photo-1576402187878-974f70c890a5?w=200&h=200&fit=crop",
  },
  {
    name: "FDA Approved",
    description: "Our materials meet FDA requirements for food contact packaging applications.",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=200&h=200&fit=crop",
  },
  {
    name: "FSSC 22000",
    description: "Food Safety System Certification recognized by the Global Food Safety Initiative.",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=200&h=200&fit=crop",
  },
];

const qualityPoints = [
  "100% inspection of all finished products",
  "In-house testing laboratory",
  "Continuous process improvement",
  "Traceability from raw material to delivery",
  "Regular third-party audits",
  "Customer satisfaction monitoring",
];

export default function QualityCertifications() {
  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-[#00cfca]">Home</Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <Link href="/about-us" className="text-gray-500 hover:text-[#00cfca]">About Us</Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-gray-900 font-medium">Quality Certifications</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-[#00cfca]/10 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#00cfca] rounded-xl flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Quality{" "}
              <span className="text-[#00cfca]">Certifications</span>
            </h1>
            <p className="text-xl text-gray-600">
              Our commitment to quality is validated by industry-leading certifications, 
              ensuring every package meets the highest standards of safety and excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Certifications</h2>
            <p className="text-xl text-gray-600">Internationally recognized standards we maintain</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 bg-[#00cfca]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-8 h-8 text-[#00cfca]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{cert.name}</h3>
                  </div>
                </div>
                <p className="text-gray-600">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Commitment */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Quality Commitment</h2>
              <p className="text-lg text-gray-600 mb-8">
                Quality is not just a goal at Mewepak—it is embedded in everything we do. 
                From raw material selection to final delivery, we maintain rigorous quality 
                control at every step.
              </p>
              <div className="space-y-4">
                {qualityPoints.map((point, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-[#00cfca] flex-shrink-0" />
                    <span className="text-gray-700">{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&h=500&fit=crop"
                alt="Quality Control"
                className="rounded-3xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#0f4c5c]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Trust in Quality
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Partner with us for packaging solutions backed by internationally recognized certifications.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#00cfca] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#00b8b4] transition-colors"
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
