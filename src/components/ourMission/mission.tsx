/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const MissionSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    const section = sectionRef.current;
    if (!canvas || !section) return;

    const context = canvas.getContext("2d")!;
    const resizeCanvas = () => {
      const rect = section.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    canvas.style.position = "absolute";
    canvas.style.top = "0";
    canvas.style.left = "0";

    class Particle {
      x: number;
      y: number;
      radius: number;
      color: { r: number; g: number; b: number };
      dx: number;
      dy: number;
      lifespan: number;
      birthdate: number;
      opacity: number;

      constructor(
        x: number,
        y: number,
        radius: number,
        color: { r: number; g: number; b: number }
      ) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.dx = Math.random() * 4 - 2;
        this.dy = Math.random() * 4 - 2;
        this.lifespan = 1000;
        this.birthdate = Date.now();
        this.opacity = 1;
      }

      draw() {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.opacity})`;
        context.fill();
      }

      update() {
        this.x += this.dx;
        this.y += this.dy;
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0)
          this.dx = -this.dx;
        if (this.y + this.radius > canvas.height || this.y - this.radius < 0)
          this.dy = -this.dy;

        const age = Date.now() - this.birthdate;
        if (age > this.lifespan) {
          this.opacity -= 0.01;
          if (this.opacity <= 0) this.radius = 0;
        }
      }

      setColor() {
        const themeColors = [
          { r: 247, g: 140, b: 160 }, // #f78ca0
          { r: 251, g: 199, b: 212 }, // #fbc7d4
          { r: 243, g: 116, b: 88 }, // #f37458
        ];
        const color =
          themeColors[Math.floor(Math.random() * themeColors.length)];
        this.color = color;
      }
    }

    const particles: Particle[] = [];
    const maxParticles = 250;

    const handleMouseMove = (e: MouseEvent) => {
      const bounds = section.getBoundingClientRect();
      const x = e.clientX - bounds.left;
      const y = e.clientY - bounds.top;

      if (particles.length < maxParticles) {
        const p = new Particle(x, y, Math.random() * 5 + 1, {} as any);
        p.setColor();
        particles.push(p);
      }
    };

    section.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      requestAnimationFrame(animate);
      context.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        if (particles[i].radius <= 0) {
          particles.splice(i, 1);
          i--;
        }
      }
    };

    animate();

    return () => {
      section.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#FFF4EF] py-24 px-6 md:px-12 overflow-hidden"
    >
      {/* Canvas for Particle Animation */}
      <canvas
        id="canvas"
        className="absolute inset-0 z-0 pointer-events-none"
      />

      {/* Gradient Blobs */}
      <div className="absolute top-[-4rem] left-[-4rem] w-[200px] h-[200px] bg-[#f3745833] rounded-full blur-3xl opacity-40 z-0" />
      <div className="absolute bottom-[-4rem] right-[-4rem] w-[300px] h-[300px] bg-[#fbc7d488] rounded-full blur-2xl opacity-30 z-0" />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-20">
        {/* Image Section */}
        <motion.div
          className="w-full md:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={imageVariants}
        >
          <Image
            src="/vision.svg"
            alt="Mission Illustration"
            width={600}
            height={400}
            className="w-full h-auto drop-shadow-xl"
          />
        </motion.div>

        {/* Text Section */}
        <div className="w-full md:w-1/2">
          <motion.h2
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight leading-tight"
          >
            <span className="bg-gradient-to-r from-[#f78ca0] to-[#fbc7d4] text-[#f37458] bg-clip-text">
              Our
            </span>{" "}
            <span className="text-[#1a1a1a]">Mission</span>
          </motion.h2>

          <motion.p
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            className="text-lg text-gray-700 mb-4 leading-relaxed"
          >
            At{" "}
            <span className="text-[#f37458] font-semibold">
              Nugen IT Services
            </span>
            , we are dedicated to guiding aspiring professionals and cultivating
            the next generation of leaders by equipping them with the skills and
            insights needed to thrive in the ever-evolving world of technology.
          </motion.p>

          <motion.p
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            className="text-lg text-gray-700 leading-relaxed"
          >
            Through comprehensive education and advanced training, we empower
            individuals with the tools and knowledge to confidently navigate the
            modern digital landscape and make a lasting impact in the IT
            industry.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
