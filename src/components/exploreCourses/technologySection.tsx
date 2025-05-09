import React, { useEffect } from "react";
import Link from "next/link";
import { techTags } from "./languageSection";
import { initializeCanvas } from "@/lib/utils";

export const TechnologySection = () => {
  const sectionRef = React.useRef<HTMLElement>(null);

  useEffect(() => {
    initializeCanvas(sectionRef);
  }, [sectionRef]);
  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-r from-white via-[#fff1eb] cursor-pointer to-white px-4 py-10 flex flex-col items-center"
    >
      <canvas
        id="canvas"
        className="absolute inset-0 z-0 pointer-events-none"
      />
      <div className="w-full max-w-6xl text-center">
        <h2 className="text-lg sm:text-xl md:text-2xl text-[#ffbb9f] font-semibold mb-2">
          Nugen I.T Courses
        </h2>
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-black font-extrabold leading-tight">
          Launch Your Tech Career with <br />
          Industry-Focused Development Courses
        </h1>

        <div className="flex flex-wrap justify-center gap-4 mt-10">
          {techTags.map((tag, index) => (
            <Link
              key={index}
              href="#technologies"
              className={`px-6 py-3 border-l-4 ${tag.color} text-gray-800 font-medium hover:bg-slate-100 rounded-lg transition-colors duration-200`}
            >
              {tag.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
