"use client";
import Loader from "@/src/components/common/Loader";
import CoursesContent from "@/src/components/coursesContent";
import { courseStack } from "@/src/json/coursesContent";
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
