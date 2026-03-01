"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home, ArrowLeft, Terminal } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cyber-dark px-6">
      {/* Background noise */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0,255,136,0.02) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,255,136,0.02) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <motion.div
        className="text-center max-w-lg relative z-10"
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

        {/* Terminal-style message */}
        <motion.div
          className="mb-8 p-4 rounded-xl bg-cyber-card/60 border border-cyber-border text-left font-mono text-sm"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center gap-2 mb-3 text-gray-500 text-xs">
            <Terminal className="w-3.5 h-3.5" />
            <span>terminal</span>
          </div>
          <p className="text-gray-400">
            <span className="text-cyber-accent">$</span> curl{" "}
            <span className="text-cyber-cyan">
              {typeof window !== "undefined" ? window.location.pathname : "/unknown"}
            </span>
          </p>
          <p className="text-red-400 mt-1">
            Error: ENOENT — resource not found or has been moved.
          </p>
          <p className="text-gray-500 mt-1">
            <span className="text-cyber-accent">$</span>{" "}
            <span className="animate-pulse">_</span>
          </p>
        </motion.div>

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
