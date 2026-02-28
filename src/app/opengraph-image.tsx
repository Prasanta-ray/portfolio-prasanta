import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Prasanta Ray — Founder & Backend Researcher";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0a0a0f 0%, #12121a 100%)",
          padding: "60px 80px",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Top accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(90deg, #00ff88, #00d4ff, #8b5cf6)",
          }}
        />

        {/* Terminal prompt */}
        <div style={{ display: "flex", color: "#00ff88", fontSize: 18, marginBottom: 32 }}>
          &gt; prasanta.portfolio
        </div>

        {/* Name */}
        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.1,
            marginBottom: 16,
          }}
        >
          Prasanta Ray
        </div>

        {/* Role */}
        <div
          style={{
            display: "flex",
            fontSize: 28,
            fontWeight: 600,
            color: "#00ff88",
            marginBottom: 12,
          }}
        >
          Founder & CEO — Code Lith Labs
        </div>

        {/* Subtitle */}
        <div
          style={{
            display: "flex",
            fontSize: 22,
            color: "#9CA3AF",
            marginBottom: 40,
          }}
        >
          Backend Researcher · Co-Founder @ Stackveil · CSE @ CIT Kokrajhar
        </div>

        {/* Tech tags */}
        <div style={{ display: "flex", gap: 12 }}>
          {["C++", "Node.js", "TypeScript", "React", "Next.js"].map(
            (tech, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  padding: "8px 16px",
                  borderRadius: 8,
                  background: "#1a1a26",
                  border: "1px solid #2a2a3a",
                  color: ["#00ff88", "#00d4ff", "#8b5cf6", "#f59e0b", "#00ff88"][i],
                  fontSize: 14,
                }}
              >
                {tech}
              </div>
            )
          )}
        </div>

        {/* Domain */}
        <div
          style={{
            display: "flex",
            position: "absolute",
            bottom: 40,
            left: 80,
            fontSize: 16,
            color: "#6B7280",
          }}
        >
          prasanta.codelithlabs.in
        </div>

        {/* Decorative dots */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 8,
            position: "absolute",
            top: 60,
            right: 80,
          }}
        >
          <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#00ff88", opacity: 0.6 }} />
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#00d4ff", opacity: 0.4 }} />
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#8b5cf6", opacity: 0.3 }} />
        </div>
      </div>
    ),
    { ...size }
  );
}
