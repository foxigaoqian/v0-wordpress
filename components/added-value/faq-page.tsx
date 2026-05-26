"use client"

import { motion } from "framer-motion"
import { ArrowRight, Plus, Minus } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const faqCategories = [
  {
    title: "Products",
    subtitle: "Questions about our products",
    faqs: [
      { q: "What types of packaging do you offer?", a: "We offer a wide range of flexible packaging including stand-up pouches, flat bottom bags, retort pouches, spout pouches, roll stock films, and more. Each product can be fully customized to meet your specific requirements." },
      { q: "What materials do you use?", a: "We work with various materials including PET, PE, PP, Nylon, Aluminum foil, and kraft paper. We also offer eco-friendly options like recyclable mono-materials and bio-based plastics." },
      { q: "What is the minimum order quantity (MOQ)?", a: "Our MOQ varies by product type and customization level. Typically, our MOQ starts from 10,000 pieces for printed pouches. Contact us for specific MOQ information for your project." },
      { q: "Can you provide samples?", a: "Yes, we can provide both stock samples and custom samples. Stock samples are usually free, while custom printed samples may incur a small fee that is often credited to your order." },
      { q: "Do you offer child-resistant packaging?", a: "Yes, we offer certified child-resistant packaging solutions that comply with ASTM standards. These are popular for cannabis, pharmaceutical, and household chemical products." },
    ]
  },
  {
    title: "Order",
    subtitle: "Questions about ordering",
    faqs: [
      { q: "How do I request a quote?", a: "You can request a quote through our website contact form, by email, or by phone. Please provide details about your product, desired packaging type, quantity, and any special requirements." },
      { q: "What is your lead time?", a: "Standard lead time is 15-25 business days from artwork approval to shipment. Rush orders may be accommodated based on production schedule. Stock items can ship within 3-5 days." },
      { q: "Do you offer design services?", a: "Yes, our in-house design team can help you create packaging artwork from scratch or optimize your existing designs for printing. Design services are included with qualifying orders." },
    ]
  },
  {
    title: "Artwork",
    subtitle: "Questions about artwork",
    faqs: [
      { q: "What file formats do you accept?", a: "We accept AI, PDF, PSD, and EPS files. Files should be in CMYK color mode with 300 DPI resolution. We also accept high-resolution JPEG or PNG files for reference." },
      { q: "Do you provide dieline templates?", a: "Yes, we provide free dieline templates for all our packaging formats. Templates are available in Adobe Illustrator format with proper bleed and safety margins marked." },
      { q: "Can you match Pantone colors?", a: "Yes, we can match Pantone colors for consistent brand representation. Please specify your Pantone codes when submitting artwork. Spot colors and metallic inks are also available." },
    ]
  },
  {
    title: "Shipping & Payment",
    subtitle: "Questions about shipping and payment",
    faqs: [
      { q: "Where do you ship?", a: "We ship worldwide. We work with major freight forwarders and can arrange sea freight, air freight, or express courier delivery depending on your timeline and budget." },
      { q: "What payment methods do you accept?", a: "We accept wire transfer (T/T), Letter of Credit (L/C), and PayPal for smaller orders. Standard terms are 30% deposit with balance due before shipment." },
      { q: "Do you handle customs and import documentation?", a: "Yes, we provide all necessary export documentation including commercial invoice, packing list, certificate of origin, and any required certificates. We can also assist with import documentation requirements." },
      { q: "Is shipping included in the price?", a: "Shipping is typically quoted separately based on order volume and destination. We offer FOB, CIF, and DDP terms depending on your preference." },
    ]
  },
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-100">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 flex items-center justify-between text-left"
      >
        <span className="font-medium text-gray-900 pr-4">{question}</span>
        {isOpen ? (
          <Minus className="w-5 h-5 text-[#00cfca] flex-shrink-0" />
        ) : (
          <Plus className="w-5 h-5 text-gray-400 flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="pb-4"
        >
          <p className="text-gray-600">{answer}</p>
        </motion.div>
      )}
    </div>
  )
}

export function FAQPage() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-[#00cfca]">Home</Link>
            <span className="text-gray-300">/</span>
            <Link href="/added-value" className="text-gray-500 hover:text-[#00cfca]">Added Value</Link>
            <span className="text-gray-300">/</span>
            <span className="text-gray-900 font-medium">FAQ</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Frequently Asked
              <span className="text-[#00cfca]"> Questions</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Find answers to common questions about our products, services, and processes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="space-y-12">
            {faqCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{category.title}</h2>
                <p className="text-gray-500 mb-6">{category.subtitle}</p>
                <div className="bg-gray-50 rounded-2xl p-6">
                  {category.faqs.map((faq) => (
                    <FAQItem key={faq.q} question={faq.q} answer={faq.a} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-[#0f4c5c] rounded-3xl p-8 lg:p-12 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-white">
              We Are Here for You!
            </h2>
            <p className="mt-4 text-gray-300 max-w-xl mx-auto">
              {"Can't find the answer you're looking for? Our team is happy to help."}
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3 bg-[#00cfca] text-white font-semibold rounded-full hover:bg-[#00b8b3] transition-colors"
              >
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
