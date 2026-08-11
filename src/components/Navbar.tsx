import Link from "next/link";
import { Hexagon, Download } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-paper/90 backdrop-blur-md border-b structural-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Left: Logo / Initials (Using a Hexagon to mimic a structural node/bolt) */}
        <Link href="/" className="flex items-center gap-2 group">
          <Hexagon 
            className="w-5 h-5 text-blueprint group-hover:text-blueprint-hover transition-colors" 
            strokeWidth={1.5} 
          />
          <span className="font-mono text-sm font-bold tracking-widest text-graphite group-hover:text-blueprint transition-colors">
            KK
          </span>
        </Link>

        {/* Center: Main Navigation (Hidden on tiny mobile screens) */}
        <nav className="hidden md:flex items-center gap-8 font-mono text-xs tracking-widest text-graphite-light">
          <Link href="#record" className="hover:text-graphite transition-colors">
            RECORD
          </Link>
          <Link href="#projects" className="hover:text-graphite transition-colors">
            PROJECTS
          </Link>
          <Link href="#credentials" className="hover:text-graphite transition-colors">
            CREDENTIALS
          </Link>
        </nav>

        {/* Right: CV Download Button */}
        <a 
          href="/CV_Karouzos_EN.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 font-mono text-xs tracking-widest structural-border px-4 py-2 hover:bg-graphite hover:text-paper transition-all duration-200"
        >
          <Download className="w-4 h-4" strokeWidth={1.5} />
          <span className="hidden sm:inline">DOWNLOAD CV</span>
          <span className="sm:hidden">CV</span>
        </a>

      </div>
    </header>
  );
}