"use client";

import { motion } from "framer-motion";
import { Gamepad2, ArrowRight, Server } from "lucide-react";
import { timeline } from "@/constants/data";

const icons = {
  controller: Gamepad2,
  arrow: ArrowRight,
  server: Server,
} as const;

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="relative py-24 px-6 bg-cyber-surface overflow-hidden"
    >
      {/* Section header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="inline-block px-4 py-2 rounded-full bg-cyber-card/80 border border-cyber-border text-cyber-accent font-mono text-sm mb-4">
          THE JOURNEY
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          From <span className="text-cyber-purple">Controller</span> to{" "}
          <span className="text-cyber-accent">Server</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          A gamified timeline connecting my gaming past to my CEO present
        </p>
      </motion.div>

      <div className="container mx-auto max-w-3xl">
        <div className="relative pl-14 md:pl-0">
          {/* Vertical line - desktop center */}
          <div className="absolute left-[27px] top-0 bottom-0 w-px bg-cyber-border hidden md:block md:left-1/2 md:-translate-x-px" />

          {timeline.map((item, i) => {
            const Icon = icons[item.icon as keyof typeof icons] ?? ArrowRight;
            const isLeft = i % 2 === 0;

            return (
              <motion.div
                key={item.id}
                className={`relative flex items-start md:items-center gap-4 py-8 first:pt-0 last:pb-0 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {/* Icon node */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-14 h-14 flex items-center justify-center z-10 flex-shrink-0">
                  <motion.div
                    className={`p-3 rounded-full border-2 ${
                      item.era === "gaming"
                        ? "bg-cyber-purple/20 border-cyber-purple"
                        : item.era === "dev"
                          ? "bg-cyber-accent/20 border-cyber-accent"
                          : "bg-cyber-amber/20 border-cyber-amber"
                    }`}
                    whileHover={{ scale: 1.1 }}
                  >
                    <Icon
                      className={`w-6 h-6 ${
                        item.era === "gaming"
                          ? "text-cyber-purple"
                          : item.era === "dev"
                            ? "text-cyber-accent"
                            : "text-cyber-amber"
                      }`}
                    />
                  </motion.div>
                </div>

                {/* Content card - takes half width on desktop */}
                <div
                  className={`flex-1 min-w-0 pl-0 md:w-1/2 ${
                    isLeft ? "md:pr-12 md:text-right" : "md:pl-12"
                  }`}
                >
                  <div className="p-6 rounded-2xl bg-cyber-card/40 backdrop-blur-xl border border-cyber-border hover:border-cyber-accent/30 transition-colors">
                    <span className="text-xs font-mono text-cyber-accent uppercase tracking-wider">
                      {item.period}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-2 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
