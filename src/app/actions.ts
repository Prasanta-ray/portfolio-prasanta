/**
 * GitHub Server Actions
 * Server-side data fetching that can be called from Client Components
 */
"use server";

import {
  fetchCombinedRepositories,
  fetchGitHubUser,
  type GitHubRepo,
  type GitHubUser,
} from "@/lib/github";
import { journalConfig } from "@/constants/data";

export async function getRepositories(): Promise<GitHubRepo[]> {
  return fetchCombinedRepositories("Prasanta-ray", "CodelithLabs", 6);
}

export async function getGitHubUserStats(): Promise<GitHubUser | null> {
  return fetchGitHubUser("Prasanta-ray");
}

export interface JournalPost {
  id: number;
  title: string;
  body: string | null;
  html_url: string;
  created_at: string;
  labels: { name: string }[];
}

export async function getJournalPosts(): Promise<JournalPost[]> {
  const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

  const headers: Record<string, string> = {
    Accept: "application/vnd.github.v3+json",
  };
  if (GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${GITHUB_TOKEN}`;
  }

  try {
    const labels = journalConfig.labels.join(",");
    const url = `https://api.github.com/repos/${journalConfig.owner}/${journalConfig.repo}/issues?state=open&labels=${labels}&per_page=10&sort=created`;
    const res = await fetch(url, {
      headers,
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    const data: JournalPost[] = await res.json();
    return data.filter((i) => !i.title.startsWith("[WIP]"));
  } catch {
    return [];
  }
}
