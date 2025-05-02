"use client";
import Loader from "@/src/components/common/Loader";
import CoursesContent from "@/src/components/coursesContent";
import { courseStack } from "@/src/json/coursesContent";
import Head from "next/head";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const tech = courseStack?.find(
    (t) =>
      t?.id?.toLowerCase() ===
      (typeof id === "string" && id?.trim().toLowerCase())
  );

  if (!tech) {
    return (
      <div className="p-10 text-center text-xl text-red-500">
        Technology {id} not found 🚫
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{tech.techName} | Nugen Courses</title>
        <meta name="description" content={tech.tagline} />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content={`${tech.techName}, online training, Nugen Courses, IT certification`}
        />

        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={`${tech.techName} | Nugen Courses`}
        />
        <meta property="og:description" content={tech.tagline} />
        <meta
          property="og:url"
          content={`https://www.nugeninfo.com/courses/${tech.id}`}
        />
        <meta property="og:image" content="/images/course-og.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={`${tech.techName} Cover`} />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`${tech.techName} | Nugen Courses`}
        />
        <meta name="twitter:description" content={tech.tagline} />
        <meta name="twitter:image" content="/images/course-og.jpg" />
      </Head>

      {loading ? (
        <Loader />
      ) : (
        <CoursesContent
          techName={tech.techName}
          tagline={tech.tagline}
          bannerFeatures={tech.bannerFeatures}
          courseFeatures={tech.courseFeatures}
          useCases={tech.useCases}
          career={tech.career}
          howItWorks={tech.howItWorks}
        />
      )}
    </>
  );
}
