"use client";
import { useEffect, useState } from "react";
import Loader from "@/src/components/common/Loader";
import QAMaintenance from "@/src/components/services/QA";
import Head from "next/head";

const AppDevelopment = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust the duration as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>
          QA & Testing Courses | Master Manual & Automation Testing | Nugen
          Courses
        </title>
        <meta
          name="description"
          content="Become an expert in QA and testing with Nugen Courses. Learn manual testing, automation tools like Selenium, JUnit, and performance testing for real-world applications."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="QA course, software testing training, manual testing, automation testing, Selenium, JUnit, performance testing, Nugen Courses, Nugen IT Services"
        />

        {/* Open Graph for social sharing */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="QA & Testing Courses | Master Manual & Automation Testing | Nugen Courses"
        />
        <meta
          property="og:description"
          content="Learn the fundamentals and advanced techniques of software testing. Master manual and automation testing with tools like Selenium and JUnit through expert-led courses."
        />
        <meta
          property="og:url"
          content="https://www.nugeninfo.com/explore-courses/qa"
        />
        <meta property="og:image" content="/images/qa-testing-og.jpg" />
        <meta
          property="og:image:alt"
          content="Nugen Courses – QA & Testing Training with Automation Tools"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="QA & Testing Courses | Master Manual & Automation Testing | Nugen Courses"
        />
        <meta
          name="twitter:description"
          content="Get hands-on experience with software testing. Learn manual and automation testing techniques and tools like Selenium, JUnit, and more at Nugen Courses."
        />
        <meta name="twitter:image" content="/images/qa-testing-og.jpg" />
      </Head>
      {loading ? <Loader /> : <QAMaintenance />}
    </>
  );
};

export default AppDevelopment;
