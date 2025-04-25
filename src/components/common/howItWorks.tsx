"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface HowItWorksSectionProps {
  title: ReactNode;
  description: string;
  children?: ReactNode;
}

export default function HowItWorksSection({
  title,
  description,
  children,
}: HowItWorksSectionProps) {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 leading-tight"
        >
          {title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-sm sm:text-lg text-[#334155] mb-12 sm:mb-16 px-2 sm:px-8 md:px-16 text-pretty"
        >
          {description}
        </motion.p>
        {children}
      </div>
    </div>
  );
}
