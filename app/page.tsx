"use client";
import Loader from "@/src/components/common/Loader";
import WhyNugenIT from "@/src/components/homePage/chooseUs";
import TechnologyShowcase from "@/src/components/homePage/courses";
import HeroSection from "@/src/components/homePage/heroSection";
import TestimonialStatic from "@/src/components/homePage/testimonialStatic";
import TrendingCourses from "@/src/components/homePage/trendingCourses";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>Nugen Courses | Online IT Training by Nugen IT Services</title>
        <meta
          name="description"
          content="Advance your career with expert-led online IT courses at Nugen Courses. Learn web development, cloud computing, AI, and more from Nugen IT Services."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="online IT courses, learn web development, cloud computing, AI training, programming, tech skills, Nugen Courses"
        />

        {/* Open Graph for social sharing */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Nugen Courses | Online IT Training by Nugen IT Services"
        />
        <meta
          property="og:description"
          content="Join thousands of learners upgrading their tech skills on Nugen Courses. Explore high-quality IT courses powered by Nugen IT Services."
        />
        <meta property="og:url" content="https://www.nugeninfo.com" />
        <meta property="og:image" content="/logo.png" />
        <meta
          property="og:image:alt"
          content="Nugen Courses – Online IT Learning Platform"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card (optional but good practice) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Nugen Courses | Online IT Training"
        />
        <meta
          name="twitter:description"
          content="Learn from the best with Nugen's expert-led IT courses. Web dev, cloud, AI & more."
        />
        <meta name="twitter:image" content="/logo.png" />
      </Head>

      {loading ? (
        <Loader />
      ) : (
        <>
          <HeroSection />
          <TrendingCourses />
          <TechnologyShowcase />
          <WhyNugenIT />
          <TestimonialStatic />
        </>
      )}
    </>
  );
}
