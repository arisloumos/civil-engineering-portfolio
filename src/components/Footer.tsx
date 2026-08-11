import { PORTFOLIO_DATA } from "@/data";
import { Mail } from "lucide-react";

// Custom SVG for GitHub matching the Lucide style
const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.53 6-6.36 0-1.3-.4-2.4-1.2-3.3.1-.3.5-1.5-.1-3.3 0 0-1-.3-3.3 1.5a11.5 11.5 0 0 0-6 0C5.3 2.5 4.3 2.8 4.3 2.8c-.6 1.8-.2 3 .1 3.3C3.6 7 3.2 8.1 3.2 9.5c0 4.8 3 6 6 6.36a4.8 4.8 0 0 0-1 3.24V22" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

// Custom SVG for LinkedIn matching the Lucide style
const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { contact, personal } = PORTFOLIO_DATA;

  return (
    <footer id="contact" className="w-full bg-graphite text-paper pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* CAD Title Block Layout */}
        <div className="border border-paper/20 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 text-sm font-mono tracking-widest">
          
          {/* Block 1: Name & Project (Large span) */}
          <div className="md:col-span-4 lg:col-span-3 border-b md:border-b-0 md:border-r border-paper/20 p-6 flex flex-col justify-between min-h-[140px]">
            <div>
              <p className="text-paper/50 text-[10px] mb-2 uppercase">Project</p>
              <p className="uppercase text-lg text-paper">{personal.name} // PORTFOLIO</p>
            </div>
            <div>
              <p className="text-paper/50 text-[10px] mb-1 uppercase">Discipline</p>
              <p className="uppercase text-blueprint">{personal.role}</p>
            </div>
          </div>

          {/* Block 2: Links */}
          <div className="md:col-span-2 lg:col-span-2 border-b lg:border-b-0 lg:border-r border-paper/20 p-6 flex flex-col justify-between">
            <p className="text-paper/50 text-[10px] mb-4 uppercase">Network Links</p>
            <div className="flex flex-col gap-3">
              <a href={contact.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-blueprint transition-colors">
                <LinkedinIcon className="w-4 h-4" /> LINKEDIN
              </a>
              <a href={contact.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-blueprint transition-colors">
                <GithubIcon className="w-4 h-4" /> GITHUB
              </a>
              <a href={`mailto:${contact.email}`} className="flex items-center gap-3 hover:text-blueprint transition-colors">
                <Mail className="w-4 h-4" /> EMAIL
              </a>
            </div>
          </div>

          {/* Block 3: Action & Date */}
          <div className="md:col-span-4 lg:col-span-1 p-6 flex flex-col justify-between bg-paper text-graphite hover:bg-blueprint hover:text-paper transition-colors group cursor-pointer relative overflow-hidden">
            <a href={contact.resumeUrl} target="_blank" rel="noreferrer" className="w-full h-full flex flex-col justify-between relative z-10">
              <p className="text-[10px] mb-4 uppercase font-bold opacity-50">Action</p>
              <div className="text-right">
                <p className="uppercase font-bold text-lg leading-none">GET</p>
                <p className="uppercase font-bold text-lg leading-none">RESUME</p>
                <p className="text-[10px] mt-4 opacity-50">REV. {currentYear}</p>
              </div>
            </a>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-8 font-mono text-[10px] text-paper/40 tracking-widest uppercase gap-4 text-center sm:text-left">
          <p>© {currentYear} {personal.name}. All rights reserved.</p>
          <p>ENGINEERED IN {personal.location.toUpperCase()}</p>
        </div>

      </div>
    </footer>
  );
}