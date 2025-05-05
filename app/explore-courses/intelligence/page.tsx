"use client";
import { useEffect, useState } from "react";
import Loader from "@/src/components/common/Loader";
import Intelligence from "@/src/components/services/AI_Ml";
import Head from "next/head";

const IntelligencePage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust duration as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>
          AI & Machine Learning Courses | Learn Deep Learning, Python &
          TensorFlow | Nugen Courses
        </title>
        <meta
          name="description"
          content="Unlock the power of AI and Machine Learning with Nugen Courses. Learn deep learning, neural networks, Python, TensorFlow, and real-world applications."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="AI course, machine learning training, deep learning, neural networks, Python AI, TensorFlow, data science, Nugen Courses, Nugen IT Services"
        />

        {/* Open Graph for social sharing */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="AI & Machine Learning Courses | Learn Deep Learning, Python & TensorFlow | Nugen Courses"
        />
        <meta
          property="og:description"
          content="Transform your career with AI & Machine Learning. Master deep learning, Python programming, and TensorFlow with expert-led courses at Nugen Courses."
        />
        <meta
          property="og:url"
          content="https://www.nugeninfo.com/explore-courses/intelligence"
        />
        <meta
          property="og:image"
          content="/images/ai-machine-learning-og.jpg"
        />
        <meta
          property="og:image:alt"
          content="Nugen Courses – Learn AI & Machine Learning with Practical Projects"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="AI & Machine Learning Courses | Learn Deep Learning, Python & TensorFlow | Nugen Courses"
        />
        <meta
          name="twitter:description"
          content="Kickstart your AI career with Nugen Courses. Learn deep learning, neural networks, and TensorFlow through practical, hands-on training."
        />
        <meta
          name="twitter:image"
          content="/images/ai-machine-learning-og.jpg"
        />
      </Head>
      {loading ? <Loader /> : <Intelligence />}
    </>
  );
};

export default IntelligencePage;
