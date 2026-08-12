import { PORTFOLIO_DATA } from "@/data";
import { GraduationCap, Wrench, BookOpen, Presentation, Globe } from "lucide-react";

export default function Credentials() {
  return (
    <section id="credentials" className="w-full py-20 border-b structural-border">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <h2 className="font-mono text-sm tracking-widest text-graphite-light uppercase">
            03 // Qualifications & Credentials
          </h2>
          <div className="flex-grow h-[1px] bg-graphite/20"></div>
        </div>

        {/* 2-Column Structural Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border structural-border">
          
          {/* LEFT COLUMN: Academic & Professional Development */}
          <div className="lg:col-span-7 border-b lg:border-b-0 lg:border-r structural-border bg-paper flex flex-col">
            
            {/* 1. Education Block */}
            <div className="p-8 md:p-12 border-b structural-border">
              <div className="flex items-center gap-3 mb-8">
                <GraduationCap className="w-5 h-5 text-blueprint" strokeWidth={1.5} />
                <h3 className="font-mono text-sm tracking-widest text-graphite uppercase">Academic Background</h3>
              </div>
              <div className="flex flex-col gap-8">
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

            {/* 2. Specialized Training Block */}
            <div className="p-8 md:p-12 border-b structural-border">
              <div className="flex items-center gap-3 mb-8">
                <BookOpen className="w-4 h-4 text-blueprint" strokeWidth={1.5} />
                <h3 className="font-mono text-sm tracking-widest text-graphite uppercase">Specialized Training</h3>
              </div>
              <div className="flex flex-col gap-6">
                {PORTFOLIO_DATA.training.map((trn) => (
                  <div key={trn.id} className="flex flex-col gap-1">
                    <div className="flex justify-between items-start gap-4">
                      <h4 className="font-sans text-base font-bold text-graphite uppercase leading-tight">
                        {trn.title}
                      </h4>
                      <span className="font-mono text-[10px] tracking-widest text-graphite-light whitespace-nowrap mt-1">
                        [{trn.period}]
                      </span>
                    </div>
                    <span className="font-mono text-[11px] text-graphite-light uppercase">
                      SYS.ORG: {trn.institution} // <span className="text-blueprint">{trn.duration}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Conferences Block */}
            <div className="p-8 md:p-12">
              <div className="flex items-center gap-3 mb-8">
                <Presentation className="w-4 h-4 text-blueprint" strokeWidth={1.5} />
                <h3 className="font-mono text-sm tracking-widest text-graphite uppercase">Engagement & Conferences</h3>
              </div>
              <div className="flex flex-col gap-6">
                {PORTFOLIO_DATA.conferences.map((conf) => (
                  <div key={conf.id} className="flex flex-col gap-1">
                    <div className="flex justify-between items-start gap-4">
                      <h4 className="font-sans text-sm font-bold text-graphite uppercase leading-tight">
                        {conf.title}
                      </h4>
                      <span className="font-mono text-[10px] tracking-widest text-graphite-light whitespace-nowrap mt-1">
                        [{conf.period}]
                      </span>
                    </div>
                    {conf.role && (
                      <span className="font-mono text-[10px] bg-paper-dark border structural-border px-2 py-0.5 w-fit text-graphite-light uppercase mt-1">
                        ROLE: {conf.role}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Skills & Capabilities */}
          <div className="lg:col-span-5 bg-black/[0.02] flex flex-col">
            
            {/* 1. Technical Toolkit Block */}
            <div className="p-8 md:p-12 border-b structural-border">
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

            {/* 2. Languages Block */}
            <div className="p-8 md:p-12">
              <div className="flex items-center gap-3 mb-8">
                <Globe className="w-4 h-4 text-blueprint" strokeWidth={1.5} />
                <h3 className="font-mono text-sm tracking-widest text-graphite uppercase">Languages</h3>
              </div>
              <div className="flex flex-col gap-4">
                {PORTFOLIO_DATA.languages.map((lang, index) => (
                  <div key={index} className="flex justify-between items-center border-b structural-border pb-2 group">
                    <span className="font-sans text-sm font-bold text-graphite uppercase group-hover:text-blueprint transition-colors">
                      {lang.language}
                    </span>
                    <span className="font-mono text-[11px] tracking-widest text-graphite-light uppercase">
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}