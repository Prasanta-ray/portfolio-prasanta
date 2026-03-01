/**
 * Portfolio Data - Prasanta Ray
 * Cyber-Industrial Professional Portfolio
 */

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://prasanta.codelithlabs.in";

export const profile = {
  name: "Prasanta Ray",
  role: "Founder & CEO | Backend Researcher | CSE Diploma Student",
  location: "Kokrajhar, Assam, INDIA",
  timezone: "UTC +05:30",
  education: {
    institution: "Central Institute of Technology (CIT), Kokrajhar",
    degree: "Diploma CSE",
    years: "2025-2028",
  },
} as const;

export const ventures = [
  {
    id: "codelithlabs",
    name: "Code Lith Labs",
    role: "Founder & CEO",
    url: "https://codelithlabs.in",
    focus: "Research & Development, Backend Innovation",
    contact: {
      email: "team.codelithlabs@gmail.com",
      discord: "https://discord.gg/kBKeCDD6vy",
      youtube: "@CodelithLabsOfficial",
    },
  },
  {
    id: "stackveil",
    name: "Stackveil",
    role: "Co-Founder",
    url: "https://stackveil.in",
    focus: "Collaborative Tech Solutions & Architecture",
    contact: {
      email: "business.stack.veil@gmail.com",
      discord: "https://discord.gg/dVVX9sdC9h",
      youtube: "@StackveilLabsOfficial",
    },
  },
] as const;

export const skillGroups = [
  {
    label: "Backend & Systems",
    icon: "server" as const,
    items: [
      { name: "C++", tier: "proficient" as const },
      { name: "Node.js", tier: "proficient" as const },
      { name: "REST APIs", tier: "proficient" as const },
      { name: "System Architecture", tier: "familiar" as const },
      { name: "Database Design", tier: "familiar" as const },
    ],
  },
  {
    label: "Frontend & Frameworks",
    icon: "code" as const,
    items: [
      { name: "TypeScript", tier: "proficient" as const },
      { name: "React", tier: "proficient" as const },
      { name: "Next.js", tier: "proficient" as const },
      { name: "Tailwind CSS", tier: "proficient" as const },
      { name: "HTML/CSS", tier: "proficient" as const },
    ],
  },
  {
    label: "DevOps & Tools",
    icon: "terminal" as const,
    items: [
      { name: "Git & GitHub", tier: "proficient" as const },
      { name: "Docker", tier: "familiar" as const },
      { name: "Linux", tier: "familiar" as const },
      { name: "CI/CD", tier: "familiar" as const },
      { name: "VS Code", tier: "proficient" as const },
    ],
  },
  {
    label: "Research & Innovation",
    icon: "cpu" as const,
    items: [
      { name: "Game Engines", tier: "familiar" as const },
      { name: "Backend R&D", tier: "proficient" as const },
      { name: "AI/Mentorship Tools", tier: "exploring" as const },
      { name: "Technical Writing", tier: "familiar" as const },
      { name: "Open Source", tier: "proficient" as const },
    ],
  },
] as const;

export const socials = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/prasanta-ray", icon: "linkedin" },
  { name: "GitHub", url: "https://github.com/Prasanta-ray", icon: "github" },
  { name: "GitHub (Code Lith)", url: "https://github.com/CodelithLabs", icon: "github" },
  { name: "Bluesky", url: "https://bsky.app/profile/prasantaray.bsky.social", icon: "bluesky" },
  { name: "Mastodon", url: "https://mastodon.social/@prasantaray", icon: "mastodon" },
  { name: "Dev.to", url: "https://dev.to/prasantaray", icon: "dev" },
  { name: "Instagram", url: "https://instagram.com/prasanta.codes", icon: "instagram" },
  { name: "Facebook", url: "https://www.facebook.com/Prasanta.ray07", icon: "facebook" },
] as const;

export const personalEmail = "Work.prasanta.ray@gmail.com";

export const timeline = [
  {
    id: "poe-era",
    period: "2015-2023",
    title: "The POE Era",
    description:
      "Booyah Streamer with 15k Followers. Gaming focus on Minecraft, GTA V. Managed 'Scott Server' Discord (165+ members).",
    era: "gaming" as const,
    icon: "controller",
  },
  {
    id: "pivot",
    period: "2024",
    title: "The Pivot",
    description: "Transitioned from Arts to CSE due to passion for computers.",
    era: "transition" as const,
    icon: "arrow",
  },
  {
    id: "founder-era",
    period: "2025-Present",
    title: "Founder Era",
    description:
      "Founder of Code Lith Labs & Stackveil. Student at CIT Kokrajhar.",
    era: "dev" as const,
    icon: "server",
  },
] as const;

// GitHub Journal - fetch issues from this repo
export const journalConfig = {
  owner: "Prasanta-ray",
  repo: "portfolio-prasanta",
  // Uses issues with label "journal" or posts from a posts/ folder
  type: "issues" as const,
  labels: ["journal", "blog"],
};
