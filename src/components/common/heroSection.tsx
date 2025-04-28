"use client";

import { CourseBannerProps } from "@/src/types";
import { Download, MoveRight } from "lucide-react";
import Link from "next/link";

export default function CourseBanner({
  title,
  highlight,
  description,
  features,
}: Readonly<CourseBannerProps>) {
  return (
    <section className="relative bg-gradient-to-br from-[#fff6f2] to-[#fdeae2] py-28 px-6 md:px-16 overflow-hidden">
      <div className="absolute -top-20 -left-10 w-96 h-96 bg-[#fca78c] opacity-30 blur-[100px] rounded-full z-0" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#fca78c] opacity-20 blur-[120px] rounded-full z-0" />
      <div className="absolute top-32 left-20 w-32 h-32 border-2 border-[#fca78c] rounded-full opacity-20 z-0" />
      <div className="absolute bottom-28 left-24 w-20 h-20 bg-[#fca78c] rounded-xl rotate-12 opacity-20 z-0" />
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold leading-tight text-[#1c1c1c] mb-6">
          {title} <span className="text-[#f37458]">{highlight}</span>
        </h2>

        <p className="text-[#4a4a4a] text-lg md:text-xl mb-10 max-w-3xl mx-auto">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
          <Link href="/contactUs" className="inline-flex items-center px-6 py-3 bg-gradient-to-r border border-gray-300 from-orange-400 to-purple-400 text-white cursor-pointer hover:shadow-lg font-semibold rounded-full duration-200">
            <MoveRight size={18} className="mr-2" />
            Get Started
          </Link>
          <button className="flex items-center justify-center gap-2 px-6 py-3 border border-[#f37458] text-[#f37458] bg-white font-semibold rounded-full transition-all duration-300 hover:bg-[#fff0eb] shadow-sm">
            <Download size={18} />
            <span className="text-base">Curriculum</span>
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          {features.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 flex items-center justify-center bg-[#f7846f1a] rounded-full shadow-sm">
                {item.icon}
              </div>
              <div className="text-lg font-semibold text-[#333]">
                {item.title}
              </div>
              <div className="text-sm text-[#4a4a4a]">{item.subtitle}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
