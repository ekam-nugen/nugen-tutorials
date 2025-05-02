"use client";
import { useEffect, useState } from "react";
import CloudEngineering from "@/src/components/services/CloudEngineering";
import Loader from "@/src/components/common/Loader";

const CloudEngineeringPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust the duration as needed

    return () => clearTimeout(timer);
  }, []);

  return <>{loading ? <Loader /> : <CloudEngineering />}</>;
};

export default CloudEngineeringPage;
