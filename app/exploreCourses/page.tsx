import ContactUsSection from "@/src/components/contactUs/contactUs";
import CompanyStatsSection from "@/src/components/exploreCourses/highlightsSection";
import { FAQSection } from "@/src/components/exploreCourses/questionSection";
import ServicesSection from "@/src/components/exploreCourses/technologiesTab";
import { services } from "@/src/components/exploreCourses/technologycardData";
import { TechnologySection } from "@/src/components/exploreCourses/technologySection";
import React from "react";

const Services = () => {
  return (
    <>
      <TechnologySection />
      <CompanyStatsSection
        data={services}
        title={"Software Development and Consulting"}
        subTitle={
          "As a reliable software development company, we help startups and enterprises realize their business goals with our advanced software solutions. Our portfolio of custom software development services includes:"
        }
      />
      <ServicesSection />
      <FAQSection />
      <ContactUsSection />
    </>
  );
};

export default Services;
