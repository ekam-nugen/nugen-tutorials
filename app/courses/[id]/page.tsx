"use client";
import Loader from "@/src/components/common/Loader";
import PackageCourseDetails from "@/src/components/common/packageCourses";
import { packageCourseStack } from "@/src/json/packageCourses";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
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
