"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Hexagon, Download } from "lucide-react";

export default function Navbar() {
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    // Find the footer by its ID
    const footer = document.getElementById("contact");
    if (!footer) return;

    // Set up a sensor to watch the footer
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsFooterVisible(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.01, // Trigger when at least 1% of the footer is visible
      }
    );

    observer.observe(footer);

    return () => {
      if (footer) observer.unobserve(footer);
    };
  }, []);

  return (
    <header 
      // Merged your bg-graphite styling with the smooth sliding animation
      className={`sticky top-0 z-50 bg-graphite border-b structural-border transition-all duration-500 ease-in-out ${
        isFooterVisible ? "-translate-y-full opacity-0 pointer-events-none" : "translate-y-0 opacity-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Left: Logo / Initials */}
        <Link href="/" className="flex items-center gap-2 group">
          <Hexagon 
            className="w-5 h-5 text-blueprint group-hover:text-blueprint-hover transition-colors" 
            strokeWidth={1.5} 
          />
          <span className="font-mono text-sm font-bold tracking-widest text-paper group-hover:text-blueprint transition-colors">
            KK
          </span>
        </Link>

        {/* Center: Main Navigation */}
        <nav className="hidden md:flex items-center gap-8 font-mono text-xs tracking-widest text-paper/70">
          <Link href="#record" className="hover:text-paper transition-colors">
            RECORD
          </Link>
          <Link href="#projects" className="hover:text-paper transition-colors">
            PROJECTS
          </Link>
          <Link href="#credentials" className="hover:text-paper transition-colors">
            CREDENTIALS
          </Link>
        </nav>

        {/* Right: CV Download Button */}
        <a 
          href="/CV_Karouzos_EN.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 font-mono text-xs tracking-widest structural-border px-4 py-2 bg-blueprint text-paper hover:bg-paper hover:text-graphite transition-all duration-200"
        >
          <Download className="w-4 h-4 opacity-80" strokeWidth={1.5} />
          <span className="hidden sm:inline">DOWNLOAD CV</span>
          <span className="sm:hidden">CV</span>
        </a>

      </div>
    </header>
  );
}