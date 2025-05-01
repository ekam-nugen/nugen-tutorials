"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import award1 from "../../../public/award-logo-1.svg";

const awards = [
  award1,
];

export default function AwardsSection() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-10"
        >
          Recent Awards & Certifications
        </motion.h2>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
        >
          {awards?.map((img, i) => (
            <motion.div
              key={i}
              className="p-4 bg-white shadow-md rounded-lg hover:shadow-xl transition duration-300"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Image
                src={img}
                alt={`Award ${i + 1}`}
                width={180}
                height={100}
                className="mx-auto object-contain h-24 w-auto"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
