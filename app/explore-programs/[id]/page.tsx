"use client";
import Loader from "@/src/components/common/Loader";
import CoursesContent from "@/src/components/coursesContent";
import { exploreProgramsStack } from "@/src/json/explorePrograms";
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

  const tech = exploreProgramsStack?.find(
    (t) =>
      t?.id?.toLowerCase() ===
      (typeof id === "string" && id?.trim().toLowerCase())
  );

  if (!tech) {
    return (
      <div className="p-10 text-center text-xl text-red-500">
        Program {id} not found 🚫
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{tech.techName} | Nugen Courses</title>
        <meta
          name="description"
          content={`Learn ${tech.techName} with expert instructors at Nugen Courses. Discover the skills, tools, and techniques for mastering ${tech.techName}.`}
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content={`${tech.techName} course, ${tech.techName} training, learn ${tech.techName}, Nugen Courses`}
        />

        {/* Open Graph for social sharing */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={`${tech.techName} | Nugen Courses`}
        />
        <meta
          property="og:description"
          content={`Start learning ${tech.techName} at Nugen Courses. Explore in-depth lessons, hands-on projects, and career opportunities in ${tech.techName}.`}
        />
        <meta
          property="og:url"
          content={`https://www.nugeninfo.com/courses/${tech.id}`}
        />
        <meta property="og:image" content="/images/tech-program-og.jpg" />
        <meta
          property="og:image:alt"
          content={`Nugen Courses – Learn ${tech.techName} with Expert-Led Training`}
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`${tech.techName} | Nugen Courses`}
        />
        <meta
          name="twitter:description"
          content={`Learn ${tech.techName} with expert instructors at Nugen Courses. Build real-world skills and start your career today.`}
        />
        <meta name="twitter:image" content="/images/tech-program-og.jpg" />
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
