"use client";

import { useEffect, useState } from "react";
import { Hexagon, Download } from "lucide-react";
import { motion, useScroll } from "framer-motion";

export default function Navbar() {
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const footer = document.getElementById("contact");

    if (!footer) {
      console.warn("Footer with id='contact' not found.");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsFooterVisible(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.01,
      }
    );

    observer.observe(footer);

    return () => {
      observer.unobserve(footer);
    };
  }, []);

  // Smoothly scroll to a section every time it's clicked
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();

    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // Keep the URL hash updated without triggering another navigation
      window.history.pushState(null, "", `#${id}`);
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 bg-graphite transition-all duration-500 ease-in-out ${isFooterVisible
          ? "-translate-y-full opacity-0 pointer-events-none"
          : "translate-y-0 opacity-100"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Left: Logo / Initials */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "home")}
          className="flex items-center gap-2 group"
        >
          <Hexagon
            className="w-5 h-5 text-blueprint group-hover:text-blueprint-hover transition-colors"
            strokeWidth={1.5}
          />

          <span className="font-mono text-sm font-bold tracking-widest text-paper group-hover:text-blueprint transition-colors">
            KK
          </span>
        </a>

        {/* Center: Main Navigation */}
        <nav className="hidden md:flex items-center gap-8 font-mono text-xs tracking-widest text-paper/70">
          <a
            href="#record"
            onClick={(e) => handleNavClick(e, "record")}
            className="hover:text-paper transition-colors"
          >
            EXPERIENCE
          </a>

          <a
            href="#projects"
            onClick={(e) => handleNavClick(e, "projects")}
            className="hover:text-paper transition-colors"
          >
            PROJECTS
          </a>

          <a
            href="#credentials"
            onClick={(e) => handleNavClick(e, "credentials")}
            className="hover:text-paper transition-colors"
          >
            CREDENTIALS
          </a>

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "contact")}
            className="hover:text-paper transition-colors"
          >
            CONTACT
          </a>
        </nav>

        {/* Right: CV Download Button */}
        <a
          href="/CV_Karouzos_EN.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 font-mono text-xs tracking-widest structural-border px-4 py-2 bg-blueprint text-paper hover:bg-paper hover:text-graphite transition-all duration-200"
        >
          <Download
            className="w-4 h-4 opacity-80"
            strokeWidth={1.5}
          />

          <span className="hidden sm:inline">DOWNLOAD CV</span>
          <span className="sm:hidden">CV</span>
        </a>
      </div>

      {/* Scroll Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-0.75 bg-blueprint origin-left z-100"
        style={{ scaleX: scrollYProgress }}
      />
    </header>
  );
}