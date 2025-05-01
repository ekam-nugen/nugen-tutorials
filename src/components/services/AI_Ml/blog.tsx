"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const blogData = [
  {
    title: "Next.js and React: A Combination for Superior Performance",
    author: "Subhajit Das",
    role: "Project Manager",
    image: "/ai_ml.jpg",
    description:
      "Based on a recent project for a logistics tech firm, Nugen IT Services used Next.js and React to drastically improve page speed and SEO, enhancing user retention and lead conversion.",
    highlight: false,
  },
  {
    title: "Mastering Server-Side Rendering with Next.js",
    author: "Pushpal Mazumder",
    role: "CTO",
    image: "/ai-ml.jpg",
    description:
      "In modern web development, performance and user experience are key components of building a successful application. One of the best ways to achieve these goals is by implementing Server-Side Rendering (SSR). Next.js, a popular React framework, makes SSR incredibly easy and efficient.",
    highlight: false,
  },
  {
    title: "Introduction to Functional Programming Concepts in JavaScript",
    author: "Saumendu Pathak",
    role: "Senior Business Analyst",
    image: "/mca.jpeg",
    description:
      "Functional Programming (FP) is a paradigm in programming that treats computation as the evaluation of mathematical functions and avoids changing state and mutable data.",
    highlight: false,
  },
  {
    title: "Introduction to Functional Programming Concepts in JavaScript",
    author: "Saumendu Pathak",
    role: "Senior Business Analyst",
    image: "/ai_ml.jpg",
    description:
      "Functional Programming (FP) is a paradigm in programming that treats computation as the evaluation of mathematical functions and avoids changing state and mutable data.",
    highlight: false,
  },
  {
    title: "Introduction to Functional Programming Concepts in JavaScript",
    author: "Saumendu Pathak",
    role: "Senior Business Analyst",
    image: "/ai-ml.jpg",
    description:
      "Functional Programming (FP) is a paradigm in programming that treats computation as the evaluation of mathematical functions and avoids changing state and mutable data.",
    highlight: false,
  },
  {
    title: "Introduction to Functional Programming Concepts in JavaScript",
    author: "Saumendu Pathak",
    role: "Senior Business Analyst",
    image: "/ai_ml.jpg",
    description:
      "Functional Programming (FP) is a paradigm in programming that treats computation as the evaluation of mathematical functions and avoids changing state and mutable data.",
    highlight: false,
  },
  {
    title: "7 Game-Changing Tips to 10x Your API Performance",
    author: "Sanjay Singhania",
    role: "Project Manager",
    image: "/insight-banner.png",
    description:
      "Drawing from a fintech project handled by Nugen, this blog shares 7 actionable tips that helped reduce API latency by 70%, ensuring secure and lightning-fast transactions.",
    highlight: false,
  },
];

export default function BlogSection() {
  const [hoveredPost, setHoveredPost] = useState<
    null | (typeof blogData)[number]
  >(null);

  const featuredPost = hoveredPost || blogData[0];

  // Animation variants for title and subtitle
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // Animation variants for featured blog card
  const featuredVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
    },
    hover: {
      scale: 1.03,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  // Animation variants for side articles
  const articleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1, // Staggered entrance for articles
        duration: 0.4,
        ease: "easeOut",
      },
    }),
    hover: {
      scale: 1.02,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  // Animation variants for button
  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut", delay: 0.8 },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <section className="px-6 md:px-20 py-16 bg-white">
      <div className="text-center mb-12">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
          className="text-4xl font-bold text-gray-900"
        >
          Software Development Insights
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
          className="text-[#f0845a] mt-2 text-lg font-semibold relative"
        >
          Expert Analyses and Top Trends
          <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#f0845a]/30 rounded-full" />
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Featured Blog Card with Animation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover="hover"
          variants={featuredVariants}
          className="col-span-1 lg:col-span-1 relative"
        >
          <div className="sticky top-24 shadow-xl rounded-xl overflow-hidden bg-white">
            <AnimatePresence mode="wait">
              <motion.div
                key={featuredPost.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover rounded-t-xl"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 leading-snug">
                    {featuredPost.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-2">
                    By{" "}
                    <span className="font-medium">{featuredPost.author}</span>,{" "}
                    {featuredPost.role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Side Articles */}
        <div className="col-span-1 lg:col-span-2 flex flex-col gap-8 justify-center">
          {blogData.map((post, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              variants={articleVariants}
              className="border-b pb-4 last:border-b-0 cursor-pointer"
              onMouseEnter={() => setHoveredPost(post)}
              onMouseLeave={() => setHoveredPost(null)}
            >
              <h4
                className={`text-lg font-semibold ${
                  post.highlight || hoveredPost === post
                    ? "text-[#f0845a]"
                    : "text-gray-900"
                } transition-colors duration-300`}
              >
                {post.title}
              </h4>
              <p className="text-sm text-gray-500 mt-1">
                By <span className="font-medium">{post.author}</span>,{" "}
                {post.role}
              </p>
            </motion.div>
          ))}

          {/* Button */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={buttonVariants}
            className="pt-4"
          >
            <motion.button
              whileHover="hover"
              variants={buttonVariants}
              className="bg-orange-500 hover:bg-orange-600 transition-all duration-300 text-white px-6 py-3 rounded-full font-semibold shadow-md"
            >
              Read More Blog Post →
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
