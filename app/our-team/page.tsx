"use client";
import Loader from "@/src/components/common/Loader";
import ContactUsSection from "@/src/components/contactUs/contactUs";
import TeamHero from "@/src/components/OurTeam/heroSection";
import ClientSlider from "@/src/components/OurTeam/partnerSection";
import TeamChoose from "@/src/components/OurTeam/teamChoose";
import TeamSection from "@/src/components/OurTeam/teamSection";
import Head from "next/head";
import React, { useEffect, useState } from "react";

function BlogPage() {
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
        <title>Our Team | Meet the Experts Behind Nugen Courses</title>
        <meta
          name="description"
          content="Meet the passionate team of educators, developers, and tech experts powering Nugen Courses. We're dedicated to delivering high-quality IT training online."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="Nugen Courses team, Nugen IT Services experts, meet our instructors, IT educators, online training team, tech education staff"
        />

        {/* Open Graph for social sharing */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Our Team | Meet the Experts Behind Nugen Courses"
        />
        <meta
          property="og:description"
          content="Get to know the talented professionals driving Nugen Courses. Learn more about our instructors, developers, and support team."
        />
        <meta property="og:url" content="https://www.nugeninfo.com/our-team" />
        <meta property="og:image" content="/images/team-og.jpg" />
        <meta
          property="og:image:alt"
          content="Nugen Courses Team – Expert IT Educators & Developers"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Our Team | Meet the Experts Behind Nugen Courses"
        />
        <meta
          name="twitter:description"
          content="Discover the passionate instructors and tech professionals powering the success of Nugen Courses."
        />
        <meta name="twitter:image" content="/logo.png" />
      </Head>

      {loading ? (
        <Loader />
      ) : (
        <>
          <TeamHero />
          <TeamSection />
          <ClientSlider />
          <TeamChoose />
          <ContactUsSection />
        </>
      )}
    </>
  );
}

export default BlogPage;
