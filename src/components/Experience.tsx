import { PORTFOLIO_DATA } from "@/data";
import { MapPin } from "lucide-react";

export default function Experience() {
  return (
    <section id="record" className="w-full py-20 border-b structural-border">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <h2 className="font-mono text-sm tracking-widest text-graphite-light uppercase">
            01 // Professional Record
          </h2>
          <div className="flex-grow h-[1px] bg-graphite/20"></div>
        </div>

        {/* The Ledger / Table */}
        <div className="flex flex-col border-t border-l border-r structural-border">
          {PORTFOLIO_DATA.experience.map((exp, index) => (
            <div 
              key={exp.id} 
              className={`grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 md:p-8 border-b structural-border hover:bg-paper-dark/50 transition-colors ${
                index % 2 === 0 ? 'bg-transparent' : 'bg-black/[0.01]'
              }`}
            >
              
              {/* Column 1: Year (Acts like a ledger index) */}
              <div className="lg:col-span-2 flex items-start pt-1">
                <span className="font-mono text-xs tracking-widest text-graphite-light">
                  [{exp.year}]
                </span>
              </div>

              {/* Column 2: Role, Company, Location */}
              <div className="lg:col-span-4 flex flex-col gap-2">
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

              {/* Column 3: Achievements & Technical Details */}
              <div className="lg:col-span-6 flex flex-col gap-6">
                <ul className="flex flex-col gap-3">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-3 text-graphite-light text-sm md:text-base leading-relaxed">
                      {/* Using a technical plus sign instead of standard bullets */}
                      <span className="font-mono text-blueprint mt-0.5">+</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Tools Metadata Tags */}
                <div className="flex flex-wrap gap-2 mt-auto pt-2">
                  <span className="font-mono text-xs text-graphite-light flex items-center mr-2">
                    SYS.TOOLS:
                  </span>
                  {exp.tools.map((tool, i) => (
                    <span 
                      key={i} 
                      className="font-mono text-[10px] uppercase tracking-widest px-2 py-1 structural-border text-graphite-light bg-paper"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}