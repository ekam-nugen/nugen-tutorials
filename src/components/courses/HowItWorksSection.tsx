'use client';

import { motion } from "framer-motion";
import ConceptsSection from "./ConceptSection";

export default function HowItWorksSection() {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 cursor-pointer lg:px-8 text-center overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 leading-tight"
        >
          What <span className="text-[#f37458]">will</span> you <span className="text-[#f37458]">learn</span>?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-sm sm:text-lg text-[#334155] mb-12 sm:mb-16 px-2 sm:px-8 md:px-16 text-pretty"
        >
          At Nugen IT Services, our Front-End Developer course is designed to demystify the process of building engaging and responsive user interfaces. Through a well-structured blend of theoretical learning, hands-on projects, and real-world applications, you will gain a solid understanding of the core technologies and modern practices essential for developing accessible, interactive websites and applications. Nugen’s front-end development training covers a wide range of foundational and advanced concepts, including:
        </motion.p>
        <ConceptsSection />
      </div>
    </div>
  );
}
