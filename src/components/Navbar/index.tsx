"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#ventures", label: "Ventures" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#timeline", label: "Timeline" },
  { href: "#journal", label: "Journal" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-cyber-dark/90 backdrop-blur-xl border-b border-cyber-border shadow-lg"
            : "bg-transparent"
        }`}
      >
        <nav
          className="container mx-auto px-6 py-4 flex items-center justify-between"
          role="navigation"
          aria-label="Main navigation"
        >
          <Link
            href="#hero"
            className="flex items-center gap-2 group"
            onClick={() => setMobileOpen(false)}
          >
            <span className="relative w-9 h-9 rounded-lg overflow-hidden ring-2 ring-cyber-accent/30 group-hover:ring-cyber-accent transition-all">
              <Image
                src="/profile.png"
                alt="Prasanta Ray"
                fill
                className="object-cover"
                sizes="36px"
                priority
              />
            </span>
            <span className="font-bold text-white font-mono hidden sm:inline">
              Prasanta Ray
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="px-4 py-2 rounded-lg text-sm text-gray-400 hover:text-cyber-accent hover:bg-cyber-card/50 transition-colors font-mono"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="#contact"
            className="hidden md:inline-flex px-4 py-2 rounded-lg bg-cyber-accent text-cyber-dark font-semibold text-sm hover:bg-cyber-accentDim transition-colors"
          >
            Let&apos;s Connect
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-gray-400 hover:text-cyber-accent hover:bg-cyber-card/50 transition-colors"
            aria-expanded={mobileOpen}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[68px] z-40 md:hidden bg-cyber-dark/98 backdrop-blur-xl border-b border-cyber-border overflow-hidden"
          >
            <ul className="container mx-auto px-6 py-4 space-y-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3 rounded-lg text-gray-400 hover:text-cyber-accent hover:bg-cyber-card/50 transition-colors font-mono"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 rounded-lg bg-cyber-accent text-cyber-dark font-semibold text-center mt-2"
                >
                  Let&apos;s Connect
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
