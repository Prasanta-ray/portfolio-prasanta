import type { Metadata } from "next";
import "./globals.css";
import CommandPalette from "@/components/CommandPalette";

export const metadata: Metadata = {
  title: "Prasanta Ray | Architecting the Future of Backends",
  description:
    "Founder @ Code Lith Labs | Co-Founder @ Stackveil | Backend Researcher | CSE Student @ CIT Kokrajhar",
  keywords: [
    "Prasanta Ray",
    "Code Lith Labs",
    "Stackveil",
    "Backend Engineer",
    "Kokrajhar",
    "CIT",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark bg-cyber-dark">
      <body className="font-sans antialiased text-white bg-cyber-dark min-h-screen">
        {children}
        <CommandPalette />
      </body>
    </html>
  );
}
