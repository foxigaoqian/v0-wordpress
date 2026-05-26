"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FileText, Download, ChevronRight, ArrowRight } from "lucide-react";

const reports = [
  { year: "2025", title: "2025 Impact Report", description: "Our latest sustainability achievements and goals", size: "4.2 MB" },
  { year: "2024", title: "2024 Impact Report", description: "Annual review of environmental initiatives", size: "3.8 MB" },
  { year: "2023", title: "2023 ESG Report", description: "Environmental, Social, and Governance report", size: "3.5 MB" },
  { year: "2022", title: "2022 ESG Report", description: "Our first comprehensive ESG report", size: "3.2 MB" },
];

export default function ImpactReport() {
  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-[#00cfca]">Home</Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <Link href="/sustainability" className="text-gray-500 hover:text-[#00cfca]">Sustainability</Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-gray-900 font-medium">Impact Report</span>
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
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Impact{" "}
              <span className="text-[#00cfca]">Report</span>
            </h1>
            <p className="text-xl text-gray-600">
              Download our annual sustainability reports to learn about our progress, 
              achievements, and future commitments to environmental responsibility.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Reports List */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Download Reports</h2>
            <p className="text-gray-600">
              Access our complete library of sustainability and ESG reports.
            </p>
          </motion.div>

          <div className="space-y-6">
            {reports.map((report, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center justify-between p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors group"
              >
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-[#00cfca] rounded-xl flex items-center justify-center">
                    <FileText className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{report.title}</h3>
                    <p className="text-gray-600 mb-1">{report.description}</p>
                    <span className="text-sm text-gray-400">PDF - {report.size}</span>
                  </div>
                </div>
                <button className="flex items-center gap-2 bg-white px-6 py-3 rounded-xl font-semibold text-[#00cfca] hover:bg-[#00cfca] hover:text-white transition-colors shadow-sm">
                  <Download className="w-5 h-5" />
                  Download
                </button>
              </motion.div>
            ))}
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
              Have Questions About Our Reports?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Our sustainability team is here to help you understand our initiatives and goals.
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
