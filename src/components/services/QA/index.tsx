
import ContactUsSection from "../../contactUs/contactUs";
import { FAQSection } from "../../exploreCourses/questionSection";
import TestimonialStatic from "../../homePage/testimonialStatic";
import ClientSlider from "../../OurTeam/partnerSection";
import CoreCompetencies, { Competency } from "../AI_Ml/CoreCompentencies";
import DiscussProject from "../AI_Ml/DiscussProject";
import AIMLBanner from "../AI_Ml/HeroAI";
import DevelopmentProcess, { ProcessItem } from "../AI_Ml/ProcessAI";
import * as LucideIcons from "lucide-react";

const QAMaintenance = () => {
  const qaIcons: (keyof typeof LucideIcons)[] = [
    "Bug",
    "CheckCircle",
    "MonitorSmartphone",
  ];

  const qaProcessItems: ProcessItem[] = [
    {
      number: 1,
      title: "Test Case Review & Optimization",
      description:
        "We regularly review, update, and optimize test cases to reflect evolving business requirements and system changes.",
      icon: "ListChecks",
    },
    {
      number: 2,
      title: "Automated Test Maintenance",
      description:
        "We maintain and update automated test scripts across frameworks like Selenium, Cypress, and Playwright to ensure reliability.",
      icon: "Code2",
    },
    {
      number: 3,
      title: "Regression & Smoke Testing",
      description:
        "We perform continuous regression and smoke testing to prevent critical issues from slipping into production.",
      icon: "Repeat2",
    },
    {
      number: 4,
      title: "CI/CD Integration",
      description:
        "We integrate testing pipelines into CI/CD workflows using tools like Jenkins, GitHub Actions, or GitLab CI for early bug detection.",
      icon: "Merge",
    },
    {
      number: 5,
      title: "Performance & Compatibility Testing",
      description:
        "We validate system performance, scalability, and cross-device/browser compatibility to ensure robust user experiences.",
      icon: "MonitorSmartphone",
    },
    {
      number: 6,
      title: "QA Reporting & Issue Tracking",
      description:
        "We deliver detailed test reports and manage issue tracking via tools like Jira and TestRail for complete visibility.",
      icon: "BarChartHorizontal",
    },
  ];

  const qaCompetencies: Competency[] = [
    {
      icon: "CheckCircle",
      title: "Manual & Automated Testing",
      content:
        "We maintain manual and automated test suites, ensuring each release is reliable and high-quality.",
    },
    {
      icon: "Code2",
      title: "Automation Frameworks",
      content:
        "Our QA experts use Selenium, Cypress, Playwright, and more to maintain scalable automated testing.",
    },
    {
      icon: "Repeat2",
      title: "Regression Testing",
      content:
        "We perform regression cycles for every release to prevent old issues from reappearing.",
    },
    {
      icon: "Merge",
      title: "CI/CD Test Pipelines",
      content:
        "We integrate QA into DevOps pipelines for continuous testing and rapid feedback.",
    },
    {
      icon: "MonitorSmartphone",
      title: "Cross-Platform Testing",
      content:
        "We test across browsers, devices, and operating systems to ensure consistent functionality.",
    },
    {
      icon: "BarChartHorizontal",
      title: "Reporting & QA Metrics",
      content:
        "We provide test coverage, defect leakage, and QA health reports to help teams make informed decisions.",
    },
  ];

  return (
    <>
      <AIMLBanner
        title="QA Maintenance Services"
        subtitle="Ensure flawless software releases with our end-to-end QA maintenance — from test automation to continuous integration and performance testing."
        reviewCount={210}
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
        companyRatingText="Reliable QA Support for Quality-Driven Teams"
        ctaText="Connect with QA Experts"
        ctaLink="/contact-us"
        consultationTitle="Need consistent QA coverage?"
        consultationDescription="Let us take care of your test cases, automation, and regression testing — so you ship with confidence every time."
        icons={qaIcons}
      />
      <DevelopmentProcess
        title="Our QA Maintenance Process"
        subtitle="Our QA maintenance services are designed to integrate seamlessly into your development lifecycle — ensuring smooth, bug-free releases at every stage."
        highlightedText="QA maintenance"
        processItems={qaProcessItems}
        ctaText="Schedule a QA Assessment"
        ctaLink="/contact-us"
        ctaDataAttribute="Hire QA Team - QA Maintenance"
      />
      <ClientSlider />
      <DiscussProject
        className="bg-gradient-to-r from-white via-[#f7fafd] to-white"
        imageSrc="https://www.pngitem.com/pimgs/m/531-5312189_web-app-development-free-svg-for-web-design.png"
      />
      <CoreCompetencies
        className=""
        title="QA Maintenance Capabilities"
        subtitle="Our expert QA team ensures your software meets the highest quality standards by maintaining test cases, automation scripts, and reporting pipelines."
        competencies={qaCompetencies}
        ctaText="Hire QA Maintenance Experts"
        ctaLink="/contact-us"
        ctaDataAttribute="Start QA Services - QA Maintenance"
      />
      <TestimonialStatic className="bg-white" />
      <ContactUsSection />
      <FAQSection />
    </>
  );
};

export default QAMaintenance;
