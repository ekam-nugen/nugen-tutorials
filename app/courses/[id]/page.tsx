"use client";
import Head from "next/head";
import { useEffect, useState } from "react";
import Loader from "@/src/components/common/Loader";
import PackageCourseDetails from "@/src/components/common/packageCourses";
import { packageCourseStack } from "@/src/json/packageCourses";
import { useParams } from "next/navigation";

export default function CourseDetailsPage() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const tech = packageCourseStack?.find(
    (t) =>
      t?.id?.toLowerCase() ===
      (typeof id === "string" && id?.trim().toLowerCase())
  );

  if (!tech) {
    return (
      <div className="p-10 text-center text-xl text-red-500">
        Course {id} not found 🚫
      </div>
    );
  }

  return (
    <>
      {/* Dynamic Head component */}
      <Head>
        <title>{`${tech.techName} Course Details | Nugen Courses by Nugen IT Services`}</title>
        <meta
          name="description"
          content={`Explore the ${tech.techName} course offered by Nugen Courses. Learn about its features, benefits, use cases, and more.`}
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content={`${tech.techName} course, ${tech.techName} training, Nugen Courses, online IT training, IT education, tech education`}
        />
        {/* Open Graph for social sharing */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={`${tech.techName} Course Details | Nugen Courses by Nugen IT Services`}
        />
        <meta
          property="og:description"
          content={`Learn about the ${tech.techName} course, its features, and how it empowers you to master the technology with Nugen Courses.`}
        />
        <meta
          property="og:url"
          content={`https://www.nugeninfo.com/courses/${tech.id}`}
        />
        <meta property="og:image" content={"/images/courses-og.jpg"} />
        <meta
          property="og:image:alt"
          content={`Learn ${tech.techName} – Nugen Courses`}
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`${tech.techName} Course Details | Nugen Courses by Nugen IT Services`}
        />
        <meta
          name="twitter:description"
          content={`Explore the details of the ${tech.techName} course. Master the technology with expert-led training from Nugen Courses.`}
        />
        <meta name="twitter:image" content={"/logo.png"} />
      </Head>

      {loading ? (
        <Loader />
      ) : (
        <PackageCourseDetails
          id={tech.id}
          techName={tech.techName}
          tagline={tech.tagline}
          bannerFeatures={tech.bannerFeatures}
          courseFeatures={tech.courseFeatures}
          useCases={tech.useCases}
        />
      )}
    </>
  );
}
