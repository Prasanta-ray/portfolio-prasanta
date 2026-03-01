"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FileText, ExternalLink, Loader2, Calendar } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { journalConfig } from "@/constants/data";
import { getJournalPosts, type JournalPost } from "@/app/actions";

export default function Journal() {
  const [posts, setPosts] = useState<JournalPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getJournalPosts()
      .then(setPosts)
      .finally(() => setLoading(false));
  }, []);

  return (
    <section
      id="journal"
      className="relative py-24 px-6 bg-cyber-dark overflow-hidden scroll-mt-20"
      aria-labelledby="journal-heading"
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
          DEV JOURNAL
        </span>
        <h2
          id="journal-heading"
          className="text-4xl md:text-5xl font-bold text-white mb-4"
        >
          Thoughts & <span className="text-cyber-accent">Updates</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Reflections on building, learning, and shipping.
        </p>
      </motion.div>

      <div className="container mx-auto max-w-3xl">
        {loading ? (
          <div className="space-y-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={`journal-skeleton-${i}`}
                className="p-6 md:p-8 rounded-2xl bg-cyber-card/40 border border-cyber-border"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="h-6 w-2/3 rounded bg-cyber-border animate-pulse" />
                  <div className="w-5 h-5 rounded bg-cyber-border/60 animate-pulse flex-shrink-0" />
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-4 w-28 rounded bg-cyber-border/40 animate-pulse" />
                </div>
                <div className="space-y-2">
                  <div className="h-3 w-full rounded bg-cyber-border/40 animate-pulse" />
                  <div className="h-3 w-full rounded bg-cyber-border/40 animate-pulse" />
                  <div className="h-3 w-3/4 rounded bg-cyber-border/40 animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        ) : posts.length === 0 ? (
          <motion.div
            className="text-center py-16 px-6 rounded-2xl bg-cyber-card/40 border border-cyber-border"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <FileText className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <p className="text-gray-400 mb-2">No journal entries yet.</p>
            <p className="text-sm text-gray-500">
              Create a GitHub Issue in this repo with labels &quot;journal&quot;
              or &quot;blog&quot; to see your posts here.
            </p>
            <a
              href={`https://github.com/${journalConfig.owner}/${journalConfig.repo}/issues/new`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-cyber-accent hover:underline"
            >
              Create first post <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        ) : (
          <div className="space-y-6">
            {posts.map((post, i) => (
              <motion.article
                key={post.id}
                className="p-6 md:p-8 rounded-2xl bg-cyber-card/40 backdrop-blur-xl border border-cyber-border hover:border-cyber-accent/30 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="text-xl font-bold text-white">{post.title}</h3>
                  <a
                    href={post.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyber-accent hover:opacity-80 flex-shrink-0"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.created_at).toLocaleDateString("en-IN", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                </div>
                {post.body && (
                  <div className="prose prose-invert prose-sm max-w-none text-gray-300">
                    <ReactMarkdown>
                      {(() => {
                        const raw = post.body;
                        if (raw.length <= 400) return raw;
                        const cut = raw.lastIndexOf("\n", 400);
                        const end = cut > 200 ? cut : 400;
                        return `${raw.slice(0, end)}\n\n...`;
                      })()}
                    </ReactMarkdown>
                  </div>
                )}
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
