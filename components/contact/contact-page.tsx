"use client"

import { motion } from "framer-motion"
import { ArrowRight, Mail, Phone, MessageCircle, MapPin, Clock, Shield, Plus, Minus } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const contactMethods = [
  { icon: Mail, title: "Email Us", subtitle: "24h response time", action: "Send Email", href: "mailto:info@mewepak.com" },
  { icon: Phone, title: "Call Us", subtitle: "Mon-Fri 9am-6pm", action: "Call Now", href: "tel:+86123456789" },
  { icon: MessageCircle, title: "WhatsApp", subtitle: "Instant messaging", action: "Chat Now", href: "https://wa.me/86123456789" },
]

const faqs = [
  { q: "What is your minimum order quantity?", a: "Our MOQ varies by product type. Printed pouches typically start from 10,000 pieces. Contact us for specific requirements." },
  { q: "How long is the lead time?", a: "Standard lead time is 15-25 business days from artwork approval. Rush orders may be available." },
  { q: "Can you provide samples?", a: "Yes, we provide both stock samples and custom printed samples. Stock samples are usually free." },
  { q: "What payment methods do you accept?", a: "We accept T/T (wire transfer), L/C, and PayPal. Standard terms are 30% deposit with balance before shipment." },
  { q: "Do you provide design services?", a: "Yes, our design team can help create or optimize your packaging artwork at no extra cost for qualifying orders." },
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 flex items-center justify-between text-left"
      >
        <span className="font-medium text-gray-900 pr-4 text-sm">{question}</span>
        {isOpen ? (
          <Minus className="w-4 h-4 text-[#00cfca] flex-shrink-0" />
        ) : (
          <Plus className="w-4 h-4 text-gray-400 flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="pb-4">
          <p className="text-gray-600 text-sm">{answer}</p>
        </div>
      )}
    </div>
  )
}

export function ContactPage() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-[#00cfca]">Home</Link>
            <span className="text-gray-300">/</span>
            <span className="text-gray-900 font-medium">Contact</span>
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
              {"Let's Build Your"}
              <span className="text-[#00cfca]"> Packaging Solution</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Our team is ready to help you create the perfect packaging. Get in touch today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-4">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.title}
                href={method.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 p-6 bg-gray-50 rounded-2xl hover:bg-[#00cfca]/5 transition-colors group"
              >
                <div className="w-12 h-12 bg-[#00cfca]/10 rounded-xl flex items-center justify-center group-hover:bg-[#00cfca]/20 transition-colors">
                  <method.icon className="w-6 h-6 text-[#00cfca]" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{method.title}</p>
                  <p className="text-sm text-gray-500">{method.subtitle}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Request a Quote</h2>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                    <input type="text" required className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00cfca] focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company *</label>
                    <input type="text" required className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00cfca] focus:border-transparent" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <input type="email" required className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00cfca] focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input type="tel" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00cfca] focus:border-transparent" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Product Type *</label>
                    <select required className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00cfca] focus:border-transparent">
                      <option value="">Select a product</option>
                      <option value="stand-up-pouch">Stand Up Pouch</option>
                      <option value="flat-bottom">Flat Bottom Bag</option>
                      <option value="retort">Retort Pouch</option>
                      <option value="spout">Spout Pouch</option>
                      <option value="roll-stock">Roll Stock Film</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
                    <input type="text" placeholder="e.g., 50,000 pcs" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00cfca] focus:border-transparent" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Project Details *</label>
                  <textarea required rows={4} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00cfca] focus:border-transparent" placeholder="Tell us about your project requirements..." />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Attach Files (Optional)</label>
                  <input type="file" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00cfca] focus:border-transparent" />
                  <p className="mt-1 text-xs text-gray-500">Upload design files, specs, or reference images (max 10MB)</p>
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-[#00cfca] text-white font-semibold rounded-xl hover:bg-[#00b8b3] transition-colors flex items-center justify-center gap-2"
                >
                  Submit Quote Request
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Contact Info */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Factory Address</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#00cfca] mt-0.5" />
                    <div>
                      <p className="text-gray-700">123 Packaging Industrial Zone</p>
                      <p className="text-gray-700">Guangdong Province, China</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-[#00cfca]" />
                    <p className="text-gray-700">Mon - Fri: 9:00 AM - 6:00 PM (CST)</p>
                  </div>
                </div>
              </div>

              {/* Quick Response */}
              <div className="bg-[#00cfca]/5 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="w-6 h-6 text-[#00cfca]" />
                  <h3 className="font-semibold text-gray-900">Quick Response Guarantee</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  We respond to all inquiries within 2 hours during business hours. Your project is important to us.
                </p>
              </div>

              {/* FAQ */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Common Questions</h3>
                {faqs.map((faq) => (
                  <FAQItem key={faq.q} question={faq.q} answer={faq.a} />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Visit Our Factory</h2>
              <p className="text-gray-600 mb-6">
                We welcome customers to visit our manufacturing facility. See our production capabilities firsthand and meet our team.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#00cfca]/10 rounded-xl flex items-center justify-center">
                    <span className="text-2xl font-bold text-[#00cfca]">40+</span>
                  </div>
                  <p className="text-gray-700">Countries Exported</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#00cfca]/10 rounded-xl flex items-center justify-center">
                    <span className="text-2xl font-bold text-[#00cfca]">15+</span>
                  </div>
                  <p className="text-gray-700">Years Experience</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#00cfca]/10 rounded-xl flex items-center justify-center">
                    <span className="text-2xl font-bold text-[#00cfca]">BRC</span>
                  </div>
                  <p className="text-gray-700">Certified Facility</p>
                </div>
              </div>
            </div>
            <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-100 rounded-2xl flex items-center justify-center">
              <MapPin className="w-12 h-12 text-gray-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {["ISO 9001", "BRC", "FDA", "HACCP", "SGS"].map((cert) => (
              <div key={cert} className="px-6 py-3 bg-gray-100 rounded-lg">
                <span className="font-semibold text-gray-600">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
