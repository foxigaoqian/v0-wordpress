"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Globe, ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";

const navItems = [
  {
    label: "Products",
    href: "#explore",
    submenu: [
      { label: "Pouch Formats", href: "#" },
      { label: "Roll Stock Film", href: "#" },
      { label: "Labels & Stickers", href: "#" },
      { label: "Stock/Blank Bags", href: "#" },
    ],
  },
  {
    label: "Industries",
    href: "#explore",
    submenu: [
      { label: "Coffee & Tea", href: "#" },
      { label: "Food & Beverage", href: "#" },
      { label: "Pet Food", href: "#" },
    ],
  },
  { label: "Sustainability", href: "#sustainability" },
  { label: "Resources", href: "#resources" },
  { label: "Services", href: "#process" },
  { label: "Company", href: "#contact" },
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
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#00cfca] rounded-lg flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12z" />
                  <path d="M6 10h2v2H6zm0 4h8v2H6zm10 0h2v2h-2zm-6-4h8v2h-8z" />
                </svg>
              </div>
              <div>
                <span className="text-xl font-bold text-[#00cfca]">Mewepak</span>
                <p className="text-[10px] text-[#00cfca]/80 tracking-wider">Packaging Solutions</p>
              </div>
            </Link>

            {/* Search bar - desktop */}
            <div className="hidden lg:flex items-center flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="w-full h-11 pl-4 pr-12 rounded-full border border-gray-200 bg-gray-50/80 text-sm text-gray-900 focus:outline-none focus:border-[#00cfca] focus:ring-2 focus:ring-[#00cfca]/20 transition-all"
                />
                <button className="absolute right-1 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center text-gray-400 hover:text-[#00cfca] transition-colors">
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
              <Link href="#contact" className="hidden lg:flex items-center gap-2 h-11 px-6 bg-[#00cfca] text-white text-sm font-medium rounded-full hover:bg-[#00b8b3] transition-colors shadow-lg shadow-[#00cfca]/25">
                Request a Quote
              </Link>
              <button onClick={() => setMobileOpen(true)} className="lg:hidden p-2 text-gray-600">
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center justify-center gap-1 pb-4">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.submenu && setActiveMenu(item.label)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <Link href={item.href} className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#00cfca] transition-colors">
                  {item.label}
                  {item.submenu && <ChevronDown className="w-3.5 h-3.5" />}
                </Link>
                <AnimatePresence>
                  {item.submenu && activeMenu === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 w-56 bg-white rounded-xl shadow-xl border border-gray-100 p-2 mt-2"
                    >
                      {item.submenu.map((sub) => (
                        <Link key={sub.label} href={sub.href} className="block px-4 py-3 text-sm text-gray-600 hover:text-[#00cfca] hover:bg-[#00cfca]/5 rounded-lg transition-colors">
                          {sub.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>
        </div>
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
              className="absolute right-0 top-0 bottom-0 w-80 bg-white p-6"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="text-xl font-bold text-[#00cfca]">Menu</span>
                <button onClick={() => setMobileOpen(false)} className="p-2 text-gray-500">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <nav className="space-y-1">
                {navItems.map((item) => (
                  <Link key={item.label} href={item.href} className="block px-4 py-3 text-gray-700 hover:text-[#00cfca] hover:bg-[#00cfca]/5 rounded-lg transition-colors" onClick={() => setMobileOpen(false)}>
                    {item.label}
                  </Link>
                ))}
              </nav>
              <Link href="#contact" onClick={() => setMobileOpen(false)} className="flex items-center justify-center gap-2 w-full h-12 mt-8 bg-[#00cfca] text-white font-medium rounded-full">
                Request a Quote
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile search */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-black/50 flex items-start justify-center pt-20" onClick={() => setSearchOpen(false)}>
            <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -20, opacity: 0 }} onClick={(e) => e.stopPropagation()} className="w-full max-w-lg mx-4 bg-white rounded-2xl p-4 shadow-2xl">
              <div className="relative">
                <input type="text" placeholder="Search for products..." autoFocus className="w-full h-14 pl-5 pr-12 rounded-xl border-0 bg-gray-50 text-base text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#00cfca]/20" />
                <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer for fixed header */}
      <div className="h-28 lg:h-36" />
    </>
  );
}
