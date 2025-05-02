"use client";
import { useEffect, useState } from "react";
import UIUXDesign from "@/src/components/services/UIUX";
import Loader from "@/src/components/common/Loader";

const UIUXPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust duration as needed

    return () => clearTimeout(timer);
  }, []);

  return <>{loading ? <Loader /> : <UIUXDesign />}</>;
};

export default UIUXPage;
