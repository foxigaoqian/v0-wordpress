"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Packiro offers excellent packaging quality that meets modern requirements. I would especially like to recommend the flexibility and excellent customer orientation. Thank you!",
    author: "Evgenia Cerepanovs",
    company: "Buckfood",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop",
  },
  {
    quote: "The attention to detail and commitment to sustainability really sets Mewepak apart. Our customers have noticed the difference in quality.",
    author: "Michael Chen",
    company: "GreenLeaf Foods",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
  },
  {
    quote: "Working with Mewepak has transformed our packaging approach. The 3D preview technology saved us countless revision cycles.",
    author: "Sarah Williams",
    company: "Pure Wellness Co",
    image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=600&h=400&fit=crop",
  },
];

export function TestimonialSection() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <button
                onClick={prev}
                className="absolute -left-16 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:border-[#00cfca] hover:text-[#00cfca] transition-colors hidden lg:flex"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <Quote className="w-12 h-12 text-[#00cfca]/20 mb-6" />
                  <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
                    &ldquo;{testimonials[current].quote}&rdquo;
                  </blockquote>
                  <div>
                    <p className="font-bold text-gray-900">{testimonials[current].author}</p>
                    <p className="text-gray-500">{testimonials[current].company}</p>
                  </div>
                </motion.div>
              </AnimatePresence>

              <button
                onClick={next}
                className="absolute -right-16 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:border-[#00cfca] hover:text-[#00cfca] transition-colors hidden lg:flex"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile navigation */}
            <div className="flex items-center gap-4 mt-8 lg:hidden">
              <button onClick={prev} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button onClick={next} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Dots */}
            <div className="flex items-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === current ? "w-8 bg-[#00cfca]" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.5 }}
                className="aspect-[4/3] rounded-3xl overflow-hidden"
              >
                <img
                  src={testimonials[current].image}
                  alt="Testimonial"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
