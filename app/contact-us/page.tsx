"use client";
import Loader from "@/src/components/common/Loader";
import ContactUs from "@/src/components/contactUs";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
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
        <title>Contact Us | Nugen Courses by Nugen IT Services</title>
        <meta
          name="description"
          content="Have questions or need support? Contact Nugen Courses, powered by Nugen IT Services. We're here to help with course inquiries, support, and collaborations."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="Contact Nugen Courses, Nugen IT Services contact, course support, online learning help, IT training contact, reach Nugen, support Nugen Courses"
        />

        {/* Open Graph for social sharing */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Contact Us | Nugen Courses by Nugen IT Services"
        />
        <meta
          property="og:description"
          content="Reach out to Nugen Courses for support, questions, or partnership opportunities. We’re happy to assist you."
        />
        <meta property="og:url" content="https://www.nugeninfo.com/contact-us" />
        <meta property="og:image" content="/images/contact-og.jpg" />
        <meta
          property="og:image:alt"
          content="Contact Nugen Courses – Get Support or Inquire Today"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Contact Us | Nugen Courses by Nugen IT Services"
        />
        <meta
          name="twitter:description"
          content="Get in touch with the Nugen Courses team for any questions, support, or collaboration requests."
        />
        <meta name="twitter:image" content="/logo.png" />
      </Head>

      {loading ? (
        <Loader />
      ) : (
        <>
          <ContactUs />
        </>
      )}
    </>
  );
}
