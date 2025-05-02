"use client";
import { useEffect, useState } from "react";
import WebDevelopment from "@/src/components/services/WebDevelopment";
import Loader from "@/src/components/common/Loader";
import Head from "next/head";

const WebDevelopmentPage = () => {
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
          Web Development Courses | Learn HTML, CSS, JavaScript & React | Nugen
          Courses
        </title>
        <meta
          name="description"
          content="Master web development with Nugen Courses. Learn HTML, CSS, JavaScript, React, and backend technologies to build full-stack web applications."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="web development course, HTML CSS JavaScript, React training, full-stack development, web design, frontend development, backend development, Nugen Courses, Nugen IT Services"
        />

        {/* Open Graph for social sharing */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Web Development Courses | Learn HTML, CSS, JavaScript & React | Nugen Courses"
        />
        <meta
          property="og:description"
          content="Become a web developer with Nugen Courses. Learn frontend and backend web development using HTML, CSS, JavaScript, React, and more."
        />
        <meta
          property="og:url"
          content="https://www.nugeninfo.com/explore-courses/webdevelopment"
        />
        <meta property="og:image" content="/images/web-development-og.jpg" />
        <meta
          property="og:image:alt"
          content="Nugen Courses – Learn Web Development from Scratch"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Web Development Courses | Learn HTML, CSS, JavaScript & React | Nugen Courses"
        />
        <meta
          name="twitter:description"
          content="Learn web development from scratch. Master the skills to build full-stack web applications with Nugen Courses."
        />
        <meta name="twitter:image" content="/images/web-development-og.jpg" />
      </Head>
      {loading ? <Loader /> : <WebDevelopment />}
    </>
  );
};

export default WebDevelopmentPage;
