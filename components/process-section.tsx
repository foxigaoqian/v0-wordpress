"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const steps = [
  {
    number: "01",
    title: "需求沟通",
    description: "深入了解您的品牌定位、产品特性和目标受众，明确项目需求与期望",
  },
  {
    number: "02",
    title: "创意设计",
    description: "设计团队提供多套创意方案，包括视觉设计、结构设计和材料建议",
  },
  {
    number: "03",
    title: "打样确认",
    description: "制作实物样品，进行多轮调整优化，直至达到您满意的效果",
  },
  {
    number: "04",
    title: "量产交付",
    description: "严格执行品控标准，按时完成生产并提供全球物流配送服务",
  },
]

export function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section id="process" ref={containerRef} className="py-32 lg:py-48 bg-card">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 lg:mb-32 text-center"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
            合作流程
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-foreground">
            从创意到交付<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
              全程无忧
            </span>
          </h2>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-border -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className="relative lg:px-8"
              >
                {/* Step number circle */}
                <div className="relative z-10 w-20 h-20 mx-auto mb-8 flex items-center justify-center bg-background border border-border rounded-full group-hover:border-primary transition-colors">
                  <span className="text-2xl font-bold text-primary">{step.number}</span>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-4">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
