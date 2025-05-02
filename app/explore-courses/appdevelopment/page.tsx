"use client";
import { useEffect, useState } from "react";
import CustomizedAppDevelopment from "@/src/components/services/AppDevelopment";
import Loader from "@/src/components/common/Loader";
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
          App Development Courses | Learn Mobile & Web Apps | Nugen Courses
        </title>
        <meta
          name="description"
          content="Master mobile and web app development with Nugen Courses. From beginner to advanced, learn iOS, Android, and full-stack development with hands-on projects."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="app development course, mobile development, Android training, iOS course, web app development, React Native, Flutter, Nugen IT Services, full-stack apps"
        />

        {/* Open Graph for social sharing */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="App Development Courses | Learn Mobile & Web Apps | Nugen Courses"
        />
        <meta
          property="og:description"
          content="Kickstart your career in app development with expert-led training. Learn to build mobile and web apps using modern frameworks at Nugen Courses."
        />
        <meta
          property="og:url"
          content="https://www.nugeninfo.com/explore-courses/appdevelopment"
        />
        <meta property="og:image" content="/logo.png" />
        <meta
          property="og:image:alt"
          content="Nugen Courses – App Development Training with Real Projects"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="App Development Courses | Learn Mobile & Web Apps | Nugen Courses"
        />
        <meta
          name="twitter:description"
          content="Explore expert-led courses in Android, iOS, and full-stack app development. Gain in-demand skills with Nugen Courses."
        />
        <meta name="twitter:image" content="/logo.png" />
      </Head>
      {loading ? <Loader /> : <CustomizedAppDevelopment />}
    </>
  );
};

export default AppDevelopment;
