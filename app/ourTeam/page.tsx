"use client";
import Loader from "@/src/components/common/Loader";
import ContactUsSection from "@/src/components/contactUs/contactUs";
import TeamHero from "@/src/components/OurTeam/heroSection";
import ClientSlider from "@/src/components/OurTeam/partnerSection";
import TeamChoose from "@/src/components/OurTeam/teamChoose";
import TeamSection from "@/src/components/OurTeam/teamSection";
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
      {loading ? (
        <Loader />
      ) : (
        <>
          <TeamHero />
          <TeamSection/>
          <ClientSlider/>
          <TeamChoose/>
          <ContactUsSection/>
        </>
      )}
    </>
  );
}

export default BlogPage;
