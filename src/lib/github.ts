/**
 * GitHub API Utilities
 * Fetches real-time data from GitHub REST API with ISR caching
 */

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const API_BASE = "https://api.github.com";

/**
 * Get headers for GitHub API requests
 * Includes optional authentication token for higher rate limits
 */
function getHeaders() {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github.v3+json",
  };
  if (GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${GITHUB_TOKEN}`;
  }
  return headers;
}

/**
 * GitHub Repository interface (subset of REST API response)
 */
export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  url: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  archived: boolean;
  fork: boolean;
  topics?: string[];
  updated_at: string;
  pushed_at: string;
}

/**
 * GitHub User interface (subset of REST API response)
 */
export interface GitHubUser {
  login: string;
  name: string | null;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
  public_gists: number;
  avatar_url: string;
  html_url: string;
  created_at: string;
}

/**
 * Fetch all public repositories for a user or organization
 * Filters out archived and forked repositories
 * Returns sorted by stargazers_count (descending)
 */
export async function fetchRepositories(
  owner: string
): Promise<GitHubRepo[]> {
  try {
    const res = await fetch(`${API_BASE}/users/${owner}/repos?per_page=100`, {
      headers: getHeaders(),
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!res.ok) {
      console.error(`Failed to fetch repos for ${owner}:`, res.status);
      return [];
    }

    const repos: GitHubRepo[] = await res.json();

    // Filter out forked and archived repos
    return repos
      .filter((repo) => !repo.fork && !repo.archived)
      .sort((a, b) => b.stargazers_count - a.stargazers_count);
  } catch (error) {
    console.error(`Error fetching repos for ${owner}:`, error);
    return [];
  }
}

/**
 * Fetch repositories for an organization
 * Filters out archived and forked repositories
 * Returns sorted by stargazers_count (descending)
 */
export async function fetchOrganizationRepositories(
  org: string
): Promise<GitHubRepo[]> {
  try {
    const res = await fetch(`${API_BASE}/orgs/${org}/repos?per_page=100`, {
      headers: getHeaders(),
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!res.ok) {
      console.error(`Failed to fetch org repos for ${org}:`, res.status);
      return [];
    }

    const repos: GitHubRepo[] = await res.json();

    // Filter out forked and archived repos
    return repos
      .filter((repo) => !repo.fork && !repo.archived)
      .sort((a, b) => b.stargazers_count - a.stargazers_count);
  } catch (error) {
    console.error(`Error fetching org repos for ${org}:`, error);
    return [];
  }
}

/**
 * Fetch combined repositories from user and organization
 * Returns top N repositories sorted by stargazers_count
 */
export async function fetchCombinedRepositories(
  user: string,
  org: string,
  limit: number = 6
): Promise<GitHubRepo[]> {
  try {
    const [userRepos, orgRepos] = await Promise.all([
      fetchRepositories(user),
      fetchOrganizationRepositories(org),
    ]);

    // Combine and sort by stars
    const combined = [...userRepos, ...orgRepos].sort(
      (a, b) => b.stargazers_count - a.stargazers_count
    );

    // Remove duplicates based on repo ID
    const seen = new Set<number>();
    const unique = combined.filter((repo) => {
      if (seen.has(repo.id)) return false;
      seen.add(repo.id);
      return true;
    });

    return unique.slice(0, limit);
  } catch (error) {
    console.error("Error fetching combined repositories:", error);
    return [];
  }
}

/**
 * Fetch GitHub user profile data
 */
export async function fetchGitHubUser(username: string): Promise<GitHubUser | null> {
  try {
    const res = await fetch(`${API_BASE}/users/${username}`, {
      headers: getHeaders(),
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!res.ok) {
      console.error(`Failed to fetch user ${username}:`, res.status);
      return null;
    }

    return await res.json();
  } catch (error) {
    console.error(`Error fetching user ${username}:`, error);
    return null;
  }
}
