"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Star } from "lucide-react";
import { getRepositories } from "@/app/actions";
import type { GitHubRepo } from "@/lib/github";

export default function Projects() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getRepositories();
        setRepos(data);
      } catch (error) {
        console.error("Failed to fetch repositories:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <section
      id="projects"
      className="relative py-24 px-6 bg-cyber-surface overflow-hidden scroll-mt-20"
      aria-labelledby="projects-heading"
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
          PROJECTS
        </span>
        <h2
          id="projects-heading"
          className="text-4xl md:text-5xl font-bold text-white mb-4"
        >
          Built with <span className="text-cyber-accent">Code</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Open-source projects from Code Lith Labs and personal work
        </p>
      </motion.div>

      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-6">
          {repos.length > 0 ? (
            repos.map((repo, i) => (
              <motion.a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <span className="block p-6 rounded-2xl bg-cyber-card/40 backdrop-blur-xl border border-cyber-border hover:border-cyber-accent/30 transition-all h-full">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex items-center gap-3">
                      <Github className="w-6 h-6 text-cyber-accent flex-shrink-0" />
                      <h3 className="text-lg font-bold text-white group-hover:text-cyber-accent transition-colors">
                        {repo.name}
                      </h3>
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-cyber-accent transition-colors flex-shrink-0" />
                  </div>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {repo.description || "No description available"}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-cyber-amber" />
                      {repo.stargazers_count}
                    </span>
                    <span>{repo.forks_count} forks</span>
                    {repo.language && (
                      <span className="text-cyber-cyan">{repo.language}</span>
                    )}
                  </div>
                </span>
              </motion.a>
            ))
          ) : isLoading ? (
            /* Skeleton loading cards */
            Array.from({ length: 6 }).map((_, i) => (
              <motion.div
                key={`skeleton-${i}`}
                className="p-6 rounded-2xl bg-cyber-card/40 border border-cyber-border h-[180px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.05 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-6 h-6 rounded bg-cyber-border animate-pulse" />
                  <div className="h-5 w-40 rounded bg-cyber-border animate-pulse" />
                </div>
                <div className="h-4 w-full rounded bg-cyber-border/60 animate-pulse mb-2" />
                <div className="h-4 w-2/3 rounded bg-cyber-border/60 animate-pulse mb-4" />
                <div className="flex gap-4">
                  <div className="h-4 w-12 rounded bg-cyber-border/40 animate-pulse" />
                  <div className="h-4 w-16 rounded bg-cyber-border/40 animate-pulse" />
                  <div className="h-4 w-14 rounded bg-cyber-border/40 animate-pulse" />
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div
              className="col-span-full text-center py-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-400">
                Unable to load projects. Please try again later.
              </p>
            </motion.div>
          )}
        </div>

        {/* View all link */}
        {repos.length > 0 && (
          <motion.div
            className="text-center mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <a
              href="https://github.com/Prasanta-ray"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-cyber-accent hover:underline font-mono text-sm"
            >
              View all repositories on GitHub
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
}
