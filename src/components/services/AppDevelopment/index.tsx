import React from "react";

import * as LucideIcons from "lucide-react";
import DevelopmentProcess, { ProcessItem } from "../AI_Ml/ProcessAI";
import CoreCompetencies, { Competency } from "../AI_Ml/CoreCompentencies";
import ClientSlider from "../../OurTeam/partnerSection";
import DiscussProject from "../AI_Ml/DiscussProject";
import TechnologyShowcase from "../../homePage/courses";
import BlogSection from "../AI_Ml/blog";
import TestimonialStatic from "../../homePage/testimonialStatic";
import ContactUsSection from "../../contactUs/contactUs";
import { FAQSection } from "../../exploreCourses/questionSection";
import AIMLBanner from "../AI_Ml/HeroAI";

const CustomizedAppDevelopment = () => {
  const appDevelopmentIcons: (keyof typeof LucideIcons)[] = [
    "Smartphone",
    "Code",
    "Rocket",
  ];
  const appDevelopmentProcessItems: ProcessItem[] = [
    {
      number: 1,
      title: "Discovery & Planning",
      description:
        "We collaborate with you to understand your business goals and user needs, creating a detailed roadmap for a tailored app solution.",
      icon: "Search",
    },
    {
      number: 2,
      title: "UI/UX Design",
      description:
        "Our designers craft intuitive and engaging user interfaces, ensuring a seamless and visually appealing experience across devices.",
      icon: "Brush",
    },
    {
      number: 3,
      title: "App Development",
      description:
        "We build your app using modern frameworks (e.g., React Native, Flutter, or native iOS/Android), ensuring scalability and performance.",
      icon: "Code",
    },
    {
      number: 4,
      title: "Integration & Testing",
      description:
        "We integrate APIs and third-party services, conducting rigorous testing to ensure functionality, security, and compatibility.",
      icon: "Puzzle",
    },
    {
      number: 5,
      title: "Deployment",
      description:
        "We deploy your app to app stores or enterprise environments, ensuring a smooth launch and compliance with platform guidelines.",
      icon: "Rocket",
    },
    {
      number: 6,
      title: "Maintenance & Support",
      description:
        "We provide ongoing updates, performance monitoring, and support to keep your app secure, functional, and aligned with user needs.",
      icon: "LifeBuoy",
    },
  ];

  const appDevelopmentCompetencies: Competency[] = [
    {
      icon: "Smartphone",
      title: "Cross-Platform Development",
      content:
        "We build apps using frameworks like React Native and Flutter, delivering consistent experiences across iOS, Android, and web with reduced development time.",
    },
    {
      icon: "Code",
      title: "Native App Development",
      content:
        "Our team develops high-performance native apps for iOS (Swift) and Android (Kotlin), leveraging platform-specific features for optimal user experiences.",
    },
    {
      icon: "Shield",
      title: "App Security",
      content:
        "We implement robust security measures, including data encryption and secure authentication, to protect your app and user data from threats.",
    },
    {
      icon: "Puzzle",
      title: "API Integration",
      content:
        "We seamlessly integrate APIs and third-party services, enabling features like payments, geolocation, and analytics for enhanced app functionality.",
    },
    {
      icon: "Brush",
      title: "Custom UI/UX Design",
      content:
        "Our designers create tailored, user-centric interfaces that align with your brand and provide intuitive, engaging experiences for your users.",
    },
    {
      icon: "Monitor",
      title: "Performance Optimization",
      content:
        "We optimize app performance for speed, scalability, and battery efficiency, ensuring a smooth and reliable experience for users.",
    },
  ];

  return (
    <>
      <AIMLBanner
        title="Customized App Development Services"
        subtitle="Transform your ideas into reality with our customized app development services, delivering scalable, secure, and user-centric mobile and web applications tailored to your business needs."
        reviewCount={270}
        reviewPlatforms={[
          {
            name: "clutch",
            imageSrc:
              "https://megasite.ua/cache/cache_image/d/d60aaf99feb42195ced60bde22d590fc.webp",
            alt: "Clutch Reviews",
          },
          {
            name: "goodfirm",
            imageSrc:
              "https://www.g2.com/products/g2-seller-solutions/widgets/stars?color=white&type=read",
            alt: "GoodFirms Reviews",
          },
          {
            name: "g2",
            imageSrc: "https://i.ytimg.com/vi/f8vrTlBe0sc/maxresdefault.jpg",
            alt: "G2 Reviews",
          },
          {
            name: "google",
            imageSrc:
              "https://studio.made2grow.de/hs-fs/hubfs/made2GROW%20Studio/Tools%20and%20Certification%20Logos/Google%20Ads%20BootCamp%20-%20Partners%20-%20HubSpot%20Platinum-horizontal-color.png?width=1456&height=500&name=Google%20Ads%20BootCamp%20-%20Partners%20-%20HubSpot%20Platinum-horizontal-color.png",
            alt: "Google Reviews",
          },
        ]}
        projectLink="/case-study"
        teamLink="/dedicated-team"
        companyRatingText="from India's Highest-rated App Development Company"
        ctaText="Discuss Your App Idea"
        ctaLink="/contact-us"
        consultationTitle="Ready to build your custom app?"
        consultationDescription="Share your vision, and we’ll provide a free expert consultation within 24 hours, delivering a tailored strategy to bring your app idea to life."
        icons={appDevelopmentIcons}
      />
      <DevelopmentProcess
        title="Our Customized App Development Process"
        subtitle="Our app development process is collaborative and iterative, ensuring tailored, high-quality applications. From discovery to ongoing support, we deliver solutions that drive business success."
        highlightedText="development process"
        processItems={appDevelopmentProcessItems}
        ctaText="Get in Touch with Us"
        ctaLink="/contact-us"
        ctaDataAttribute="Hire an App Developer - Customized App Development"
      />
      <ClientSlider />
      <DiscussProject
        className="bg-gradient-to-r from-white via-[#fff1eb] to-white"
        imageSrc="https://cdni.iconscout.com/illustration/premium/thumb/app-development-illustration-download-in-svg-png-gif-file-formats--developer-developers-mobile-application-isometric-pack-business-illustrations-3188838.png"
      />
      <CoreCompetencies
        className=""
        title="Technological Expertise of Our App Developers"
        subtitle="Our app developers excel in building scalable, secure, and user-friendly applications. From cross-platform to native development, we deliver solutions that empower your business."
        competencies={appDevelopmentCompetencies}
        ctaText="Start Your App Project"
        ctaLink="/contact-us"
        ctaDataAttribute="Hire Top App Developers - Customized App Development"
      />
      <TechnologyShowcase />
      <BlogSection />
      <TestimonialStatic className="bg-white" />
      <ContactUsSection />
      <FAQSection />
    </>
  );
};

export default CustomizedAppDevelopment;
