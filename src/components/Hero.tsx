"use client";

import { PORTFOLIO_DATA } from "@/data";
import { ArrowDownRight, ArrowRight } from "lucide-react";
import { motion, Variants } from "framer-motion";

// --- MOTION VARIANTS ---
// --- MOTION VARIANTS ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24, // Softer travel distance matching Experience
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: [0.25, 1, 0.5, 1] as [number, number, number, number], // Silky smooth curve
    },
  },
};

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

const drawLineY: Variants = {
  hidden: { scaleY: 0 },
  visible: {
    scaleY: 1,
    transition: {
      duration: 1.2,
      ease: [0.25, 1, 0.5, 1] as [number, number, number, number],
    },
  },
};

export default function Hero() {
  const { personal } = PORTFOLIO_DATA;

  return (
    <motion.section
      id="home"
      className="w-full pt-20 pb-16 border-b structural-border overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Metadata Line (Drafting/Surveying feel) */}
        <div className="flex items-center gap-4 mb-12">
          {/* Animated X Line */}
          <motion.div
            variants={drawLineX}
            className="w-8 h-px bg-graphite/40 origin-left"
          />
          <motion.p variants={itemVariants} className="font-mono text-xs text-graphite-light tracking-widest uppercase">
            THESSALONIKI, GR // AUTH // 2023-2028
          </motion.p>
        </div>

        {/* Main Title Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">

          {/* Left Column: Name and Role */}
          <div className="lg:col-span-8">
            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-graphite leading-[1.05] mb-6">
              {personal.name.toUpperCase()}
            </motion.h1>
            <motion.h2 variants={itemVariants} className="font-mono text-lg md:text-xl text-blueprint tracking-wide uppercase">
              {personal.role}
            </motion.h2>
          </div>

          {/* Right Column: Profile Statement & Actions */}
          <div className="lg:col-span-4 pb-1">
            {/* The statement has a left border to look like a technical annotation */}
            <div className="relative pl-5 mb-8">
              {/* Animated Y Line (replaces standard border-l) */}
              <motion.div
                variants={drawLineY}
                className="absolute left-0 top-0 bottom-0 w-px bg-graphite/20 origin-top"
              />
              <motion.p variants={itemVariants} className="text-graphite-light leading-relaxed">
                {personal.statement}
              </motion.p>
            </div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
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
            </motion.div>
          </div>

        </div>
      </div>
    </motion.section>
  );
}