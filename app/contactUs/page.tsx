"use client";
import Loader from "@/src/components/common/Loader";
import ContactUs from "@/src/components/contactUs";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <ContactUs />
        </>
      )}
    </>
  );
}
