"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "奢侈品礼盒",
    category: "化妆品包装",
    description: "为国际奢侈品牌打造的限量版礼盒系列",
    image: "/projects/luxury-box.jpg",
    color: "from-amber-500/20 to-orange-500/20",
  },
  {
    id: 2,
    title: "环保材质系列",
    category: "可持续包装",
    description: "采用100%可降解材料的创新包装解决方案",
    image: "/projects/eco-pack.jpg",
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    id: 3,
    title: "电商专属定制",
    category: "品牌包装",
    description: "为新锐电商品牌量身定制的品牌视觉包装",
    image: "/projects/ecommerce.jpg",
    color: "from-blue-500/20 to-indigo-500/20",
  },
  {
    id: 4,
    title: "食品级安全袋",
    category: "食品包装",
    description: "符合国际食品安全标准的高端食品包装",
    image: "/projects/food-pack.jpg",
    color: "from-rose-500/20 to-pink-500/20",
  },
]

export function WorkSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="work" ref={containerRef} className="py-32 lg:py-48 bg-background">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 lg:mb-32"
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
                精选作品
              </span>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-foreground">
                我们的<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
                  代表作品
                </span>
              </h2>
            </div>
            <p className="max-w-md text-muted-foreground text-lg leading-relaxed">
              每一个项目都是我们对卓越品质的追求，展现了设计与工艺的完美结合
            </p>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-card">
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-60 z-10`} />
                
                {/* Image placeholder with animated gradient */}
                <motion.div
                  animate={{
                    scale: hoveredId === project.id ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 bg-gradient-to-br from-card via-secondary to-card"
                />

                {/* Project number */}
                <div className="absolute top-6 left-6 z-20">
                  <span className="text-7xl lg:text-9xl font-bold text-foreground/5">
                    {String(project.id).padStart(2, "0")}
                  </span>
                </div>

                {/* Hover overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredId === project.id ? 1 : 0 }}
                  className="absolute inset-0 bg-background/80 backdrop-blur-sm z-20 flex items-center justify-center"
                >
                  <span className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-sm uppercase tracking-widest">
                    查看详情
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </motion.div>
              </div>

              {/* Project info */}
              <div className="mt-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs uppercase tracking-widest text-primary">
                    {project.category}
                  </span>
                  <span className="w-12 h-px bg-border" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <a
            href="#"
            className="group inline-flex items-center gap-3 text-lg text-foreground hover:text-primary transition-colors"
          >
            查看全部作品
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="transition-transform group-hover:translate-x-2">
              <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
