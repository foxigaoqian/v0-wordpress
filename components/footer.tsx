"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

const footerLinks = {
  products: [
    "Custom Cardboard Boxes",
    "Custom Cosmetic Display Boxes",
    "Custom Kraft Boxes",
    "Custom Packaging Boxes",
    "Custom Printed Boxes",
    "Customized Boxes",
    "Magnetic Closure Boxes",
    "Mailer Boxes",
    "Pizza Boxes",
    "Tuck End Auto Bottom",
  ],
  industries: [
    "Bottles & Jars",
    "Cardboard Packaging",
    "Cosmetic Boxes",
    "Display Packaging",
    "Eco Friendly Boxes",
    "Food And Beverage",
    "Gift Boxes",
    "Mylar Bags & Pouches",
    "Retail Boxes",
    "Rigid Boxes",
  ],
  company: [
    "Home",
    "Store",
    "About",
    "Artwork Guidelines",
    "Why TCB",
    "How It Works",
    "Customer Stories",
    "Testimonials",
    "FAQS",
    "Custom Packaging Blog",
    "Get Quote",
    "Contact Us",
    "Sitemap",
  ],
};

const locations = [
  "9933 Franklin Ave Franklin Park IL 60131",
  "4225 Executive Square, Suite 600 LA Jolla, CA 92037",
  "1000 Brickell Ave Ste 715 Miami, FL 33131",
];

export function Footer() {
  return (
    <footer className="bg-[#00cfca] pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16">
          {/* Logo & About */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#00cfca]" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12z" />
                </svg>
              </div>
              <div>
                <span className="text-xl font-bold text-white">Mewepak</span>
                <p className="text-[10px] text-white/80">Packaging Solutions Provider</p>
              </div>
            </Link>
            
            <div className="mb-6">
              <h4 className="font-bold text-white mb-2">Disclaimer</h4>
              <p className="text-sm text-white/80 leading-relaxed">
                The Mewepak Is A Top-Rated Packaging Company Known For Its Many Benefits. Our Aim Is To Streamline Printing And Packaging For A Profitable And Satisfying Client Experience. Customer Satisfaction And Opinions Are Our Priorities.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Sign Up For Exclusive Offers</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="flex-1 h-10 px-4 rounded-lg bg-white/20 border border-white/30 text-white placeholder:text-white/60 text-sm focus:outline-none focus:border-white"
                />
              </div>
              <button className="w-full mt-3 h-10 bg-white text-[#00cfca] font-medium rounded-lg hover:bg-white/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold text-white mb-4">Products</h4>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link}>
                  <Link href="#" className="text-sm text-white/80 hover:text-white transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-bold text-white mb-4">Industries</h4>
            <ul className="space-y-2">
              {footerLinks.industries.map((link) => (
                <li key={link}>
                  <Link href="#" className="text-sm text-white/80 hover:text-white transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link}>
                  <Link href="#" className="text-sm text-white/80 hover:text-white transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-bold text-white mb-4">Locations</h4>
            <ul className="space-y-4">
              {locations.map((location) => (
                <li key={location} className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-white/80">{location}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-white" />
                <span className="text-sm text-white/80">Toll-Free: 1-800-396-1840</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-white" />
                <span className="text-sm text-white/80">Front Desk: 630-364-3944</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-white" />
                <span className="text-sm text-white/80">support@mewepak.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social links */}
        <div className="border-t border-white/20 pt-8">
          <div className="text-center mb-6">
            <h4 className="font-bold text-white mb-4">Connect With Social</h4>
            <div className="flex items-center justify-center gap-3">
              {["WhatsApp", "Facebook", "Twitter", "Instagram", "LinkedIn"].map((social) => (
                <motion.button
                  key={social}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-white text-[#00cfca] text-sm font-medium rounded-full hover:bg-white/90 transition-colors"
                >
                  Follow
                </motion.button>
              ))}
            </div>
          </div>

          <p className="text-center text-sm text-white/60">
            &copy; {new Date().getFullYear()} Mewepak. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
