import React from "react";
import AIMLBanner from "../AI_Ml/HeroAI";
import * as LucideIcons from "lucide-react";
import DevelopmentProcess, { ProcessItem } from "../AI_Ml/ProcessAI";
import CoreCompetencies, { Competency } from "../AI_Ml/CoreCompentencies";
import ClientSlider from "../../OurTeam/partnerSection";
import DiscussProject from "../AI_Ml/DiscussProject";
import TestimonialStatic from "../../homePage/testimonialStatic";
import ContactUsSection from "../../contactUs/contactUs";
import { FAQSection } from "../../exploreCourses/questionSection";

const CloudEngineering = () => {
  const cloudEngineeringIcons: (keyof typeof LucideIcons)[] = [
    "Cloud",
    "Server",
    "Globe",
  ];
  const cloudEngineeringProcessItems: ProcessItem[] = [
    {
      number: 1,
      title: "Cloud Strategy Planning",
      description:
        "We assess your business needs and design a cloud strategy. Our team defines the architecture and roadmap to ensure scalability and alignment with your goals.",
      icon: "Search",
    },
    {
      number: 2,
      title: "Infrastructure Setup",
      description:
        "We configure cloud infrastructure, including servers, storage, and networking, to create a robust and scalable environment tailored to your needs.",
      icon: "Server",
    },
    {
      number: 3,
      title: "Data Migration",
      description:
        "We migrate your data and applications to the cloud, ensuring minimal downtime and secure, accurate transfers to the new environment.",
      icon: "CloudUpload",
    },
    {
      number: 4,
      title: "DevOps Implementation",
      description:
        "Our team sets up CI/CD pipelines and automation tools to streamline development and deployment, enhancing efficiency and collaboration.",
      icon: "GitBranch",
    },
    {
      number: 5,
      title: "Cloud Deployment",
      description:
        "We deploy your cloud solutions, integrating them with existing systems to deliver immediate operational benefits and scalability.",
      icon: "Rocket",
    },
    {
      number: 6,
      title: "Cloud Monitoring & Optimization",
      description:
        "We continuously monitor cloud performance and costs, optimizing resources and providing ongoing support to ensure maximum efficiency.",
      icon: "Monitor",
    },
  ];
  const cloudEngineeringCompetencies: Competency[] = [
    {
      icon: "Cloud",
      title: "Cloud Architecture",
      content:
        "Our cloud engineers design scalable and secure architectures using platforms like AWS, Azure, and Google Cloud. We ensure optimal performance and cost-efficiency for your cloud infrastructure.",
    },
    {
      icon: "GitBranch",
      title: "DevOps Automation",
      content:
        "We implement CI/CD pipelines and automation tools to streamline development and deployment. Our DevOps solutions enhance collaboration and accelerate time-to-market.",
    },
    {
      icon: "Shield",
      title: "Cloud Security",
      content:
        "Our expertise in cloud security ensures your infrastructure is protected with robust encryption, access controls, and compliance measures, safeguarding your data and applications.",
    },
    {
      icon: "CloudUpload",
      title: "Cloud Migration",
      content:
        'We provide seamless <a href="/technologies/aws" class="text-orange-600 font-semibold hover:underline">cloud migration</a> services, transferring your applications and data to the cloud with minimal downtime and maximum efficiency.',
    },
    {
      icon: "Server",
      title: "Infrastructure as Code",
      content:
        "Our team uses tools like Terraform and Ansible to manage infrastructure as code, enabling consistent, repeatable, and automated cloud deployments.",
    },
    {
      icon: "Monitor",
      title: "Cloud Monitoring",
      content:
        "We offer continuous monitoring and optimization of cloud resources, ensuring high availability, performance, and cost-effectiveness for your cloud environment.",
    },
  ];
  return (
    <>
      <AIMLBanner
        title="Cloud Engineering Services"
        subtitle="Elevate your business with our cloud engineering services, providing scalable infrastructure, seamless DevOps, and secure cloud solutions to optimize performance."
        reviewCount={300}
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
        companyRatingText="from India's Highest-rated Company"
        ctaText="Discuss Your Cloud Needs"
        ctaLink="/contact-us"
        consultationTitle="Ready to scale with the cloud?"
        consultationDescription="Share your vision, and we’ll provide a free expert consultation within 24 hours, delivering a tailored strategy to harness cloud engineering for your business success."
        icons={cloudEngineeringIcons}
      />
      <DevelopmentProcess
        title="Our Cloud Engineering Development Process"
        subtitle="Our cloud engineering development process is strategic and client-focused, ensuring scalable, secure, and efficient cloud solutions. From strategy planning to ongoing optimization, we deliver infrastructure that powers your business success."
        highlightedText="development process"
        processItems={cloudEngineeringProcessItems}
        ctaText="Get in Touch with Us"
        ctaLink="/contact-us"
        ctaDataAttribute="Hire a Cloud Engineer - Cloud Engineering Development"
      />
      <ClientSlider />
      <DiscussProject
        className="bg-gradient-to-r from-white via-[#fff1eb] to-white"
        imageSrc={
          "https://img.freepik.com/premium-photo/vibrant-3d-cartoon-laptop-connected-cloud-computing-icon-white-background_1335075-49068.jpg"
        }
      />
      <CoreCompetencies
        className=""
        title="Technological Expertise of Our Cloud Engineers"
        subtitle="Our cloud engineers excel in building scalable, secure, and efficient cloud solutions. From architecture design to continuous monitoring, we deliver infrastructure that powers your business."
        competencies={cloudEngineeringCompetencies}
        ctaText="Start Your Cloud Project"
        ctaLink="/contact-us"
        ctaDataAttribute="Hire Top Cloud Engineers - Cloud Engineering"
      />
      <TestimonialStatic className="bg-white" />
      <ContactUsSection />
      <FAQSection />
    </>
  );
};

export default CloudEngineering;
