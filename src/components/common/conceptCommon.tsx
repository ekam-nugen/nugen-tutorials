"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import CoursesImage from "../../../public/clients/courses.svg";
interface ConceptsSectionProps {
  items: string[];
}

export default function ConceptsCommon({ items }: ConceptsSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scaleX, setScaleX] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const scrollStart = windowHeight * 0.2;
      const scrollEnd = windowHeight * 0.8;

      if (rect.bottom < scrollStart || rect.top > scrollEnd) {
        // OUTSIDE viewport -> No scale
        setScaleX(0);
      } else {
        const totalHeight = scrollEnd - scrollStart;
        const scrolled = Math.min(
          Math.max(scrollEnd - rect.top, 0),
          totalHeight
        );
        const progress = scrolled / totalHeight;

        // Step-wise scaling
        const steps = items.length - 0.5;
        const stepProgress = 1 / steps;
        const snappedProgress =
          Math.ceil(progress / stepProgress) * stepProgress;

        setScaleX(Math.min(snappedProgress, 0.9));
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [items.length]);

  return (
    <>
      {/* Desktop Version */}
      <section
        ref={sectionRef}
        className="hidden lg:block relative bg-white py-16 pl-6 pr-20 "
      >
        <div className="container w-full mx-auto relative">
          {/* Connecting Line */}
          <div
            className="absolute h-1 bg-[#f37458] z-0 transition-transform duration-300 ease-out origin-left"
            style={{
              left: `calc((100% / ${items.length}) * 0.7)`,
              width: `calc((100% / ${items.length}) * ${items.length - 0.39})`,
              top: "calc(50% - 2.12rem)",
              transform: `scaleX(${scaleX})`,
            }}
          />

          {/* Items */}
          <div className="flex flex-row justify-evenly items-start gap-4 relative z-10">
            {items.map((text, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center space-y-3 min-w-28"
              >
                {idx % 2 !== 0 && (
                  <p className="text-[#334155] font-semibold leading-tight absolute -top-16 w-56 text-pretty">
                    {text}
                  </p>
                )}
                {/* Diamond */}
                <div className="relative w-10 h-10 rotate-45 border-2 border-gray-700 bg-white flex items-center justify-center z-10">
                  <div className="w-6 h-6 bg-[#f37458] rounded-sm rotate-0"></div>
                </div>
                {idx % 2 === 0 && (
                  <p className="text-[#334155] font-semibold leading-tight mt-3 w-56">
                    {text}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Version */}
      <section className="block lg:hidden bg-white px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-center space-x-1 md:space-x-14 pl-1 md:pl-6">
          <div className="flex flex-col px-16 md:px-2 gap-4 md:gap-6">
            {items.map((text, idx) => (
              <div key={idx} className="flex text-nowrap items-center gap-4 ">
                <div className="min-w-5 min-h-5 md:w-8 md:h-8 rotate-45 border-2 border-gray-700 bg-white flex items-center justify-center">
                  <div className="w-3 h-3 md:w-5 md:h-5 bg-[#f37458] rounded-sm"></div>
                </div>
                <p className="text-[#334155] text-sm md:text-md font-semibold">
                  {text}
                </p>
              </div>
            ))}
          </div>

          {/* Image Section */}
          <div className="relative h-80 md:h-[28rem] w-full md:w-1/2">
            <Image
              src={CoursesImage}
              width={100}
              height={100}
              alt={"Courses"}
              className={
                "w-full h-full object-contain rounded-xl transition-opacity duration-500 ease-in-out"
              }
            />
          </div>
        </div>
      </section>
    </>
  );
}
