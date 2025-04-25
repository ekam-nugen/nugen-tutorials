"use client";

import React from "react";
import Image from "next/image";
import { careers } from "@/src/json/opportunities";

  const CareerOpportunities = () => {
    return (
      <div className="py-12 px-8 bg-gradient-to-r from-white via-[#fff1eb] to-white">
        <h2 className="text-3xl font-bold text-center text-black mb-4">
          Career Opportunities
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
          Ever since the inception of the Internet in the 1990s, the area of web
          development has shown increasing growth. The simple algorithmic
          techniques have progressed to more intricate ones, for user-friendly
          experiences. Once you complete Nugen`s front-end developer course, you can
          seek job opportunities in the following roles:
        </p>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {careers.map((career) => (
            <div
              key={career.id}
              className="group relative w-full max-w-sm mx-auto h-80 perspective cursor-pointer"
            >
              {/* Card container */}
              <div className="relative w-full h-full transition-transform duration-500 transform-style-preserve-3d group-hover:rotate-y-180">
                {/* Front face */}
                <div className="absolute inset-0 bg-white rounded-xl shadow-xl p-4 flex flex-col items-center justify-center text-center backface-hidden">
                  <div className="relative w-24 h-24 mb-4">
                    <Image
                      src={career.img}
                      alt={career.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-full"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    {career.title}
                  </h3>
                  <p className="text-sm text-gray-600 px-2">
                    {career.description}
                  </p>
                </div>
  
                {/* Back face */}
                <div className="absolute inset-0 bg-gradient-to-br from-white via-[#fff1eb] to-white rounded-xl shadow-xl p-6 flex flex-col justify-center items-center text-center backface-hidden rotate-y-180">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">
                    Key Skills
                  </h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    {career.benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
  
        <style jsx>{`
          .perspective {
            perspective: 1000px;
          }
          .transform-style-preserve-3d {
            transform-style: preserve-3d;
          }
          .backface-hidden {
            backface-visibility: hidden;
          }
          .rotate-y-180 {
            transform: rotateY(180deg);
          }
        `}</style>
      </div>
    );
  };
  
  export default CareerOpportunities;

