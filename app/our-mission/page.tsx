"use client";
import React, { useEffect, useState } from "react";
import ValuesSection from "@/src/components/ourMission/values";
import ContactUsSection from "@/src/components/contactUs/contactUs";
import OurStrength from "@/src/components/ourMission/strength";
import MissionSection from "@/src/components/ourMission/mission";
import Loader from "@/src/components/common/Loader";
import Head from "next/head";

function MissionPage() {
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
        <title>Our Mission | Empowering Tech Learners | Nugen Courses</title>
        <meta
          name="description"
          content="At Nugen Courses, our mission is to empower individuals with industry-relevant IT skills through accessible, expert-led online education. Learn. Grow. Succeed."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="Nugen Courses mission, IT education vision, online learning goals, tech training purpose, empower learners, digital skills, Nugen IT Services"
        />

        {/* Open Graph for social sharing */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Our Mission | Empowering Tech Learners | Nugen Courses"
        />
        <meta
          property="og:description"
          content="Discover how Nugen Courses is shaping the future of IT education by delivering accessible, industry-focused learning for all."
        />
        <meta
          property="og:url"
          content="https://www.nugeninfo.com/our-mission"
        />
        <meta property="og:image" content="/images/mission-og.jpg" />
        <meta
          property="og:image:alt"
          content="Nugen Courses Mission – Building the Future of IT Education"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Our Mission | Empowering Tech Learners | Nugen Courses"
        />
        <meta
          name="twitter:description"
          content="Our goal is to make high-quality IT education accessible to all. Learn more about the mission behind Nugen Courses."
        />
        <meta name="twitter:image" content="/logo.png" />
      </Head>

      {loading ? (
        <Loader />
      ) : (
        <>
          <MissionSection />
          <OurStrength />
          <ValuesSection />
          <ContactUsSection />
        </>
      )}
    </>
  );
}

export default MissionPage;
