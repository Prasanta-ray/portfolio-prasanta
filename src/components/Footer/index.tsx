"use client";

import { motion } from "framer-motion";
import {
  Linkedin,
  Github,
  Mail,
  Instagram,
  Facebook,
  ExternalLink,
} from "lucide-react";
import { socials, ventures, personalEmail } from "@/constants/data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  linkedin: Linkedin,
  github: Github,
  mail: Mail,
  instagram: Instagram,
  facebook: Facebook,
};

export default function Footer() {
  return (
    <footer className="relative py-16 px-6 bg-cyber-dark border-t border-cyber-border">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Profile */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold text-white mb-4">Prasanta Ray</h3>
            <p className="text-gray-400 text-sm mb-4">
              Founder & CEO @ Code Lith Labs | Co-Founder @ Stackveil |
              Backend Researcher
            </p>
            <a
              href={`mailto:${personalEmail}`}
              className="inline-flex items-center gap-2 text-cyber-accent hover:underline text-sm"
            >
              <Mail className="w-4 h-4" />
              {personalEmail}
            </a>
          </motion.div>

          {/* Ventures */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-lg font-bold text-white mb-4">Ventures</h3>
            <ul className="space-y-3">
              {ventures.map((v) => (
                <li key={v.id}>
                  <a
                    href={v.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-cyber-accent transition-colors text-sm"
                  >
                    <ExternalLink className="w-4 h-4 flex-shrink-0" />
                    {v.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-bold text-white mb-4">Connect</h3>
            <div className="flex flex-wrap gap-3">
              {socials.map((s, i) => {
                const Icon = iconMap[s.icon] ?? ExternalLink;
                return (
                  <a
                    key={i}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-cyber-card/60 border border-cyber-border text-gray-400 hover:text-cyber-accent hover:border-cyber-accent/50 transition-all"
                    title={s.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 pt-8 border-t border-cyber-border text-center text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p>© {new Date().getFullYear()} Prasanta Ray. Kokrajhar, Assam.</p>
          <p className="mt-1">UTC +05:30</p>
        </motion.div>
      </div>
    </footer>
  );
}
