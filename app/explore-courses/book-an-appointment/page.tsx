"use client";
import { useEffect, useState } from "react";
import Loader from "@/src/components/common/Loader";
import HireUsPage from "@/src/components/OurTeam/hireus";
import Head from "next/head";

export default function Page() {
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
          Book an Appointment | Connect with Experts | Nugen Courses
        </title>
        <meta
          name="description"
          content="Schedule a one-on-one session with Nugen Courses experts. Get personalized guidance on courses, career paths, and IT skill development."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="book appointment, Nugen Courses consultation, IT career guidance, course counseling, talk to expert, Nugen IT Services, personalized learning support"
        />

        {/* Open Graph for social sharing */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Book an Appointment | Connect with Experts | Nugen Courses"
        />
        <meta
          property="og:description"
          content="Need help choosing the right course or career path? Book an appointment with our experts and get personalized recommendations from Nugen Courses."
        />
        <meta
          property="og:url"
          content="https://www.nugeninfo.com/explore-courses/book-an-appointment"
        />
        <meta property="og:image" content="/images/book-appointment-og.jpg" />
        <meta
          property="og:image:alt"
          content="Nugen Courses – Personalized IT Learning Guidance and Appointments"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Book an Appointment | Connect with Experts | Nugen Courses"
        />
        <meta
          name="twitter:description"
          content="Book a free appointment with Nugen Courses experts. Get career and course guidance tailored to your goals."
        />
        <meta name="twitter:image" content="/images/book-appointment-og.jpg" />
      </Head>
      {loading ? <Loader /> : <HireUsPage />}
    </>
  );
}
