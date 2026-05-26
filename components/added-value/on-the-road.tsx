"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronRight, Calendar, MapPin } from "lucide-react";

const upcomingEvents = [
  { name: "Pack Expo Las Vegas", date: "Sep 23-25, 2025", location: "Las Vegas, USA", booth: "S-1234" },
  { name: "FACHPACK", date: "Sep 24-26, 2025", location: "Nuremberg, Germany", booth: "Hall 9, Stand 456" },
  { name: "Gulfood Manufacturing", date: "Nov 5-7, 2025", location: "Dubai, UAE", booth: "Za'abeel Hall 3" },
  { name: "Anuga FoodTec", date: "Mar 24-27, 2026", location: "Cologne, Germany", booth: "TBD" },
];

const pastGallery = [
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1560439514-4e9645039924?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1559223607-a43c990c692c?w=400&h=300&fit=crop",
];

export default function OnTheRoad() {
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
            <span className="text-gray-900 font-medium">On The Road</span>
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
              Trade Shows &{" "}
              <span className="text-[#00cfca]">Events</span>
            </h1>
            <p className="text-xl text-gray-600">
              Meet us in person at trade shows and industry events around the world. 
              Experience our products firsthand and discuss your packaging needs with our experts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Where to Meet Us Next</h2>
            <p className="text-xl text-gray-600">Our upcoming trade show schedule</p>
          </motion.div>

          <div className="space-y-6">
            {upcomingEvents.map((event, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
              >
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{event.name}</h3>
                  <div className="flex flex-wrap gap-4 text-gray-600">
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#00cfca]" />
                      {event.date}
                    </span>
                    <span className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#00cfca]" />
                      {event.location}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="px-4 py-2 bg-[#00cfca]/10 text-[#00cfca] rounded-full text-sm font-semibold">
                    {event.booth}
                  </span>
                  <Link href="/contact" className="text-[#00cfca] font-semibold hover:underline">
                    Schedule a Meeting
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Show Highlights 2024</h2>
            <p className="text-xl text-gray-600">Photos from our recent events</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastGallery.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="rounded-2xl overflow-hidden"
              >
                <img src={img} alt={`Event ${idx + 1}`} className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500" />
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
              Want to Meet Us at an Event?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Schedule a meeting in advance to ensure dedicated time with our team.
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
