"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { ChevronRight, Check, Zap, Shield, Leaf, Star, ArrowRight, Plus, Minus } from "lucide-react";

interface SingleProductProps {
  categorySlug: string;
  productSlug: string;
}

const productData: Record<string, any> = {
  "stand-up-pouch": {
    name: "Classic Stand Up Pouch",
    category: "Stand Up Pouch",
    description: "Our classic stand-up pouch offers excellent shelf presence and versatile functionality. Perfect for snacks, coffee, pet food, and more.",
    images: [
      "https://images.unsplash.com/photo-1589365278144-c9e705f843ba?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&h=600&fit=crop",
    ],
    features: [
      "Self-standing design for retail display",
      "Multiple closure options available",
      "Excellent barrier properties",
      "Custom sizes available",
    ],
    materials: ["PET/PE", "PET/AL/PE", "BOPP/CPP", "Kraft/PE"],
    finishes: ["Matte", "Glossy", "Soft Touch", "Metallic"],
    printingMethods: ["Rotogravure", "Digital", "Flexographic"],
  },
};

const defaultProduct = {
  name: "Custom Packaging Product",
  category: "Products",
  description: "High-quality flexible packaging solution designed to meet your specific requirements. Our products combine functionality with visual appeal.",
  images: [
    "https://images.unsplash.com/photo-1589365278144-c9e705f843ba?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop",
  ],
  features: [
    "Premium quality materials",
    "Custom sizes available",
    "Multiple finish options",
    "Fast turnaround time",
  ],
  materials: ["PET/PE", "PET/AL/PE", "BOPP/CPP"],
  finishes: ["Matte", "Glossy", "Soft Touch"],
  printingMethods: ["Rotogravure", "Digital"],
};

export default function SingleProduct({ categorySlug, productSlug }: SingleProductProps) {
  const product = productData[productSlug] || defaultProduct;
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(10000);
  const [selectedMaterial, setSelectedMaterial] = useState(product.materials[0]);
  const [selectedFinish, setSelectedFinish] = useState(product.finishes[0]);

  const relatedProducts = [
    { name: "Flat Bottom Pouch", image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=300&h=300&fit=crop", href: "/products/flat-bottom-pouch" },
    { name: "Spout Pouch", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=300&fit=crop", href: "/products/spout-pouch" },
    { name: "Retort Pouch", image: "https://images.unsplash.com/photo-1589365278144-c9e705f843ba?w=300&h=300&fit=crop", href: "/products/retort-pouch" },
  ];

  const orderProcess = [
    { step: 1, title: "Configure", description: "Select your specifications" },
    { step: 2, title: "Quote", description: "Get instant pricing" },
    { step: 3, title: "Approve", description: "Review and confirm design" },
    { step: 4, title: "Produce", description: "Manufacturing begins" },
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

      {/* Product Top Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Product Images */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-square rounded-3xl overflow-hidden bg-gray-100 mb-4">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex gap-3">
                {product.images.map((img: string, idx: number) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                      selectedImage === idx ? "border-[#00cfca]" : "border-transparent"
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
              <p className="text-lg text-gray-600 mb-8">{product.description}</p>

              {/* Features */}
              <div className="mb-8">
                <h3 className="font-semibold text-gray-900 mb-4">Key Features</h3>
                <ul className="space-y-3">
                  {product.features.map((feature: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#00cfca] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#00cfca] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#00b8b4] transition-colors"
              >
                Request a Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Configurator */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Configure Your Product</h2>
            
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left Column */}
              <div className="space-y-8">
                {/* Dimensions */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">Dimensions (mm)</h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm text-gray-500 mb-2">Width</label>
                      <input
                        type="number"
                        defaultValue={150}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#00cfca]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-500 mb-2">Height</label>
                      <input
                        type="number"
                        defaultValue={200}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#00cfca]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-500 mb-2">Gusset</label>
                      <input
                        type="number"
                        defaultValue={50}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#00cfca]"
                      />
                    </div>
                  </div>
                </div>

                {/* Material */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">Material Structure</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {product.materials.map((material: string) => (
                      <button
                        key={material}
                        onClick={() => setSelectedMaterial(material)}
                        className={`px-4 py-3 rounded-xl border-2 text-sm font-medium transition-all ${
                          selectedMaterial === material
                            ? "border-[#00cfca] bg-[#00cfca]/10 text-[#00cfca]"
                            : "border-gray-200 text-gray-600 hover:border-gray-300"
                        }`}
                      >
                        {material}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Finish */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">Finish</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {product.finishes.map((finish: string) => (
                      <button
                        key={finish}
                        onClick={() => setSelectedFinish(finish)}
                        className={`px-4 py-3 rounded-xl border-2 text-sm font-medium transition-all ${
                          selectedFinish === finish
                            ? "border-[#00cfca] bg-[#00cfca]/10 text-[#00cfca]"
                            : "border-gray-200 text-gray-600 hover:border-gray-300"
                        }`}
                      >
                        {finish}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-8">
                {/* Quantity */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">Quantity</h3>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setQuantity(Math.max(1000, quantity - 1000))}
                      className="w-12 h-12 rounded-xl border border-gray-200 flex items-center justify-center hover:bg-gray-50"
                    >
                      <Minus className="w-5 h-5" />
                    </button>
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(parseInt(e.target.value) || 1000)}
                      className="w-32 px-4 py-3 border border-gray-200 rounded-xl text-center focus:outline-none focus:border-[#00cfca]"
                    />
                    <button
                      onClick={() => setQuantity(quantity + 1000)}
                      className="w-12 h-12 rounded-xl border border-gray-200 flex items-center justify-center hover:bg-gray-50"
                    >
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">Minimum order: 1,000 pcs</p>
                </div>

                {/* Add-ons */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">Add-ons</h3>
                  <div className="space-y-3">
                    {["Zipper Closure", "Hang Hole", "Tear Notch", "Valve (for coffee)"].map((addon) => (
                      <label key={addon} className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-[#00cfca] focus:ring-[#00cfca]" />
                        <span className="text-gray-700">{addon}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-4">
                  <button className="w-full bg-[#00cfca] text-white py-4 rounded-xl font-semibold hover:bg-[#00b8b4] transition-colors">
                    Add to Quote Request
                  </button>
                  <p className="text-center text-sm text-gray-500 mt-3">
                    Our team will respond within 24 hours
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "Fast Production", description: "Quick turnaround times to meet your deadlines" },
              { icon: Shield, title: "Quality Guaranteed", description: "BRC certified with strict quality control" },
              { icon: Leaf, title: "Eco-Friendly Options", description: "Sustainable materials available" },
            ].map((prop, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl"
              >
                <div className="w-12 h-12 bg-[#00cfca]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <prop.icon className="w-6 h-6 text-[#00cfca]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{prop.title}</h3>
                  <p className="text-sm text-gray-600">{prop.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Products</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {relatedProducts.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Link href={item.href} className="group block">
                  <div className="aspect-square rounded-2xl overflow-hidden bg-white mb-4">
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
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Ordering Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {orderProcess.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-[#00cfca] text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </motion.div>
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
