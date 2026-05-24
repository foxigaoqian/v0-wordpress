"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const marqueeItems = [
  "创意设计",
  "高端定制",
  "品质保证",
  "环保材料",
  "全球配送",
  "专业服务",
]

export function MarqueeSection() {
  return (
    <section className="py-8 bg-primary overflow-hidden">
      <motion.div
        initial={{ x: "0%" }}
        animate={{ x: "-50%" }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex whitespace-nowrap"
      >
        {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, index) => (
          <span
            key={index}
            className="mx-8 text-xl md:text-2xl font-medium text-primary-foreground tracking-wide"
          >
            {item}
            <span className="mx-8 text-primary-foreground/50">◆</span>
          </span>
        ))}
      </motion.div>
    </section>
  )
}
