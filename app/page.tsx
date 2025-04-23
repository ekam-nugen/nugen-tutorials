import WhyNugenIT from "@/src/components/chooseUs";
import TechnologyShowcase from "@/src/components/courses";
import HeroSection from "@/src/components/heroSection";
import StudentTestimonials from "@/src/components/testimonial";
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
