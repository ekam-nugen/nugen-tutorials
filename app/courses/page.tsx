import CourseTargets from "@/src/components/courses/courseTargets";
import EnrolmentCard from "@/src/components/courses/EnrolmentCard";
import FeaturesSection from "@/src/components/courses/featuresSection";
import CourseBanner from "@/src/components/courses/herosection";
import HowItWorkSection from "@/src/components/courses/HowItWorksSection";
import CareerOpportunities from "@/src/components/courses/opportunities";

export default function Home() {
    return (
        <>
            <CourseBanner />
            <HowItWorkSection />
            <FeaturesSection />
            <CourseTargets />
            <CareerOpportunities />
            <EnrolmentCard />
        </>
    );
}