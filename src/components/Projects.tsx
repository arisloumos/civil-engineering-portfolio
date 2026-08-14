"use client";

import { PORTFOLIO_DATA } from "@/data";
import { ArrowUpRight } from "lucide-react";
import GalleryBlock from "./GalleryBlock";
import { motion, Variants } from "framer-motion";
import { useState } from "react";

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

// Project Container
const projectContainerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
      staggerChildren: 0.15,
    },
  },
};

// Inner Blocks
const childVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.1,
      ease: [0.25, 1, 0.5, 1] as [number, number, number, number],
    },
  },
};

export default function Projects() {
  const [galleryIndexes, setGalleryIndexes] = useState<Record<string, number>>(
    {}
  );

  const updateGalleryIndex = (id: string, index: number) => {
    setGalleryIndexes((prev) => ({
      ...prev,
      [id]: index,
    }));
  };

  return (
    <section
      id="projects"
      className="w-full py-20 border-b structural-border"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -180px 0px" }}
          className="flex items-center gap-4 mb-12"
        >
          <motion.h2
            variants={childVariants}
            className="font-mono text-sm tracking-widest text-graphite-light uppercase shrink-0"
          >
            02 // Engineering Projects
          </motion.h2>

          <motion.div
            variants={drawLineX}
            className="grow h-px bg-graphite/30 origin-left"
          />
        </motion.div>

        {/* Projects Container */}
        <div className="flex flex-col gap-12 md:gap-20">
          {PORTFOLIO_DATA.projects.map((project, index) => {
            const isEven = index % 2 === 0;
            const currentGalleryIndex = galleryIndexes[project.id] ?? 0;

            return (
              <motion.div
                key={project.id}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: false,
                  margin: "0px 0px -180px 0px",
                }}
                variants={projectContainerVariants}
                className={`
                  flex flex-col
                  ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}
                  gap-8 lg:gap-12
                  group
                `}
              >

                {/* =====================================================
                    MOBILE LAYOUT
                    ===================================================== */}

                <div className="lg:hidden flex flex-col">

                  {/* Mobile Project Divider */}
                  {index > 0 && (
                    <div className="h-px w-full bg-graphite/20 mb-6" />
                  )}

                  {/* Title */}
                  <h3
                    className="
                      text-2xl
                      font-bold
                      text-graphite
                      mb-3
                      leading-tight
                      uppercase
                      tracking-tight
                      group-hover:text-blueprint
                      transition-colors
                    "
                  >
                    {project.title}
                  </h3>

                  {/* Project Metadata */}
                  <div className="flex items-center gap-3 mb-6">
                    <span
                      className="
                        font-mono
                        text-[10px]
                        tracking-widest
                        px-2
                        py-1
                        bg-graphite
                        text-paper
                        uppercase
                      "
                    >
                      {project.type}
                    </span>

                    <span
                      className="
                        font-mono
                        text-[10px]
                        tracking-widest
                        text-graphite-light
                        uppercase
                      "
                    >
                      // {project.methodology}
                    </span>
                  </div>

                  {/* Image */}
                  <div
                    className="
                      w-full
                      aspect-5/4
                      shrink-0
                      structural-border
                      relative
                      overflow-hidden
                      bg-paper-dark
                      mb-6
                    "
                  >
                    <GalleryBlock
                      images={project.images}
                      disableGrayscale={false}
                      onIndexChange={(index) =>
                        updateGalleryIndex(project.id, index)
                      }
                    />

                    {/* Gallery Counter */}
                    <div className="absolute bottom-4 left-4 z-10 px-2 py-1">
                      <span className="font-mono text-[10px] tracking-[0.18em] tabular-nums text-graphite">
                        <span className="text-paper/90">
                          {String(currentGalleryIndex + 1).padStart(2, "0")}
                        </span>

                        <span className="mx-1 text-paper/65">/</span>

                        <span className="text-paper/65">
                          {String(project.images.length).padStart(2, "0")}
                        </span>
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p
                    className="
                      text-graphite-light
                      text-sm
                      leading-relaxed
                      mb-7
                    "
                  >
                    {project.description}
                  </p>

                  {/* Tools / Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    <span
                      className="
                        font-mono
                        text-xs
                        text-graphite-light
                        flex
                        items-center
                        mr-2
                      "
                    >
                      TOOLS:
                    </span>

                    {project.tools.map((tool, i) => (
                      <span
                        key={i}
                        className="
                          font-mono
                          text-[10px]
                          uppercase
                          tracking-widest
                          px-2
                          py-1
                          structural-border
                          text-graphite-light
                          bg-paper
                        "
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  {/* Call to Action */}
                  <button
                    type="button"
                    className="
                      flex
                      items-center
                      gap-2
                      w-fit
                      border-b
                      border-graphite
                      pb-1
                      font-mono
                      text-xs
                      tracking-widest
                      text-graphite
                      hover:text-blueprint
                      hover:border-blueprint
                      transition-colors
                    "
                  >
                    VIEW SPECIFICATIONS

                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>

                {/* =====================================================
                    DESKTOP LAYOUT
                    ===================================================== */}

                {/* VISUAL / IMAGE BLOCK */}
                <motion.div
                  variants={childVariants}
                  className="
                    hidden
                    lg:block
                    lg:w-7/12
                    lg:flex-1
                    lg:h-[min(520px,60vh)]
                    lg:aspect-5/4
                    shrink-0
                    structural-border
                    relative
                    overflow-hidden
                    bg-paper-dark
                  "
                >
                  {/* Gallery Block */}
                  <GalleryBlock
                    images={project.images}
                    disableGrayscale={false}
                    onIndexChange={(index) =>
                      updateGalleryIndex(project.id, index)
                    }
                  />

                  {/* Gallery Counter */}
                  <div className="absolute bottom-4 left-4 z-10 px-2 py-1">
                    <span className="font-mono text-[10px] tracking-[0.18em] tabular-nums text-graphite">
                      <span className="text-paper/90">
                        {String(currentGalleryIndex + 1).padStart(2, "0")}
                      </span>
                      <span className="mx-1 text-paper/65">/</span>
                      <span className="text-paper/65">
                        {String(project.images.length).padStart(2, "0")}
                      </span>
                    </span>
                  </div>
                </motion.div>

                {/* TEXT / DATA BLOCK */}
                <motion.div
                  variants={childVariants}
                  className="
                    hidden
                    lg:flex
                    lg:w-5/12
                    flex-col
                    justify-center
                  "
                >

                  {/* Project Metadata */}
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="
                        font-mono
                        text-[10px]
                        tracking-widest
                        px-2
                        py-1
                        bg-graphite
                        text-paper
                        uppercase
                      "
                    >
                      {project.type}
                    </span>

                    <span
                      className="
                        font-mono
                        text-[10px]
                        tracking-widest
                        text-graphite-light
                        uppercase
                      "
                    >
                      // {project.methodology}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="
                      text-2xl
                      md:text-3xl
                      font-bold
                      text-graphite
                      mb-4
                      leading-tight
                      uppercase
                      tracking-tight
                      group-hover:text-blueprint
                      transition-colors
                    "
                  >
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="
                      text-graphite-light
                      text-sm
                      md:text-base
                      leading-relaxed
                      mb-8
                    "
                  >
                    {project.description}
                  </p>

                  {/* Tools / Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    <span
                      className="
                        font-mono
                        text-xs
                        text-graphite-light
                        flex
                        items-center
                        mr-2
                      "
                    >
                      TOOLS:
                    </span>

                    {project.tools.map((tool, i) => (
                      <span
                        key={i}
                        className="
                          font-mono
                          text-[10px]
                          uppercase
                          tracking-widest
                          px-2
                          py-1
                          structural-border
                          text-graphite-light
                          bg-paper
                          transition-all
                          duration-200
                          hover:bg-graphite
                          hover:text-paper
                          hover:border-graphite
                        "
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  {/* Call to Action */}
                  <button
                    type="button"
                    className="
                      flex
                      items-center
                      gap-2
                      w-fit
                      border-b
                      border-graphite
                      pb-1
                      font-mono
                      text-xs
                      tracking-widest
                      text-graphite
                      hover:text-blueprint
                      hover:border-blueprint
                      transition-colors
                    "
                  >
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