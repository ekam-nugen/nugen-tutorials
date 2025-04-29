"use client";
import BlogSectionPage from "@/src/components/blog/blogsection";
import Loader from "@/src/components/common/Loader";
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
          <BlogSectionPage />
        </>
      )}
    </>
  );
}

export default BlogPage;
