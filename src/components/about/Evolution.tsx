"use client";

import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion, AnimatePresence } from "framer-motion";
import { evoultionData } from "@/src/json/aboutUs/aboutUs";

const Evolution = () => {
  const [activeYear, setActiveYear] = useState(evoultionData[0].year);

  return (
    <div className="relative py-20 overflow-hidden bg-[#fff1eb]">
      {/* Overlay for Contrast */}
      <div className="absolute inset-0 bg-white bg-opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl font-semibold text-black mb-4">
            Our Evolution
          </h2>
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">
            A Decade of Driving Digital Excellence
          </h2>
          <h3 className="text-xl sm:text-2xl font-medium text-gray-600">
            2010-2024: From Humble Beginnings to Global Influence
          </h3>
        </motion.div>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Timeline */}
          <div className="relative w-full lg:w-1/3">
            <ul className="flex flex-row lg:flex-col space-x-8 lg:space-x-0 lg:space-y-12 items-center justify-around lg:justify-center">
              {evoultionData.map((milestone) => (
                <li key={milestone.year}>
                  <Tilt
                    tiltMaxAngleX={15}
                    tiltMaxAngleY={15}
                    glareEnable={true}
                    glareMaxOpacity={0.3}
                  >
                    <motion.button
                      onClick={() => setActiveYear(milestone.year)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className={`relative z-10 flex items-center justify-center w-20 h-20 lg:w-24 lg:h-24 rounded-full shadow-lg transition-all duration-300 cursor-pointer ${
                        activeYear === milestone.year
                          ? "bg-[#fff1eb] text-black border-4 border-white"
                          : "bg-white text-black border-2 border-[#fff1eb]"
                      } hover:bg-[#ffe8dc] hover:text-black hover:border-[#ffe8dc]`}
                    >
                      <span className="text-xl lg:text-2xl font-bold">
                        {milestone.year}
                      </span>
                      <motion.div
                        className="absolute -top-2 -right-2 w-4 h-4 bg-black rounded-full"
                        animate={{
                          scale:
                            activeYear === milestone.year ? [1, 1.5, 1] : 1,
                        }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                      />
                    </motion.button>
                  </Tilt>
                </li>
              ))}
            </ul>
          </div>
          {/* Content and Image */}
          <div className="w-full lg:w-2/3 flex flex-col md:flex-row gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2 bg-white p-8 rounded-xl shadow-lg border border-[#fff1eb]"
            >
              <AnimatePresence mode="wait">
                {evoultionData.map(
                  (milestone) =>
                    activeYear === milestone.year && (
                      <motion.div
                        key={milestone.year}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                      >
                        <h3 className="text-3xl font-bold text-black mb-4">
                          {milestone.year}
                        </h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </motion.div>
                    )
                )}
              </AnimatePresence>
            </motion.div>
            <div className="md:w-1/2">
              <AnimatePresence mode="wait">
                {evoultionData.map(
                  (milestone) =>
                    activeYear === milestone.year && (
                      <motion.img
                        key={milestone.year}
                        src={milestone.image}
                        alt={milestone.year}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.5 }}
                        className="w-full h-80 object-cover rounded-xl shadow-lg border border-[#fff1eb]"
                      />
                    )
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .text-shadow-lg {
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
        }
        .text-shadow-sm {
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </div>
  );
};

export default Evolution;
