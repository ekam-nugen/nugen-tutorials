"use client";
import { useEffect, useState } from "react";

import Loader from "@/src/components/common/Loader";
import { FAQSection } from "@/src/components/exploreCourses/questionSection";
import BlogPostPage from "@/src/components/blog/SingleBlog/Singleblog";
import TestimonialSection from "@/src/components/blog/TestimonialCard";

export default function SingleBlog() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust the duration as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <BlogPostPage />
          <TestimonialSection/>
          <FAQSection />
        </>
      )}
    </>
  );
}
