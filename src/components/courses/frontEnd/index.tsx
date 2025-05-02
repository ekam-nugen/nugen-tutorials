"use client";
import { ClockFading, BookOpenCheck, School } from "lucide-react";

import { courseFeatures, frontEndCareers } from "@/src/json/opportunities";
import CourseBanner from "../../common/heroSection";
import HowItWorksSection from "../../common/howItWorks";
import ConceptsCommon from "../../common/conceptCommon";
import FeaturesSection from "../../common/featuresSection";
import FlipCardSection from "../../common/opportunities";
import EnrollmentCard from "../../common/enrollmentCard";
import CourseTargets from "../../common/courseTargets";
const frontEndConcepts = [
  "Basics of HTML and CSS",
  "Fundamentals of JavaScript",
  "Building Interfaces with ReactJS",
  "Working with UI Frameworks",
  "VCS Hosting",
  "Related Web Security Solutions",
];
export default function FrontEnd() {
  return (
    <>
      <CourseBanner
        highlight="Front-End Developer"
        description="Master the art of building stunning, high-performance websites and applications with cutting-edge front-end technologies."
        features={[
          {
            icon: <ClockFading className="text-[#f7846f]" />,
            title: "2 Months",
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
            What <span className="text-[#f37458]">front-end</span> skills
            <span className="text-[#f37458] pl-3">will you learn</span>?
          </>
        }
        description="Our Front-End Developer course covers everything you need to build modern, responsive web applications — from HTML, CSS, JavaScript to popular frameworks and best UX practices."
      >
        <ConceptsCommon items={frontEndConcepts} />
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
        sectionDescription="With the ever-growing demand for intuitive and engaging web experiences, skilled front-end developers are highly sought after. After completing Nugen's Front-End Developer course, you can explore roles such as:"
        items={frontEndCareers?.map((career) => ({
          id: career.id,
          img: career.img,
          title: career.title,
          description: career.description,
          backTitle: "Key Skills",
          backList: career.benefits,
        }))}
      />
      <EnrollmentCard />
    </>
  );
}
