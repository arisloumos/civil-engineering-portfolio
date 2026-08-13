"use client";

import { useState } from "react";
import { PORTFOLIO_DATA } from "@/data";
import { MapPin, ImageIcon, ChevronDown, ChevronUp } from "lucide-react";
import GalleryBlock from "./GalleryBlock";

export default function Experience() {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set()
  );

  const [galleryIndexes, setGalleryIndexes] = useState<Record<string, number>>(
    {}
  );

  const toggleGallery = (id: string) => {
    const newSet = new Set(expandedSections);

    if (newSet.has(id)) {
      newSet.delete(id);
    } else {
      newSet.add(id);
    }

    setExpandedSections(newSet);
  };

  const updateGalleryIndex = (id: string, index: number) => {
    setGalleryIndexes((prev) => ({
      ...prev,
      [id]: index,
    }));
  };

  return (
    <section id="record" className="w-full py-20 border-b structural-border">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <h2 className="font-mono text-sm tracking-widest text-graphite-light uppercase">
            01 // Professional Record
          </h2>

          <div className="flex-grow h-[1px] bg-graphite/20" />
        </div>

        {/* Experience List */}
        <div className="flex flex-col border-t border-l border-r structural-border">

          {PORTFOLIO_DATA.experience.map((exp, index) => {
            const isExpanded = expandedSections.has(exp.id);
            const currentGalleryIndex = galleryIndexes[exp.id] ?? 0;
            const hasImages = !!(exp.images && exp.images.length > 0);

            return (
              <div
                key={exp.id}
                className={`
                  grid grid-cols-1 lg:grid-cols-12
                  gap-6
                  p-6 md:p-8
                  border-b structural-border
                  transition-colors
                  group
                  ${
                    index % 2 === 0
                      ? "bg-transparent hover:bg-paper-dark/30"
                      : "bg-black/[0.01] hover:bg-paper-dark/30"
                  }
                `}
              >

                {/* ===================================================== */}
                {/* COLUMN 1 — YEAR */}
                {/* ===================================================== */}

                <div className="lg:col-span-2 pt-1">
                  <span className="font-mono text-xs tracking-widest text-graphite-light">
                    [{exp.year}]
                  </span>
                </div>


                {/* ===================================================== */}
                {/* COLUMN 2 — ROLE / COMPANY / LOCATION / LOGO */}
                {/* ===================================================== */}

                <div className="lg:col-span-4 flex flex-col gap-2 pt-1">

                  <h3 className="font-sans text-xl font-bold text-graphite leading-tight uppercase">
                    {exp.role}
                  </h3>

                  <div className="flex flex-col gap-1">

                    <span className="font-mono text-sm text-blueprint font-medium uppercase">
                      {exp.company}
                    </span>

                    <div className="flex items-center gap-1.5 text-graphite-light mt-1">
                      <MapPin
                        className="w-3.5 h-3.5"
                        strokeWidth={1.5}
                      />

                      <span className="font-mono text-xs tracking-wide">
                        {exp.location}
                      </span>
                    </div>

                  </div>

                  {exp.logo && (
                    <div className="w-32 h-20 mt-4 flex items-center justify-start">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        className="max-w-full max-h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                  )}

                </div>


                {/* ===================================================== */}
                {/* COLUMN 3 — CONTENT / GALLERY */}
                {/* ===================================================== */}

                <div className="lg:col-span-6 pt-1">

                  {/* ================================================= */}
                  {/* TOGGLE — ALWAYS STAYS AT THE TOP                  */}
                  {/* ================================================= */}

                  {hasImages && (
                    <button
                      onClick={() => toggleGallery(exp.id)}
                      className="
                        flex
                        items-center
                        gap-2
                        font-mono
                        text-[10px]
                        tracking-widest
                        text-graphite-light
                        hover:text-blueprint
                        transition-colors
                        w-fit
                        border-b
                        border-transparent
                        hover:border-blueprint
                        pb-1
                        uppercase
                        mb-5
                      "
                    >
                      <ImageIcon
                        className="w-3.5 h-3.5"
                        strokeWidth={1.5}
                      />

                      {isExpanded ? "HIDE PHOTOS" : "VIEW PHOTOS"}

                      {isExpanded ? (
                        <ChevronUp
                          className="w-3 h-3"
                          strokeWidth={1.5}
                        />
                      ) : (
                        <ChevronDown
                          className="w-3 h-3"
                          strokeWidth={1.5}
                        />
                      )}
                    </button>
                  )}


                  {/* ================================================= */}
                  {/* CLOSED STATE                                      */}
                  {/* ================================================= */}

                  {!isExpanded || !hasImages ? (

                    <div className="flex flex-col">

                      {/* Achievements */}

                      <ul className="flex flex-col gap-3">
                        {exp.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-graphite-light text-sm md:text-base leading-relaxed"
                          >
                            <span className="font-mono text-blueprint mt-0.5">
                              +
                            </span>

                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>


                      {/* Tools */}

                      <div className="flex flex-wrap gap-2 mt-6">

                        <span className="font-mono text-xs text-graphite-light flex items-center mr-2">
                          TOOLS:
                        </span>

                        {exp.tools.map((tool, i) => (
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

                    </div>

                  ) : (

                    /* ================================================= */
                    /* OPEN STATE — GALLERY                            */
                    /* ================================================= */

                    <div className="animate-gallery-open">

                      {/* Gallery Header */}

                      <div className="flex items-center justify-between mb-3">

                        <span className="font-mono text-[9px] tracking-[0.2em] text-graphite-light uppercase">
                          PROJECT IMAGES
                        </span>

                        <span className="font-mono text-[10px] tracking-[0.18em] text-graphite-light tabular-nums">
                          <span className="text-graphite">
                            {String(currentGalleryIndex + 1).padStart(2, "0")}
                          </span>

                          <span className="mx-1 text-black/30">
                            /
                          </span>

                          <span className="text-black/40">
                            {String(exp.images.length).padStart(2, "0")}
                          </span>
                        </span>

                      </div>


                      {/* Gallery */}

                      <div className="w-full flex justify-center items-start">

                        <div
                          className="
                            w-full
                            aspect-[4/5]
                            lg:w-auto
                            lg:h-[min(520px,60vh)]
                            lg:aspect-[4/5]
                            shrink-0
                            structural-border
                            relative
                            overflow-hidden
                            bg-paper-dark
                          "
                        >
                          <GalleryBlock
                            images={exp.images}
                            disableGrayscale={true}
                            onIndexChange={(index) =>
                              updateGalleryIndex(exp.id, index)
                            }
                          />
                        </div>

                      </div>

                    </div>
                  )}

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}