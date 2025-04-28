"use client";
import { ClockFading, BookOpenCheck, School } from "lucide-react";

import { courseFeatures, fullStackCarreers, fullStackConcepts } from "@/src/json/opportunities";
import CourseBanner from "../../common/heroSection";
import HowItWorksSection from "../../common/howItWorks";
import ConceptsCommon from "../../common/conceptCommon";
import FeaturesSection from "../../common/featuresSection";
import FlipCardSection from "../../common/opportunities";
import EnrolmentCard from "../../common/EnrolmentCard";
import CourseTargets from "../../common/courseTargets";


export default function FullStack() {
  return (
    <>
      <CourseBanner
        title="Become a"
        highlight="Full Stack Developer"
        description="Learn both frontend and backend to build full-scale, production-ready applications from scratch."
        features={[
          {
            icon: <ClockFading className="text-[#f7846f]" />,
            title: "3 Months",
            subtitle: "Course Duration",
          },
          {
            icon: <BookOpenCheck className="text-[#f7846f]" />,
            title: "1st of Every Month",
            subtitle: "Next Batch",
          },
          {
            icon: <School className="text-[#f7846f]" />,
            title: "Hybrid Classes",
            subtitle: "Learning Mode",
          },
        ]}
      />
      <HowItWorksSection
        title={
          <>
            What <span className="text-[#f37458]">full stack</span> skills
            <span className="text-[#f37458] pl-3">will you learn</span>?
          </>
        }
        description="This Full Stack Developer course walks you through everything from building stunning frontends to designing powerful backends. You'll learn how to structure complete applications, integrate databases, and deploy your projects to the cloud – all using industry-relevant tools and workflows."
      >
        <ConceptsCommon items={fullStackConcepts} />
      </HowItWorksSection>
       <FeaturesSection
      subtitle="About"
      title="Course"
      highlight="Features"
      description="Our front-end developer course curriculum, curated by experienced industry experts, emphasises on making you a versatile professional ready to tackle the challenges of the evolving digital landscape."
      imageSrc="/featureSection.webp"
      features={courseFeatures}
    />
      <CourseTargets />
      <FlipCardSection
      sectionTitle="Career Opportunities"
      sectionDescription="Ever since the inception of the Internet in the 1990s, the area of web development has shown increasing growth. Once you complete Nugen's Full Stack developer course, you can seek job opportunities in the following roles:"
      items={fullStackCarreers?.map((career) => ({
        id: career.id,
        img: career.img,
        title: career.title,
        description: career.description,
        backTitle: "Key Skills",
        backList: career.benefits,
      }))}
    />
      <EnrolmentCard />
    </>
  );
}
