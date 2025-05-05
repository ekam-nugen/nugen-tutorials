"use client";
import { useEffect, useState } from "react";
import UIUXDesign from "@/src/components/services/UIUX";
import Loader from "@/src/components/common/Loader";
import Head from "next/head";

const UIUXPage = () => {
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
          UI/UX Design Courses | Learn Web & Mobile App Design | Nugen Courses
        </title>
        <meta
          name="description"
          content="Master UI/UX design with Nugen Courses. Learn user research, wireframing, prototyping, Figma, Adobe XD, and design principles for web and mobile apps."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="UI/UX design course, user experience design, Figma training, Adobe XD course, wireframing, prototyping, web design, mobile app design, Nugen Courses, Nugen IT Services"
        />

        {/* Open Graph for social sharing */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="UI/UX Design Courses | Learn Web & Mobile App Design | Nugen Courses"
        />
        <meta
          property="og:description"
          content="Explore the art of UI/UX design with hands-on training. Learn to design stunning, user-centered web and mobile apps using industry-standard tools like Figma and Adobe XD."
        />
        <meta
          property="og:url"
          content="https://www.nugeninfo.com/explore-courses/uiux"
        />
        <meta property="og:image" content="/images/ui-ux-design-og.jpg" />
        <meta
          property="og:image:alt"
          content="Nugen Courses – Learn UI/UX Design with Figma and Adobe XD"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="UI/UX Design Courses | Learn Web & Mobile App Design | Nugen Courses"
        />
        <meta
          name="twitter:description"
          content="Build the skills to design exceptional user interfaces and experiences for web and mobile apps. Start your journey with Nugen Courses today."
        />
        <meta name="twitter:image" content="/images/ui-ux-design-og.jpg" />
      </Head>
      {loading ? <Loader /> : <UIUXDesign />}
    </>
  );
};

export default UIUXPage;
