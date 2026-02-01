"use client";

import { motion } from "framer-motion";
import {
  Building2,
  ExternalLink,
  Mail,
  Phone,
  MessageCircle,
  Youtube,
} from "lucide-react";
import { ventures } from "@/constants/data";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Ventures() {
  return (
    <section
      id="ventures"
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
          THE VENTURES
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Building the{" "}
          <span className="text-cyber-accent">Future</span> of Tech
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Leading innovation through Code Lith Labs and Stackveil
        </p>
      </motion.div>

      {/* Venture cards */}
      <motion.div
        className="container mx-auto grid md:grid-cols-2 gap-8 max-w-5xl"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {ventures.map((venture, index) => (
          <motion.a
            key={venture.id}
            href={venture.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
            variants={item}
          >
            <div className="relative p-8 rounded-2xl bg-cyber-card/40 backdrop-blur-xl border border-cyber-border hover:border-cyber-accent/50 transition-all duration-300 overflow-hidden h-full">
              {/* Glass overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyber-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Entity badge */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-cyber-accent/10 border border-cyber-accent/30">
                    <Building2 className="w-6 h-6 text-cyber-accent" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-cyber-accent uppercase tracking-wider">
                      Entity
                    </span>
                    <h3 className="text-xl font-bold text-white">
                      {venture.name}
                    </h3>
                  </div>
                </div>
                <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-cyber-accent transition-colors" />
              </div>

              {/* Role */}
              <p className="text-cyber-accent font-semibold mb-4">{venture.role}</p>
              <p className="text-gray-400 mb-6">{venture.focus}</p>

              {/* Contact details */}
              <div className="space-y-3 text-sm">
                <a
                  href={`mailto:${venture.contact.email}`}
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-2 text-gray-400 hover:text-cyber-accent transition-colors"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span className="truncate">{venture.contact.email}</span>
                </a>
                <a
                  href={`tel:${venture.contact.phone.replace(/\s/g, "")}`}
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-2 text-gray-400 hover:text-cyber-accent transition-colors"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span>{venture.contact.phone}</span>
                </a>
                <a
                  href={venture.contact.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-2 text-gray-400 hover:text-cyber-accent transition-colors"
                >
                  <MessageCircle className="w-4 h-4 flex-shrink-0" />
                  <span>Discord Community</span>
                </a>
                <div className="flex items-center gap-2 text-gray-400">
                  <Youtube className="w-4 h-4 flex-shrink-0" />
                  <span>{venture.contact.youtube}</span>
                </div>
              </div>

              {/* Accent line */}
              <div
                className={`absolute bottom-0 left-0 right-0 h-1 ${
                  index === 0 ? "bg-cyber-accent" : "bg-cyber-cyan"
                } transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left`}
              />
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
