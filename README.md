# Prasanta Ray — Portfolio

A high-performance, professional portfolio website with a **Cyber-Industrial** aesthetic. Built with Next.js 14, TypeScript, Tailwind CSS, Framer Motion, and React Three Fiber.

## Features

- **Hero Section** — Full-screen dark interface with 3D interactive neural cube (React Three Fiber)
- **The Ventures** — Glass-effect entity cards for Code Lith Labs and Stackveil
- **Projects** — GitHub-powered project list with live stars, forks, and languages
- **Dev Journal** — Auto-published from GitHub Issues (add label `journal` to publish)
- **Timeline** — Gamified journey from Controller (Gaming) to Server (Dev)
- **Command Palette** — `Cmd+K` (Mac) / `Ctrl+K` (Windows) for quick navigation

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (Mobile First)
- **Animation:** Framer Motion
- **3D:** React Three Fiber
- **Icons:** Lucide React

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Dev Journal

To publish posts automatically:

1. Create a GitHub Issue in this repo
2. Add the label `journal` (or `blog`)
3. Write your post in Markdown in the issue body
4. The site will fetch and display it

Journal config: `src/constants/data.ts` → `journalConfig` (change `owner`/`repo` to use another repo)

## Data & Config

All content lives in `src/constants/data.ts` — profile, ventures, projects, socials, timeline. Edit this file to update the site.

## License

MIT
