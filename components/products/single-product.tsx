"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { ChevronRight, ChevronLeft, Check, Leaf, ArrowRight, Package, Palette, Shield, ChevronDown, Award, Truck, HeadphonesIcon } from "lucide-react";

interface SingleProductProps {
  categorySlug: string;
  productSlug: string;
}

const productData: Record<string, any> = {
  "classic": {
    name: "Classic Stand Up Pouch",
    category: "Stand Up Pouch",
    description: "Our classic stand-up pouch offers excellent shelf presence and versatile functionality. Perfect for snacks, coffee, pet food, and more. Features a bottom gusset that allows the pouch to stand upright on retail shelves.",
    images: [
      "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&h=600&fit=crop",
    ],
    features: [
      "Self-standing design for retail display",
      "Multiple closure options available",
      "Excellent barrier properties",
      "Custom sizes available",
      "High-quality printing up to 10 colors",
    ],
    materials: ["PET/PE", "PET/AL/PE", "BOPP/CPP", "Kraft/PE", "Mono PE"],
    finishes: ["Matte", "Glossy", "Soft Touch", "Metallic", "Spot UV"],
    printingMethods: ["Rotogravure", "Digital", "Flexographic"],
    addons: ["Zipper Closure", "Hang Hole", "Tear Notch", "Valve (for coffee)", "Euro Slot", "Clear Window", "Spout"],
  },
};

const defaultProduct = {
  name: "Custom Packaging Product",
  category: "Products",
  description: "High-quality flexible packaging solution designed to meet your specific requirements. Our products combine functionality with visual appeal, ensuring your products stand out on the shelf while maintaining freshness and protection.",
  images: [
    "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=600&h=600&fit=crop",
  ],
  features: [
    "Premium quality materials",
    "Custom sizes available",
    "Multiple finish options",
    "Fast turnaround time",
    "High-quality printing",
  ],
  materials: ["PET/PE", "PET/AL/PE", "BOPP/CPP", "Kraft/PE"],
  finishes: ["Matte", "Glossy", "Soft Touch", "Metallic"],
  printingMethods: ["Rotogravure", "Digital", "Flexographic"],
  addons: ["Zipper Closure", "Hang Hole", "Tear Notch", "Valve", "Clear Window"],
};

