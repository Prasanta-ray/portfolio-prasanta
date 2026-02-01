/**
 * Portfolio Data - Prasanta Ray
 * Cyber-Industrial Professional Portfolio
 */

export const profile = {
  name: "Prasanta Ray",
  aliases: ["Shaun the Sheep", "POE", "Bikki"],
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
      phone: "+91 6002524400",
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
      phone: "+91 60019 94691",
      discord: "https://discord.gg/dVVX9sdC9h",
      youtube: "@stackveilLabsofficial",
    },
  },
] as const;

export const projects = [
  {
    id: "vectordefense-core",
    name: "VectorDefense-Core",
    url: "https://github.com/CodelithLabs/VectorDefense-Core",
    description: "Game Engine / C++",
    owner: "CodelithLabs",
    repo: "VectorDefense-Core",
  },
  {
    id: "smartcodementor",
    name: "SmartCodeMentor",
    url: "https://github.com/CodelithLabs/smartcodementor",
    description: "AI-powered code mentorship",
    owner: "CodelithLabs",
    repo: "smartcodementor",
  },
  {
    id: "citk-connect",
    name: "CITK-Connect",
    url: "https://github.com/CodelithLabs/citk-connect-project",
    description: "CIT Kokrajhar community platform",
    owner: "CodelithLabs",
    repo: "citk-connect-project",
  },
  {
    id: "vectordefense-personal",
    name: "VectorDefense-Core (Personal)",
    url: "https://github.com/Prasanta-ray/VectorDefense-Core",
    description: "Personal fork - Game Engine",
    owner: "Prasanta-ray",
    repo: "VectorDefense-Core",
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
