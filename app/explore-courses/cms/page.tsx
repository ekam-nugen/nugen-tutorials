"use client";
import { useEffect, useState } from "react";
import CMSEngineering from "@/src/components/services/Cms";
import Loader from "@/src/components/common/Loader";

const CmsPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust duration as needed

    return () => clearTimeout(timer);
  }, []);

  return <>{loading ? <Loader /> : <CMSEngineering />}</>;
};

export default CmsPage;
