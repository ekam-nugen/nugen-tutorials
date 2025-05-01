"use client";
import { useEffect, useState } from "react";
import Loader from "@/src/components/common/Loader";
import QAMaintenance from "@/src/components/services/QA";

const AppDevelopment = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust the duration as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? <Loader /> : <QAMaintenance />}
    </>
  );
}

export default AppDevelopment;
