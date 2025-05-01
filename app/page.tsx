"use client";
import Loader from "@/src/components/common/Loader";
import WhyNugenIT from "@/src/components/homePage/chooseUs";
import TechnologyShowcase from "@/src/components/homePage/courses";
import HeroSection from "@/src/components/homePage/heroSection";
import TestimonialStatic from "@/src/components/homePage/testimonialStatic";
import TrendingCourses from "@/src/components/homePage/trendingCourses";
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
      {loading ? (
        <Loader />
      ) : (
        <>
          <HeroSection />
          <TrendingCourses />
          <TechnologyShowcase />
          <WhyNugenIT />
          <TestimonialStatic />
        </>
      )}
    </>
  );
}
