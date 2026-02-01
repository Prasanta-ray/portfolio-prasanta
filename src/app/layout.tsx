import type { Metadata } from "next";
import "./globals.css";
import CommandPalette from "@/components/CommandPalette";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://codelithlabs.github.io/portfolio-prasanta";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Prasanta Ray | Architecting the Future of Backends",
    template: "%s | Prasanta Ray",
  },
  description:
    "Founder @ Code Lith Labs | Co-Founder @ Stackveil | Backend Researcher | CSE Student @ CIT Kokrajhar. Building the future of backend systems.",
  keywords: [
    "Prasanta Ray",
    "Code Lith Labs",
    "Stackveil",
    "Backend Engineer",
    "Tech Founder",
    "Kokrajhar",
    "CIT",
    "Backend Researcher",
  ],
  authors: [{ name: "Prasanta Ray", url: "https://github.com/Prasanta-ray" }],
  creator: "Prasanta Ray",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Prasanta Ray | Portfolio",
    title: "Prasanta Ray | Architecting the Future of Backends",
    description:
      "Founder @ Code Lith Labs | Co-Founder @ Stackveil | Backend Researcher | CSE Student @ CIT Kokrajhar.",
    images: [
      {
        url: "/profile.png",
        width: 1200,
        height: 630,
        alt: "Prasanta Ray - Tech Founder & CEO",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prasanta Ray | Architecting the Future of Backends",
    description:
      "Founder @ Code Lith Labs | Co-Founder @ Stackveil | Backend Researcher | CSE Student @ CIT Kokrajhar.",
    images: ["/profile.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Prasanta Ray",
  alternateName: ["Shaun the Sheep", "POE", "Bikki"],
  jobTitle: "Founder & CEO | Backend Researcher | CSE Diploma Student",
  url: siteUrl,
  image: `${siteUrl}/profile.png`,
  sameAs: [
    "https://www.linkedin.com/in/prasanta-ray",
    "https://github.com/Prasanta-ray",
    "https://github.com/CodelithLabs",
    "https://dev.to/prasantaray",
    "https://mastodon.social/@prasantaray",
    "https://bsky.app/profile/prasantaray.bsky.social",
  ],
  worksFor: [
    { "@type": "Organization", name: "Code Lith Labs", url: "https://codelithlabs.in" },
    { "@type": "Organization", name: "Stackveil", url: "https://stackveil.in" },
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark bg-cyber-dark">
      <body className="font-sans antialiased text-white bg-cyber-dark min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <CommandPalette />
      </body>
    </html>
  );
}
