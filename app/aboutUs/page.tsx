"use client";
import CustomerReviews from "@/src/components/about/CTA";
import Evolution from "@/src/components/about/Evolution";
import HeroSection from "@/src/components/about/Hero";
import Services from "@/src/components/about/Services";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <HeroSection />
      <Services />
      <Evolution />
      <CustomerReviews />
    </>
  );
};

export default AboutPage;
