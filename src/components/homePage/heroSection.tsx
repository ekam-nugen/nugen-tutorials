"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Particles from "react-tsparticles";
import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

export default function HeroSection() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#fff6f2] to-[#fdeae2] h-full">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="relative w-full h-full">
          <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
              background: {
                color: {
                  value: "transparent",
                },
              },
              fullScreen: false,
              fpsLimit: 120,
              interactivity: {
                events: {
                  onClick: {
                    enable: true,
                    mode: "push",
                  },
                  onHover: {
                    enable: true,
                    mode: "repulse",
                  },
                  resize: true,
                },
                modes: {
                  push: {
                    quantity: 4,
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4,
                  },
                },
              },
              particles: {
                color: {
                  value: "#eeb497",
                },
                links: {
                  color: "#eeb497",
                  distance: 150,
                  enable: true,
                  opacity: 0.5,
                  width: 1,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outModes: {
                    default: "bounce",
                  },
                  random: false,
                  speed: 2,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    area: 800,
                  },
                  value: 80,
                },
                opacity: {
                  value: 0.5,
                },
                shape: {
                  type: "circle",
                },
                size: {
                  value: { min: 1, max: 5 },
                },
              },
              detectRetina: true,
            }}
            className="absolute inset-0"
          />
        </div>
      </div>
      <div className="relative z-10 py-24 px-6">

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
              <span className="text-[#f37458] font-bold">300+</span>{" "}
              Skill-Focused Courses
            </span>
            <span>
              <span className="text-[#f37458] font-bold">24/7</span> Career
              Support
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
