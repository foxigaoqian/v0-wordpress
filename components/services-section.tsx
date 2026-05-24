"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const services = [
  {
    number: "01",
    title: "创意设计",
    description: "从概念到视觉，我们的设计团队将您的品牌理念转化为令人惊艳的包装设计",
    features: ["品牌视觉策略", "结构设计", "平面设计", "3D效果图"],
  },
  {
    number: "02",
    title: "材料研发",
    description: "持续探索创新材料，在保证品质的同时践行环保理念",
    features: ["可降解材料", "食品级材质", "防伪技术", "特种工艺"],
  },
  {
    number: "03",
    title: "定制生产",
    description: "先进的生产设备与严格的品控体系，确保每一件产品都达到最高标准",
    features: ["小批量定制", "大规模生产", "快速打样", "品质检测"],
  },
  {
    number: "04",
    title: "全球物流",
    description: "完善的供应链体系，为全球客户提供高效可靠的物流服务",
    features: ["全球配送", "仓储管理", "清关服务", "实时追踪"],
  },
]

export function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section id="services" ref={containerRef} className="py-32 lg:py-48 bg-card">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 lg:mb-32 text-center"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
            我们的服务
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-foreground">
            全方位包装<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
              解决方案
            </span>
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border-t border-l border-border">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="group relative p-8 lg:p-12 border-r border-b border-border hover:bg-secondary/50 transition-colors duration-500"
            >
              {/* Service number */}
              <span className="text-8xl lg:text-9xl font-bold text-border/50 absolute top-4 right-4 lg:top-8 lg:right-8 select-none group-hover:text-primary/20 transition-colors duration-500">
                {service.number}
              </span>

              <div className="relative z-10">
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-8 max-w-md leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1.5 text-xs uppercase tracking-wider bg-background/50 text-muted-foreground border border-border"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover arrow */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileHover={{ opacity: 1, x: 0 }}
                className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-primary">
                  <path d="M8 16H24M24 16L18 10M24 16L18 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
