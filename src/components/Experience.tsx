"use client"; // We need this because the dropdown buttons use React State

import { useState } from "react";
import { PORTFOLIO_DATA } from "@/data";
import { MapPin, ImageIcon, ChevronDown, ChevronUp } from "lucide-react";
import GalleryBlock from "./GalleryBlock";

export default function Experience() {
  // This state keeps track of which internship rows are currently "expanded" to show photos
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());

  const toggleGallery = (id: string) => {
    const newSet = new Set(expandedSections);
    if (newSet.has(id)) {
      newSet.delete(id); // Hide it if it's already open
    } else {
      newSet.add(id); // Show it if it's closed
    }
    setExpandedSections(newSet);
  };

  return (
    <section id="record" className="w-full py-20 border-b structural-border">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex items-center gap-4 mb-12">
          <h2 className="font-mono text-sm tracking-widest text-graphite-light uppercase">
            01 // Professional Record
          </h2>
          <div className="flex-grow h-[1px] bg-graphite/20"></div>
        </div>

        <div className="flex flex-col border-t border-l border-r structural-border">
          {PORTFOLIO_DATA.experience.map((exp, index) => (
            <div 
              key={exp.id} 
              className={`grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 md:p-8 border-b structural-border transition-colors group ${
                index % 2 === 0 ? 'bg-transparent hover:bg-paper-dark/30' : 'bg-black/[0.01] hover:bg-paper-dark/30'
              }`}
            >
              
              {/* Column 1: Year AND Company Logo */}
              <div className="lg:col-span-2 flex flex-col items-start pt-1 gap-6">
                <span className="font-mono text-xs tracking-widest text-graphite-light">
                  [{exp.year}]
                </span>
                {/* Logo is now here, larger, fully transparent (no box), and full color */}
                {exp.logo && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img 
                    src={exp.logo} 
                    alt={exp.company} 
                    className="w-20 md:w-24 object-contain opacity-80 group-hover:opacity-100 transition-opacity" 
                  />
                )}
              </div>

              {/* Column 2: Role, Company, Location (Restored to clean look) */}
              <div className="lg:col-span-4 flex flex-col gap-2 pt-1">
                <h3 className="font-sans text-xl font-bold text-graphite leading-tight uppercase">
                  {exp.role}
                </h3>
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-sm text-blueprint font-medium uppercase">
                    {exp.company}
                  </span>
                  <div className="flex items-center gap-1.5 text-graphite-light mt-1">
                    <MapPin className="w-3.5 h-3.5" strokeWidth={1.5} />
                    <span className="font-mono text-xs tracking-wide">{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Column 3: Achievements, Tools, and the new Toggle Button */}
              <div className="lg:col-span-6 flex flex-col gap-6 pt-1">
                <ul className="flex flex-col gap-3">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-3 text-graphite-light text-sm md:text-base leading-relaxed">
                      <span className="font-mono text-blueprint mt-0.5">+</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2 mt-auto pt-2">
                  <span className="font-mono text-xs text-graphite-light flex items-center mr-2">
                    SYS.TOOLS:
                  </span>
                  {exp.tools.map((tool, i) => (
                    <span key={i} className="font-mono text-[10px] uppercase tracking-widest px-2 py-1 structural-border text-graphite-light bg-paper group-hover:bg-paper-dark transition-colors">
                      {tool}
                    </span>
                  ))}
                </div>

                {/* The Interactive Toggle Button (Only shows if photos exist) */}
                {exp.images && exp.images.length > 0 && (
                  <button 
                    onClick={() => toggleGallery(exp.id)}
                    className="mt-2 flex items-center gap-2 font-mono text-[10px] tracking-widest text-graphite-light hover:text-blueprint transition-colors w-fit border-b border-transparent hover:border-blueprint pb-1 uppercase"
                  >
                    <ImageIcon className="w-3.5 h-3.5" strokeWidth={1.5} />
                    {expandedSections.has(exp.id) ? "HIDE PHOTOS" : "VIEW PHOTOS"}
                    {expandedSections.has(exp.id) ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                  </button>
                )}
              </div>

              {/* The Hidden Image Gallery (Renders below everything when button is clicked) */}
              {exp.images && exp.images.length > 0 && expandedSections.has(exp.id) && (
                <div className="lg:col-start-3 lg:col-span-10 mt-6 pt-6 border-t structural-border">
                  <div className="w-full aspect-video lg:aspect-[21/9] structural-border relative">
                    {/* We pass disableGrayscale={true} to keep internship photos in full color */}
                    <GalleryBlock images={exp.images} disableGrayscale={true} />
                  </div>
                </div>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}