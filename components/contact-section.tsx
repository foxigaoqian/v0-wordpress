"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function ContactSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section id="contact" ref={containerRef} className="py-32 lg:py-48 bg-background">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
              联系我们
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-foreground mb-8">
              让我们开启<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
                合作之旅
              </span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-12 max-w-md">
              无论您是需要全新的包装设计，还是寻找可靠的生产合作伙伴，我们都期待与您交流
            </p>

            {/* Contact info */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center border border-border">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-primary">
                    <path d="M2.5 6.667L9.167 11.25a1.667 1.667 0 001.666 0L17.5 6.667M4.167 15h11.666c.92 0 1.667-.746 1.667-1.667V6.667c0-.92-.746-1.667-1.667-1.667H4.167c-.92 0-1.667.746-1.667 1.667v6.666c0 .92.746 1.667 1.667 1.667z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">邮箱</p>
                  <p className="text-foreground">contact@luxpack.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center border border-border">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-primary">
                    <path d="M17.5 14.167v2.5a1.667 1.667 0 01-1.817 1.658 16.492 16.492 0 01-7.191-2.558 16.25 16.25 0 01-5-5 16.492 16.492 0 01-2.559-7.225A1.667 1.667 0 012.583 1.667h2.5a1.667 1.667 0 011.667 1.433c.105.8.3 1.586.583 2.342a1.667 1.667 0 01-.375 1.758l-1.058 1.058a13.333 13.333 0 005 5l1.058-1.058a1.667 1.667 0 011.759-.375 10.7 10.7 0 002.341.583 1.667 1.667 0 011.442 1.759z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">电话</p>
                  <p className="text-foreground">+86 400 888 8888</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center border border-border">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-primary">
                    <path d="M17.5 8.333c0 5.834-7.5 10-7.5 10s-7.5-4.166-7.5-10a7.5 7.5 0 1115 0z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10 10.833a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">地址</p>
                  <p className="text-foreground">上海市浦东新区张江高科技园区</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-card border border-border p-8 lg:p-12"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                    姓名
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="您的姓名"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                    公司
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="公司名称"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  邮箱
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="您的邮箱地址"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  服务类型
                </label>
                <select className="w-full px-4 py-3 bg-background border border-border text-foreground focus:outline-none focus:border-primary transition-colors">
                  <option value="">请选择服务类型</option>
                  <option value="design">包装设计</option>
                  <option value="production">定制生产</option>
                  <option value="both">设计+生产</option>
                  <option value="other">其他咨询</option>
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  项目描述
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="请简要描述您的项目需求..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-primary text-primary-foreground text-sm uppercase tracking-widest hover:bg-primary/90 transition-colors"
              >
                提交咨询
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
