import { PORTFOLIO_DATA } from "@/data";
import { GraduationCap, Wrench } from "lucide-react";

export default function Credentials() {
  return (
    <section id="credentials" className="w-full py-20 border-b structural-border">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <h2 className="font-mono text-sm tracking-widest text-graphite-light uppercase">
            03 // Education & Credentials
          </h2>
          <div className="flex-grow h-[1px] bg-graphite/20"></div>
        </div>

        {/* 2-Column Structural Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border structural-border">
          
          {/* Left Column: Education */}
          <div className="lg:col-span-7 p-8 md:p-12 border-b lg:border-b-0 lg:border-r structural-border bg-paper">
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-5 h-5 text-blueprint" strokeWidth={1.5} />
              <h3 className="font-mono text-sm tracking-widest text-graphite uppercase">Academic Background</h3>
            </div>
            
            <div className="flex flex-col gap-10">
              {PORTFOLIO_DATA.education.map((edu) => (
                <div key={edu.id} className="flex flex-col gap-2">
                  <div className="flex justify-between items-start gap-4">
                    <h4 className="font-sans text-xl font-bold text-graphite uppercase leading-tight">
                      {edu.degree}
                    </h4>
                    <span className="font-mono text-xs tracking-widest text-graphite-light whitespace-nowrap mt-1">
                      [{edu.year}]
                    </span>
                  </div>
                  <span className="font-mono text-sm text-blueprint font-medium uppercase">
                    {edu.institution}
                  </span>
                  <p className="text-graphite-light text-sm mt-2 leading-relaxed">
                    {edu.details}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Technical Toolkit */}
          <div className="lg:col-span-5 p-8 md:p-12 bg-black/[0.02]">
            <div className="flex items-center gap-3 mb-8">
              <Wrench className="w-4 h-4 text-blueprint" strokeWidth={1.5} />
              <h3 className="font-mono text-sm tracking-widest text-graphite uppercase">Technical Toolkit</h3>
            </div>

            <div className="flex flex-col gap-8">
              {PORTFOLIO_DATA.toolkit.map((category, index) => (
                <div key={index} className="flex flex-col gap-3">
                  <span className="font-mono text-xs tracking-widest text-graphite-light uppercase border-b structural-border pb-2">
                    // {category.category}
                  </span>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {category.skills.map((skill, i) => (
                      <span 
                        key={i} 
                        className="font-mono text-[11px] tracking-widest uppercase px-3 py-1.5 bg-graphite text-paper hover:bg-blueprint transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}