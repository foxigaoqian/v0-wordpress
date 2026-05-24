"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const clients = [
  "CHANEL",
  "DIOR",
  "GUCCI",
  "HERMÈS",
  "PRADA",
  "BURBERRY",
  "CARTIER",
  "TIFFANY",
]

export function ClientsSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section ref={containerRef} className="py-24 lg:py-32 bg-background border-y border-border">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            信任我们的品牌
          </span>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 lg:gap-12">
          {clients.map((client, index) => (
            <motion.div
              key={client}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.05 }}
              className="flex items-center justify-center h-16 group"
            >
              <span className="text-xl lg:text-2xl font-light tracking-widest text-muted-foreground/50 group-hover:text-muted-foreground transition-colors">
                {client}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
