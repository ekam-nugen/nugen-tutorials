import ContactUsSection from "../../contactUs/contactUs";
import { FAQSection } from "../../exploreCourses/questionSection";
import TestimonialStatic from "../../homePage/testimonialStatic";
import ClientSlider from "../../OurTeam/partnerSection";
import CoreCompetencies, { Competency } from "../AI_Ml/CoreCompentencies";
import DiscussProject from "../AI_Ml/DiscussProject";
import AIMLBanner from "../AI_Ml/HeroAI";
import DevelopmentProcess, { ProcessItem } from "../AI_Ml/ProcessAI";
import * as LucideIcons from "lucide-react";

const WebDevelopment = () => {
  const webDevIcons: (keyof typeof LucideIcons)[] = [
    "Globe",
    "LaptopMinimalCheck",
    "Shield",
  ];
  const webDevProcessItems: ProcessItem[] = [
    {
      number: 1,
      title: "Requirement Analysis",
      description:
        "We collaborate with you to understand your business goals and user needs, designing a tailored web development strategy for a responsive and innovative website.",
      icon: "Search",
    },
    {
      number: 2,
      title: "Design & Prototyping",
      description:
        "Our team creates visually appealing and user-friendly designs, using modern tools to prototype interfaces that ensure a seamless user experience.",
      icon: "PenTool",
    },
    {
      number: 3,
      title: "Development & Coding",
      description:
        "We build customized websites using cutting-edge technologies like ReactJS, AngularJS, and NodeJS, ensuring high performance and scalability.",
      icon: "Code",
    },
    {
      number: 4,
      title: "Testing & Optimization",
      description:
        "We rigorously test your website for functionality, performance, and responsiveness, optimizing code to deliver a flawless user experience.",
      icon: "Gauge",
    },
    {
      number: 5,
      title: "SEO & Content Integration",
      description:
        "We integrate SEO best practices and dynamic content to enhance visibility and engagement, driving traffic to your website.",
      icon: "MonitorCog",
    },
    {
      number: 6,
      title: "Maintenance & Updates",
      description:
        "We provide ongoing support and updates using modern frameworks, ensuring your website remains secure, fast, and aligned with industry trends.",
      icon: "RotateCw",
    },
  ];
  const webDevCompetencies: Competency[] = [
    {
      icon: "Globe",
      title: "Custom Web Development",
      content:
        "We specialize in building responsive, customized websites using ReactJS, AngularJS, and NodeJS, delivering innovative solutions for diverse industries.",
    },
    {
      icon: "Code",
      title: "Modern Frameworks",
      content:
        "Our team leverages trending frameworks like MEAN stack and ReactJS to create scalable, high-performance web applications tailored to your needs.",
    },
    {
      icon: "Shield",
      title: "Web Security",
      content:
        "We implement robust security measures, including encryption and secure coding practices, to protect your website from threats and vulnerabilities.",
    },
    {
      icon: "Gauge",
      title: "Performance Optimization",
      content:
        "We optimize website performance with efficient coding, caching, and responsive design, ensuring fast load times and seamless user experiences.",
    },
    {
      icon: "MonitorCog",
      title: "SEO Integration",
      content:
        "We enhance your website’s visibility with SEO best practices, optimizing content and structure to drive traffic and improve search rankings.",
    },
    {
      icon: "RotateCw",
      title: "Ongoing Maintenance",
      content:
        "We provide continuous updates and support, keeping your website secure, up-to-date, and aligned with the latest web development trends.",
    },
  ];

  return (
    <>
      <AIMLBanner
        title="Web Development Services"
        subtitle="Transform your digital presence with our innovative web development services, delivering customized, responsive, and high-performance websites using cutting-edge technologies."
        reviewCount={450}
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
        companyRatingText="from India's Premier Web Development Innovator"
        ctaText="Discuss Your Web Development Needs"
        ctaLink="/contact-us"
        consultationTitle="Ready to elevate your website?"
        consultationDescription="Share your vision, and we’ll provide a free expert consultation within 24 hours, delivering a tailored web development strategy to drive your digital success."
        icons={webDevIcons}
      />
      <DevelopmentProcess
        title="Our Web Development Process"
        subtitle="Our web development process is collaborative and innovation-driven, delivering responsive, secure, and high-quality websites. From concept to ongoing support, we create digital solutions that stand out."
        highlightedText="development process"
        processItems={webDevProcessItems}
        ctaText="Get in Touch with Us"
        ctaLink="/contact-us"
        ctaDataAttribute="Hire a Web Development Expert - Web Development"
      />
      <ClientSlider />
      <DiscussProject
        className="bg-gradient-to-r from-white via-[#f0f4f8] to-white"
        imageSrc="https://www.pngitem.com/pimgs/m/531-5312189_web-app-development-free-svg-for-web-design.png"
      />
      <CoreCompetencies
        className=""
        title="Technological Expertise of Our Web Development Experts"
        subtitle="Our web development experts deliver customized, high-performance websites using modern frameworks and innovative practices, ensuring scalability and user satisfaction."
        competencies={webDevCompetencies}
        ctaText="Start Your Web Project"
        ctaLink="/contact-us"
        ctaDataAttribute="Hire Top Web Development Experts - Web Development"
      />
      <TestimonialStatic className="bg-white" />
      <ContactUsSection />
      <FAQSection />
    </>
  );
};

export default WebDevelopment;
