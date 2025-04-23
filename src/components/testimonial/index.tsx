"use client";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Rebecca Chen",
    role: "Frontend Developer, TechStart Inc.",
    quote:
      "The React course completely transformed my career. I went from a junior developer to landing a senior role at a tech startup within 6 months of completing the program. The hands-on projects were exactly what I needed.",
  },
  {
    name: "Marcus Johnson",
    role: "Cloud Solutions Architect, CloudWave Systems",
    quote:
      "After trying multiple platforms, TechNexus was the only one that truly prepared me for AWS certification. The instructors were responsive and the course material was structured perfectly for real-world application.",
  },
  {
    name: "Sophia Rodriguez",
    role: "Security Specialist, DataShield",
    quote:
      "The cybersecurity program gave me practical experience with modern security tools and techniques. Within weeks of completing the course, I identified and patched critical vulnerabilities at my company.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function StudentTestimonials() {
  return (
    <section className="bg-white py-20 px-6 md:px-16 text-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-4 text-gray-900"
      >
        What Our <span className="text-[#ff6b3d]">Students Say</span>
      </motion.h2>
      <p className="text-gray-500 mb-12 text-lg">
        Real success stories from professionals who have advanced their careers
        with our training
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            className="bg-[#fff9f6] rounded-2xl border shadow-xl hover:shadow-2xl transition hover:-translate-y-1 hover:border-[#ff6b3d]/40 p-6 text-left border border-orange-100 shadow-sm hover:shadow-lg transition"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            custom={i}
          >
            <div className="text-3xl text-[#ff6b3d] mb-4">❝</div>
            <p className="text-gray-700 italic mb-6">{t.quote}</p>
            <div className="font-semibold text-gray-900">{t.name}</div>
            <div className="text-sm text-gray-500">{t.role}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
