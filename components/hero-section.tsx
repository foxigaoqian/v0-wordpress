"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2])

  return (
    <section ref={containerRef} className="relative h-screen overflow-hidden">
      {/* Background with parallax */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 bg-gradient-to-b from-background via-card to-background"
      >
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-border" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Floating elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 right-1/4 w-64 h-64 border border-primary/20 rounded-full blur-sm"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 left-1/4 w-96 h-96 border border-primary/10 rounded-full blur-sm"
        />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 border border-border text-xs uppercase tracking-[0.3em] text-muted-foreground">
            高端包装设计制造商
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="max-w-5xl"
        >
          <span className="block text-5xl md:text-7xl lg:text-[120px] font-bold tracking-tighter leading-none text-foreground">
            包装
          </span>
          <span className="block text-5xl md:text-7xl lg:text-[120px] font-bold tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary">
            即品牌
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-8 max-w-xl text-lg md:text-xl text-muted-foreground leading-relaxed"
        >
          我们将创意设计与精湛工艺完美融合，为全球顶级品牌打造令人难忘的包装体验
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-12 flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#work"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground text-sm uppercase tracking-widest hover:bg-primary/90 transition-all"
          >
            探索作品
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="transition-transform group-hover:translate-x-1">
              <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a
            href="#about"
            className="group inline-flex items-center gap-3 px-8 py-4 border border-border text-foreground text-sm uppercase tracking-widest hover:bg-card transition-all"
          >
            了解更多
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs uppercase tracking-widest text-muted-foreground">滚动探索</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-muted-foreground">
              <path d="M12 5V19M12 19L6 13M12 19L18 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
