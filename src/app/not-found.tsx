"use client"; // We need this to safely access the browser window

import { useEffect, useState } from "react";
import Link from "next/link";
import { TriangleAlert, ArrowLeft } from "lucide-react";

export default function NotFound() {
  // 1. Set a generic default that the Server will render
  const [currentUrl, setCurrentUrl] = useState("[ UNKNOWN ]");

  // 2. Once the page loads in the browser, grab the real URL
  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const displayUrl =
  currentUrl.length > 300
    ? `${currentUrl.slice(0, 180)} … ${currentUrl.slice(-100)}`
    : currentUrl;

  return (
    <main className="flex-grow flex items-center justify-center p-6 min-h-[80vh]">
      <div className="max-w-2xl w-full border structural-border bg-paper p-8 md:p-12 relative overflow-hidden group shadow-sm">
        
        {/* Decorative CAD Corners */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-safety m-4 opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-safety m-4 opacity-50"></div>

        <div className="relative z-10 flex flex-col items-start gap-6">
          
          {/* Header Line */}
          <div className="flex items-center gap-3 border-b border-safety/30 pb-4 w-full">
            <TriangleAlert className="w-5 h-5 text-blueprint" strokeWidth={1.5} />
            <span className="font-mono text-sm tracking-widest text-blueprint uppercase">
              ERROR // 404
            </span>
          </div>

          {/* Main Error Message */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold font-sans text-graphite uppercase tracking-tight mb-3">
              PAGE NOT FOUND
            </h1>
            <p className="font-mono text-sm text-graphite-light max-w-md leading-relaxed">
              The requested page could not be located in the current project directory.
              The drawing may have been moved, renamed, or never issued for construction :)
            </p>
          </div>

          {/* Fake Metadata Terminal Box */}
          <div className="font-mono text-xs text-graphite-light bg-black/2 border structural-border p-4 w-full mt-2 flex flex-col gap-1">
            <p className="flex flex-col sm:flex-row sm:justify-between gap-2">
              <span className="whitespace-nowrap">TARGET URL:</span>
              <span className="text-left sm:text-right text-graphite/60 break-all min-w-0">
                {displayUrl}
              </span>
            </p>
            <p className="flex justify-between mt-1">
              <span>SERVER STATUS:</span>
              <span className="text-safety text-blueprint">404_OFFLINE</span>
            </p>
          </div>

          {/* Return Button */}
          <Link 
            href="/" 
            className="mt-4 flex items-center gap-2 bg-graphite text-paper px-6 py-3 font-mono text-sm w-full tracking-wide hover:bg-blueprint transition-colors group/btn"
          >
            <ArrowLeft className="w-4 h-4 group-hover/btn:-translate-x-1 transition-transform" strokeWidth={1.5} />
            RETURN TO PORTFOLIO
          </Link>
          
        </div>
      </div>
    </main>
  );
}