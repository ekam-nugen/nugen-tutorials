'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
  }),
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeOut' } },
};

const MissionSection = () => {
  return (
    <section className="relative w-full bg-[#FFF4EF] py-24 px-6 md:px-12 overflow-hidden">
      {/* Decorative SVG background (optional) */}
      <div className="absolute top-[-4rem] left-[-4rem] w-[200px] h-[200px] bg-[#f3745833] rounded-full blur-3xl opacity-40 z-0" />
      <div className="absolute bottom-[-4rem] right-[-4rem] w-[300px] h-[300px] bg-[#fbc7d488] rounded-full blur-2xl opacity-30 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-20">
        {/* Left - Image */}
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

        {/* Right - Content */}
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
            </span>{' '}
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
            At <span className="text-[#f37458] font-semibold">Nugen IT Services</span>, we are
            dedicated to guiding aspiring professionals and cultivating the next generation of
            leaders by equipping them with the skills and insights needed to thrive in the
            ever-evolving world of technology.
          </motion.p>

          <motion.p
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            className="text-lg text-gray-700 leading-relaxed"
          >
            Through comprehensive education and advanced training, we empower individuals with the
            tools and knowledge to confidently navigate the modern digital landscape and make a
            lasting impact in the IT industry.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
