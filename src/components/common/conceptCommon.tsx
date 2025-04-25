"use client";

import React, { useEffect, useRef, useState } from "react";

interface ConceptsSectionProps {
  items: string[];
}

export default function ConceptsCommon({ items }: ConceptsSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scaleX, setScaleX] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setScaleX(0.9);
        } else {
          setScaleX(0);
        }
      },
      { threshold: 1 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <>
      {/* Desktop Version */}
      <section
        ref={sectionRef}
        className="hidden md:block relative bg-white py-14 px-20"
      >
        <div className="container w-full mx-auto relative">
          {/* Connecting Line */}
          <div
            className="absolute h-1 bg-[#f37458] z-0 transition-transform duration-[900ms] ease-[cubic-bezier(0.68,0.55,0.27,0.55)] origin-left"
            style={{
              left: `calc((100% / ${items.length}) * 0.5)`,
              width: `calc((100% / ${items.length}) * ${items.length - 0.5})`,
              top: "calc(50% - 1.9rem)",
              transform: `scaleX(${scaleX})`,
            }}
          />

          {/* Items */}
          <div className={`grid grid-cols-${items.length} gap-4 relative z-10`}>
            {items.map((text, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center space-y-4 relative"
              >
                {idx % 2 !== 0 && (
                  <p className="text-[#334155] font-semibold leading-tight absolute -top-12 w-full">
                    {text}
                  </p>
                )}
                {/* Diamond */}
                <div className="relative w-10 h-10 rotate-45 border-2 border-gray-700 bg-white flex items-center justify-center z-10">
                  <div className="w-6 h-6 bg-[#f37458] rounded-sm"></div>
                </div>
                {idx % 2 === 0 && (
                  <p className="text-[#334155] font-semibold leading-tight">
                    {text}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Version */}
      <section className="block md:hidden bg-white py-3 px-4">
        <div className="space-y-4">
          {items.map((text, idx) => (
            <div key={idx} className="flex text-nowrap items-center gap-4">
              <div className="min-w-5 min-h-5 rotate-45 border-2 border-gray-700 bg-white flex items-center justify-center">
                <div className="w-3 h-3 bg-[#f37458] rounded-sm"></div>
              </div>
              <p className="text-[#334155] text-sm">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
