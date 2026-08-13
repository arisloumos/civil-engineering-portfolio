import { PORTFOLIO_DATA } from "@/data";
import { ArrowDownRight, ArrowRight } from "lucide-react";

export default function Hero() {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section className="w-full pt-20 pb-16 border-b structural-border">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Metadata Line (Drafting/Surveying feel) */}
        <div className="flex items-center gap-4 mb-12">
          <div className="w-8 h-[1px] bg-graphite/30"></div>
          <p className="font-mono text-xs text-graphite-light tracking-widest uppercase">
            THESSALONIKI, GR // AUTH // 2023-2028
          </p>
        </div>

        {/* Main Title Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          
          {/* Left Column: Name and Role */}
          <div className="lg:col-span-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-graphite leading-[1.05] mb-6">
              {personal.name.toUpperCase()}
            </h1>
            <h2 className="font-mono text-lg md:text-xl text-blueprint tracking-wide uppercase">
              {personal.role}
            </h2>
          </div>

          {/* Right Column: Profile Statement & Actions */}
          <div className="lg:col-span-4 pb-1">
            {/* The statement has a left border to look like a technical annotation */}
            <p className="text-graphite-light leading-relaxed mb-8 border-l structural-border pl-5">
              {personal.statement}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#record" 
                className="flex items-center gap-2 bg-graphite text-paper px-6 py-3 font-mono text-sm tracking-wide hover:bg-blueprint transition-colors group"
              >
                VIEW WORK 
                <ArrowDownRight className="w-4 h-4 group-hover:translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a 
                href="#contact" 
                className="flex items-center gap-2 structural-border bg-transparent px-6 py-3 font-mono text-sm tracking-wide hover:bg-graphite hover:text-paper transition-colors group"
              >
                CONTACT 
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}