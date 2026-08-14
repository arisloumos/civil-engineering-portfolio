"use client";

import { PORTFOLIO_DATA } from "@/data";
import { GraduationCap, Wrench, BookOpen, Presentation, Globe } from "lucide-react";
import { motion, Variants } from "framer-motion";

// --- MOTION VARIANTS ---
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

const gridContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
      staggerChildren: 0.12,
    },
  },
};

const childVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.0,
      ease: [0.25, 1, 0.5, 1] as [number, number, number, number],
    },
  },
};

export default function Credentials() {
  return (
    <section id="credentials" className="w-full py-20 border-b structural-border-color">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -80px 0px" }}
          className="flex items-center gap-4 mb-12"
        >
          <motion.h2
            variants={childVariants}
            className="font-mono text-sm tracking-widest text-graphite-light uppercase shrink-0"
          >
            03 // Qualifications & Credentials
          </motion.h2>

          <motion.div
            variants={drawLineX}
            className="grow h-px bg-graphite/30 origin-left"
          />
        </motion.div>

        {/* 2-Column Structural Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "0px 0px -150px 0px" }}
          variants={gridContainerVariants}
          className="grid grid-cols-1 lg:grid-cols-12 gap-0 border structural-border-color"
        >

          {/* LEFT COLUMN */}
          <div className="lg:col-span-7 border-b lg:border-b-0 lg:border-r structural-border-color flex flex-col">

            {/* 1. Education Block */}
            <motion.div variants={childVariants} className="p-8 md:p-12 border-b structural-border-color grow flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-8">
                <GraduationCap className="w-5 h-5 text-blueprint" strokeWidth={1.5} />
                <h3 className="font-mono text-sm tracking-widest text-graphite uppercase">
                  Academic Background
                </h3>
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
            </motion.div>

            {/* 2. Specialized Training Block (COMPACT & CLEAN) */}
            <motion.div variants={childVariants} className="p-8 md:p-12 border-b structural-border-color grow flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-8">
                <BookOpen className="w-4 h-4 text-blueprint" strokeWidth={1.5} />
                <h3 className="font-mono text-sm tracking-widest text-graphite uppercase">
                  Specialized Training
                </h3>
              </div>

              <div className="flex flex-col gap-5">
                {PORTFOLIO_DATA.training.map((trn) => (
                  <div key={trn.id} className="flex flex-col gap-1 group">
                    <div className="flex justify-between items-start gap-4">
                      <h4 className="font-sans text-sm font-bold text-graphite uppercase leading-tight group-hover:text-blueprint transition-colors">
                        {trn.title}
                      </h4>
                      <span className="font-mono text-[10px] tracking-widest text-graphite-light whitespace-nowrap mt-0.5">
                        [{trn.period}]
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-2 font-mono text-[10px] text-graphite-light uppercase">
                      <span>{trn.institution}</span>
                      <span className="text-graphite/30">|</span>
                      <span className="text-blueprint">{trn.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* 3. Conferences Block (COMPACT & CLEAN) */}
            <motion.div variants={childVariants} className="p-8 md:p-12 grow flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-5">
                <Presentation className="w-4 h-4 text-blueprint" strokeWidth={1.5} />
                <h3 className="font-mono text-sm tracking-widest text-graphite uppercase">
                  Engagement & Conferences
                </h3>
              </div>

              <div className="flex flex-col gap-3">
                {PORTFOLIO_DATA.conferences.map((conf) => (
                  <div key={conf.id} className="flex flex-col group">
                    <div className="flex justify-between items-start gap-4">
                      <h4 className="font-sans text-sm font-bold text-graphite uppercase leading-tight group-hover:text-blueprint transition-colors">
                        {conf.title}
                      </h4>
                      <span className="font-mono text-[10px] tracking-widest text-graphite-light whitespace-nowrap mt-0.5">
                        [{conf.period}]
                      </span>
                    </div>

                    {conf.role && (
                      <span className="font-mono text-[10px] tracking-widest text-blueprint uppercase mt-0.5">
                        ROLE: {conf.role}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
            
          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-5 flex flex-col">

            {/* 1. Technical Toolkit Block */}
            <motion.div variants={childVariants} className="p-8 md:p-12 border-b structural-border-color">
              <div className="flex items-center gap-3 mb-8">
                <Wrench className="w-4 h-4 text-blueprint" strokeWidth={1.5} />
                <h3 className="font-mono text-sm tracking-widest text-graphite uppercase">
                  Technical Toolkit
                </h3>
              </div>

              <div className="flex flex-col gap-7">
                {PORTFOLIO_DATA.toolkit.map((category, index) => (
                  <div key={index} className="flex flex-col gap-3">
                    <div className="border-b structural-border-color pb-2">
                      <span className="font-mono text-[11px] tracking-widest text-graphite-light uppercase">
                        {category.category}
                      </span>
                    </div>
                    {/* Skill chips */}
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, i) => (
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
                            text-graphite/70
                            bg-paper
                            transition-all
                            duration-200
                            hover:bg-graphite
                            hover:text-paper
                            hover:border-graphite
                          "
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* 2. Languages Block */}
            <motion.div variants={childVariants} className="p-8 md:p-12">
              <div className="flex items-center gap-3 mb-8">
                <Globe className="w-4 h-4 text-blueprint" strokeWidth={1.5} />
                <h3 className="font-mono text-sm tracking-widest text-graphite uppercase">
                  Languages
                </h3>
              </div>

              <div className="flex flex-col gap-4">
                {PORTFOLIO_DATA.languages.map((lang, index) => (
                  <div key={index} className="flex justify-between items-center border-b structural-border-color pb-2 group">
                    <span className="font-sans text-sm font-bold text-graphite uppercase group-hover:text-blueprint transition-colors">
                      {lang.language}
                    </span>
                    <span className="font-mono text-[11px] tracking-widest text-graphite-light uppercase">
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}