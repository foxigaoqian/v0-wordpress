"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Globe, ChevronDown, Menu, X, ArrowRight, Phone, Mail, MessageCircle } from "lucide-react";
import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "Products",
    href: "/products",
    megaMenu: {
      categories: [
        {
          title: "Pouch Formats",
          items: [
            { label: "Stand Up Pouch", href: "/products/stand-up-pouch" },
            { label: "Flat Bottom Pouch", href: "/products/flat-bottom-pouch" },
            { label: "Retort Pouch", href: "/products/retort-pouch" },
            { label: "Spout Pouch", href: "/products/spout-pouch" },
            { label: "Roll Stock & Lidding Films", href: "/products/roll-stock-lidding-films" },
            { label: "Stand Up Pouch with Tap", href: "/products/stand-up-pouch-with-tap" },
            { label: "Bag-In-Box", href: "/products/bag-in-box" },
          ],
        },
        {
          title: "Specialty Packaging",
          items: [
            { label: "Quad Seal Bag", href: "/products/quad-seal-bag" },
            { label: "Flat Pouch", href: "/products/flat-pouch" },
            { label: "Shaped Pouch", href: "/products/shaped-pouch" },
            { label: "Shrink Sleeves Label", href: "/products/shrink-sleeves-label" },
            { label: "Thermoforming", href: "/products/thermoforming" },
            { label: "Vacuum", href: "/products/vacuum" },
            { label: "Flow Pack", href: "/products/flow-pack" },
          ],
        },
      ],
      featured: {
        tag: "FEATURED",
        title: "Explore Our Premium Products",
        description: "Discover high-quality, customized packaging solutions tailored for your business needs.",
        link: { label: "View All Products", href: "/products" },
      },
    },
  },
  {
    label: "Markets",
    href: "/markets",
    megaMenu: {
      categories: [
        {
          title: "Foods",
          items: [
            { label: "Coffee & Tea", href: "/markets/coffee-tea" },
            { label: "Snacks & Sweets", href: "/markets/snacks-sweets" },
            { label: "Supplement", href: "/markets/supplement" },
            { label: "Pet Food", href: "/markets/pet-food" },
            { label: "Sauce & Soup", href: "/markets/sauce-soup" },
            { label: "Baby Food", href: "/markets/baby-food" },
            { label: "Beverage", href: "/markets/beverage" },
            { label: "Frozen Food", href: "/markets/frozen-food" },
          ],
        },
        {
          title: "",
          items: [
            { label: "Home Care", href: "/markets/home-care" },
            { label: "Meat & Poultry", href: "/markets/meat-poultry" },
            { label: "Beauty Care & Personal Care", href: "/markets/beauty-care" },
            { label: "Sea Food", href: "/markets/sea-food" },
            { label: "Fruits & Veggies", href: "/markets/fruits-veggies" },
          ],
        },
        {
          title: "Nonfoods",
          items: [
            { label: "CBD", href: "/markets/cbd" },
            { label: "Cosmetics", href: "/markets/cosmetics" },
            { label: "Powder & Spices", href: "/markets/powder-spices" },
            { label: "Fashion", href: "/markets/fashion" },
            { label: "Tobacco & Filters", href: "/markets/tobacco-filters" },
            { label: "CBD & THC", href: "/markets/cbd-thc" },
            { label: "Cannabis", href: "/markets/cannabis" },
            { label: "Accessories", href: "/markets/accessories" },
          ],
        },
      ],
      featured: {
        tag: "INDUSTRIES",
        title: "Solutions for Every Market",
        description: "Tailored packaging solutions designed to meet the unique demands of your industry.",
        link: { label: "View All Markets", href: "/markets" },
      },
    },
  },
  {
    label: "Solutions",
    href: "/solutions",
    megaMenu: {
      categories: [
        {
          title: "Our Solutions",
          items: [
            { label: "Prepress", href: "/solutions/prepress" },
            { label: "Printing", href: "/solutions/printing" },
            { label: "Technical", href: "/solutions/technical" },
            { label: "Recycling", href: "/solutions/recycling" },
            { label: "Retort", href: "/solutions/retort" },
          ],
        },
      ],
      featured: {
        tag: "CUSTOM SOLUTIONS",
        title: "Tailored for Your Brand",
        description: "Work with our experts to create packaging that perfectly represents your brand.",
        link: { label: "Get Started", href: "/contact" },
      },
    },
  },
  {
    label: "Added Value",
    href: "/added-value",
    megaMenu: {
      categories: [
        {
          title: "Resources",
          items: [
            { label: "Pouch Patrol", href: "/added-value/pouch-patrol" },
            { label: "On The Road", href: "/added-value/on-the-road" },
            { label: "Keepin'it Green", href: "/added-value/keepin-it-green" },
            { label: "FAQ", href: "/added-value/faq" },
            { label: "Help Center", href: "/added-value/help-center" },
            { label: "Careers", href: "/added-value/careers" },
          ],
        },
      ],
      featured: {
        tag: "SUPPORT",
        title: "We're Here to Help",
        description: "Access our resources, get answers to common questions, and explore career opportunities.",
        link: { label: "Learn More", href: "/added-value" },
      },
    },
  },
  {
    label: "Sustainability",
    href: "/sustainability",
    megaMenu: {
      categories: [
        {
          title: "Our Commitment",
          items: [
            { label: "Sustainable Packaging", href: "/sustainability/sustainable-packaging" },
            { label: "Operations Sustainability", href: "/sustainability/operations" },
            { label: "Social Sustainability", href: "/sustainability/social" },
            { label: "Mewepak Impact Report", href: "/sustainability/impact-report" },
            { label: "Life Cycle Analysis Tool", href: "/sustainability/lca-tool" },
          ],
        },
      ],
      featured: {
        tag: "ECO-FRIENDLY",
        title: "Building a Sustainable Future",
        description: "Discover our commitment to environmental responsibility and sustainable practices.",
        link: { label: "View Report", href: "/sustainability/impact-report" },
      },
    },
  },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  {
    label: "About Us",
    href: "/about-us",
    megaMenu: {
      categories: [
        {
          title: "Company",
          items: [
            { label: "Global Reach", href: "/about-us/global-reach" },
            { label: "Impact Report", href: "/about-us/impact-report" },
            { label: "Quality Certifications", href: "/about-us/quality-certifications" },
          ],
        },
      ],
      featured: {
        tag: "ABOUT US",
        title: "Who We Are",
        description: "Learn about our global presence, quality standards, and commitment to excellence.",
        link: { label: "Learn More", href: "/about-us" },
      },
    },
  },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-white"
        }`}
      >
        {/* Utility bar - contact info */}
        <div className="hidden md:block bg-[#0a1628] text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center justify-between h-9 text-xs">
              <p className="font-medium tracking-wide text-white/90">
                Customized Packaging Factory Since 2007.
              </p>
              <div className="flex items-center gap-5">
                <a
                  href="https://wa.me/8613537663353"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-white/80 hover:text-[#00cfca] transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp: +86 13537663353</span>
                </a>
                <span className="w-px h-3.5 bg-white/20" />
                <a
                  href="tel:+8613423118038"
                  className="flex items-center gap-1.5 text-white/80 hover:text-[#00cfca] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Us: +86-13423118038</span>
                </a>
                <span className="w-px h-3.5 bg-white/20" />
                <a
                  href="mailto:sales@minwayprint.com"
                  className="flex items-center gap-1.5 text-white/80 hover:text-[#00cfca] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>sales@minwayprint.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Top bar */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20 border-b border-gray-100">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#00cfca] rounded-lg flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12z" />
                  <path d="M6 10h2v2H6zm0 4h8v2H6zm10 0h2v2h-2zm-6-4h8v2h-8z" />
                </svg>
              </div>
              <div>
                <span className="text-2xl font-bold text-[#00cfca]">Mewepak</span>
                <p className="text-xs text-[#00cfca]/80 tracking-wide">Packaging Solutions Provider</p>
              </div>
            </Link>

            {/* Search bar - desktop */}
            <div className="hidden lg:flex items-center flex-1 max-w-xl mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search for products |"
                  className="w-full h-11 pl-5 pr-12 rounded-full border border-gray-200 bg-white text-sm text-gray-900 focus:outline-none focus:border-[#00cfca] focus:ring-2 focus:ring-[#00cfca]/20 transition-all"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-[#00cfca] transition-colors">
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Right actions */}
            <div className="flex items-center gap-4">
              <button onClick={() => setSearchOpen(true)} className="lg:hidden p-2 text-gray-600 hover:text-[#00cfca] transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <button className="hidden lg:flex items-center gap-2 text-sm text-gray-600 hover:text-[#00cfca] transition-colors">
                <Globe className="w-4 h-4" />
                <span>EN</span>
                <ChevronDown className="w-3 h-3" />
              </button>
              <Link 
                href="/contact" 
                className="hidden lg:flex items-center gap-2 h-11 px-6 bg-[#00cfca] text-white text-sm font-medium rounded-full hover:bg-[#00b8b3] transition-colors shadow-lg shadow-[#00cfca]/25"
              >
                Request a Quote
              </Link>
              <button onClick={() => setMobileOpen(true)} className="lg:hidden p-2 text-gray-600">
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center justify-center gap-1 h-14">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.megaMenu && setActiveMenu(item.label)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <Link 
                  href={item.href} 
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors ${
                    activeMenu === item.label ? "text-[#00cfca]" : "text-gray-700 hover:text-[#00cfca]"
                  }`}
                >
                  {item.label}
                  {item.megaMenu && <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeMenu === item.label ? "rotate-180" : ""}`} />}
                </Link>
              </div>
            ))}
          </nav>
        </div>

        {/* Mega Menu Dropdown */}
        <AnimatePresence>
          {activeMenu && navItems.find(item => item.label === activeMenu)?.megaMenu && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl"
              onMouseEnter={() => setActiveMenu(activeMenu)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
                <div className="grid grid-cols-12 gap-8">
                  {/* Categories */}
                  <div className={`${navItems.find(item => item.label === activeMenu)?.megaMenu?.categories.length === 1 ? 'col-span-6' : 'col-span-8'}`}>
                    <div className={`grid ${navItems.find(item => item.label === activeMenu)?.megaMenu?.categories.length === 3 ? 'grid-cols-3' : navItems.find(item => item.label === activeMenu)?.megaMenu?.categories.length === 1 ? 'grid-cols-1' : 'grid-cols-2'} gap-8`}>
                      {navItems.find(item => item.label === activeMenu)?.megaMenu?.categories.map((category, idx) => (
                        <div key={idx}>
                          {category.title && (
                            <h3 className="text-base font-semibold text-gray-900 mb-4 pb-3 border-b border-gray-200">
                              {category.title}
                            </h3>
                          )}
                          <ul className="space-y-2">
                            {category.items.map((subItem) => (
                              <li key={subItem.label}>
                                <Link 
                                  href={subItem.href} 
                                  className="text-sm text-gray-600 hover:text-[#00cfca] transition-colors"
                                >
                                  {subItem.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Featured section */}
                  <div className={`${navItems.find(item => item.label === activeMenu)?.megaMenu?.categories.length === 1 ? 'col-span-6' : 'col-span-4'}`}>
                    <div className="bg-gradient-to-br from-[#e6faf9] to-[#f0fffe] rounded-2xl p-6 h-full relative overflow-hidden">
                      {/* Decorative element */}
                      <div className="absolute -right-8 -bottom-8 w-32 h-32 opacity-20">
                        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
                          <path d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0Z" stroke="#00cfca" strokeWidth="2"/>
                          <path d="M50 20L76.6 35V65L50 80L23.4 65V35L50 20Z" stroke="#00cfca" strokeWidth="2"/>
                        </svg>
                      </div>
                      
                      <span className="text-xs font-semibold text-[#00cfca] tracking-wider">
                        {navItems.find(item => item.label === activeMenu)?.megaMenu?.featured.tag}
                      </span>
                      <h4 className="text-xl font-bold text-gray-900 mt-2 mb-3">
                        {navItems.find(item => item.label === activeMenu)?.megaMenu?.featured.title}
                      </h4>
                      <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                        {navItems.find(item => item.label === activeMenu)?.megaMenu?.featured.description}
                      </p>
                      <Link 
                        href={navItems.find(item => item.label === activeMenu)?.megaMenu?.featured.link.href || "#"} 
                        className="inline-flex items-center gap-2 h-10 px-5 bg-[#1a2e35] text-white text-sm font-medium rounded-lg hover:bg-[#2a3e45] transition-colors"
                      >
                        {navItems.find(item => item.label === activeMenu)?.megaMenu?.featured.link.label}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 lg:hidden">
            <div className="absolute inset-0 bg-black/50" onClick={() => setMobileOpen(false)} />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-80 bg-white p-6 overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="text-xl font-bold text-[#00cfca]">Menu</span>
                <button onClick={() => setMobileOpen(false)} className="p-2 text-gray-500">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <nav className="space-y-1">
                {navItems.map((item) => (
                  <div key={item.label}>
                    <button 
                      className="flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:text-[#00cfca] hover:bg-[#00cfca]/5 rounded-lg transition-colors text-left" 
                      onClick={() => {
                        if (item.megaMenu) {
                          setExpandedMobile(expandedMobile === item.label ? null : item.label);
                        } else {
                          setMobileOpen(false);
                        }
                      }}
                    >
                      {item.megaMenu ? (
                        <>
                          {item.label}
                          <ChevronDown className={`w-4 h-4 transition-transform ${expandedMobile === item.label ? 'rotate-180' : ''}`} />
                        </>
                      ) : (
                        <Link href={item.href} onClick={() => setMobileOpen(false)} className="w-full">
                          {item.label}
                        </Link>
                      )}
                    </button>
                    <AnimatePresence>
                      {item.megaMenu && expandedMobile === item.label && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-4 py-2 space-y-1">
                            {item.megaMenu.categories.map((cat, idx) => (
                              <div key={idx}>
                                {cat.title && (
                                  <div className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                                    {cat.title}
                                  </div>
                                )}
                                {cat.items.map((subItem) => (
                                  <Link 
                                    key={subItem.label} 
                                    href={subItem.href} 
                                    className="block px-4 py-2 text-sm text-gray-500 hover:text-[#00cfca] hover:bg-[#00cfca]/5 rounded-lg transition-colors"
                                    onClick={() => setMobileOpen(false)}
                                  >
                                    {subItem.label}
                                  </Link>
                                ))}
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </nav>
              <Link 
                href="/contact" 
                onClick={() => setMobileOpen(false)} 
                className="flex items-center justify-center gap-2 w-full h-12 mt-8 bg-[#00cfca] text-white font-medium rounded-full"
              >
                Request a Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile search */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="fixed inset-0 z-50 bg-black/50 flex items-start justify-center pt-20" 
            onClick={() => setSearchOpen(false)}
          >
            <motion.div 
              initial={{ y: -20, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }} 
              exit={{ y: -20, opacity: 0 }} 
              onClick={(e) => e.stopPropagation()} 
              className="w-full max-w-lg mx-4 bg-white rounded-2xl p-4 shadow-2xl"
            >
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search for products..." 
                  autoFocus 
                  className="w-full h-14 pl-5 pr-12 rounded-xl border-0 bg-gray-50 text-base text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#00cfca]/20" 
                />
                <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer for fixed header */}
      <div className="h-24 lg:h-[136px]" />
    </>
  );
}
