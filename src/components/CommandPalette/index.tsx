"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import {
  Building2,
  FileText,
  Gamepad2,
  Server,
  Github,
  Mail,
  ExternalLink,
} from "lucide-react";

const actions: {
  id: string;
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  external?: boolean;
}[] = [
  { id: "ventures", label: "Go to Ventures", href: "#ventures", icon: Building2 },
  { id: "projects", label: "View Projects", href: "#projects", icon: Github },
  { id: "journal", label: "Read Journal", href: "#journal", icon: FileText },
  { id: "timeline", label: "View Timeline", href: "#timeline", icon: Gamepad2 },
  {
    id: "codelith",
    label: "Code Lith Labs",
    href: "https://codelithlabs.in",
    icon: Building2,
    external: true,
  },
  {
    id: "stackveil",
    label: "Stackveil",
    href: "https://stackveil.in",
    icon: Server,
    external: true,
  },
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/Prasanta-ray",
    icon: Github,
    external: true,
  },
  {
    id: "email",
    label: "Email",
    href: "mailto:Work.prasanta.ray@gmail.com",
    icon: Mail,
    external: true,
  },
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const filtered = actions.filter((a) =>
    a.label.toLowerCase().includes(search.toLowerCase().trim())
  );

  const toggle = useCallback(() => {
    setOpen((o) => {
      if (!o) {
        setSearch("");
        setSelected(0);
        setTimeout(() => inputRef.current?.focus(), 0);
      }
      return !o;
    });
  }, []);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        toggle();
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [toggle]);

  useEffect(() => {
    if (open) setSelected(0);
  }, [search, open]);

  const handleSelect = (href: string) => {
    if (href.startsWith("#")) {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.open(href, "_blank");
    }
    setOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setOpen(false);
      return;
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelected((s) => (s + 1) % Math.max(1, filtered.length));
      return;
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelected((s) => (s - 1 + filtered.length) % Math.max(1, filtered.length));
      return;
    }
    if (e.key === "Enter" && filtered[selected]) {
      e.preventDefault();
      handleSelect(filtered[selected].href);
      return;
    }
  };

  return (
    <>
      <button
        onClick={toggle}
        className="fixed bottom-6 right-6 z-40 px-4 py-2 rounded-lg bg-cyber-card/80 backdrop-blur-md border border-cyber-border text-gray-400 text-sm font-mono hover:border-cyber-accent/50 hover:text-cyber-accent transition-all hidden sm:flex items-center gap-2"
      >
        <span>⌘K</span>
        <span>Command</span>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-start justify-center pt-[15vh] px-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-lg rounded-2xl bg-cyber-card/95 backdrop-blur-xl border border-cyber-border shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center border-b border-cyber-border px-4">
              <span className="text-cyber-accent font-mono text-sm mr-2">$</span>
              <input
                ref={inputRef}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type a command or search..."
                className="flex-1 bg-transparent py-4 text-white placeholder-gray-500 outline-none font-mono"
              />
            </div>
            <div className="max-h-[300px] overflow-y-auto p-2">
              {filtered.length === 0 ? (
                <div className="py-6 text-center text-gray-500">
                  No results found.
                </div>
              ) : (
                filtered.map((a, i) => {
                  const Icon = a.icon;
                  const isSelected = i === selected;
                  return (
                    <button
                      key={a.id}
                      onClick={() => handleSelect(a.href)}
                      onMouseEnter={() => setSelected(i)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                        isSelected
                          ? "bg-cyber-accent/10 text-white"
                          : "text-gray-300 hover:bg-cyber-accent/5"
                      }`}
                    >
                      <Icon className="w-5 h-5 text-cyber-accent flex-shrink-0" />
                      <span>{a.label}</span>
                      {a.external && (
                        <ExternalLink className="w-4 h-4 ml-auto text-gray-500" />
                      )}
                    </button>
                  );
                })
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}