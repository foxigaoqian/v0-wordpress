"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const products = [
  { name: "Spot Ribbon Bow Lipstick Packaging Box", image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=400&fit=crop" },
  { name: "Color Printing Drawer Type Cosmetic Box", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop" },
  { name: "Eco-friendly Kraft Paper Mailer", image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=400&h=400&fit=crop" },
  { name: "Premium Magnetic Closure Gift Box", image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=400&h=400&fit=crop" },
  { name: "Luxury Perfume Cylinder Packaging", image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop" },
  { name: "Minimalist Skincare Set Box", image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop" },
  { name: "Custom Cosmetic Outer Packaging", image: "https://images.unsplash.com/photo-1512207736890-6ffed8a84e8d?w=400&h=400&fit=crop" },
  { name: "Sustainable Food Pouch", image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=400&h=400&fit=crop" },
];

export function ProductShowcase() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", checkScroll);
      return () => el.removeEventListener("scroll", checkScroll);
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">New Product Show</h2>
          <p className="mt-4 text-gray-600">Discover our latest innovative packaging solutions</p>
        </motion.div>
      </div>

      <div className="relative">
        <div ref={scrollRef} className="flex gap-6 overflow-x-auto scrollbar-hide px-6 lg:px-8 pb-4" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="flex-shrink-0 w-72 group cursor-pointer"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100 mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="text-sm font-medium text-gray-900 group-hover:text-[#00cfca] transition-colors line-clamp-2">
                {product.name}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Navigation buttons */}
        <button
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          className={`absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center transition-all ${
            canScrollLeft ? "opacity-100 hover:bg-[#00cfca] hover:text-white" : "opacity-0 pointer-events-none"
          }`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          className={`absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center transition-all ${
            canScrollRight ? "opacity-100 hover:bg-[#00cfca] hover:text-white" : "opacity-0 pointer-events-none"
          }`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}
