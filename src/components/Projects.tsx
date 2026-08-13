"use client";

import { PORTFOLIO_DATA } from "@/data";
import { ArrowUpRight } from "lucide-react";
import GalleryBlock from "./GalleryBlock";
import { motion, Variants } from "framer-motion";

// --- MOTION VARIANTS ---

// Section Header Blueprint Line
const drawLineX: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: {
      duration: 1.2,
      ease: [0.25, 1, 0.5, 1] as [number, number, number, number],
    },
  },
};

// Project Container (Fades in place per card)
const projectContainerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
      staggerChildren: 0.15, // Stagger image vs specs
    },
  },
};

// Inner Blocks: Smoothly glide up and fade in
const childVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.1, // Matching your Experience timing
      ease: [0.25, 1, 0.5, 1] as [number, number, number, number],
    },
  },
};

export default function Projects() {
  return (
    <section id="projects" className="w-full py-20 border-b structural-border">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header with Self-Drawing Blueprint Line */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -80px 0px" }} // Trigger once when the section is 80px into view
          className="flex items-center gap-4 mb-16"
        >
          <motion.h2
            variants={childVariants}
            className="font-mono text-sm tracking-widest text-graphite-light uppercase shrink-0"
          >
            02 // Engineering Projects
          </motion.h2>
          <motion.div
            variants={drawLineX}
            className="flex-grow h-[1px] bg-graphite/30 origin-left"
          />
        </motion.div>

        {/* Projects Container */}
        <div className="flex flex-col gap-16 md:gap-24">
          {PORTFOLIO_DATA.projects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={project.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "0px 0px -180px 0px" }} // Triggers per card on scroll
                variants={projectContainerVariants}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 group`}
              >

                {/* Visual / Image Block */}
                <motion.div
                  variants={childVariants}
                  className="w-full lg:w-7/12 relative aspect-[4/3] lg:aspect-[3/2] structural-border bg-paper-dark"
                >
                  <GalleryBlock images={project.images} />
                </motion.div>

                {/* Text / Data Block */}
                <motion.div
                  variants={childVariants}
                  className="w-full lg:w-5/12 flex flex-col justify-center"
                >

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

                </motion.div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}