"use client";
import { useEffect, useState } from "react";
import Loader from "@/src/components/common/Loader";
import BlogPageSection from "@/src/components/blog";

export default function Blog() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust duration as needed

    return () => clearTimeout(timer);
  }, []);

  return <>{loading ? <Loader /> : <BlogPageSection />}</>;
}
