"use client";

import { motion } from "framer-motion";
import { Cpu, Code2, Server } from "lucide-react";

const skillGroups = [
  {
    label: "Backend & Systems",
    icon: Server,
    items: ["C++", "Node.js", "REST APIs", "Database Design", "System Architecture"],
  },
  {
    label: "Development",
    icon: Code2,
    items: ["TypeScript", "React", "Next.js", "Git", "CI/CD"],
  },
  {
    label: "Research & Innovation",
    icon: Cpu,
    items: ["Game Engines", "Backend R&D", "AI/Mentorship Tools"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-24 px-6 bg-cyber-surface overflow-hidden scroll-mt-20"
      aria-labelledby="skills-heading"
    >
      <div className="container mx-auto max-w-5xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-cyber-card/80 border border-cyber-border text-cyber-accent font-mono text-sm mb-4">
            EXPERTISE
          </span>
          <h2
            id="skills-heading"
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Skills & <span className="text-cyber-accent">Expertise</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Backend-first mindset with hands-on experience in systems, research,
            and collaborative development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillGroups.map((group, i) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.label}
                className="p-6 rounded-2xl bg-cyber-card/40 backdrop-blur-xl border border-cyber-border hover:border-cyber-accent/30 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-cyber-accent/10 border border-cyber-accent/30">
                    <Icon className="w-5 h-5 text-cyber-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{group.label}</h3>
                </div>
                <ul className="space-y-2">
                  {group.items.map((item, j) => (
                    <li
                      key={item}
                      className="text-gray-400 text-sm flex items-center gap-2"
                    >
                      <span className="text-cyber-accent font-mono">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
