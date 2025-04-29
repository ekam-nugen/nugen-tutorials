"use client";

import React from "react";
import Image from "next/image";
import { FeaturesSectionProps } from "@/src/types";
export default function FeaturesSection({
  title = "Course",
  highlight = "Features",
  subtitle = "About",
  description,
  imageSrc,
  features,
}: Readonly<FeaturesSectionProps>) {
  return (
    <section className="bg-gradient-to-r from-white via-[#fff1eb] to-white py-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-start gap-12">
        {/* Left Section */}
        <div className="lg:w-1/2">
          {subtitle && (
            <h4 className="uppercase text-sm tracking-widest text-black mb-2">
              {subtitle}
            </h4>
          )}
          <h2 className="text-4xl font-bold text-[#f37458] mb-4">
            <span className="text-black">{title}</span> {highlight}
          </h2>
          {description && (
            <p className="text-gray-600 leading-relaxed mb-6">{description}</p>
          )}
          {imageSrc && (
            <Image
              width={500}
              height={500}
              src={imageSrc}
              alt="Feature illustration"
              className="w-full max-w-lg object-contain"
            />
          )}
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map(({ icon: Icon, title, description }, idx) => (
            <div
              key={idx}
              className="group bg-white hover:bg-[#fff1eb] hover:shadow-lg transition-all duration-300 ease-in-out rounded-xl p-5 hover:border hover:border-[#f37458] flex gap-4 items-start relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-full rounded-xl bg-gradient-radial from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
              <div className="bg-white rounded-full shadow-md p-3 transition duration-300 group-hover:bg-white group-hover:shadow-none">
                <Icon className="w-6 h-6 text-[#f37458]" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 text-lg">{title}</h3>
                <p className="text-gray-500 text-sm mt-1">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
