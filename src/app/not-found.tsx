"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cyber-dark px-6">
      <motion.div
        className="text-center max-w-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Glitch-style 404 */}
        <motion.div
          className="text-8xl sm:text-9xl font-bold font-mono mb-4 bg-gradient-to-r from-cyber-accent via-cyber-cyan to-cyber-purple bg-clip-text text-transparent"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          404
        </motion.div>

        <motion.p
          className="text-xl text-gray-400 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Page not found
        </motion.p>

        <motion.p
          className="text-gray-500 mb-8 font-mono text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <span className="text-cyber-accent">&gt;</span> The resource you
          requested doesn&apos;t exist or has been moved.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-cyber-accent text-cyber-dark font-semibold hover:bg-cyber-accentDim transition-colors shadow-cyber"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>
          <button
            onClick={() => history.back()}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-cyber-card/80 border border-cyber-border text-gray-300 font-semibold hover:text-cyber-accent hover:border-cyber-accent/50 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}
