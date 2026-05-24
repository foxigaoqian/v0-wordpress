"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Globe, ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "Products",
    href: "#products",
    megaMenu: {
      categories: [
        {
          title: "Products",
          items: [
            { label: "Pouch Formats", href: "#" },
            { label: "Roll Stock Film", href: "#" },
            { label: "Labels & Stickers", href: "#" },
          ],
        },
        {
          title: "",
          items: [
            { label: "Stock/Blank Bags", href: "#" },
            { label: "Child-Resistant Packaging", href: "#" },
          ],
        },
      ],
      featured: {
        tag: "FEATURED",
        title: "Explore Our Premium Products",
        description: "Discover high-quality, customized packaging solutions tailored for your business needs.",
        link: { label: "Learn More", href: "#products" },
      },
    },
  },
  {
    label: "Markets",
    href: "#markets",
    megaMenu: {
      categories: [
        {
          title: "Markets",
          items: [
            { label: "Coffee & Tea", href: "#" },
            { label: "Supplement", href: "#" },
            { label: "Snack", href: "#" },
            { label: "Pet Food", href: "#" },
          ],
        },
        {
          title: "",
          items: [
            { label: "Baby Food", href: "#" },
            { label: "Beverage", href: "#" },
            { label: "Frozen Food", href: "#" },
            { label: "Home Care", href: "#" },
          ],
        },
      ],
      featured: {
        tag: "INDUSTRIES",
        title: "Solutions for Every Market",
        description: "Tailored packaging solutions designed to meet the unique demands of your industry.",
        link: { label: "View All Markets", href: "#markets" },
      },
    },
  },
  {
    label: "Solutions",
    href: "#solutions",
    megaMenu: {
      categories: [
        {
          title: "By Format",
          items: [
            { label: "Stand Up Pouch", href: "#" },
            { label: "Flat Bottom Pouch", href: "#" },
            { label: "Spout Pouch", href: "#" },
            { label: "Retort Pouch", href: "#" },
          ],
        },
        {
          title: "",
          items: [
            { label: "Roll Stock", href: "#" },
            { label: "Quad Seal Bag", href: "#" },
            { label: "Shaped Pouch", href: "#" },
          ],
        },
      ],
      featured: {
        tag: "CUSTOM SOLUTIONS",
        title: "Tailored for Your Brand",
        description: "Work with our experts to create packaging that perfectly represents your brand.",
        link: { label: "Get Started", href: "#contact" },
      },
    },
  },
  {
    label: "Added Value Sustainability",
    href: "#sustainability",
  },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

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
                href="#contact" 
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
                  className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors ${
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
                  <div className="col-span-8">
                    <div className="grid grid-cols-2 gap-8">
                      {navItems.find(item => item.label === activeMenu)?.megaMenu?.categories.map((category, idx) => (
                        <div key={idx}>
                          {category.title && (
                            <h3 className="text-base font-semibold text-gray-900 mb-4 pb-3 border-b border-gray-200">
                              {category.title}
                            </h3>
                          )}
                          <ul className="space-y-3">
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
                  <div className="col-span-4">
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
                    <Link 
                      href={item.href} 
                      className="flex items-center justify-between px-4 py-3 text-gray-700 hover:text-[#00cfca] hover:bg-[#00cfca]/5 rounded-lg transition-colors" 
                      onClick={() => !item.megaMenu && setMobileOpen(false)}
                    >
                      {item.label}
                      {item.megaMenu && <ChevronDown className="w-4 h-4" />}
                    </Link>
                    {item.megaMenu && (
                      <div className="pl-4 mt-1 space-y-1">
                        {item.megaMenu.categories.flatMap(cat => cat.items).map((subItem) => (
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
                    )}
                  </div>
                ))}
              </nav>
              <Link 
                href="#contact" 
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
