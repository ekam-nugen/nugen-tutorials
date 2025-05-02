"use client";
import { useEffect, useState } from "react";
import CloudEngineering from "@/src/components/services/CloudEngineering";
import Loader from "@/src/components/common/Loader";
import Head from "next/head";

const CloudEngineeringPage = () => {
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
          Cloud Engineering Courses | Master AWS, Azure & DevOps | Nugen Courses
        </title>
        <meta
          name="description"
          content="Become a certified Cloud Engineer with Nugen Courses. Learn AWS, Azure, DevOps, and cloud architecture through hands-on labs and real-world projects."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="cloud engineering course, AWS training, Azure certification, DevOps bootcamp, cloud architect, Nugen Courses, cloud computing skills, Nugen IT Services"
        />

        {/* Open Graph for social sharing */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Cloud Engineering Courses | Master AWS, Azure & DevOps | Nugen Courses"
        />
        <meta
          property="og:description"
          content="Join Nugen Courses to gain in-demand cloud engineering skills. Learn AWS, Azure, and DevOps with expert mentors and practical projects."
        />
        <meta
          property="og:url"
          content="https://www.nugeninfo.com/courses/explore-courses/cloud-engineering"
        />
        <meta property="og:image" content="/images/cloud-engineering-og.jpg" />
        <meta
          property="og:image:alt"
          content="Nugen Courses – Cloud Engineering Training with AWS, Azure, and DevOps"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Cloud Engineering Courses | Master AWS, Azure & DevOps | Nugen Courses"
        />
        <meta
          name="twitter:description"
          content="Build a future-proof career in cloud computing with Nugen Courses. Learn cloud architecture, AWS, Azure, and DevOps from experts."
        />
        <meta name="twitter:image" content="/images/cloud-engineering-og.jpg" />
      </Head>
      {loading ? <Loader /> : <CloudEngineering />}
    </>
  );
};

export default CloudEngineeringPage;
