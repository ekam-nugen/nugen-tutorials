"use client";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-[#fff6f2] to-[#fdeae2] py-28 px-6 md:px-16 overflow-hidden">
      <div className="absolute -top-20 -left-10 w-96 h-96 bg-[#fca78c] opacity-30 blur-[100px] rounded-full z-0 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#fca78c] opacity-20 blur-[120px] rounded-full z-0 animate-ping" />
      <div className="absolute top-32 left-20 w-32 h-32 border-2 border-[#fca78c] rounded-full opacity-20 z-0" />
      <div className="absolute bottom-28 left-24 w-20 h-20 bg-[#fca78c] rounded-xl rotate-12 opacity-20 z-0" />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold leading-tight text-[#1c1c1c] mb-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Learn <span className="text-[#f37458]">In-Demand Tech Skills</span>{" "}
          With Nugen Training
        </motion.h1>
        <motion.p
          className="text-[#4a4a4a] text-lg md:text-xl mb-10 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Hands-on training in web development, cloud computing, data science,
          and cybersecurity — designed to launch or elevate your tech career.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <button className="bg-[#f37458] text-white px-7 py-3 rounded-full font-semibold shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300">
            Explore Courses
          </button>
          <button className="bg-white text-[#f37458] px-7 py-3 rounded-full font-semibold border border-[#f37458] backdrop-blur-md shadow-sm hover:bg-[#fff0eb] transition-all duration-300">
            Start Free Trial
          </button>
        </motion.div>

        <motion.div
          className="text-sm text-[#555] font- flex flex-wrap justify-center gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <span>
            <span className="text-[#f37458] font-bold">70+</span> Industry
            Experts
          </span>
          <span>
            <span className="text-[#f37458] font-bold">300+</span> Skill-Focused
            Courses
          </span>
          <span>
            <span className="text-[#f37458] font-bold">24/7</span> Career
            Support
          </span>
        </motion.div>
      </div>
    </section>
  );
}
