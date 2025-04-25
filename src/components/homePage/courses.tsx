"use client";
import { data } from "@/src/json/courses";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type DataType = typeof data;
type Category = keyof DataType;

export default function TechnologyShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<Category>(
    Object.keys(data)[0] as Category
  );

  const programs = data[selectedCategory];

  return (
    <div className="bg-gradient-to-br from-white via-[#fff9f7] to-[#ffece4] min-h-screen p-6 md:p-12">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-5xl font-extrabold text-center mb-14 text-[#1f1f1f]"
      >
        Explore Our <span className="text-[#ff6b3d]">Top Programs</span>
      </motion.h1>

      <div className="flex flex-col lg:flex-row gap-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/4 space-y-3"
        >
          {Object.keys(data).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category as Category)}
              className={`w-full text-left px-5 py-3 rounded-xl font-semibold transition-all border backdrop-blur-md shadow-sm hover:shadow-md hover:scale-[1.02] duration-300 ${
                selectedCategory === category
                  ? "bg-[#ffebe3] text-[#ff6b3d] border-[#ff6b3d]"
                  : "bg-white text-gray-800 border-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs?.map((program, i) => (
              <motion.div
                key={program.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                viewport={{ once: true, amount: 0.2 }}
                layout
                className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-transform duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:scale-[1.015] hover:border-[#ff6b3d]/40 hover:bg-[#fff6f2]"
              >
                <Image
                  width={500}
                  height={500}
                  src={program.image}
                  alt={program.name}
                  className="w-full h-40 object-cover rounded-lg mb-5 shadow-sm"
                />
                <h2 className="text-xl font-semibold text-[#1f1f1f] mb-3">
                  {program.name}
                </h2>
                <p className="text-sm text-gray-700 mb-1">
                  Duration:
                  <span className="font-medium">{program.duration}</span>
                </p>
                <p className="text-sm text-gray-700 mb-4">
                  Cohort Starts:
                  <span className="font-medium">{program.startDate}</span>
                </p>
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-full py-2 bg-[#ff6b3d] text-white font-semibold rounded-lg transition-all shadow-sm hover:shadow-md"
                >
                  View Program
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
