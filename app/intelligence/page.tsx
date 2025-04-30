"use client";
import { useEffect, useState } from "react";
import Loader from "@/src/components/common/Loader";
import Intelligence from "@/src/components/AI_Ml";

const IntelligencePage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust duration as needed

    return () => clearTimeout(timer);
  }, []);

  return <>{loading ? <Loader /> : <Intelligence />}</>;
};

export default IntelligencePage;