export default function SingleProduct({ categorySlug, productSlug }: SingleProductProps) {
  const product = productData[productSlug] || defaultProduct;
  const [selectedImage, setSelectedImage] = useState(0);
  const [expandedAccordion, setExpandedAccordion] = useState<string | null>("features");
  
  // Carousel state for New Solutions section
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [dragOffset, setDragOffset] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);

  const toggleAccordion = (section: string) => {
    setExpandedAccordion(prev => prev === section ? null : section);
  };

  const relatedProducts = [
    { name: "Flat Bottom Pouch", image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=400&fit=crop", href: `/products/${categorySlug}/flat-bottom` },
    { name: "Spout Pouch", image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=400&fit=crop", href: `/products/${categorySlug}/spout` },
    { name: "Retort Pouch", image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&h=400&fit=crop", href: `/products/${categorySlug}/retort` },
    { name: "Quad Seal Bag", image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&h=400&fit=crop", href: `/products/${categorySlug}/quad-seal` },
  ];

  // Carousel navigation
  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % relatedProducts.length);
  };

  const goToPrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + relatedProducts.length) % relatedProducts.length);
  };

  // Auto-play
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(goToNext, 4000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, relatedProducts.length]);

  // Drag handlers
  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    isDragging.current = true;
    startX.current = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setIsAutoPlaying(false);
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging.current) return;
    const currentX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const diff = currentX - startX.current;
    setDragOffset(diff * 0.5);
  };

  const handleDragEnd = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    if (Math.abs(dragOffset) > 50) {
      if (dragOffset > 0) goToPrev();
      else goToNext();
    }
    setDragOffset(0);
  };

  const orderProcess = [
    { step: 1, title: "Configure", description: "Select your specifications and customize your packaging" },
    { step: 2, title: "Get Quote", description: "Receive a detailed quote within 24 hours" },
    { step: 3, title: "Approve Design", description: "Review and approve your artwork proof" },
    { step: 4, title: "Production", description: "We manufacture and ship your order" },
  ];

  const brands = [
    "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=120&h=60&fit=crop",
    "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=120&h=60&fit=crop",
    "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=120&h=60&fit=crop",
    "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=120&h=60&fit=crop",
    "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=120&h=60&fit=crop",
  ];

  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-[#00cfca]">Home</Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <Link href="/products" className="text-gray-500 hover:text-[#00cfca]">Products</Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <Link href={`/products/${categorySlug}`} className="text-gray-500 hover:text-[#00cfca]">{product.category}</Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-gray-900 font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Features Section with Accordion */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Content with Accordion */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-5xl font-bold text-[#0a1628] leading-tight mb-4">
                Films and packaging for packaging of different types of products
              </h2>
              <div className="w-12 h-1 bg-[#00cfca] mb-6" />
              <p className="text-gray-600 leading-relaxed mb-10">
                Specialists in the manufacture of films and flexible packaging with printing and different types of materials and barrier properties with monomaterial innovations. Different formats such as doy packs, pouches, bags, sticks, with two and three seals...etc.
              </p>

              {/* Accordion Sections */}
              <div className="space-y-0 border-t border-gray-200">
                {[
                  { 
                    id: 'features', 
                    title: 'Features',
                    content: product.features
                  },
                  { 
                    id: 'materials', 
                    title: 'Materials',
                    content: product.materials
                  },
                  { 
                    id: 'benefits', 
                    title: 'Benefits',
                    content: ['Excellent shelf presence', 'Lightweight and durable', 'Cost-effective shipping', 'Extended product freshness', 'Custom branding options']
                  },
                  { 
                    id: 'markets', 
                    title: 'Markets',
                    content: ['Food & Beverage', 'Coffee & Tea', 'Pet Food', 'Health & Wellness', 'Snacks & Confectionery']
                  },
                ].map((section) => (
                  <div key={section.id} className="border-b border-gray-200">
                    <button
                      onClick={() => toggleAccordion(section.id)}
                      className="w-full flex items-center justify-between py-5 text-left"
                    >
                      <span className="text-lg font-semibold text-[#0a1628]">{section.title}</span>
                      <ChevronDown 
                        className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                          expandedAccordion === section.id ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>
                    <motion.div
                      initial={false}
                      animate={{ 
                        height: expandedAccordion === section.id ? 'auto' : 0,
                        opacity: expandedAccordion === section.id ? 1 : 0
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <ul className="pb-5 space-y-2">
                        {section.content.map((item: string, idx: number) => (
                          <li key={idx} className="flex items-start gap-3 text-gray-600">
                            <Check className="w-4 h-4 text-[#00cfca] mt-1 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                ))}
              </div>

              {/* Contact Button */}
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-[#0a1628] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#1a2638] transition-colors mt-8"
              >
                Contact with us
              </Link>
            </motion.div>

            {/* Right Column - Product Showcase Carousel */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-square flex items-center justify-center">
                {/* Navy circle background */}
                <div className="absolute top-0 right-0 w-4/5 h-4/5 bg-[#0a1628] rounded-full" />
                
                {/* Main product image */}
                <div className="relative z-10">
                  <img
                    src={product.images[selectedImage]}
                    alt={product.name}
                    className="w-80 h-80 lg:w-96 lg:h-96 object-contain drop-shadow-2xl"
                  />
                </div>

                {/* Navigation arrows */}
                <button
                  onClick={() => setSelectedImage((prev) => (prev - 1 + product.images.length) % product.images.length)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-colors z-20"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-600" />
                </button>
                <button
                  onClick={() => setSelectedImage((prev) => (prev + 1) % product.images.length)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-colors z-20"
                >
                  <ChevronRight className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* New Solutions Carousel Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        {/* Wave Background */}
        <div className="absolute inset-0">
          {/* Top wave transition */}
          <svg className="absolute top-0 w-full h-32 lg:h-40" viewBox="0 0 1440 160" preserveAspectRatio="none">
            <path fill="#f9fafb" d="M0,0 L1440,0 L1440,60 Q1080,120 720,80 Q360,40 0,80 Z" />
            <path fill="#0a1628" d="M0,80 Q360,40 720,80 Q1080,120 1440,60 L1440,160 L0,160 Z" />
          </svg>
          {/* Deep navy blue background */}
          <div className="absolute top-32 lg:top-40 bottom-0 w-full bg-[#0a1628]" />
          {/* Bottom gradient glow */}
          <div 
            className="absolute bottom-0 left-0 right-0 h-80 pointer-events-none"
            style={{
              background: 'linear-gradient(to top, rgba(25, 50, 80, 0.9) 0%, rgba(15, 35, 60, 0.5) 30%, transparent 100%)',
            }}
          />
          {/* Central spotlight glow */}
          <div 
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-72 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 120% 100% at 50% 100%, rgba(40, 70, 110, 0.7) 0%, rgba(30, 55, 90, 0.4) 30%, transparent 60%)',
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 pt-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              New solutions
            </h2>
          </motion.div>

          {/* Carousel */}
          <div className="relative" ref={carouselRef}>
            {/* Navigation Arrows */}
            <button
              onClick={goToPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>

            {/* Products Display */}
            <div 
              className="overflow-hidden py-8 px-16 cursor-grab active:cursor-grabbing"
              onMouseDown={handleDragStart}
              onMouseMove={handleDragMove}
              onMouseUp={handleDragEnd}
              onMouseLeave={handleDragEnd}
              onTouchStart={handleDragStart}
              onTouchMove={handleDragMove}
              onTouchEnd={handleDragEnd}
            >
              <div className="relative h-80 lg:h-96 flex items-center justify-center">
                {relatedProducts.map((item, index) => {
                  let distance = index - currentIndex;
                  if (distance > relatedProducts.length / 2) distance -= relatedProducts.length;
                  if (distance < -relatedProducts.length / 2) distance += relatedProducts.length;
                  
                  const isCenter = distance === 0;
                  const isAdjacent = Math.abs(distance) === 1;
                  const isVisible = Math.abs(distance) <= 2;

                  if (!isVisible) return null;

                  const baseOffset = distance * 200;

                  return (
                    <motion.div
                      key={item.name}
                      className="absolute"
                      animate={{
                        x: baseOffset + dragOffset,
                        scale: isCenter ? 1.15 : isAdjacent ? 0.9 : 0.7,
                        opacity: isCenter ? 1 : isAdjacent ? 0.7 : 0.4,
                        zIndex: isCenter ? 10 : isAdjacent ? 5 : 1,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                        mass: 0.8,
                      }}
                    >
                      <Link 
                        href={item.href} 
                        className="block group"
                        onClick={(e) => {
                          if (!isCenter) {
                            e.preventDefault();
                            setIsAutoPlaying(false);
                            setCurrentIndex(index);
                          }
                        }}
                      >
                        <div 
                          className={`bg-white rounded-2xl overflow-hidden shadow-xl transition-shadow duration-300 ${
                            isCenter ? 'w-48 h-64 lg:w-56 lg:h-72 group-hover:shadow-2xl' : 'w-36 h-48 lg:w-44 lg:h-56'
                          }`}
                        >
                          <div className="w-full h-full p-3 flex flex-col items-center justify-center">
                            <img 
                              src={item.image} 
                              alt={item.name}
                              className="w-full h-4/5 object-contain pointer-events-none"
                              draggable={false}
                            />
                            {isCenter && (
                              <motion.p 
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="mt-2 text-sm font-semibold text-gray-900 text-center"
                              >
                                {item.name}
                              </motion.p>
                            )}
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex items-center justify-center gap-2 mt-8">
              {relatedProducts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setCurrentIndex(index);
                  }}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-[#00cfca] w-6' 
                      : 'bg-white/40 hover:bg-white/60 w-2.5'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Related Products</h2>
            <Link href={`/products/${categorySlug}`} className="text-[#00cfca] font-semibold hover:underline">
              View All
            </Link>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {relatedProducts.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Link href={item.href} className="group block">
                  <div className="aspect-square rounded-2xl overflow-hidden bg-white mb-4 border border-gray-100 group-hover:shadow-lg transition-shadow">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-[#00cfca] transition-colors">
                    {item.name}
                  </h3>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Order Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Ordering Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Simple, transparent, and designed to make your packaging journey as smooth as possible</p>
          </motion.div>
          <div className="grid md:grid-cols-4 gap-8">
            {orderProcess.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center relative"
              >
                {idx < orderProcess.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-[#00cfca] to-[#00cfca]/20" />
                )}
                <div className="w-16 h-16 bg-[#00cfca] text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-4 relative z-10">
                  {step.step}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
            {[
              { icon: Award, label: "BRC Certified" },
              { icon: Shield, label: "ISO 9001" },
              { icon: Leaf, label: "FSC Certified" },
              { icon: Truck, label: "Fast Delivery" },
              { icon: HeadphonesIcon, label: "24/7 Support" },
            ].map((badge, idx) => (
              <div key={idx} className="flex items-center gap-2 text-gray-600">
                <badge.icon className="w-5 h-5 text-[#00cfca]" />
                <span className="text-sm font-medium">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#0f4c5c]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-white/80 mb-8">
            Contact our packaging experts to discuss your requirements and get a custom quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#00cfca] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#00b8b4] transition-colors"
            >
              Request a Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-colors"
            >
              Browse All Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
