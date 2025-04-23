import React from "react";
import CompanyStatsSection from "./highlightsSection";
import { stats } from "@/src/json/contactUs/contactus";
import ContactUsSection from "./contactUs";

export default function ContactUs() {
  return (
    <div className="">
      <ContactUsSection />
      <CompanyStatsSection
        data={stats}
        title={"We’re a 500+ Team of Proven AI, Cloud, Web, Mobile, UI/UX,"}
        subTitle={"Ambitious Startups Like You."}
      />
    </div>
  );
}
