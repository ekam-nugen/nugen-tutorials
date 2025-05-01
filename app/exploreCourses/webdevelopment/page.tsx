"use client";
import { useEffect, useState } from "react";
import WebDevelopment from "@/src/components/services/WebDevelopment";
import Loader from "@/src/components/common/Loader";

const WebDevelopmentPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust duration as needed

    return () => clearTimeout(timer);
  }, []);

  return <>{loading ? <Loader /> : <WebDevelopment />}</>;
};

export default WebDevelopmentPage;
