import React from "react";
import AIMLBanner from "./HeroAI";
import DevelopmentProcess, { ProcessItem } from "./ProcessAI";
// import DiscussProject from "./DiscussProject";
import CoreCompetencies, { Competency } from "./CoreCompentencies";
import * as LucideIcons from "lucide-react";
// import TechnologyShowcase from "../homePage/courses";
import ContactUsSection from "../contactUs/contactUs";
import { FAQSection } from "../exploreCourses/questionSection";
import ClientSlider from "../OurTeam/partnerSection";
import BlogSection from "./blog";

const Intelligence = () => {
  const aimlIcons: (keyof typeof LucideIcons)[] = [
    "Brain",
    "Settings",
    "Laptop",
  ];
  const aimlProcessItems: ProcessItem[] = [
    {
      number: 1,
      title: "AI Product Discovery",
      description:
        "We identify your business needs and explore potential AI solutions. Our custom AI development team conducts thorough discussions to gather requirements and define the scope, ensuring the AI product aligns with your strategic goals and delivers value.",
      icon: "Search",
    },
    {
      number: 2,
      title: "Data Cleaning",
      description:
        "We collect raw data and clean it to remove errors and inconsistencies. This step ensures the dataset is accurate and reliable, forming a solid foundation for the AI/ML models.",
      icon: "Brush",
    },
    {
      number: 3,
      title: "Data Preparation",
      description:
        "We preprocess and structure the cleaned data. Our AI developers transform the data into a suitable format for analysis, enhancing the accuracy and reliability of AI models.",
      icon: "Database",
    },
    {
      number: 4,
      title: "AI/ML Model Training",
      description:
        "Our custom AI/ML development team trains the models using the prepared data. We use advanced algorithms and machine learning techniques to develop models that provide predictive analytics, automate processes, and deliver actionable insights.",
      icon: "Brain",
    },
    {
      number: 5,
      title: "AI Product Deployment",
      description:
        "We deploy the AI models into your business environment. Our team ensures seamless integration with your existing systems, providing a smooth transition and immediate operational benefits.",
      icon: "Rocket",
    },
    {
      number: 6,
      title: "AI Model Monitoring",
      description:
        "We continuously monitor the deployed AI models to ensure optimal performance. Our AI software development services include ongoing support, ensuring necessary adjustments and improvements are made to maintain and enhance the effectiveness of your AI solutions.",
      icon: "Monitor",
    },
  ];

  const aimlCompetencies: Competency[] = [
    {
      icon: "Sparkles",
      title: "Generative AI",
      content:
        'Our AI developers explore limitless opportunities with <a href="/technologies/generative%20ai" class="text-orange-600 font-semibold hover:underline">Generative AI</a>, using strong technical knowledge around foundational models like GPT-4. We create high-quality applications, code, images, content, and other innovative solutions, delivering exceptional results for your business.',
    },
    {
      icon: "BarChart2",
      title: "Data Science",
      content:
        "Automate and operationalize your data science models with our advanced AI ML development solutions. Our AI and data science consultants integrate these technologies to automate data interpretation and decision-making processes, resulting in improved performance and accelerated growth.",
    },
    {
      icon: "MessageSquare",
      title: "Natural Language Processing",
      content:
        "We are proficient in Natural Language Processing (NLP), enabling machines to understand and interact with human language. Our developers build models for sentiment analysis, chatbots, language translation, and text summarization, improving customer interactions and automating communication tasks.",
    },
    {
      icon: "Brain",
      title: "Deep Learning",
      content:
        "Our expertise in deep learning involves using neural networks to tackle complex problems. We apply these techniques to image and speech recognition, autonomous systems, and predictive analytics, helping businesses innovate and achieve technological advancements.",
    },
    {
      icon: "Eye",
      title: "Computer Vision",
      content:
        "Our AI developers have strong capabilities in computer vision, allowing systems to interpret and act on visual data. We create applications for image classification, object detection, facial recognition, and video analytics, enhancing efficiency and safety across industries.",
    },
    {
      icon: "Bot",
      title: "Robotic Process Automation",
      content:
        "Our AI/ML developers have extensive experience in Robotic Process Automation (RPA), automating repetitive tasks to improve productivity and accuracy. We combine RPA with AI's cognitive ability to optimize business processes, reduce operational costs, and more.",
    },
  ];

  return (
    <>
      <AIMLBanner
        title="AI ML Development Services"
        subtitle="Enhance your business with our AI/ML development services, offering intelligent solutions for advanced automation, predictive analytics, and data insights."
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
        ctaText="Discuss Your Requirements"
        ctaLink="/contact-us"
        consultationTitle="Ready to bring your project to life?"
        consultationDescription="Share your vision, and we'll provide a free expert consultation within 24 hours, outlining a clear path to success tailored to your project and budget."
        icons={aimlIcons}
      />
      <DevelopmentProcess
        title="Our AI Software Development Process"
        subtitle="Our AI software development process is thorough and client-focused, ensuring every AI project is tailored to meet specific business objectives and deliver tangible value. From AI product discovery and data cleaning to model training and deployment, our rigorous process ensures that every AI solution is built with precision and efficiency."
        highlightedText="software development process"
        processItems={aimlProcessItems}
        ctaText="Get in Touch with Us"
        ctaLink="/contact-us"
        ctaDataAttribute="Hire an AI Developer - AI ML Development"
      />
      <ClientSlider />
      {/* <DiscussProject
        className="bg-gradient-to-r from-white via-[#fff1eb] to-white"
        imageSrc="https://img.freepik.com/free-vector/cartoon-style-robot-vectorart_78370-4103.jpg?semt=ais_hybrid&w=740"
      /> */}
      <CoreCompetencies
        className=""
        title="Technological Expertise of Our AI Developers"
        subtitle="Our AI developers excel in cutting-edge technologies like generative AI, Natural Language Processing, deep learning, and more. We build innovative solutions that drive progress, enhance automation, and deliver actionable insights tailored to your business goals."
        competencies={aimlCompetencies}
        ctaText="Start Your Project Today"
        ctaLink="/contact-us"
        ctaDataAttribute="Hire Top AI Developers - AI"
      />
      {/* <TechnologyShowcase /> */}
      <BlogSection />
      {/* <TestimonialStatic className="bg-white" /> */}
      <ContactUsSection />
      <FAQSection />
    </>
  );
};

export default Intelligence;
