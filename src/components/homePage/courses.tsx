"use client";
import { data } from "@/src/json/courses";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

type DataType = typeof data;
type Category = keyof DataType;

export default function TechnologyShowcase() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<Category>(
    Object.keys(data)[0] as Category
  );

  const programs = data[selectedCategory];

  return (
    <div className="bg-gradient-to-br from-white via-[#fff9f7] to-[#ffece4] min-h-screen p-4 md:p-6 lg:p-12">
      <h1 className="text-3xl md:text-5xl font-extrabold text-center mb-8 md:mb-12 text-[#1f1f1f]">
        Explore Our <span className="text-[#ff6b3d]">Top Programs</span>
      </h1>

      {/* Scrollable Category Tabs */}
      <div className="overflow-x-auto hide-scrollbar mb-10">
        <div className="flex gap-4 md:gap-6 w-max px-1">
          {Object.keys(data).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category as Category)}
              className={`cursor-pointer whitespace-nowrap px-5 py-2.5 rounded-full border font-semibold transition-all ${
                selectedCategory === category
                  ? "border-[#ff6b3d]/50 bg-[#fff5f0] text-orange-600"
                  : "bg-white text-gray-800 border-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Animated Grid Wrapper */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {programs?.map((program) => (
            <div
              key={program.name}
              className="flex flex-col justify-between bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-transform duration-300 hover:scale-[1.02] hover:border-[#ff6b3d]/50 hover:bg-[#fff5f0]"
            >
              <div className="relative">
                <div className="h-40 w-full mb-5 rounded-xl overflow-hidden shadow-sm">
                  <Image
                    src={program.image}
                    alt={program.name}
                    width={500}
                    height={500}
                    className="object-cover h-full w-full"
                  />
                </div>
                <h2 className="text-sm font-semibold text-[#1f1f1f] mb-2 leading-snug line-clamp-2">
                  {program.name}
                </h2>
                <p className="text-sm text-gray-600 mb-1">
                  <strong>Duration:</strong> {program.duration}
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  <strong>Cohort Starts:</strong> {program.startDate}
                </p>
              </div>
              {/* Active Users Section */}
              <div className="flex justify-center pb-2">
                <div className="flex items-center gap-0.5 bg-[#fff5f0] text-[#ff6b3d] text-[10px] font-medium px-2 py-0.5 rounded-full border border-[#ff6b3d]/40 shadow-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.25}
                    stroke="currentColor"
                    className="w-3 h-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25v-1.125A2.625 2.625 0 017.125 16.5h9.75a2.625 2.625 0 012.625 2.625v1.125"
                    />
                  </svg>
                  {program.activeUsers} Active Enrollments
                </div>
              </div>
              <button
                onClick={() =>
                  "id" in program &&
                  router.push(`/explore-programs/${program.id}`)
                }
               className="cursor-pointer w-full py-2.5 bg-[#ff6b3d] text-white font-semibold rounded-lg hover:bg-[#ff5c2a] transition-all shadow-md">
                View Program
              </button>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
