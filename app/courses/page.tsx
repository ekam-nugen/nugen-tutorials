import CourseTargets from "@/src/components/courses/courseTargets";
import FeaturesSection from "@/src/components/courses/featuresSection";
import CourseBanner from "@/src/components/courses/herosection";
import CareerOpportunities from "@/src/components/courses/opportunities";

export default function Home() {
  return (
    <>
    <CourseBanner/>
    <FeaturesSection/>
    <CourseTargets/>
    <CareerOpportunities/>
    </>
  );
}