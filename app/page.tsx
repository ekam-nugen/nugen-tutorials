import WhyNugenIT from "@/src/components/homePage/chooseUs";
import TechnologyShowcase from "@/src/components/homePage/courses";
import HeroSection from "@/src/components/homePage/heroSection";
import StudentTestimonials from "@/src/components/homePage/testimonialSection";
import Footer from "@/src/layout/Footer";
import Header from "@/src/layout/Header";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <TechnologyShowcase />
      <StudentTestimonials />
      <WhyNugenIT />
      <Footer />
    </>
  );
}
