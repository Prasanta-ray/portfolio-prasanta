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
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.785 2.627 3.59 3.501 6.158 3.186-4.41.617-7.416 2.637-2.782 9.02C8.18 23.598 11.15 19.87 12 18c.85 1.87 3.82 5.598 8 1.453 4.634-6.383 1.628-8.403-2.782-9.02 2.568.315 5.373-.559 6.158-3.186C23.622 6.418 24 1.458 24 .768 24 .08 23.861-1.092 23.098-1.435c-.66-.299-1.664-.621-4.3 1.24C16.046 1.747 13.087 5.686 12 7.8z" transform="scale(0.85) translate(2,3)" />
    </svg>
  );
}

function MastodonIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.268 5.313c-.35-2.578-2.617-4.61-5.304-5.004C17.51.242 15.792 0 11.813 0h-.03c-3.98 0-4.835.242-5.288.309C3.882.692 1.496 2.518.917 5.127.64 6.412.61 7.837.661 9.143c.074 1.874.088 3.745.26 5.611.118 1.24.325 2.47.62 3.68.55 2.237 2.777 4.098 4.96 4.857 2.336.792 4.849.923 7.256.38.265-.061.527-.132.786-.213.585-.184 1.27-.39 1.774-.753a.057.057 0 0 0 .023-.043v-1.809a.052.052 0 0 0-.02-.041.053.053 0 0 0-.046-.01 20.282 20.282 0 0 1-4.709.545c-2.73 0-3.463-1.284-3.674-1.818a5.593 5.593 0 0 1-.319-1.433.053.053 0 0 1 .066-.054 19.648 19.648 0 0 0 4.622.536c.374 0 .748-.005 1.122-.015 1.956-.056 4.039-.154 5.923-.693a5.554 5.554 0 0 0 .423-.172c2.39-.933 4.685-3.354 4.885-9.272.008-.303.045-3.19.045-3.497 0-.107 0-.543.053-1.093z" transform="scale(0.85) translate(2,2)" />
    </svg>
  );
}

function DevToIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6v4.36h.58c.37 0 .67-.04.84-.23.18-.18.25-.45.25-.9v-2.1c0-.45-.07-.7-.25-.9zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-1.91.77H4.85V8.61h1.8c.85 0 1.47.19 1.91.77.44.58.33 1.18.33 2.75s.1 2.19-.33 2.77v-.6zm4.85-2.08c0 .49-.01.93-.24 1.35-.23.41-.63.58-1.14.58s-.89-.17-1.14-.58c-.23-.41-.2-.86-.2-1.35V9.5c0-.5-.03-.94.2-1.36.23-.41.62-.57 1.14-.57.51 0 .89.16 1.14.57.23.42.24.86.24 1.36v3.72h-.01zm4.73.06c0 1.2-.35 1.89-1.31 2.13l1.62 2.56h-1.52l-1.37-2.3h-.37v2.3h-1.3V8.61h1.78c1.36 0 2.47.53 2.47 2.34v2.33z" transform="scale(0.85) translate(2,2)" />
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
