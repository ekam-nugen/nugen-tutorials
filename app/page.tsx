import WhyNugenIT from "@/src/components/homePage/chooseUs";
import TechnologyShowcase from "@/src/components/homePage/courses";
import HeroSection from "@/src/components/homePage/heroSection";
import StudentTestimonials from "@/src/components/homePage/testimonialSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TechnologyShowcase />
      <StudentTestimonials />
      <WhyNugenIT />
    </>
  );
}
