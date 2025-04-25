"use client";
import {
  ClockFading,
  BookOpenCheck,
  School,
  Building2,
  Backpack,
  BadgeDollarSign,
  BriefcaseBusiness,
  GraduationCap,
} from "lucide-react";
import CourseBanner from "../../common/heroSection";
import HowItWorksSection from "../../common/howItWorks";
import EnrolmentCard from "../frontEnd/EnrolmentCard";
import ConceptsCommon from "../../common/conceptCommon";
import CourseTargets from "../frontEnd/courseTargets";
import FeaturesSection from "../../common/featuresSection";
import FlipCardSection from "../../common/opportunities";
import { backendCareers } from "@/src/json/opportunities";

const backendConcepts = [
  "Node.js & Express.js",
  "RESTful APIs & GraphQL",
  "Authentication & Authorization",
  "Databases: SQL & NoSQL",
  "CI/CD & Deployment",
  "Testing & Debugging",
];

const courseFeatures = [
  {
    icon: GraduationCap,
    title: "Personalized Mentorship",
    description: "Focused guidance from seasoned experts",
  },
  {
    icon: Building2,
    title: "Real-world Project",
    description: "Hands-on work on a live backend system",
  },
  {
    icon: BriefcaseBusiness,
    title: "Industry-driven Curriculum",
    description: "Learn tools and frameworks used in real-world systems",
  },
  {
    icon: BriefcaseBusiness,
    title: "Career Support",
    description: "Get help landing backend-specific roles",
  },
  {
    icon: Backpack,
    title: "Individualized Learning Experience",
    description: "Course tailored to your learning style and pace",
  },
  {
    icon: BadgeDollarSign,
    title: "Exclusive Job Opportunities",
    description: "Top students get priority interview access",
  },
];

export default function Backend() {
  return (
    <>
      <CourseBanner
        title="Master the"
        highlight="Backend Development"
        description="Learn to build scalable servers, APIs, and services using modern backend technologies."
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
            What <span className="text-[#f37458]">backend</span> skills{" "}
            <span className="text-[#f37458]">will you master</span>?
          </>
        }
        description="This Backend Developer course focuses on the core skills to build APIs, integrate databases, ensure secure authentication, and deploy robust backends. Get hands-on experience with tools companies use today."
      >
        <ConceptsCommon items={backendConcepts} />
      </HowItWorksSection>

      <FeaturesSection
        subtitle="About"
        title="Course"
        highlight="Features"
        description="Our backend course curriculum, curated by senior backend engineers, trains you on the tools, techniques, and mindset needed to manage real-world backend infrastructures."
        imageSrc="/featureSection.webp"
        features={courseFeatures}
      />
      <CourseTargets />
      <FlipCardSection
        sectionTitle="Career Opportunities"
        sectionDescription="Backend development powers the logic, data, and scalability behind every digital experience. After completing Nugen’s backend developer course, you'll be ready for the following roles:"
        items={backendCareers?.map((career) => ({
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
