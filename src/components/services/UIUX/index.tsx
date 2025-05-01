import React from "react";
import * as LucideIcons from "lucide-react";
import DevelopmentProcess, { ProcessItem } from "../AI_Ml/ProcessAI";
import CoreCompetencies, { Competency } from "../AI_Ml/CoreCompentencies";
import AIMLBanner from "../AI_Ml/HeroAI";
import ClientSlider from "../../OurTeam/partnerSection";
import DiscussProject from "../AI_Ml/DiscussProject";
import { FAQSection } from "../../exploreCourses/questionSection";
import ContactUsSection from "../../contactUs/contactUs";
import TestimonialStatic from "../../homePage/testimonialStatic";

const UIUXDesign = () => {
  const uiuxIcons: (keyof typeof LucideIcons)[] = ["Brush", "Eye", "Layout"];
  const uiuxProcessItems: ProcessItem[] = [
    {
      number: 1,
      title: "User Research",
      description:
        "We conduct in-depth research to understand your users’ needs, behaviors, and pain points, laying the foundation for intuitive designs.",
      icon: "Search",
    },
    {
      number: 2,
      title: "Wireframing & Prototyping",
      description:
        "Our team creates wireframes and interactive prototypes to visualize the user journey and validate design concepts early in the process.",
      icon: "Layout",
    },
    {
      number: 3,
      title: "UI Design",
      description:
        "We craft visually stunning and consistent interfaces, ensuring brand alignment, accessibility, and a seamless user experience.",
      icon: "Brush",
    },
    {
      number: 4,
      title: "Usability Testing",
      description:
        "We test designs with real users to identify friction points, gathering feedback to refine and optimize the user experience.",
      icon: "Eye",
    },
    {
      number: 5,
      title: "Design System Development",
      description:
        "We build scalable design systems with reusable components, ensuring consistency and efficiency across your digital products.",
      icon: "Grid",
    },
    {
      number: 6,
      title: "Handoff & Support",
      description:
        "We provide developers with detailed design assets and guidelines, offering ongoing support to ensure flawless implementation.",
      icon: "Share",
    },
  ];
  const uiuxCompetencies: Competency[] = [
    {
      icon: "Brush",
      title: "Visual Design",
      content:
        "Our designers create aesthetically pleasing and brand-aligned interfaces, balancing creativity with usability for engaging user experiences.",
    },
    {
      icon: "Eye",
      title: "User Experience (UX) Design",
      content:
        "We focus on crafting intuitive user journeys, leveraging research and testing to ensure seamless and delightful interactions.",
    },
    {
      icon: "Layout",
      title: "Prototyping",
      content:
        "We build interactive prototypes using tools like Figma and Adobe XD, enabling early validation and refinement of design concepts.",
    },
    {
      icon: "Grid",
      title: "Design Systems",
      content:
        "Our team develops scalable design systems with reusable components, ensuring consistency and speeding up development across platforms.",
    },
    {
      icon: "Accessibility",
      title: "Accessibility (A11y)",
      content:
        "We design inclusive interfaces that comply with WCAG standards, ensuring your product is usable by all, including those with disabilities.",
    },
    {
      icon: "Monitor",
      title: "Responsive Design",
      content:
        "We create responsive and adaptive designs that deliver a consistent experience across desktops, tablets, and mobile devices.",
    },
  ];
  return (
    <>
      <AIMLBanner
        title="UI & UX Design Services"
        subtitle="Transform your digital products with our UI & UX design services, delivering intuitive, visually stunning, and user-centric experiences that drive engagement."
        reviewCount={280}
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
        companyRatingText="from India's Highest-rated Design Agency"
        ctaText="Discuss Your Design Needs"
        ctaLink="/contact-us"
        consultationTitle="Ready to elevate your user experience?"
        consultationDescription="Share your vision, and we’ll provide a free expert consultation within 24 hours, delivering a tailored UI/UX strategy to captivate your users."
        icons={uiuxIcons}
      />
      <DevelopmentProcess
        title="Our UI & UX Design Process"
        subtitle="Our UI & UX design process is user-centric and iterative, ensuring intuitive and visually appealing designs. From research to handoff, we create experiences that delight and engage."
        highlightedText="design process"
        processItems={uiuxProcessItems}
        ctaText="Get in Touch with Us"
        ctaLink="/contact-us"
        ctaDataAttribute="Hire a UI/UX Designer - UI & UX Design"
      />
      <ClientSlider />
      <DiscussProject
        className="bg-gradient-to-r from-white via-[#fff1eb] to-white"
        imageSrc="https://codedthemes.com/wp-content/uploads/2024/09/Figma-UI-Kit.svg"
      />
      <CoreCompetencies
        className=""
        title="Technological Expertise of Our UI/UX Designers"
        subtitle="Our UI/UX designers excel in crafting intuitive, engaging, and accessible digital experiences. From prototyping to design systems, we deliver solutions that captivate users."
        competencies={uiuxCompetencies}
        ctaText="Start Your Design Project"
        ctaLink="/contact-us"
        ctaDataAttribute="Hire Top UI/UX Designers - UI & UX Design"
      />
      <TestimonialStatic className="bg-white" />
      <ContactUsSection />
      <FAQSection />
    </>
  );
};

export default UIUXDesign;
