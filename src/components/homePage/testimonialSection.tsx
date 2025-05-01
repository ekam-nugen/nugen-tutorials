"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { TESTIMONOAL_DATA_ONE } from "@/src/json/reviews/reviews";

export default function StudentTestimonials() {
  const testimonials = TESTIMONOAL_DATA_ONE; // Use the imported array
  const [index, setIndex] = useState<number>(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(testimonials[(index + i) % testimonials.length]);
    }
    return visible;
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <section className="bg-[#fff6f0] py-20 px-6 md:px-24 text-center overflow-hidden">
      <h2 className="text-4xl font-bold mb-4 text-gray-900">
        What Our <span className="text-[#ff6b3d]">Students Say</span>
      </h2>
      <p className="text-gray-500 mb-12 text-lg">
        Real success stories from professionals who have advanced their careers
        with our training.
      </p>

      <div className="relative">
        <div className="flex justify-center items-center gap-8">
          {visibleTestimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.name}
              className={`bg-white p-8 rounded-2xl border shadow-md w-[300px] ${
                idx === 1
                  ? "scale-105 border-orange-200 border-3 shadow-lg"
                  : "opacity-80"
              }`}
              initial={{ opacity: 0, x: idx === 0 ? -100 : idx === 2 ? 100 : 0 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: idx === 0 ? -100 : idx === 2 ? 100 : 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.15)",
              }}
            >
              <div className="text-3xl text-[#ff6b3d] mb-4">❝</div>
              <p className="text-gray-700 italic mb-6">{testimonial.text}</p>
              <div className="font-semibold text-gray-900">{testimonial.name}</div>
              <div className="text-sm text-gray-500 flex justify-center items-center gap-2">
                {testimonial.icon}
                {testimonial.source}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Arrows */}
        <div className="absolute top-1/2 -left-10 transform -translate-y-1/2">
          <button
            onClick={prev}
            className="bg-white border rounded-full p-2 shadow hover:bg-orange-100"
          >
            <ChevronLeft className="text-[#ff6b3d]" />
          </button>
        </div>
        <div className="absolute top-1/2 -right-10 transform -translate-y-1/2">
          <button
            onClick={next}
            className="bg-white border rounded-full p-2 shadow hover:bg-orange-100"
          >
            <ChevronRight className="text-[#ff6b3d]" />
          </button>
        </div>
      </div>
    </section>
  );
}
