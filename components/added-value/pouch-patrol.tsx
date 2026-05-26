"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronRight, Leaf, Award, HeartHandshake, Lightbulb } from "lucide-react";

const teamMembers = [
  { name: "John Smith", role: "CEO & Founder", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop" },
  { name: "Sarah Johnson", role: "Operations Director", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop" },
  { name: "Michael Chen", role: "Technical Manager", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop" },
  { name: "Emily Davis", role: "Sales Director", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop" },
  { name: "David Wilson", role: "Quality Manager", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop" },
  { name: "Lisa Brown", role: "Design Lead", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop" },
];

const advantages = [
  { icon: Leaf, title: "Sustainability", description: "Committed to eco-friendly packaging solutions" },
  { icon: Award, title: "Quality", description: "BRC and ISO certified manufacturing" },
  { icon: HeartHandshake, title: "Customer Support", description: "Dedicated support throughout your journey" },
  { icon: Lightbulb, title: "Innovation", description: "Continuous improvement and new solutions" },
];

export default function PouchPatrol() {
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
            <span className="text-gray-900 font-medium">Pouch Patrol</span>
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
              Meet Our{" "}
              <span className="text-[#00cfca]">Team</span>
            </h1>
            <p className="text-xl text-gray-600">
              Our team of packaging experts is dedicated to helping you create the perfect 
              packaging solution. With decades of combined experience, we are your partners in success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What Makes Us Special */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">What Makes Us Special</h2>
              <p className="text-lg text-gray-600 mb-6">
                We are not just a packaging supplier—we are your strategic partner. Our in-house 
                production capabilities and expert team ensure that every project receives the 
                attention and expertise it deserves.
              </p>
              <p className="text-lg text-gray-600">
                From initial concept to final delivery, our team works closely with you to 
                understand your needs and deliver solutions that exceed expectations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[1, 2, 3, 4].map((i) => (
                <img
                  key={i}
                  src={`https://images.unsplash.com/photo-158109226082${i}-a6a2a5aee158?w=300&h=300&fit=crop`}
                  alt="Team at work"
                  className="rounded-2xl w-full aspect-square object-cover"
                />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get to Know Us</h2>
            <p className="text-xl text-gray-600">The people behind your packaging success</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center shadow-sm"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-[#00cfca] font-medium">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Advantages</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((adv, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-[#00cfca]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <adv.icon className="w-8 h-8 text-[#00cfca]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{adv.title}</h3>
                <p className="text-gray-600">{adv.description}</p>
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
              Ready to Work With Our Team?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Let our experts help you create the perfect packaging solution.
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
