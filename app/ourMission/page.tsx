"use client";
import React, { useEffect, useState } from "react";
import ValuesSection from "@/src/components/ourMission/values";
import ContactUsSection from "@/src/components/contactUs/contactUs";
import OurStrength from "@/src/components/ourMission/strength";
import MissionSection from "@/src/components/ourMission/mission";
import Loader from "@/src/components/common/Loader";

function MissionPage() {
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
          <MissionSection />
          <OurStrength />
          <ValuesSection />
          <ContactUsSection />
        </>
      )}
    </>
  );
}

export default MissionPage;
