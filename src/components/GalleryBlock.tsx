"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, PenTool } from "lucide-react";

interface GalleryBlockProps {
  images: string[];
  disableGrayscale?: boolean;
  onIndexChange?: (index: number) => void;
}

export default function GalleryBlock({
  images,
  disableGrayscale = false,
  onIndexChange,
}: GalleryBlockProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const handleNext = () => {
    const nextIndex =
      currentIndex === images.length - 1 ? 0 : currentIndex + 1;

    setCurrentIndex(nextIndex);
    onIndexChange?.(nextIndex);
  };

  const handlePrev = () => {
    const previousIndex =
      currentIndex === 0 ? images.length - 1 : currentIndex - 1;

    setCurrentIndex(previousIndex);
    onIndexChange?.(previousIndex);
  };

  const currentImage = images[currentIndex];
  const isPlaceholder = currentImage.includes("placeholder");

  return (
    <div className="relative w-full h-full flex group bg-paper-dark overflow-hidden">

      {/* IMAGE */}
      {isPlaceholder ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-graphite text-paper/50">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          <PenTool
            className="w-12 h-12 mb-4 opacity-50"
            strokeWidth={1}
          />

          <p className="font-mono text-xs tracking-widest z-10">
            IMG // PENDING
          </p>
        </div>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={currentImage}
          src={currentImage}
          alt={`Technical view ${currentIndex + 1}`}
          className={`object-cover w-full h-full ${
            disableGrayscale
              ? ""
              : "grayscale group-hover:grayscale-0"
          }`}
        />
      )}

      {/* Technical corner marks */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-paper m-3 opacity-40 z-10" />

      <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-paper m-3 opacity-40 z-10" />

      {/* Navigation */}
      {images.length > 1 && (
        <div
          className="
            absolute
            bottom-4 right-4
            flex gap-1
            opacity-0
            group-hover:opacity-100
            transition-opacity duration-300
            z-20
          "
        >
          {/* Previous */}
          <button
            onClick={handlePrev}
            aria-label="Previous image"
            className="
              group/prev
              flex items-center justify-center
              w-8 h-8
              bg-paper/95
              text-graphite
              border border-black/15
              transition-all duration-200
              hover:bg-blueprint
              hover:text-paper
              hover:border-blueprint
              hover:scale-[1.1]
              cursor-pointer
            "
          >
            <ChevronLeft
              className="
                w-4 h-4
                transition-transform duration-200
                group-hover/prev:-translate-x-px
              "
              strokeWidth={1.5}
            />
          </button>

          {/* Next */}
          <button
            onClick={handleNext}
            aria-label="Next image"
            className="
              group/next
              flex items-center justify-center
              w-8 h-8
              bg-paper/95
              text-graphite
              border border-black/15
              transition-all duration-200
              hover:bg-blueprint
              hover:text-paper
              hover:border-blueprint
              hover:scale-[1.1]
              cursor-pointer
            "
          >
            <ChevronRight
              className="
                w-4 h-4
                transition-transform duration-200
                group-hover/next:translate-x-px
              "
              strokeWidth={1.5}
            />
          </button>
        </div>
      )}
    </div>
  );
}