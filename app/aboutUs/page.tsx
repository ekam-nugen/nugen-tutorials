"use client";
import React from "react";
import CustomerReviews from "@/src/components/about/CTA";
import Evolution from "@/src/components/about/Evolution";
// import TechSection from "@/src/components/about/Hero";
import HeroSection from "@/src/components/about/index";
import Services from "@/src/components/about/Services";

const AboutPage = () => {
  return (
    <>
      <HeroSection />
      <Services />
      {/* <TechSection /> */}
      <Evolution />
      <CustomerReviews />
    </>
  );
};

export default AboutPage;
