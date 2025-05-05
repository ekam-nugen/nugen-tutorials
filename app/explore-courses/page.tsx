"use client";
import Loader from "@/src/components/common/Loader";
import ContactUsSection from "@/src/components/contactUs/contactUs";
import CompanyStatsSection from "@/src/components/exploreCourses/highlightsSection";
import { FAQSection } from "@/src/components/exploreCourses/questionSection";
import ServicesSection from "@/src/components/exploreCourses/technologiesTab";
import { services } from "@/src/components/exploreCourses/technologycardData";
import { TechnologySection } from "@/src/components/exploreCourses/technologySection";
import Head from "next/head";
import React, { useEffect, useState } from "react";

const Services = () => {
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
        <title>
          Explore Courses | Nugen Courses | Learn Web, Mobile, Data Science &
          More
        </title>
        <meta
          name="description"
          content="Explore a wide range of courses at Nugen Courses. Learn web development, mobile app development, AI, data science, UI/UX design, and more with expert instructors."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="online courses, Nugen Courses, web development, mobile development, data science, AI, UI/UX design, learn coding, tech skills"
        />

        {/* Open Graph for social sharing */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Explore Courses | Nugen Courses | Learn Web, Mobile, Data Science & More"
        />
        <meta
          property="og:description"
          content="Discover a variety of high-quality courses at Nugen Courses. Learn everything from coding and app development to data science and machine learning."
        />
        <meta
          property="og:url"
          content="https://www.nugeninfo.com/explore-courses"
        />
        <meta property="og:image" content="/images/explore-courses-og.jpg" />
        <meta
          property="og:image:alt"
          content="Nugen Courses – Explore Our Wide Range of Tech Courses"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Explore Courses | Nugen Courses | Learn Web, Mobile, Data Science & More"
        />
        <meta
          name="twitter:description"
          content="Browse through Nugen Courses and start your learning journey in web development, mobile apps, AI, and much more."
        />
        <meta name="twitter:image" content="/images/explore-courses-og.jpg" />
      </Head>

      {loading ? (
        <Loader />
      ) : (
        <>
          <TechnologySection />
          <CompanyStatsSection
            data={services}
            title={"Software Development and Consulting"}
            subTitle={
              "As a reliable software development company, we help startups and enterprises realize their business goals with our advanced software solutions. Our portfolio of custom software development services includes:"
            }
          />
          <ServicesSection />
          <FAQSection />
          <ContactUsSection />
        </>
      )}
    </>
  );
};

export default Services;
