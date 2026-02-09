"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Star } from "lucide-react";
import { projects } from "@/constants/data";

interface RepoData {
  stargazers_count: number;
  forks_count: number;
  description: string | null;
  language: string | null;
}

async function fetchRepoData(
  owner: string,
  repo: string
): Promise<RepoData | null> {
  try {
    const res = await fetch(
      `https://api.github.com/repos/${owner}/${repo}`,
      {
        headers: { Accept: "application/vnd.github.v3+json" },
        next: { revalidate: 3600 },
      }
    );
    if (!res.ok) return null;
    const data = await res.json();
    return {
      stargazers_count: data.stargazers_count ?? 0,
      forks_count: data.forks_count ?? 0,
      description: data.description ?? null,
      language: data.language ?? null,
    };
  } catch {
    return null;
  }
}

export default function Projects() {
  const [repoData, setRepoData] = useState<Record<string, RepoData | null>>({});

  useEffect(() => {
    Promise.all(
      projects.map(async (p) => {
        const data = await fetchRepoData(p.owner, p.repo);
        return { key: p.id, data };
      })
    ).then((results) => {
      const map: Record<string, RepoData | null> = {};
      results.forEach(({ key, data }) => (map[key] = data));
      setRepoData(map);
    });
  }, []);

  return (
    <section
      id="projects"
      className="relative py-24 px-6 bg-cyber-dark overflow-hidden scroll-mt-20"
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
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Built with <span className="text-cyber-accent">Code</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Open-source projects from Code Lith Labs and personal work
        </p>
      </motion.div>

      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => {
            const data = repoData[project.id];
            const desc = data?.description ?? project.description;
            return (
              <motion.a
                key={project.id}
                href={project.url}
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
                        {project.name}
                      </h3>
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-cyber-accent transition-colors flex-shrink-0" />
                  </div>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {desc}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    {data ? (
                      <>
                        <span className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-cyber-amber" />
                          {data.stargazers_count}
                        </span>
                        <span>{data.forks_count} forks</span>
                        {data.language && (
                          <span className="text-cyber-cyan">{data.language}</span>
                        )}
                      </>
                    ) : (
                      <span className="text-gray-500 text-xs">
                        Stats unavailable
                      </span>
                    )}
                  </div>
                </span>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
