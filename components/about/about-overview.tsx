"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Globe, Award, Users, Factory, Target, Heart, Lightbulb, Handshake } from "lucide-react";

const values = [
  { icon: Target, title: "Integrity", description: "We do what we say and say what we do" },
  { icon: Lightbulb, title: "Innovation", description: "Constantly pushing boundaries in packaging" },
  { icon: Heart, title: "Passion", description: "We love what we do and it shows" },
  { icon: Handshake, title: "Partnership", description: "Your success is our success" },
];

const stats = [
  { value: "15+", label: "Years of Experience" },
  { value: "40+", label: "Countries Served" },
  { value: "500+", label: "Happy Clients" },
  { value: "1000+", label: "Products Delivered" },
];

const milestones = [
  { year: "2009", title: "Founded", description: "Started our journey in flexible packaging" },
  { year: "2012", title: "BRC Certified", description: "Achieved BRC food safety certification" },
  { year: "2015", title: "Expanded Capacity", description: "Doubled our production capacity" },
  { year: "2018", title: "ISO Certified", description: "Achieved ISO 9001 & 14001 certifications" },
  { year: "2021", title: "Sustainability Focus", description: "Launched recyclable packaging line" },
  { year: "2024", title: "Global Reach", description: "Expanded to 40+ countries worldwide" },
];

export default function AboutOverview() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-[#00cfca]/10 to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                About{" "}
                <span className="text-[#00cfca]">Mewepak</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                We are a leading flexible packaging manufacturer dedicated to delivering 
                innovative, high-quality packaging solutions that help brands stand out 
                on the shelf while protecting their products.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#00cfca] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#00b8b4] transition-colors"
                >
                  Get in Touch
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/about-us/global-reach"
                  className="inline-flex items-center gap-2 bg-gray-100 text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition-colors"
                >
                  Our Global Reach
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=500&fit=crop"
                alt="Our Factory"
                className="rounded-3xl w-full shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-[#00cfca]/5 rounded-full blur-3xl" />
      </section>

      {/* Stats */}
      <section className="py-16 bg-[#0f4c5c]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-[#00cfca] mb-2">{stat.value}</div>
                <div className="text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded with a vision to revolutionize the flexible packaging industry, Mewepak 
                has grown from a small operation to a globally recognized manufacturer serving 
                clients across 40+ countries.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our journey has been marked by continuous innovation, unwavering commitment to 
                quality, and a deep understanding of our clients&apos; needs. Today, we combine 
                cutting-edge technology with decades of expertise to deliver packaging solutions 
                that exceed expectations.
              </p>
              <p className="text-lg text-gray-600">
                From stand-up pouches to specialized retort packaging, we offer comprehensive 
                solutions that help brands protect their products and connect with consumers.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&h=500&fit=crop"
                alt="Our Story"
                className="rounded-3xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center shadow-sm"
              >
                <div className="w-14 h-14 bg-[#00cfca]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-[#00cfca]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">Key milestones in our history</p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[#00cfca]/20 hidden lg:block" />
            <div className="space-y-12">
              {milestones.map((milestone, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`flex items-center gap-8 ${idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                >
                  <div className={`flex-1 ${idx % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-sm inline-block">
                      <span className="text-[#00cfca] font-bold text-lg">{milestone.year}</span>
                      <h3 className="text-xl font-bold text-gray-900 mt-1">{milestone.title}</h3>
                      <p className="text-gray-600 mt-2">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="hidden lg:flex w-4 h-4 bg-[#00cfca] rounded-full z-10" />
                  <div className="flex-1 hidden lg:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sub-pages Links */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Learn More</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Globe, title: "Global Reach", description: "Our worldwide presence and capabilities", href: "/about-us/global-reach" },
              { icon: Award, title: "Quality Certifications", description: "Our commitment to quality standards", href: "/about-us/quality-certifications" },
              { icon: Factory, title: "Our Facilities", description: "State-of-the-art manufacturing", href: "/contact" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Link href={item.href} className="group block bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 bg-[#00cfca]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#00cfca] transition-colors">
                    <item.icon className="w-7 h-7 text-[#00cfca] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <span className="text-[#00cfca] font-semibold inline-flex items-center gap-2">
                    Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
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
              Ready to Work Together?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Let us help you create packaging that makes your products stand out.
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
