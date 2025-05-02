"use client";
import React, { useEffect, useState } from "react";
import CustomerReviews from "@/src/components/about/CTA";
import Evolution from "@/src/components/about/Evolution";
import HeroSection from "@/src/components/about/index";
import Services from "@/src/components/about/Services";
import Loader from "@/src/components/common/Loader";
import Head from "next/head";

const AboutPage = () => {
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
        <title>About Us | Nugen Courses by Nugen IT Services</title>
        <meta
          name="description"
          content="Learn more about Nugen Courses, our mission, expert team, and how we empower learners through high-quality IT education and training."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="About Nugen Courses, Nugen IT Services, online learning platform, IT training company, tech education, course platform, expert instructors"
        />

        {/* Open Graph for social sharing */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="About Us | Nugen Courses by Nugen IT Services"
        />
        <meta
          property="og:description"
          content="Discover the vision and team behind Nugen Courses. We're committed to delivering quality IT education through expert-led online training."
        />
        <meta property="og:url" content="https://www.nugeninfo.com/about-us" />
        <meta property="og:image" content="/images/about-og.jpg" />
        <meta
          property="og:image:alt"
          content="Meet the Nugen Courses Team – Online IT Education Experts"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="About Us | Nugen Courses by Nugen IT Services"
        />
        <meta
          name="twitter:description"
          content="Get to know Nugen Courses — the people and vision driving world-class IT education online."
        />
        <meta name="twitter:image" content="/logo.png" />
      </Head>

      {loading ? (
        <Loader />
      ) : (
        <>
          <HeroSection />
          <Services />
          <Evolution />
          <CustomerReviews />
        </>
      )}
    </>
  );
};

export default AboutPage;
