"use client"

import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const stats = [
  { value: "15+", label: "年行业经验" },
  { value: "500+", label: "服务品牌" },
  { value: "50M+", label: "年产能" },
  { value: "30+", label: "出口国家" },
]

export function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section id="about" ref={containerRef} className="relative py-32 lg:py-48 bg-background overflow-hidden">
      {/* Background text */}
      <motion.div
        style={{ y }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
      >
        <span className="text-[20vw] font-bold tracking-tighter text-border/30 whitespace-nowrap">
          LUXPACK
        </span>
      </motion.div>

      <div className="relative z-10 max-w-[1800px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
              关于我们
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-foreground mb-8">
              用匠心精神<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
                重新定义包装
              </span>
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                LUXPACK 成立于2009年，是一家专注于高端包装设计与制造的创新型企业。我们相信，包装不仅是产品的外衣，更是品牌与消费者之间无声的对话。
              </p>
              <p>
                凭借先进的生产设备、严格的品质管理体系和持续的创新精神，我们已为全球超过500家知名品牌提供包装解决方案，产品远销30多个国家和地区。
              </p>
            </div>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              href="#contact"
              className="group inline-flex items-center gap-3 mt-10 text-foreground hover:text-primary transition-colors"
            >
              <span className="text-sm uppercase tracking-widest">了解我们的故事</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="transition-transform group-hover:translate-x-2">
                <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.a>
          </motion.div>

          {/* Right - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                className="relative p-8 bg-card border border-border group hover:border-primary/50 transition-colors"
              >
                <span className="block text-5xl lg:text-6xl font-bold text-primary mb-2">
                  {stat.value}
                </span>
                <span className="text-sm uppercase tracking-widest text-muted-foreground">
                  {stat.label}
                </span>
                
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-primary/0 group-hover:border-primary transition-colors" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-primary/0 group-hover:border-primary transition-colors" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
