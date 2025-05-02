"use client";
import { useEffect, useState } from "react";
import Loader from "@/src/components/common/Loader";
import ContactUsSection from "@/src/components/contactUs/contactUs";
import ShowReviewsPage from "@/src/components/homePage/testimonialSection";
import Head from "next/head";

export default function HowWeWork() {
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
        <title>Student Reviews | What Learners Say About Nugen Courses</title>
        <meta
          name="description"
          content="Read honest reviews and testimonials from learners who have advanced their IT skills with Nugen Courses. Trusted by thousands of students worldwide."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="Nugen Courses reviews, student testimonials, IT training feedback, online course ratings, learner stories, trusted learning platform"
        />

        {/* Open Graph for social sharing */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Student Reviews | What Learners Say About Nugen Courses"
        />
        <meta
          property="og:description"
          content="Discover what students are saying about their experience with Nugen Courses. Real reviews from real learners."
        />
        <meta property="og:url" content="https://www.nugeninfo.com/reviews" />
        <meta property="og:image" content="/images/reviews-og.jpg" />
        <meta
          property="og:image:alt"
          content="Nugen Courses Reviews – Trusted by Students Worldwide"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Student Reviews | Nugen Courses" />
        <meta
          name="twitter:description"
          content="Read what learners think about Nugen Courses. Trusted education, proven results."
        />
        <meta name="twitter:image" content="/logo.png" />
      </Head>

      {loading ? (
        <Loader />
      ) : (
        <>
          <ShowReviewsPage />
          <ContactUsSection />
        </>
      )}
    </>
  );
}
