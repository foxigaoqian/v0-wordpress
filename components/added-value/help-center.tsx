"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronRight, FileText, HelpCircle, Truck, Phone, Palette, Download } from "lucide-react";

const resources = [
  { icon: FileText, title: "Print Templates", description: "Download dieline templates for all packaging formats", href: "/contact" },
  { icon: HelpCircle, title: "FAQ", description: "Find answers to frequently asked questions", href: "/added-value/faq" },
  { icon: Truck, title: "Shipping & Payment", description: "Learn about delivery and payment options", href: "/contact" },
  { icon: Phone, title: "Here to Help", description: "Contact our support team directly", href: "/contact" },
  { icon: Palette, title: "Artwork Service", description: "Professional design assistance", href: "/contact" },
  { icon: Download, title: "Download Area", description: "Access catalogs and specifications", href: "/contact" },
];

export default function HelpCenter() {
  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-[#00cfca]">Home</Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <Link href="/added-value" className="text-gray-500 hover:text-[#00cfca]">Added Value</Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-gray-900 font-medium">Help Center</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-[#00cfca]/10 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Help{" "}
              <span className="text-[#00cfca]">Center</span>
            </h1>
            <p className="text-xl text-gray-600">
              Find all the resources you need to work with us effectively. From templates 
              to guides, we have everything to support your packaging journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Link href={resource.href} className="group block bg-gray-50 rounded-2xl p-8 hover:bg-[#00cfca]/5 transition-colors">
                  <div className="w-14 h-14 bg-[#00cfca]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#00cfca] transition-colors">
                    <resource.icon className="w-7 h-7 text-[#00cfca] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{resource.title}</h3>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <span className="text-[#00cfca] font-semibold inline-flex items-center gap-2">
                    Access <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Book Expert */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Book an Expert Consultation</h2>
            <p className="text-xl text-gray-600 mb-8">
              Need personalized guidance? Schedule a one-on-one consultation with our packaging experts.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#00cfca] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#00b8b4] transition-colors"
            >
              Schedule a Call
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
