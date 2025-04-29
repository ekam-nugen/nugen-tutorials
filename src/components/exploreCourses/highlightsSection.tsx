"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";

interface Stat {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  link?: string;
}

export default function CompanyStatsSection({
  data,
  title,
  subTitle,
}: {
  data: Stat[];
  title: string;
  subTitle: string;
}) {
  // Animation variants for the section title and subtitle
  const textVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // Animation variants for stat cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15, // Subtle stagger for each card
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="bg-white px-4 py-20 md:px-20 text-gray-900">
      <motion.div
        className="max-w-6xl mx-auto text-center mb-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={textVariants}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-gray-900"
          variants={textVariants}
        >
          {title}
        </motion.h2>
        <motion.p
          className="text-lg mt-4 max-w-3xl mx-auto text-gray-600"
          variants={textVariants}
        >
          {subTitle}
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data?.map((stat: Stat, index: number) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="group bg-white border border-gray-200 cursor-pointer rounded-xl p-5 shadow transition-all duration-300 hover:-translate-y-1 hover:border-[#ff6b3d]/50 hover:bg-[#fff5f0]"
          >
            {stat?.link ? (
              <Link href={stat.link} passHref>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#ffbb9f]/30 text-[#ff6b3d] shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:ring-2 group-hover:ring-[#ffbb9f]/50">
                    {stat?.icon}
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-bold">{stat?.title}</h3>
                    <p className="text-sm text-gray-600">{stat?.subtitle}</p>
                  </div>
                </div>
              </Link>
            ) : (
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#ffbb9f]/30 text-[#ff6b3d] shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:ring-2 group-hover:ring-[#ffbb9f]/50">
                  {stat?.icon}
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-bold">{stat?.title}</h3>
                  <p className="text-sm text-gray-600">{stat?.subtitle}</p>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}