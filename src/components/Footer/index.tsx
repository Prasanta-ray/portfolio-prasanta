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

/* Custom SVG icons for platforms lucide-react doesn't cover */
function BlueskyIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 568 501" fill="currentColor">
      <path d="M123.121 33.664C188.241 82.553 258.281 181.68 284 234.873c25.719-53.192 95.759-152.32 160.879-201.21C491.866-1.611 568-28.906 568 49.651c0 17.346-9.945 145.713-15.778 166.555-20.275 72.453-94.155 90.933-159.875 79.748C507.222 323.8 536.444 388.56 473.333 453.32 353.946 576.2 301.468 440.715 286.954 399.564c-2.502-7.102-3.667-10.423-3.954-7.594-.286-2.829-1.452.492-3.954 7.594-14.514 41.151-66.992 176.636-186.379 53.756-63.111-64.76-33.889-129.52 81.986-157.366-65.72 11.185-139.6-7.295-159.875-79.748C8.945 195.364 0 67.047 0 49.651 0-28.906 76.134-1.611 123.121 33.664Z" />
    </svg>
  );
}

function MastodonIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 448 512" fill="currentColor">
      <path d="M433 179.11c0-97.2-63.71-125.7-63.71-125.7-62.52-28.7-228.56-28.4-290.48 0 0 0-63.72 28.5-63.72 125.7 0 115.7-6.6 259.4 105.63 289.1 40.51 10.7 75.32 13 103.33 11.4 50.81-2.8 79.32-18.1 79.32-18.1l-1.72-36.9s-36.34 11.4-77.12 10.1c-40.41-1.4-83.03-4.4-89.6-54a102.54 102.54 0 0 1-.9-13.9c85.63 20.9 158.65 9.1 178.75 6.7 56.12-6.7 105.04-41.3 111.24-72.9 9.8-49.8 9-121.5 9-121.5zm-75.12 125.2h-46.63v-114.2c0-49.7-64-51.6-64 6.9v62.5h-46.33v-62.5c0-58.5-64-56.6-64-6.9v114.2H90.19c0-122.1-5.2-147.9 18.41-175 25.9-28.9 76.51-30.8 99.12.3l14.03 23.4 14.04-23.4c22.61-31.1 73.22-29.2 99.12-.3 23.61 27.1 18.41 52.9 18.41 175z" />
    </svg>
  );
}

function DevToIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 448 512" fill="currentColor">
      <path d="M120.12 208.29c-3.88-2.9-7.77-4.35-11.65-4.35H91.03v104.47h17.45c3.88 0 7.77-1.45 11.65-4.35 3.88-2.9 5.82-7.25 5.82-13.06v-69.65c-.01-5.8-1.96-10.16-5.83-13.06zM404.1 32H43.9C19.7 32 .06 51.59 0 75.8v360.4C.06 460.41 19.7 480 43.9 480h360.2c24.21 0 43.84-19.59 43.9-43.8V75.8c-.06-24.21-19.7-43.8-43.9-43.8zM154.2 291.19c0 18.81-11.61 47.31-48.36 47.25h-46.4V172.98h47.38c35.44 0 47.36 28.46 47.37 47.28l.01 70.93zm100.68-88.66H201.6v38.42h32.57v29.57H201.6v38.41h53.29v29.57h-62.18c-11.16.29-20.44-8.53-20.72-19.69V201.69c-.27-11.15 8.56-20.41 19.71-20.69h63.19l-.01 29.57zm103.64 115.29c-13.2 30.75-36.85 24.63-47.44 0l-38.53-144.8h32.57l29.71 113.72 29.57-113.72h32.58l-38.46 144.8z" />
    </svg>
  );
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  linkedin: Linkedin,
  github: Github,
  mail: Mail,
  instagram: Instagram,
  facebook: Facebook,
  bluesky: BlueskyIcon,
  mastodon: MastodonIcon,
  dev: DevToIcon,
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
          className="mt-12 pt-8 border-t border-cyber-border flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="text-center sm:text-left">
            <p>&copy; {new Date().getFullYear()} Prasanta Ray. Kokrajhar, Assam.</p>
            <p className="mt-1">UTC +05:30</p>
          </div>
          <a
            href="#hero"
            className="text-gray-500 hover:text-cyber-accent transition-colors text-sm font-mono"
          >
            &uarr; Back to top
          </a>
        </motion.div>
      </div>
    </footer>
  );
}
