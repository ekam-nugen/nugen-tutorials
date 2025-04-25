import WhyNugenIT from "@/src/components/homePage/chooseUs";
import TechnologyShowcase from "@/src/components/homePage/courses";
import HeroSection from "@/src/components/homePage/heroSection";
import StudentTestimonials from "@/src/components/homePage/testimonialSection";
import TrendingCourses from "@/src/components/homePage/trendingCourses";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrendingCourses />
      <TechnologyShowcase />
      <WhyNugenIT />
      <StudentTestimonials />
    </>
  );
}
