"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, PenTool } from "lucide-react";

interface GalleryBlockProps {
  images: string[];
  disableGrayscale?: boolean; // <--- We added this switch
}

export default function GalleryBlock({ images, disableGrayscale = false }: GalleryBlockProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const handleNext = () => setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  const handlePrev = () => setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  const currentImage = images[currentIndex];
  const isPlaceholder = currentImage.includes("placeholder");

  return (
    <div className="relative w-full h-full flex group bg-paper-dark overflow-hidden">
      
      {isPlaceholder ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-graphite text-paper/50">
          <div className="absolute inset-0 opacity-20" style={{ 
            backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
            backgroundSize: '24px 24px' 
          }}></div>
          <PenTool className="w-12 h-12 mb-4 opacity-50" strokeWidth={1} />
          <p className="font-mono text-xs tracking-widest z-10">SYS.IMG // PENDING</p>
        </div>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img 
          key={currentImage} 
          src={currentImage} 
          alt={`Technical view ${currentIndex + 1}`}
          // We apply grayscale conditionally based on the new prop!
          className={`object-cover w-full h-full transition-all duration-500 ${
            disableGrayscale ? '' : 'grayscale group-hover:grayscale-0'
          }`}
        />
      )}

      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-paper m-2 opacity-50 z-10"></div>
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-paper m-2 opacity-50 z-10"></div>

      {images.length > 1 && (
        <div className="absolute bottom-0 left-0 w-full p-4 flex justify-between items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
          <div className="bg-graphite text-paper font-mono text-[10px] tracking-widest px-2 py-1 shadow-sm">
            IMG 0{currentIndex + 1}/0{images.length}
          </div>
          <div className="flex gap-1 shadow-sm">
            <button onClick={handlePrev} className="bg-paper text-graphite p-1.5 hover:bg-blueprint hover:text-paper border structural-border transition-colors cursor-pointer">
              <ChevronLeft className="w-4 h-4" strokeWidth={1.5} />
            </button>
            <button onClick={handleNext} className="bg-paper text-graphite p-1.5 hover:bg-blueprint hover:text-paper border structural-border transition-colors cursor-pointer">
              <ChevronRight className="w-4 h-4" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}