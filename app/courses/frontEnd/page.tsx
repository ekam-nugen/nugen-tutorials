import CourseTargets from "@/src/components/courses/frontEnd/courseTargets";
import EnrolmentCard from "@/src/components/courses/frontEnd/EnrolmentCard";
import FeaturesSection from "@/src/components/courses/frontEnd/featuresSection";
import CourseBanner from "@/src/components/courses/frontEnd/herosection";
import HowItWorkSection from "@/src/components/courses/frontEnd/HowItWorksSection";
import CareerOpportunities from "@/src/components/courses/frontEnd/opportunities";

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