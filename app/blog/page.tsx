"use client";
import { useEffect, useState } from "react";
import Loader from "@/src/components/common/Loader";
import BlogPageSection from "@/src/components/blog";
import Head from "next/head";

export default function Blog() {
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
        <title>Blog | Nugen Courses by Nugen IT Services</title>
        <meta
          name="description"
          content="Explore our blog for the latest insights, articles, and news on IT education, training, technology trends, and the Nugen Courses community."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="Blog, Nugen Courses, IT education, tech training, technology trends, Nugen IT Services, online courses, industry news, tech articles"
        />

        {/* Open Graph for social sharing */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Blog | Nugen Courses by Nugen IT Services"
        />
        <meta
          property="og:description"
          content="Stay updated with the latest articles and insights from Nugen Courses. Learn more about tech education, trends, and the Nugen Courses community."
        />
        <meta property="og:url" content="https://www.nugeninfo.com/blog" />
        <meta property="og:image" content="/images/blog-og.jpg" />
        <meta
          property="og:image:alt"
          content="Nugen Courses Blog – Stay Updated with IT Education and Tech Trends"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Blog | Nugen Courses by Nugen IT Services"
        />
        <meta
          name="twitter:description"
          content="Explore our blog for the latest updates on IT education, industry trends, and Nugen Courses news."
        />
        <meta name="twitter:image" content="/logo.png" />
      </Head>
      {loading ? <Loader /> : <BlogPageSection />}
    </>
  );
}
