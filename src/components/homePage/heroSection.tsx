"use client";
import { useCallback } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Particles from "react-tsparticles";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const onMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const { left, top, width, height } = (
        e.currentTarget as HTMLElement
      ).getBoundingClientRect();
      const x = ((e.clientX - left) / width) * 2 - 1;
      const y = ((e.clientY - top) / height) * 2 - 1;
      mx.set(x);
      my.set(y);
    },
    [mx, my]
  );

  const parallax1 = {
    x: useTransform(mx, (v) => v * 20),
    y: useTransform(my, (v) => v * 20),
  };
  const parallax2 = {
    x: useTransform(mx, (v) => v * -30),
    y: useTransform(my, (v) => v * 30),
  };

  const icons = [
    {
      src: "/computer-icon.png",
      w: 80,
      h: 80,
      style: parallax1,
      pos: "top-8 left-4 md:top-10 md:left-8",
    },
    {
      src: "/mobile.png",
      w: 100,
      h: 120,
      style: parallax2,
      pos: "top-14 right-6 md:top-16 md:right-12",
    },
    {
      src: "/setting-icon.webp",
      w: 80,
      h: 60,
      style: parallax2,
      pos: "bottom-24 left-4 md:bottom-32 md:left-6",
    },
    {
      src: "/hash-icon.png",
      w: 90,
      h: 70,
      style: parallax1,
      pos: "bottom-20 right-6 md:bottom-32 md:right-10",
    },
  ];

  const floatAnimation = {
    animate: {
      y: [0, -10, 0],
      x: [0, 5, 0],
      rotate: [0, 2, -2, 0],
      transition: {
        y: { repeat: 50, duration: 3, ease: "easeInOut" },
        x: { repeat: 50, duration: 4, ease: "easeInOut" },
        rotate: { repeat: 50, duration: 5, ease: "easeInOut" },
      },
    },
  };

  return (
    <section
      onMouseMove={onMouseMove}
      className="relative min-h-screen bg-gradient-to-br from-[#fff6f2] to-[#fdeae2] overflow-hidden"
    >
      <Particles className="absolute inset-0 z-0" />

      {icons.map((ic, i) => (
        <motion.div
          key={i}
          variants={floatAnimation}
          animate="animate"
          className={`absolute ${ic.pos} z-10`}
        >
          <Image src={ic.src} width={ic.w} height={ic.h} alt="" />
        </motion.div>
      ))}

      <motion.div
        style={parallax2}
        className="absolute -top-20 -left-10 w-72 h-72 md:w-96 md:h-96 bg-[#fca78c] opacity-30 blur-[100px] rounded-full"
      />
      <motion.div
        style={parallax1}
        className="absolute bottom-0 right-0 w-72 h-72 md:w-96 md:h-96 bg-[#fca78c] opacity-20 blur-[120px] rounded-full"
      />
      <div className="absolute top-28 left-10 w-24 h-24 border-2 border-[#fca78c] rounded-full opacity-20 md:top-32 md:left-20 md:w-32 md:h-32" />
      <div className="absolute bottom-24 left-10 w-16 h-16 bg-[#fca78c] rounded-xl rotate-12 opacity-20 md:bottom-28 md:left-24 md:w-20 md:h-20" />

      {/* Hero Content */}
      <div className="relative z-20 max-w-5xl mx-auto text-center px-4 md:px-6 pt-32 md:py-32">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight text-[#1c1c1c] mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Learn <span className="text-[#f37458]">On-Demand Tech Skills</span>{" "}
          With Nugen Training
        </motion.h1>

        <motion.p
          className="text-[#4a4a4a] text-base sm:text-lg md:text-xl mb-8 md:mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Hands-on training in web development, cloud computing, data science,
          and cybersecurity.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10 md:mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >

          <Link
            href="/exploreCourses"
            className="relative overflow-hidden px-6 py-3 bg-gradient-to-r from-orange-400 to-purple-400 text-white font-semibold rounded-full shadow-lg transform hover:scale-105 transition"
          >
            <span className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity duration-300 rounded-full" />
            Explore Courses
          </Link>
          <Link
            href="/contactUs"
            className="px-7 py-3 bg-white text-[#f37458] font-semibold rounded-full border border-[#f37458] hover:bg-white/90 transition"
          >
            Start Free Trial
          </Link>
        </motion.div>

        <motion.div
          className="text-xs sm:text-sm text-[#555] flex flex-wrap justify-center gap-4 md:gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
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
