"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Calendar, GraduationCap, Cpu, Download } from "lucide-react";
import { profile } from "@/constants/data";
import { getGitHubUserStats } from "@/app/actions";
import type { GitHubUser } from "@/lib/github";

export default function About() {
  const [gitHubUser, setGitHubUser] = useState<GitHubUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getGitHubUserStats();
        setGitHubUser(data);
      } catch (error) {
        console.error("Failed to fetch GitHub user stats:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);
  return (
    <section
      id="about"
      className="relative py-24 px-6 bg-cyber-surface overflow-hidden scroll-mt-20"
      aria-labelledby="about-heading"
    >
      <div className="container mx-auto max-w-5xl">
        <motion.div
          className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Headshot with cyber border */}
          <motion.div
            className="relative flex-shrink-0"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-2xl overflow-hidden ring-2 ring-cyber-accent/40 ring-offset-4 ring-offset-cyber-surface shadow-cyber-lg">
              <Image
                src="/profile.png"
                alt={`${profile.name} - Founder & CEO`}
                fill
                className="object-cover object-top"
                sizes="(max-width: 640px) 224px, (max-width: 1024px) 256px, 288px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark/60 via-transparent to-transparent" />
            </div>
          </motion.div>

          {/* Bio */}
          <div className="flex-1 text-center lg:text-left">
            <motion.span
              className="inline-block px-4 py-2 rounded-full bg-cyber-card/80 border border-cyber-border text-cyber-accent font-mono text-sm mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              ABOUT
            </motion.span>
            <h2
              id="about-heading"
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              {profile.name}
            </h2>
            <p className="text-xl text-cyber-accent font-semibold mb-4">
              {profile.role}
            </p>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Tech Founder building the future of backend systems. From 15k-follower
              streamer to CEO — bridging gaming culture with enterprise innovation
              through Code Lith Labs and Stackveil. Based in Kokrajhar, Assam.
            </p>

            {/* Value proposition */}
            <motion.div
              className="p-4 rounded-xl bg-cyber-card/40 border border-cyber-border mb-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-sm text-gray-300 font-mono">
                <span className="text-cyber-accent">&gt;</span> Research &amp;
                Development · Backend Innovation · Collaborative Architecture
              </p>
            </motion.div>

            {/* GitHub Stats */}
            {gitHubUser && (
              <motion.div
                className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <div className="p-4 rounded-xl bg-cyber-card/30 border border-cyber-border/40 text-center">
                  <div className="text-2xl font-bold text-cyber-accent">
                    {gitHubUser.public_repos}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">Repositories</div>
                </div>
                <div className="p-4 rounded-xl bg-cyber-card/30 border border-cyber-border/40 text-center">
                  <div className="text-2xl font-bold text-cyber-cyan">
                    {gitHubUser.followers}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">Followers</div>
                </div>
                <div className="p-4 rounded-xl bg-cyber-card/30 border border-cyber-border/40 text-center">
                  <div className="text-2xl font-bold text-cyber-purple">
                    {gitHubUser.following}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">Following</div>
                </div>
                <div className="p-4 rounded-xl bg-cyber-card/30 border border-cyber-border/40 text-center">
                  <div className="text-2xl font-bold text-cyber-amber">
                    {gitHubUser.public_gists}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">Gists</div>
                </div>
              </motion.div>
            )}

            {/* Meta info */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-gray-500">
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyber-accent" />
                {profile.location}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-cyber-accent" />
                {profile.timezone}
              </span>
              <span className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-cyber-accent" />
                {profile.education.institution}
              </span>
              <span className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-cyber-accent" />
                {profile.education.degree} ({profile.education.years})
              </span>
            </div>

            {/* Resume download */}
            <motion.div
              className="mt-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-cyber-accent text-cyber-dark font-semibold hover:bg-cyber-accentDim transition-colors shadow-cyber"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
