"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef, useCallback } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const products = [
  { name: "Premium Stand Up Pouch", category: "Food Packaging", image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=600&h=600&fit=crop" },
  { name: "Eco-Friendly Kraft Mailer", category: "Sustainable", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=600&fit=crop" },
  { name: "Luxury Gift Box Collection", category: "Premium", image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&h=600&fit=crop" },
  { name: "Magnetic Closure Box", category: "Gift Packaging", image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=600&h=600&fit=crop" },
  { name: "Cylinder Perfume Package", category: "Cosmetics", image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&h=600&fit=crop" },
  { name: "Skincare Set Packaging", category: "Beauty", image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&h=600&fit=crop" },
  { name: "Custom Cosmetic Box", category: "Beauty", image: "https://images.unsplash.com/photo-1512207736890-6ffed8a84e8d?w=600&h=600&fit=crop" },
  { name: "Sustainable Food Pouch", category: "Eco-Friendly", image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=600&h=600&fit=crop" },
  { name: "Retort Food Packaging", category: "Food Safety", image: "https://images.unsplash.com/photo-1600857062241-98e5dba7f214?w=600&h=600&fit=crop" },
  { name: "Coffee Bean Pouch", category: "Beverage", image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&h=600&fit=crop" },
];

export function ProductShowcase() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  
  // Auto-scroll functionality
  const autoScroll = useCallback(() => {
    if (scrollRef.current && !isPaused) {
      const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
      const newPosition = scrollPosition + 1;
      
      if (newPosition >= maxScroll) {
        setScrollPosition(0);
        scrollRef.current.scrollLeft = 0;
      } else {
        setScrollPosition(newPosition);
        scrollRef.current.scrollLeft = newPosition;
      }
    }
  }, [isPaused, scrollPosition]);

  useEffect(() => {
    const interval = setInterval(autoScroll, 30);
    return () => clearInterval(interval);
  }, [autoScroll]);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      const newPos = direction === "left" 
        ? Math.max(0, scrollPosition - scrollAmount)
        : scrollPosition + scrollAmount;
      setScrollPosition(newPos);
      scrollRef.current.scrollTo({ left: newPos, behavior: "smooth" });
    }
  };

  return (
    <section className="py-40 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#00cfca]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#00cfca]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="h-1.5 bg-[#00cfca] mb-8"
            />
            <h2 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tight">
              New Product
            </h2>
            <h2 className="text-5xl md:text-7xl font-bold text-[#00cfca] tracking-tight">
              Show
            </h2>
            <p className="mt-6 text-gray-500 text-lg max-w-md">
              Discover our latest innovative packaging solutions designed for modern brands
            </p>
          </motion.div>

          {/* Navigation Controls */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <button
              onClick={() => scroll("left")}
              className="w-14 h-14 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-[#00cfca] hover:bg-[#00cfca] hover:text-white transition-all group"
            >
              <ArrowLeft className="w-5 h-5 text-gray-400 group-hover:text-white" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-14 h-14 rounded-full bg-[#00cfca] flex items-center justify-center hover:bg-[#00b8b3] transition-all text-white"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Products Carousel */}
      <div 
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div 
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto scrollbar-hide px-6 lg:px-8 pb-8"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {[...products, ...products].map((product, index) => (
            <motion.div
              key={`${product.name}-${index}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (index % products.length) * 0.1 }}
              className="flex-shrink-0 w-[350px] group cursor-pointer"
            >
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-gray-100 mb-6 shadow-lg group-hover:shadow-2xl transition-shadow">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-2 bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-semibold rounded-full">
                    {product.category}
                  </span>
                </div>

                {/* View button */}
                <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                  <button className="w-full py-4 bg-[#00cfca] text-white font-semibold rounded-2xl hover:bg-[#00b8b3] transition-colors">
                    View Details
                  </button>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#00cfca] transition-colors">
                {product.name}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Gradient edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none" />
      </div>

      {/* Progress indicator */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-12">
        <div className="h-1 bg-gray-200 rounded-full overflow-hidden max-w-md">
          <motion.div 
            className="h-full bg-[#00cfca]"
            style={{ 
              width: scrollRef.current 
                ? `${(scrollPosition / (scrollRef.current.scrollWidth - scrollRef.current.clientWidth)) * 100}%`
                : '0%'
            }}
          />
        </div>
      </div>
    </section>
  );
}
