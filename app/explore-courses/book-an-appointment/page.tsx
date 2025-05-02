"use client";
import { useEffect, useState } from "react";
import Loader from "@/src/components/common/Loader";
import HireUsPage from "@/src/components/OurTeam/hireus";

export default function Page() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust duration as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? <Loader /> : <HireUsPage />}
    </>
  );
}
