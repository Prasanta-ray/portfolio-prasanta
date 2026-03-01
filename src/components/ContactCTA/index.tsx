"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle, Linkedin, Github, Send, CheckCircle } from "lucide-react";
import { personalEmail, ventures } from "@/constants/data";

const quickLinks = [
  {
    label: "Email",
    href: `mailto:${personalEmail}?subject=${encodeURIComponent("Let's Connect — Portfolio Inquiry")}`,
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
  const [formState, setFormState] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("sending");
    const form = e.currentTarget;
    try {
      await fetch("https://formspree.io/f/xqaqjpvk", {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      setFormState("sent");
      form.reset();
    } catch {
      setFormState("idle");
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-6 bg-cyber-surface overflow-hidden scroll-mt-20"
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
          <span className="inline-block px-4 py-2 rounded-full bg-cyber-card/80 border border-cyber-border text-cyber-accent font-mono text-sm mb-4">
            GET IN TOUCH
          </span>
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

          {/* Quick links */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
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

          {/* Inline contact form */}
          <motion.div
            className="max-w-lg mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="p-6 md:p-8 rounded-2xl bg-cyber-card/40 backdrop-blur-xl border border-cyber-border">
              <h3 className="text-lg font-bold text-white mb-6 text-left">
                Send a Message
              </h3>
              {formState === "sent" ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-12 h-12 text-cyber-accent mx-auto mb-3" />
                  <p className="text-white font-semibold">Message sent!</p>
                  <p className="text-gray-400 text-sm mt-1">
                    I&apos;ll get back to you soon.
                  </p>
                  <button
                    onClick={() => setFormState("idle")}
                    className="mt-4 text-cyber-accent text-sm hover:underline"
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-sm text-gray-400 mb-1.5"
                    >
                      Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-cyber-dark border border-cyber-border text-white placeholder-gray-600 focus:border-cyber-accent focus:ring-1 focus:ring-cyber-accent outline-none transition-colors font-mono text-sm"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-sm text-gray-400 mb-1.5"
                    >
                      Email
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-cyber-dark border border-cyber-border text-white placeholder-gray-600 focus:border-cyber-accent focus:ring-1 focus:ring-cyber-accent outline-none transition-colors font-mono text-sm"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-sm text-gray-400 mb-1.5"
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg bg-cyber-dark border border-cyber-border text-white placeholder-gray-600 focus:border-cyber-accent focus:ring-1 focus:ring-cyber-accent outline-none transition-colors font-mono text-sm resize-none"
                      placeholder="Tell me about your project or idea..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={formState === "sending"}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-cyber-accent text-cyber-dark font-semibold hover:bg-cyber-accentDim transition-colors shadow-cyber disabled:opacity-60"
                  >
                    <Send className="w-4 h-4" />
                    {formState === "sending" ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
