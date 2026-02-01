"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, Linkedin, Github } from "lucide-react";
import { personalEmail, ventures } from "@/constants/data";

const quickLinks = [
  {
    label: "Email",
    href: `mailto:${personalEmail}`,
    icon: Mail,
    primary: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/prasanta-ray",
    icon: Linkedin,
    primary: false,
  },
  {
    label: "GitHub",
    href: "https://github.com/Prasanta-ray",
    icon: Github,
    primary: false,
  },
  {
    label: "Code Lith Discord",
    href: ventures[0].contact.discord,
    icon: MessageCircle,
    primary: false,
  },
];

export default function ContactCTA() {
  return (
    <section
      id="contact"
      className="relative py-24 px-6 bg-cyber-dark overflow-hidden scroll-mt-20"
      aria-labelledby="contact-heading"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-accent/5 to-transparent" />
      <div className="container mx-auto max-w-3xl relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2
            id="contact-heading"
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Let&apos;s Connect
          </h2>
          <p className="text-gray-400 mb-12 max-w-xl mx-auto">
            Interested in backend innovation, collaboration, or just saying hi?
            Reach out — I&apos;m always open to new conversations.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {quickLinks.map((link, i) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`inline-flex items-center gap-3 px-6 py-4 rounded-xl font-semibold transition-all ${
                    link.primary
                      ? "bg-cyber-accent text-cyber-dark hover:bg-cyber-accentDim shadow-cyber"
                      : "bg-cyber-card/60 border border-cyber-border text-gray-300 hover:text-cyber-accent hover:border-cyber-accent/50"
                  }`}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Icon className="w-5 h-5" />
                  {link.label}
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
