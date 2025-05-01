"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { logos } from "@/src/json/contactUs/contactus";

interface ClientSliderProps {
  className?: string;
}

const ClientSlider: React.FC<ClientSliderProps> = ({ className }) => {
  const duplicatedLogos = [...logos, ...logos];
  const animationDuration = logos.length * 0.75;

  return (
    <div
      className={cn(
        "relative py-20 px-4 bg-white sm:px-6 lg:px-8 overflow-hidden",
        className
      )}
    >
      {/* Header */}
      <div className="text-center mb-16 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight"
        >
          Our Valued Partners
        </motion.h2>
        <motion.div
          className="w-32 h-1 bg-[#ffbb9f] mx-auto mt-4 rounded-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
      </div>

      {/* Marquee Container */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative w-full h-48 sm:h-60 lg:h-72 overflow-hidden"
      >
        <motion.div
          className="flex flex-nowrap gap-6 sm:gap-8 lg:gap-10"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: animationDuration,
              ease: "linear",
            },
          }}
        >
          {duplicatedLogos.map((logo: string, idx: number) => (
            <motion.div
              key={idx}
              className="flex-shrink-0 bg-white p-5 sm:p-6 rounded-2xl shadow-xl hover:shadow-2xl 
                transition-shadow duration-300 flex items-center justify-center 
                w-36 h-28 sm:w-48 sm:h-36 lg:w-60 lg:h-44"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{
                duration: 0.6,
                delay: (idx % logos.length) * 0.15,
              }}
            >
              <Image
                src={logo}
                alt={`Client logo ${idx + 1}`}
                width={180}
                height={120}
                className="object-contain max-h-full max-w-full"
                onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                  e.currentTarget.src = "/placeholder-logo.png";
                }}
                priority={idx < logos.length}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ClientSlider;
