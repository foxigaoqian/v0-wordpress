"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { ChevronRight, Check, Leaf, ArrowRight, Plus, Package, Palette, Settings, Award, Truck, HeadphonesIcon, Shield } from "lucide-react";

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
  const [quantity, setQuantity] = useState(10000);
  const [selectedMaterial, setSelectedMaterial] = useState(product.materials[0]);
  const [selectedFinish, setSelectedFinish] = useState(product.finishes[0]);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  const toggleAddon = (addon: string) => {
    setSelectedAddons(prev => 
      prev.includes(addon) 
        ? prev.filter(a => a !== addon) 
        : [...prev, addon]
    );
  };

  const relatedProducts = [
    { name: "Flat Bottom Pouch", image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=400&fit=crop", href: `/products/${categorySlug}/flat-bottom` },
    { name: "Spout Pouch", image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=400&fit=crop", href: `/products/${categorySlug}/spout` },
    { name: "Retort Pouch", image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&h=400&fit=crop", href: `/products/${categorySlug}/retort` },
    { name: "Quad Seal Bag", image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&h=400&fit=crop", href: `/products/${categorySlug}/quad-seal` },
  ];

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

      {/* Product Section - Combined Image Gallery & Configurator */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Product Images */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-square rounded-2xl overflow-hidden bg-gray-50 mb-4 border border-gray-100 relative group">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <button className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-gray-900/70 text-white text-sm px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <Plus className="w-4 h-4" />
                  Click to expand
                </button>
              </div>
              <div className="grid grid-cols-4 gap-3">
                {product.images.map((img: string, idx: number) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`aspect-square rounded-xl overflow-hidden border-2 transition-all ${
                      selectedImage === idx ? "border-[#00cfca]" : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Product Info & Configurator */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Product Code & Name */}
              <div>
                <p className="text-sm text-gray-500 mb-1">SKU-{productSlug.toUpperCase()}</p>
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">{product.name}</h1>
              </div>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">{product.description}</p>

              {/* Dimensions */}
              <div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">Length (inch) <span className="text-red-500">*</span></label>
                    <input
                      type="number"
                      placeholder=""
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#00cfca] focus:ring-1 focus:ring-[#00cfca]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">Width (inch) <span className="text-red-500">*</span></label>
                    <input
                      type="number"
                      placeholder=""
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#00cfca] focus:ring-1 focus:ring-[#00cfca]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">Depth (inch) <span className="text-red-500">*</span></label>
                    <input
                      type="number"
                      placeholder=""
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#00cfca] focus:ring-1 focus:ring-[#00cfca]"
                    />
                  </div>
                </div>
              </div>

              {/* Dropdowns Row */}
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Material <span className="text-red-500">*</span></label>
                  <select 
                    value={selectedMaterial}
                    onChange={(e) => setSelectedMaterial(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#00cfca] focus:ring-1 focus:ring-[#00cfca] bg-white text-gray-700 appearance-none cursor-pointer"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', backgroundSize: '16px' }}
                  >
                    <option value="">Need Consultation</option>
                    {product.materials.map((material: string) => (
                      <option key={material} value={material}>{material}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Print <span className="text-red-500">*</span></label>
                  <select 
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#00cfca] focus:ring-1 focus:ring-[#00cfca] bg-white text-gray-700 appearance-none cursor-pointer"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', backgroundSize: '16px' }}
                  >
                    <option value="">Need Consultation</option>
                    {product.printingMethods.map((method: string) => (
                      <option key={method} value={method}>{method}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Finishing <span className="text-red-500">*</span></label>
                  <select 
                    value={selectedFinish}
                    onChange={(e) => setSelectedFinish(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#00cfca] focus:ring-1 focus:ring-[#00cfca] bg-white text-gray-700 appearance-none cursor-pointer"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', backgroundSize: '16px' }}
                  >
                    <option value="">Need Consultation</option>
                    {product.finishes.map((finish: string) => (
                      <option key={finish} value={finish}>{finish}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Additional Options */}
              <div>
                <label className="block text-sm text-gray-700 mb-3">Additional Options</label>
                <div className="flex flex-wrap gap-2">
                  {["Foil Stamping", "Embossing", "Debossing", "Window Patching"].map((option) => (
                    <button
                      key={option}
                      onClick={() => toggleAddon(option)}
                      className={`px-4 py-2 rounded-lg border text-sm transition-all ${
                        selectedAddons.includes(option)
                          ? "border-[#00cfca] bg-[#00cfca]/10 text-[#00cfca]"
                          : "border-gray-200 text-gray-600 hover:border-gray-300"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              {/* Add-on */}
              <div>
                <label className="block text-sm text-gray-700 mb-3">Add-on</label>
                <div className="flex flex-wrap gap-2">
                  {product.addons.slice(0, 4).map((addon: string) => (
                    <button
                      key={addon}
                      onClick={() => toggleAddon(addon)}
                      className={`px-4 py-2 rounded-lg border text-sm transition-all ${
                        selectedAddons.includes(addon)
                          ? "border-[#00cfca] bg-[#00cfca]/10 text-[#00cfca]"
                          : "border-gray-200 text-gray-600 hover:border-gray-300"
                      }`}
                    >
                      {addon}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div className="pt-2">
                <p className="text-[#00cfca] font-bold text-lg uppercase tracking-wide">Price on Request</p>
              </div>

              {/* Quantity & CTA */}
              <div className="flex items-center gap-4 pt-2">
                <select 
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                  className="px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#00cfca] bg-white text-gray-700 appearance-none cursor-pointer"
                  style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', backgroundSize: '16px', paddingRight: '40px' }}
                >
                  <option value={1000}>1000</option>
                  <option value={5000}>5000</option>
                  <option value={10000}>10000</option>
                  <option value={25000}>25000</option>
                  <option value={50000}>50000</option>
                </select>
                <button className="flex-1 flex items-center justify-center gap-2 bg-[#00cfca] text-white py-3.5 px-6 rounded-full font-semibold hover:bg-[#00b8b4] transition-colors">
                  <Plus className="w-5 h-5" />
                  ADD TO QUOTE
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Palette, title: "Vibrant Colors", description: "High-quality rotogravure printing with up to 10 colors for stunning visual impact" },
              { icon: Package, title: "Lightweight Design", description: "Reduce shipping costs while maintaining excellent product protection" },
              { icon: Leaf, title: "Eco-Friendly Options", description: "Recyclable and bio-based materials available for sustainable packaging" },
            ].map((prop, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl"
              >
                <div className="w-14 h-14 bg-[#00cfca]/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <prop.icon className="w-7 h-7 text-[#00cfca]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">{prop.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{prop.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections - Cross Sell */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-semibold text-[#00cfca] uppercase tracking-wider">Need More Protection?</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-4">
                Consider Our Retort Pouches
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                For products requiring sterilization or extended shelf life, our retort pouches can withstand 
                high-temperature processing while maintaining product integrity and visual appeal.
              </p>
              <ul className="space-y-3 mb-8">
                {["High-temperature resistance up to 135°C", "Extended shelf life without refrigeration", "Perfect for soups, sauces, and ready meals"].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#00cfca] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={`/products/${categorySlug}/retort`}
                className="inline-flex items-center gap-2 text-[#00cfca] font-semibold hover:gap-3 transition-all"
              >
                Explore Retort Pouches <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="aspect-video rounded-3xl overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=800&h=500&fit=crop"
                alt="Retort Pouches"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Customization Showcase */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1 aspect-video rounded-3xl overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=500&fit=crop"
                alt="Custom Packaging"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <span className="text-sm font-semibold text-[#00cfca] uppercase tracking-wider">Unlimited Possibilities</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-4">
                Fully Customizable Design
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                From unique shapes to special finishes, we can bring your vision to life. Our design team 
                works closely with you to create packaging that truly represents your brand.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Palette, label: "Custom Colors" },
                  { icon: Settings, label: "Special Features" },
                  { icon: Award, label: "Premium Finishes" },
                  { icon: Package, label: "Unique Shapes" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                    <item.icon className="w-5 h-5 text-[#00cfca]" />
                    <span className="text-sm font-medium text-gray-700">{item.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
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
