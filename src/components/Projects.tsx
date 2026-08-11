import { PORTFOLIO_DATA } from "@/data";
import { ArrowUpRight, PenTool } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="w-full py-20 border-b structural-border bg-paper">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <h2 className="font-mono text-sm tracking-widest text-graphite-light uppercase">
            02 // Engineering Projects
          </h2>
          <div className="flex-grow h-[1px] bg-graphite/20"></div>
        </div>

        {/* Projects Container */}
        <div className="flex flex-col gap-16 md:gap-24">
          {PORTFOLIO_DATA.projects.map((project, index) => {
            // Alternating layout: Even index = text left, Odd index = text right
            const isEven = index % 2 === 0;

            return (
              <div 
                key={project.id} 
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 group`}
              >
                
                {/* Visual / Image Block (occupies 7 columns on desktop) */}
                <div className="w-full lg:w-7/12 relative aspect-[4/3] lg:aspect-[3/2] structural-border bg-paper-dark overflow-hidden">
                  {/* 
                    This checks if you are using the dummy placeholder. 
                    If yes, it shows a cool CSS CAD blueprint. 
                    If no, it will try to load your real image!
                  */}
                  {project.image.includes("placeholder") ? (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-graphite text-paper/50">
                      {/* CSS Grid Pattern Overlay */}
                      <div className="absolute inset-0 opacity-20" style={{ 
                        backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
                        backgroundSize: '24px 24px' 
                      }}></div>
                      <PenTool className="w-12 h-12 mb-4 opacity-50" strokeWidth={1} />
                      <p className="font-mono text-xs tracking-widest z-10">SYS.IMG // PENDING</p>
                      <p className="font-mono text-[10px] opacity-50 z-10 mt-2">Replace in data.ts</p>
                    </div>
                  ) : (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  )}
                  
                  {/* Decorative corner markers */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-paper m-2 opacity-50 z-10"></div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-paper m-2 opacity-50 z-10"></div>
                </div>

                {/* Text / Data Block (occupies 5 columns on desktop) */}
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                  
                  {/* Project Metadata */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-[10px] tracking-widest px-2 py-1 bg-graphite text-paper uppercase">
                      {project.type}
                    </span>
                    <span className="font-mono text-[10px] tracking-widest text-graphite-light uppercase">
                      // {project.methodology}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl md:text-3xl font-bold text-graphite mb-4 leading-tight uppercase tracking-tight group-hover:text-blueprint transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-graphite-light text-sm md:text-base leading-relaxed mb-8">
                    {project.description}
                  </p>

                  {/* Tools / Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tools.map((tool, i) => (
                      <span 
                        key={i} 
                        className="font-mono text-[10px] tracking-widest uppercase px-3 py-1.5 structural-border text-graphite-light"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  {/* Call to Action Button */}
                  <button className="flex items-center gap-2 w-fit border-b border-graphite pb-1 font-mono text-xs tracking-widest text-graphite hover:text-blueprint hover:border-blueprint transition-colors">
                    VIEW SPECIFICATIONS 
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                  
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}