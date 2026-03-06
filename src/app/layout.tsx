import type { Metadata, Viewport } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import CommandPalette from "@/components/CommandPalette";
import BackToTop from "@/components/BackToTop";
import { siteUrl } from "@/constants/data";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#00ff88",
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Prasanta Ray | Founder & Backend Researcher | Portfolio",
    template: "%s | Prasanta Ray",
  },
  description:
    "Prasanta Ray — Founder & CEO of Code Lith Labs, Co-Founder of Stackveil, Backend Researcher, and CSE Diploma Student at CIT Kokrajhar. Explore projects, skills, ventures, and more.",
  keywords: [
    "Prasanta Ray",
    "Prasanta Ray portfolio",
    "Prasanta Ray developer",
    "Prasanta Ray GitHub",
    "Code Lith Labs",
    "Code Lith Labs founder",
    "Stackveil",
    "Backend Engineer",
    "Backend Researcher",
    "Tech Founder",
    "Kokrajhar",
    "CIT Kokrajhar",
    "backend developer India",
    "C++ developer",
    "Node.js developer",
    "TypeScript developer",
    "game engine developer",
    "open source developer India",
    "CSE student portfolio",
  ],
  authors: [{ name: "Prasanta Ray", url: siteUrl }],
  creator: "Prasanta Ray",
  publisher: "Prasanta Ray",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Prasanta Ray — Portfolio",
    title: "Prasanta Ray | Founder & Backend Researcher",
    description:
      "Founder @ Code Lith Labs | Co-Founder @ Stackveil | Backend Researcher | CSE Student @ CIT Kokrajhar. Explore my projects, ventures, and journal.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Prasanta Ray — Founder & Backend Researcher",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prasanta Ray | Founder & Backend Researcher",
    description:
      "Founder @ Code Lith Labs | Co-Founder @ Stackveil | Backend Researcher | CSE Student @ CIT Kokrajhar.",
    images: ["/og-image.png"],
    creator: "@prasantaray",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.svg",
  },
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your Google Search Console verification code here
    // google: "your-verification-code",
  },
  category: "technology",
};

/* ── Structured Data (JSON-LD) ── */
const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteUrl}/#person`,
  name: "Prasanta Ray",
  givenName: "Prasanta",
  familyName: "Ray",
  description:
    "Tech Founder, Backend Researcher, and CSE Diploma Student building the future of backend systems.",
  jobTitle: "Founder & CEO",
  email: "Work.prasanta.ray@gmail.com",
  url: siteUrl,
  image: `${siteUrl}/profile.png`,
  nationality: { "@type": "Country", name: "India" },
  knowsAbout: [
    "C++",
    "Node.js",
    "TypeScript",
    "React",
    "Next.js",
    "Backend Systems",
    "REST APIs",
    "Game Engine Development",
    "System Architecture",
    "Database Design",
    "Docker",
    "Git",
    "CI/CD",
  ],
  sameAs: [
    "https://www.linkedin.com/in/prasanta-ray",
    "https://github.com/Prasanta-ray",
    "https://github.com/CodelithLabs",
    "https://dev.to/prasantaray",
    "https://mastodon.social/@prasantaray",
    "https://bsky.app/profile/prasantaray.bsky.social",
    "https://instagram.com/prasanta.codes",
  ],
  worksFor: [
    {
      "@type": "Organization",
      name: "Code Lith Labs",
      url: "https://codelithlabs.in",
      description: "Research & Development, Backend Innovation",
    },
    {
      "@type": "Organization",
      name: "Stackveil",
      url: "https://stackveil.in",
      description: "Collaborative Tech Solutions & Architecture",
    },
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Central Institute of Technology (CIT), Kokrajhar",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kokrajhar",
    addressRegion: "Assam",
    addressCountry: "IN",
  },
};

const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: "Prasanta Ray — Portfolio",
  description: "Personal portfolio of Prasanta Ray — Founder, Backend Researcher, Developer.",
  publisher: { "@id": `${siteUrl}/#person` },
  inLanguage: "en",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `https://www.google.com/search?q=site:${new URL(siteUrl).hostname}+{search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

const webPageLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${siteUrl}/#webpage`,
  url: siteUrl,
  name: "Prasanta Ray | Founder & Backend Researcher | Portfolio",
  description:
    "Explore projects, ventures, skills, and journal of Prasanta Ray — Founder of Code Lith Labs.",
  isPartOf: { "@id": `${siteUrl}/#website` },
  about: { "@id": `${siteUrl}/#person` },
  inLanguage: "en",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`dark bg-cyber-dark ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <link rel="dns-prefetch" href="https://api.github.com" />
        <link rel="preconnect" href="https://api.github.com" crossOrigin="anonymous" />
      </head>
      <body className="font-sans antialiased text-white bg-cyber-dark min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([personLd, websiteLd, webPageLd]),
          }}
        />
        {children}
        <CommandPalette />
        <BackToTop />
        <Analytics />
        <noscript>
          <div style={{ padding: "2rem", textAlign: "center", color: "#d1d5db" }}>
            <h1>Prasanta Ray — Portfolio</h1>
            <p>
              Founder &amp; CEO of Code Lith Labs | Co-Founder of Stackveil |
              Backend Researcher | CSE Student at CIT Kokrajhar.
            </p>
            <p>Please enable JavaScript to view the full interactive portfolio.</p>
          </div>
        </noscript>
      </body>
    </html>
  );
}
