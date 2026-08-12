import { PORTFOLIO_DATA } from "@/data";
import { ArrowUpRight } from "lucide-react";
import GalleryBlock from "./GalleryBlock"; // <--- We import our new tool here

export default function Projects() {
  return (
    <section id="projects" className="w-full py-20 border-b structural-border">
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
            const isEven = index % 2 === 0;

            return (
              <div 
                key={project.id} 
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 group`}
              >
                
                {/* Visual / Image Block Container */}
                <div className="w-full lg:w-7/12 relative aspect-[4/3] lg:aspect-[3/2] structural-border bg-paper-dark">
                  
                  {/* --- WE USE THE NEW GALLERY BLOCK HERE --- */}
                  <GalleryBlock images={project.images} />

                </div>

                {/* Text / Data Block */}
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