import React from "react";
import ValuesSection from "@/src/components/ourMission/values";
import ContactUsSection from "@/src/components/contactUs/contactUs";
import OurStrength from "@/src/components/ourMission/strength";
import MissionSection from "@/src/components/ourMission/mission";

function MissionPage() {
  return (
    <>
      <MissionSection />
      <OurStrength />
      <ValuesSection />
      <ContactUsSection />
    </>
  );
}

export default MissionPage;
