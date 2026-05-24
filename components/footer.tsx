"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const footerLinks = {
  services: [
    { label: "包装设计", href: "#" },
    { label: "定制生产", href: "#" },
    { label: "材料研发", href: "#" },
    { label: "全球物流", href: "#" },
  ],
  company: [
    { label: "关于我们", href: "#about" },
    { label: "合作案例", href: "#work" },
    { label: "新闻动态", href: "#" },
    { label: "加入我们", href: "#" },
  ],
  support: [
    { label: "常见问题", href: "#" },
    { label: "隐私政策", href: "#" },
    { label: "服务条款", href: "#" },
    { label: "联系我们", href: "#contact" },
  ],
}

const socialLinks = [
  { label: "WeChat", icon: "M", href: "#" },
  { label: "LinkedIn", icon: "in", href: "#" },
  { label: "Instagram", icon: "IG", href: "#" },
]

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="text-3xl font-bold tracking-tighter text-foreground">
                LUXPACK
              </span>
            </Link>
            <p className="text-muted-foreground leading-relaxed max-w-md mb-8">
              专注高端包装设计与制造，为全球品牌提供创新包装解决方案。我们相信，好的包装能够讲述品牌故事。
            </p>
            
            {/* Social links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 flex items-center justify-center border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                >
                  <span className="text-xs font-bold">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-foreground mb-6">服务</h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-foreground mb-6">公司</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-foreground mb-6">支持</h4>
            <ul className="space-y-4">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; 2024 LUXPACK. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            上海市浦东新区张江高科技园区
          </p>
        </div>
      </div>

      {/* Large brand text */}
      <div className="border-t border-border overflow-hidden">
        <motion.div
          initial={{ x: "0%" }}
          animate={{ x: "-50%" }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="py-8 whitespace-nowrap"
        >
          <span className="text-[15vw] font-bold tracking-tighter text-border/30 select-none">
            LUXPACK &nbsp;&nbsp;&nbsp; LUXPACK &nbsp;&nbsp;&nbsp; LUXPACK &nbsp;&nbsp;&nbsp; LUXPACK &nbsp;&nbsp;&nbsp;
          </span>
        </motion.div>
      </div>
    </footer>
  )
}
