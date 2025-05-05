"use client";
import { useEffect, useState } from "react";
import CMSEngineering from "@/src/components/services/Cms";
import Loader from "@/src/components/common/Loader";
import Head from "next/head";

const CmsPage = () => {
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
          CMS Courses | Learn WordPress, Shopify & Headless CMS | Nugen Courses
        </title>
        <meta
          name="description"
          content="Master content management systems with Nugen Courses. Learn WordPress, Shopify, and modern headless CMS platforms like Strapi and Contentful."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="CMS course, WordPress training, Shopify development, headless CMS, Strapi, Contentful, content management systems, Nugen Courses, Nugen IT Services"
        />

        {/* Open Graph for social sharing */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="CMS Courses | Learn WordPress, Shopify & Headless CMS | Nugen Courses"
        />
        <meta
          property="og:description"
          content="Explore CMS development with Nugen Courses. Build dynamic websites using WordPress, Shopify, and headless CMS platforms with expert guidance."
        />
        <meta
          property="og:url"
          content="https://www.nugeninfo.com/explore-courses/cms"
        />
        <meta property="og:image" content="/images/cms-og.jpg" />
        <meta
          property="og:image:alt"
          content="Nugen Courses – Learn Content Management Systems like WordPress, Shopify & Strapi"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="CMS Courses | Learn WordPress, Shopify & Headless CMS | Nugen Courses"
        />
        <meta
          name="twitter:description"
          content="Gain practical CMS skills with WordPress, Shopify, and modern headless platforms. Enroll now at Nugen Courses."
        />
        <meta name="twitter:image" content="/images/cms-og.jpg" />
      </Head>
      {loading ? <Loader /> : <CMSEngineering />}
    </>
  );
};

export default CmsPage;
