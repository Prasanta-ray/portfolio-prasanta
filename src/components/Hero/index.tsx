"use client";

import { motion } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { profile } from "@/constants/data";

const Hero3D = dynamic(() => import("./Hero3D"), { ssr: false });

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden bg-cyber-dark flex flex-col justify-center"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 255, 136, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 136, 0.03) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyber-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyber-cyan/5 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-12">
          <motion.div
            className="flex-1 max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyber-card/80 backdrop-blur-md border border-cyber-border mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles className="w-4 h-4 text-cyber-accent" />
              <span className="text-sm font-mono text-cyber-accent">
                {profile.name}
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Architecting the{" "}
              <span className="bg-gradient-to-r from-cyber-accent via-cyber-cyan to-cyber-purple bg-clip-text text-transparent">
                Future
              </span>{" "}
              of Backends.
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-gray-400 mb-8 font-mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Founder @ Code Lith Labs | Student @ CIT Kokrajhar
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Link href="#ventures">
                <motion.button
                  className="px-6 py-3 rounded-lg bg-cyber-accent text-cyber-dark font-semibold hover:bg-cyber-accentDim transition-colors shadow-cyber"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Explore Ventures
                </motion.button>
              </Link>
              <Link href="#journal">
                <motion.button
                  className="px-6 py-3 rounded-lg bg-cyber-card/80 backdrop-blur-md border border-cyber-border text-cyber-accent font-semibold hover:bg-cyber-card transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Read Journal
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* 3D Canvas */}
          <motion.div
            className="hidden md:block flex-1 h-[400px] md:h-[500px] lg:h-[600px] relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Hero3D />
          </motion.div>
        </div>

        {/* Mobile 3D - smaller */}
        <motion.div
          className="md:hidden h-[300px] relative mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Hero3D />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.a
          href="#ventures"
          className="flex flex-col items-center gap-2 text-gray-500 hover:text-cyber-accent transition-colors"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="w-6 h-6" />
          <span className="text-xs font-mono">Scroll</span>
        </motion.a>
      </motion.div>
    </section>
  );
}
