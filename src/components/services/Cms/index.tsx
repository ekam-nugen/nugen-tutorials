import React from "react";
import * as LucideIcons from "lucide-react";
import DevelopmentProcess, { ProcessItem } from "../AI_Ml/ProcessAI";
import CoreCompetencies, { Competency } from "../AI_Ml/CoreCompentencies";
import AIMLBanner from "../AI_Ml/HeroAI";
import ClientSlider from "../../OurTeam/partnerSection";
import DiscussProject from "../AI_Ml/DiscussProject";
import TestimonialStatic from "../../homePage/testimonialStatic";
import ContactUsSection from "../../contactUs/contactUs";
import { FAQSection } from "../../exploreCourses/questionSection";

const CMSEngineering = () => {
  const cmsIcons: (keyof typeof LucideIcons)[] = [
    "FileText",
    "Database",
    "Edit",
  ];
  const cmsProcessItems: ProcessItem[] = [
    {
      number: 1,
      title: "Requirement Analysis",
      description:
        "We analyze your content needs and business goals to recommend the best CMS platform, ensuring flexibility and scalability for your website.",
      icon: "Search",
    },
    {
      number: 2,
      title: "CMS Selection & Setup",
      description:
        "We select and configure a CMS (e.g., WordPress, Drupal, or headless CMS like Contentful) tailored to your requirements, setting up a robust content foundation.",
      icon: "Settings",
    },
    {
      number: 3,
      title: "Custom Theme Development",
      description:
        "Our team designs and develops custom themes to align with your brand, ensuring a seamless and visually appealing user experience.",
      icon: "Brush",
    },
    {
      number: 4,
      title: "Content Migration",
      description:
        "We migrate existing content to the new CMS, ensuring data integrity, SEO preservation, and minimal disruption to your operations.",
      icon: "CloudUpload",
    },
    {
      number: 5,
      title: "Plugin/Module Integration",
      description:
        "We integrate plugins or custom modules to enhance functionality, such as e-commerce, SEO tools, or analytics, tailored to your business needs.",
      icon: "Puzzle",
    },
    {
      number: 6,
      title: "Training & Support",
      description:
        "We provide training for your team to manage content effectively and offer ongoing support to ensure your CMS runs smoothly.",
      icon: "LifeBuoy",
    },
  ];
  const cmsCompetencies: Competency[] = [
    {
      icon: "FileText",
      title: "Headless CMS Development",
      content:
        "We specialize in headless CMS solutions like Contentful or Strapi, enabling flexible content delivery across websites, apps, and devices.",
    },
    {
      icon: "Brush",
      title: "Custom Theme Design",
      content:
        "Our designers create responsive, brand-aligned themes for CMS platforms, ensuring a consistent and engaging user experience.",
    },
    {
      icon: "Shield",
      title: "CMS Security",
      content:
        "We implement robust security measures, including user authentication, data encryption, and regular updates, to protect your CMS from threats.",
    },
    {
      icon: "CloudUpload",
      title: "Content Migration",
      content:
        'Our team ensures seamless <a href="/technologies/wordpress" class="text-orange-600 font-semibold hover:underline">content migration</a> to your new CMS, preserving SEO and data integrity.',
    },
    {
      icon: "Puzzle",
      title: "Plugin Development",
      content:
        "We develop custom plugins or integrate third-party tools to extend CMS functionality, from e-commerce to analytics, tailored to your needs.",
    },
    {
      icon: "Monitor",
      title: "Performance Optimization",
      content:
        "We optimize your CMS for speed and scalability, ensuring fast load times and a smooth experience for users and editors alike.",
    },
  ];
  return (
    <>
      <AIMLBanner
        title="CMS Development Services"
        subtitle="Empower your business with our CMS development services, delivering flexible, scalable, and user-friendly content management solutions tailored to your brand."
        reviewCount={250}
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
        companyRatingText="from India's Highest-rated CMS Company"
        ctaText="Discuss Your CMS Needs"
        ctaLink="/contact-us"
        consultationTitle="Ready to streamline your content?"
        consultationDescription="Share your vision, and we’ll provide a free expert consultation within 24 hours, delivering a tailored CMS strategy to enhance your content management."
        icons={cmsIcons}
      />
      <DevelopmentProcess
        title="Our CMS Development Process"
        subtitle="Our CMS development process is designed to deliver scalable, secure, and user-friendly content management solutions. From strategy to support, we empower your team to manage content effortlessly."
        highlightedText="development process"
        processItems={cmsProcessItems}
        ctaText="Get in Touch with Us"
        ctaLink="/contact-us"
        ctaDataAttribute="Hire a CMS Developer - CMS Development"
      />
      <ClientSlider />
      <DiscussProject
        className="bg-gradient-to-r from-white via-[#fff1eb] to-white"
        imageSrc="https://png.pngtree.com/png-vector/20220724/ourmid/pngtree-vector-cms-icon-site-web-symbol-vector-png-image_14209170.png"
      />
      <CoreCompetencies
        className=""
        title="Technological Expertise of Our CMS Developers"
        subtitle="Our CMS developers excel in building flexible, secure, and scalable content management systems. From custom themes to headless CMS, we deliver solutions that empower your business."
        competencies={cmsCompetencies}
        ctaText="Start Your CMS Project"
        ctaLink="/contact-us"
        ctaDataAttribute="Hire Top CMS Developers - CMS Development"
      />
      <TestimonialStatic className="bg-white" />
      <ContactUsSection />
      <FAQSection />
    </>
  );
};

export default CMSEngineering;
