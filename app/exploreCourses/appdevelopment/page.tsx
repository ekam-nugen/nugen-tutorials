"use client";
import { useEffect, useState } from "react";
import CustomizedAppDevelopment from '@/src/components/services/AppDevelopment';
import Loader from "@/src/components/common/Loader";

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
      {loading ? <Loader /> : <CustomizedAppDevelopment />}
    </>
  );
}

export default AppDevelopment;
