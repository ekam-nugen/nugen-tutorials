"use client";
import {
  ClockFading,
  BookOpenCheck,
  School,
  Building2,
  Users,
  BadgeCheck,
  Handshake,
  BadgeDollarSign,
  ClipboardCheck,
} from "lucide-react";
import CourseBanner from "../common/heroSection";
import HowItWorksSection from "../common/howItWorks";
import ConceptsCommon from "../common/conceptCommon";
import FeaturesSection from "../common/featuresSection";
import FlipCardSection from "../common/opportunities";
import CourseTargets from "../courses/frontEnd/courseTargets";
import EnrolmentCard from "../courses/frontEnd/EnrolmentCard";
import { scrumCareers } from "@/src/json/opportunities";

const scrumConcepts = [
  "Scrum Framework & Agile Principles",
  "Scrum Roles & Responsibilities",
  "Sprint Planning & Review",
  "Daily Stand-ups & Retrospectives",
  "Product Backlog & User Stories",
  "Servant Leadership & Facilitation",
];

const courseFeatures = [
  {
    icon: BadgeCheck,
    title: "Scrum Alliance Certification",
    description: "Become a Certified ScrumMaster® (CSM)",
  },
  {
    icon: Users,
    title: "Expert-Led Sessions",
    description: "Taught by Certified Scrum Trainers (CSTs)",
  },
  {
    icon: ClipboardCheck,
    title: "Interactive Workshops",
    description: "Real-time simulations of Agile practices",
  },
  {
    icon: Handshake,
    title: "Peer Learning & Networking",
    description: "Engage with a vibrant community of Agile practitioners",
  },
  {
    icon: Building2,
    title: "Corporate Case Studies",
    description: "Understand how top companies implement Scrum",
  },
  {
    icon: BadgeDollarSign,
    title: "Career Advancement",
    description: "Boost your profile and unlock Agile roles globally",
  },
];

export default function ScrumMaster() {
  return (
    <>
      <CourseBanner
        title="Become a"
        highlight="Certified ScrumMaster®"
        description="Master Agile principles, facilitate high-performing teams, and earn your globally recognized CSM certification."
        features={[
          {
            icon: <ClockFading className="text-[#f7846f]" />,
            title: "2 Days",
            subtitle: "Training Duration",
          },
          {
            icon: <BookOpenCheck className="text-[#f7846f]" />,
            title: "Every Weekend",
            subtitle: "Next Batch",
          },
          {
            icon: <School className="text-[#f7846f]" />,
            title: "Live Online",
            subtitle: "Learning Mode",
          },
        ]}
      />
      <HowItWorksSection
        title={
          <>
            What <span className="text-[#f37458]">Scrum</span> concepts{" "}
            <span className="text-[#f37458]">will you master</span>?
          </>
        }
        description="This Certified ScrumMaster® course equips you with the Agile mindset, tools, and confidence to lead Scrum teams effectively and deliver continuous value to customers."
      >
        <ConceptsCommon items={scrumConcepts} />
      </HowItWorksSection>

      <FeaturesSection
        subtitle="About"
        title="Course"
        highlight="Features"
        description="Our CSM program offers immersive learning through real-time scenarios, group activities, and hands-on workshops to make you an efficient Scrum practitioner."
        imageSrc="/featureSection.webp"
        features={courseFeatures}
      />
      <CourseTargets />
      <FlipCardSection
        sectionTitle="Career Opportunities"
        sectionDescription="CSM certification opens doors to leadership roles across Agile organizations. Here are the roles you’ll be prepared for after this course:"
        items={scrumCareers?.map((career) => ({
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
