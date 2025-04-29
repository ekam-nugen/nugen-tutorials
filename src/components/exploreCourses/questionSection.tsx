"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { faqData } from ".";

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
    }),
  };

  const answerVariants = {
    hidden: { opacity: 0, height: 0, y: -10 },
    visible: {
      opacity: 1,
      height: "auto",
      y: 0,
      transition: { duration: 0.4, ease: "easeOut", bounce: 0.3 },
    },
    
    exit: {
      opacity: 0,
      height: 0,
      y: -10,
      transition: { duration: 0.3, ease: "easeIn" },
    },
  };

  const iconVariants = {
    closed: { rotate: 0, scale: 1 },
    open: { rotate: 90, scale: 1.1, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      className="bg-white py-12 px-4 sm:px-6 lg:px-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Have Questions?
        </motion.h2>
        <motion.p
          className="text-sm sm:text-base md:text-lg text-gray-700 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Got Any Queries? Our FAQ Section Has All the Answers You Need To Make
          an Informed Decision With Confidence.
        </motion.p>

        <div className="space-y-4 text-left">
          {faqData?.map((faq, index) => (
            <motion.div
              key={index}
              className="border-b border-gray-300 pb-4 cursor-pointer group"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              role="button"
              tabIndex={0}
              onClick={() => toggleIndex(index)}
            >
              <div className="flex items-center justify-between text-gray-800 text-sm sm:text-base md:text-lg font-semibold">
                <motion.span
                  animate={{ scale: openIndex === index ? 1.05 : 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {faq?.question}
                </motion.span>
                <motion.div
                  variants={iconVariants}
                  animate={openIndex === index ? "open" : "closed"}
                >
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-orange-500" />
                  ) : (
                    <Plus className="w-5 h-5 text-orange-500" />
                  )}
                </motion.div>
              </div>
              <div className="mt-2.5">

              <AnimatePresence>
                {openIndex === index && (
                  <motion.p
                  className="text-xs sm:text-sm text-gray-600"
                  variants={answerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  >
                    {faq?.answer}
                  </motion.p>
                )}
              </AnimatePresence>
                </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
