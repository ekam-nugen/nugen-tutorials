"use client";
import CourseBanner from "../common/heroSection";
import HowItWorksSection from "../common/howItWorks";
import ConceptsCommon from "../common/conceptCommon";
import FeaturesSection from "../common/featuresSection";
import FlipCardSection from "../common/opportunities";
import CourseTargets from "../common/courseTargets";
import EnrollmentCard from "../common/enrollmentCard";
import { ICareer, CoursesContentProps } from "@/src/types";

const CoursesContent: React.FC<CoursesContentProps> = ({
  techName,
  tagline,
  bannerFeatures,
  courseFeatures,
  useCases,
  career,
  howItWorks,
}) => {
  return (
    <>
      <CourseBanner
        highlight={techName}
        description={tagline}
        features={bannerFeatures}
      />
      <HowItWorksSection
        title={howItWorks.title}
        description={howItWorks.description}
      >
        <ConceptsCommon items={useCases} />
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
        items={career?.map((career: ICareer) => ({
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
};
export default CoursesContent;
