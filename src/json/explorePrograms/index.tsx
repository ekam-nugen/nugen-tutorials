import { ClockFading, BookOpenCheck, School } from "lucide-react";
import { CoursesContentProps } from "../../types";
import {
  GansCareer,
  GansCourseFeatures,
  GansUseCases,
  GenAiCareer,
  GenAiCourseFeatures,
  GenAiUseCases,
  LlmCareer,
  LlmCourseFeatures,
  LlmUseCases,
  NlpCareer,
  NlpCourseFeatures,
  NlpUseCases,
  PromptCareer,
  PromptCourseFeatures,
  PromptUseCases,
} from "./generativeAi";
import {
  AiBusinessCareer,
  AiBusinessCourseFeatures,
  AiBusinessUseCases,
  AiStrategyCareer,
  AiStrategyCourseFeatures,
  AiStrategyUseCases,
  deepLearningCareer,
  deepLearningCourseFeatures,
  deepLearningUseCases,
  mlBootcampCareer,
  mlBootcampCourseFeatures,
  mlBootcampUseCases,
  mlModelCareer,
  mlModelCourseFeatures,
  mlModelUseCases,
} from "./aiAndMl";
import {
  BusinessAnalystCareer,
  BusinessAnalystCourseFeatures,
  BusinessAnalystUseCases,
  DataAnalystCareer,
  DataAnalystCourseFeatures,
  DataAnalystUseCases,
  DataSciencePyCareer,
  DataSciencePyCourseFeatures,
  DataSciencePyUseCases,
  PowerBiInsightsCareer,
  PowerBiInsightsCourseFeatures,
  PowerBiInsightsUseCases,
  StatisticsCareer,
  StatisticsCourseFeatures,
  StatisticsUseCases,
} from "./dataSciAndBusinessAna";
import {
  agileCareer,
  agileCourseFeatures,
  agileUseCases,
  msProjectCareer,
  msProjectCourseFeatures,
  msProjectUseCases,
  pgmpCareer,
  pgmpCourseFeatures,
  pgmpUseCases,
  pmpCareer,
  pmpCourseFeatures,
  pmpUseCases,
  projectRiskCareer,
  projectRiskCourseFeatures,
  projectRiskUseCases,
} from "./projectManagement";
import {
  advancedExecutiveProgramCybersecurityCourseFeatures,
  advancedExecutiveProgramCybersecurityUseCases,
  advancedExecutiveProgramCybersecurityCareer,
  ethicalHackingTrainingCareer,
  ethicalHackingTrainingCourseFeatures,
  ethicalHackingTrainingUseCases,
  networkSecuritySpecialistCareer,
  networkSecuritySpecialistCourseFeatures,
  networkSecuritySpecialistUseCases,
  cloudSecurityBasicsCareer,
  cloudSecurityBasicsCourseFeatures,
  cloudSecurityBasicsUseCases,
  cyberThreatIntelligenceCareer,
  cyberThreatIntelligenceCourseFeatures,
  cyberThreatIntelligenceUseCases,
} from "./cyberSecurity";
import {
  scrumMasterCourseFeatures,
  scrumMasterUseCases,
  scrumMasterCareer,
  safeAgilistCareer,
  safeAgilistCourseFeatures,
  safeAgilistUseCases,
  agileFundamentalsUseCases,
  agileFundamentalsCareer,
  agileFundamentalsCourseFeatures,
  scrumProductOwnerCareer,
  scrumProductOwnerCourseFeatures,
  scrumProductOwnerUseCases,
  agileForTeamsCareer,
  agileForTeamsCourseFeatures,
  agileForTeamsUseCases,
} from "./aglieAndScrum";

export const exploreProgramsStack: CoursesContentProps[] = [
  {
    id: "gen-ai-everyone",
    techName: "Generative AI for Everyone",
    bannerFeatures: [
      {
        icon: <ClockFading className="text-[#f7846f]" />,
        title: "8 Weeks",
        subtitle: "Training Duration",
      },
      {
        icon: <BookOpenCheck className="text-[#f7846f]" />,
        title: "Weekday & Weekend",
        subtitle: "Flexible Schedules",
      },
      {
        icon: <School className="text-[#f7846f]" />,
        title: "Live Online",
        subtitle: "Learning Mode",
      },
    ],
    courseFeatures: GenAiCourseFeatures,
    useCases: GenAiUseCases,
    tagline:
      "Understand the foundations of generative AI and how it's transforming industries with real-world applications.",
    career: GenAiCareer,
    howItWorks: {
      title: (
        <>
          What <span className="text-[#f37458]">Generative AI</span> concepts{" "}
          <span className="text-[#f37458]">will you explore</span>?
        </>
      ),
      description:
        "This beginner-friendly course demystifies generative AI and provides practical insights into its use across domains.",
    },
  },
  {
    id: "gans-workshop",
    techName: "Hands-on GANs Workshop",
    bannerFeatures: [
      {
        icon: <ClockFading className="text-[#f7846f]" />,
        title: "6 Weeks",
        subtitle: "Training Duration",
      },
      {
        icon: <BookOpenCheck className="text-[#f7846f]" />,
        title: "Weekday & Weekend",
        subtitle: "Flexible Schedules",
      },
      {
        icon: <School className="text-[#f7846f]" />,
        title: "Live Online",
        subtitle: "Learning Mode",
      },
    ],
    courseFeatures: GansCourseFeatures,
    useCases: GansUseCases,
    tagline:
      "Dive deep into Generative Adversarial Networks (GANs) and gain hands-on experience building and training your own models.",
    career: GansCareer,
    howItWorks: {
      title: (
        <>
          What <span className="text-[#f37458]">GANs</span> techniques{" "}
          <span className="text-[#f37458]">will you master</span>?
        </>
      ),
      description:
        "This workshop helps you build practical skills in GAN architectures, training strategies, and real-world generative AI applications.",
    },
  },
  {
    id: "llm-practice",
    techName: "Large Language Models in Practice",
    bannerFeatures: [
      {
        icon: <ClockFading className="text-[#f7846f]" />,
        title: "10 Weeks",
        subtitle: "Training Duration",
      },
      {
        icon: <BookOpenCheck className="text-[#f7846f]" />,
        title: "Weekday & Weekend",
        subtitle: "Flexible Schedules",
      },
      {
        icon: <School className="text-[#f7846f]" />,
        title: "Live Online",
        subtitle: "Learning Mode",
      },
    ],
    courseFeatures: LlmCourseFeatures,
    useCases: LlmUseCases,
    tagline:
      "Learn to fine-tune and deploy Large Language Models (LLMs) for real-world applications using state-of-the-art tools and frameworks.",
    career: LlmCareer,
    howItWorks: {
      title: (
        <>
          How do <span className="text-[#f37458]">LLMs</span> work in{" "}
          <span className="text-[#f37458]">practical use cases</span>?
        </>
      ),
      description:
        "This hands-on program helps you understand model behavior, prompt tuning, and LLM integration into business workflows.",
    },
  },
  {
    id: "prompt-engineering",
    techName: "Prompt Engineering Fundamentals",
    bannerFeatures: [
      {
        icon: <ClockFading className="text-[#f7846f]" />,
        title: "4 Weeks",
        subtitle: "Training Duration",
      },
      {
        icon: <BookOpenCheck className="text-[#f7846f]" />,
        title: "Weekday & Weekend",
        subtitle: "Flexible Schedules",
      },
      {
        icon: <School className="text-[#f7846f]" />,
        title: "Live Online",
        subtitle: "Learning Mode",
      },
    ],
    courseFeatures: PromptCourseFeatures,
    useCases: PromptUseCases,
    tagline:
      "Master the art of prompt engineering to build powerful interactions with generative AI models like ChatGPT and Claude.",
    career: PromptCareer,
    howItWorks: {
      title: (
        <>
          What <span className="text-[#f37458]">prompt strategies</span>{" "}
          <span className="text-[#f37458]">will you learn</span>?
        </>
      ),
      description:
        "This course helps you design effective prompts, chain-of-thought logic, and task-specific interactions for AI tools.",
    },
  },
  {
    id: "nlp-transformers",
    techName: "NLP with Transformers",
    bannerFeatures: [
      {
        icon: <ClockFading className="text-[#f7846f]" />,
        title: "3 Months",
        subtitle: "Training Duration",
      },
      {
        icon: <BookOpenCheck className="text-[#f7846f]" />,
        title: "Weekday & Weekend",
        subtitle: "Flexible Schedules",
      },
      {
        icon: <School className="text-[#f7846f]" />,
        title: "Live Online",
        subtitle: "Learning Mode",
      },
    ],
    courseFeatures: NlpCourseFeatures,
    useCases: NlpUseCases,
    tagline:
      "Build and fine-tune state-of-the-art NLP models using transformer architectures like BERT, GPT, and T5.",
    career: NlpCareer,
    howItWorks: {
      title: (
        <>
          What <span className="text-[#f37458]">transformer-based NLP</span>{" "}
          <span className="text-[#f37458]">skills will you gain</span>?
        </>
      ),
      description:
        "This advanced course helps you implement tokenization, attention mechanisms, and transfer learning for NLP tasks.",
    },
  },
  {
    id: "ml-bootcamp",
    techName: "Machine Learning Bootcamp",
    bannerFeatures: [
      {
        icon: <ClockFading className="text-[#f7846f]" />,
        title: "6 Months",
        subtitle: "Training Duration",
      },
      {
        icon: <BookOpenCheck className="text-[#f7846f]" />,
        title: "Weekday & Weekend",
        subtitle: "Flexible Schedules",
      },
      {
        icon: <School className="text-[#f7846f]" />,
        title: "Live Online",
        subtitle: "Learning Mode",
      },
    ],
    tagline:
      "Master machine learning fundamentals and build end-to-end models from data preprocessing to deployment.",
    howItWorks: {
      title: (
        <>
          What <span className="text-[#f37458]">machine learning</span>{" "}
          <span className="text-[#f37458]">skills will you develop</span>?
        </>
      ),
      description:
        "This career-focused bootcamp trains you in supervised, unsupervised, and reinforcement learning with hands-on Python labs.",
    },
    courseFeatures: mlBootcampCourseFeatures,
    useCases: mlBootcampUseCases,
    career: mlBootcampCareer,
  },
  {
    id: "ai-business-leaders",
    techName: "AI for Business Leaders",
    bannerFeatures: [
      {
        icon: <ClockFading className="text-[#f7846f]" />,
        title: "3 Months",
        subtitle: "Training Duration",
      },
      {
        icon: <BookOpenCheck className="text-[#f7846f]" />,
        title: "Weekday & Weekend",
        subtitle: "Flexible Schedules",
      },
      {
        icon: <School className="text-[#f7846f]" />,
        title: "Live Online",
        subtitle: "Learning Mode",
      },
    ],
    tagline:
      "Gain the strategic and operational knowledge to lead AI transformation in your organization.",
    howItWorks: {
      title: (
        <>
          What <span className="text-[#f37458]">AI insights</span> do{" "}
          <span className="text-[#f37458]">business leaders need</span>?
        </>
      ),
      description:
        "This program bridges the gap between AI technology and business leadership, helping you evaluate AI opportunities and risks.",
    },
    courseFeatures: AiBusinessCourseFeatures,
    useCases: AiBusinessUseCases,
    career: AiBusinessCareer,
  },
  {
    id: "deep-learning-tensorflow",
    techName: "Deep Learning with TensorFlow",
    bannerFeatures: [
      {
        icon: <ClockFading className="text-[#f7846f]" />,
        title: "5 Months",
        subtitle: "Training Duration",
      },
      {
        icon: <BookOpenCheck className="text-[#f7846f]" />,
        title: "Weekday & Weekend",
        subtitle: "Flexible Schedules",
      },
      {
        icon: <School className="text-[#f7846f]" />,
        title: "Live Online",
        subtitle: "Learning Mode",
      },
    ],
    tagline:
      "Build neural networks using TensorFlow and master deep learning concepts through practical labs and projects.",
    howItWorks: {
      title: (
        <>
          What <span className="text-[#f37458]">deep learning techniques</span>{" "}
          <span className="text-[#f37458]">will you learn</span>?
        </>
      ),
      description:
        "From CNNs to RNNs, this course teaches key architectures and training methods using TensorFlow and Keras.",
    },
    courseFeatures: deepLearningCourseFeatures,
    useCases: deepLearningUseCases,
    career: deepLearningCareer,
  },
  {
    id: "ml-model-deployment",
    techName: "ML Model Deployment",
    bannerFeatures: [
      {
        icon: <ClockFading className="text-[#f7846f]" />,
        title: "2 Months",
        subtitle: "Training Duration",
      },
      {
        icon: <BookOpenCheck className="text-[#f7846f]" />,
        title: "Weekday & Weekend",
        subtitle: "Flexible Schedules",
      },
      {
        icon: <School className="text-[#f7846f]" />,
        title: "Live Online",
        subtitle: "Learning Mode",
      },
    ],
    tagline:
      "Learn to containerize, serve, and monitor ML models in production environments.",
    howItWorks: {
      title: (
        <>
          How are <span className="text-[#f37458]">ML models</span> deployed and{" "}
          <span className="text-[#f37458]">monitored at scale</span>?
        </>
      ),
      description:
        "This course covers end-to-end deployment workflows with Docker, Flask, FastAPI, and cloud platforms.",
    },
    courseFeatures: mlModelCourseFeatures,
    useCases: mlModelUseCases,
    career: mlModelCareer,
  },
  {
    id: "ai-strategy-ethics",
    techName: "AI Strategy & Ethics",
    bannerFeatures: [
      {
        icon: <ClockFading className="text-[#f7846f]" />,
        title: "6 Weeks",
        subtitle: "Training Duration",
      },
      {
        icon: <BookOpenCheck className="text-[#f7846f]" />,
        title: "Weekday & Weekend",
        subtitle: "Flexible Schedules",
      },
      {
        icon: <School className="text-[#f7846f]" />,
        title: "Live Online",
        subtitle: "Learning Mode",
      },
    ],
    tagline:
      "Understand the ethical frameworks and strategic planning needed to responsibly implement AI across industries.",
    howItWorks: {
      title: (
        <>
          Why <span className="text-[#f37458]">AI ethics</span> and{" "}
          <span className="text-[#f37458]">strategy matter</span> in the real
          world?
        </>
      ),
      description:
        "This course equips you with knowledge to navigate ethical dilemmas, bias in AI, governance models, and the long-term impact of intelligent systems.",
    },
    courseFeatures: AiStrategyCourseFeatures,
    useCases: AiStrategyUseCases,
    career: AiStrategyCareer,
  },
  {
    id: "data-analyst",
    techName: "Data Analyst",
    bannerFeatures: [
      {
        icon: <ClockFading className="text-[#f7846f]" />,
        title: "11 Months",
        subtitle: "Training Duration",
      },
      {
        icon: <BookOpenCheck className="text-[#f7846f]" />,
        title: "Weekday & Weekend",
        subtitle: "Flexible Schedules",
      },
      {
        icon: <School className="text-[#f7846f]" />,
        title: "Live Online + Capstone",
        subtitle: "Learning Mode",
      },
    ],
    tagline:
      "Master core data skills to extract, analyze, and visualize business insights using modern tools.",
    courseFeatures: DataAnalystCourseFeatures,
    useCases: DataAnalystUseCases,
    career: DataAnalystCareer,
    howItWorks: {
      title: (
        <>
          What <span className="text-[#f37458]">Data Analyst</span> skills{" "}
          <span className="text-[#f37458]">will you gain?</span>
        </>
      ),
      description:
        "From spreadsheets to SQL to dashboards, this course walks you through every essential for a successful data analyst career.",
    },
  },
  {
    id: "business-analyst",
    techName: "Business Analyst",
    bannerFeatures: [
      {
        icon: <ClockFading className="text-[#f7846f]" />,
        title: "11 Months",
        subtitle: "Training Duration",
      },
      {
        icon: <BookOpenCheck className="text-[#f7846f]" />,
        title: "Weekday & Weekend",
        subtitle: "Flexible Schedules",
      },
      {
        icon: <School className="text-[#f7846f]" />,
        title: "Live Online",
        subtitle: "Learning Mode",
      },
    ],
    tagline:
      "Bridge business goals and data insights to drive strategic decisions.",
    courseFeatures: BusinessAnalystCourseFeatures,
    useCases: BusinessAnalystUseCases,
    career: BusinessAnalystCareer,
    howItWorks: {
      title: (
        <>
          What <span className="text-[#f37458]">Business Analysis</span> skills{" "}
          <span className="text-[#f37458]">will you gain?</span>
        </>
      ),
      description:
        "Gain the tools, frameworks, and communication skills needed to drive analytical decision-making.",
    },
  },
  {
    id: "data-science-python",
    techName: "Data Science with Python",
    bannerFeatures: [
      {
        icon: <ClockFading className="text-[#f7846f]" />,
        title: "6 Months",
        subtitle: "Training Duration",
      },
      {
        icon: <BookOpenCheck className="text-[#f7846f]" />,
        title: "Weekends Only",
        subtitle: "Ideal for Working Professionals",
      },
      {
        icon: <School className="text-[#f7846f]" />,
        title: "Live + Project-Based",
        subtitle: "Learning Mode",
      },
    ],
    tagline:
      "Build a data science career by mastering Python, statistics, and machine learning.",
    courseFeatures: DataSciencePyCourseFeatures,
    useCases: DataSciencePyUseCases,
    career: DataSciencePyCareer,
    howItWorks: {
      title: (
        <>
          What <span className="text-[#f37458]">Python & ML</span> skills{" "}
          <span className="text-[#f37458]">will you build?</span>
        </>
      ),
      description:
        "This course turns you into a confident Python-based data practitioner with real-world projects and job-focused outcomes.",
    },
  },
  {
    id: "power-bi-data-insights",
    techName: "Power BI for Data Insights",
    bannerFeatures: [
      {
        icon: <ClockFading className="text-[#f7846f]" />,
        title: "8 Weeks",
        subtitle: "Training Duration",
      },
      {
        icon: <BookOpenCheck className="text-[#f7846f]" />,
        title: "Weekend Classes",
        subtitle: "Designed for Working Professionals",
      },
      {
        icon: <School className="text-[#f7846f]" />,
        title: "Live Hands-On",
        subtitle: "Learning Mode",
      },
    ],
    tagline: "Transform raw data into powerful visual stories with Power BI.",
    courseFeatures: PowerBiInsightsCourseFeatures,
    useCases: PowerBiInsightsUseCases,
    career: PowerBiInsightsCareer,
    howItWorks: {
      title: (
        <>
          What <span className="text-[#f37458]">Power BI</span> skills{" "}
          <span className="text-[#f37458]">will you master?</span>
        </>
      ),
      description:
        "Learn how to connect data, build dashboards, and communicate business insights visually with Power BI.",
    },
  },
  {
    id: "statistics-business",
    techName: "Statistics for Business",
    bannerFeatures: [
      {
        icon: <ClockFading className="text-[#f7846f]" />,
        title: "2 Months",
        subtitle: "Training Duration",
      },
      {
        icon: <BookOpenCheck className="text-[#f7846f]" />,
        title: "Weekday Batches",
        subtitle: "Interactive Live Classes",
      },
      {
        icon: <School className="text-[#f7846f]" />,
        title: "Live + Practice Labs",
        subtitle: "Learning Mode",
      },
    ],
    tagline:
      "Master statistical reasoning to make confident, data-driven decisions.",
    courseFeatures: StatisticsCourseFeatures,
    useCases: StatisticsUseCases,
    career: StatisticsCareer,
    howItWorks: {
      title: (
        <>
          What <span className="text-[#f37458]">statistical concepts</span>{" "}
          <span className="text-[#f37458]">will you apply in business?</span>
        </>
      ),
      description:
        "Learn to use core statistical tools for real business scenarios—from forecasts to decision trees to hypothesis testing.",
    },
  },

  {
    id: "pmp-certification",
    techName: "PMP® Certification Training",
    bannerFeatures: [
      {
        icon: <ClockFading className="text-[#f7846f]" />,
        title: "4 Months",
        subtitle: "Training Duration",
      },
      {
        icon: <BookOpenCheck className="text-[#f7846f]" />,
        title: "Weekends Only",
        subtitle: "Ideal for Working Professionals",
      },
      {
        icon: <School className="text-[#f7846f]" />,
        title: "Live + Project-Based",
        subtitle: "Learning Mode",
      },
    ],
    tagline:
      "Become a certified Project Management Professional (PMP®) by mastering project management skills, tools, and techniques.",
    courseFeatures: pmpCourseFeatures,
    useCases: pmpUseCases,
    career: pmpCareer,
    howItWorks: {
      title: (
        <>
          What <span className="text-[#f37458]">PMP®</span> skills{" "}
          <span className="text-[#f37458]">will you master?</span>
        </>
      ),
      description:
        "This training prepares you for the PMP® exam and equips you with the practical skills and knowledge required to manage projects of all sizes and complexities.",
    },
  },

  {
    id: "agile-project-management",
    techName: "Agile Project Management",
    bannerFeatures: [
      {
        icon: <ClockFading className="text-[#f7846f]" />,
        title: "3 Months",
        subtitle: "Training Duration",
      },
      {
        icon: <BookOpenCheck className="text-[#f7846f]" />,
        title: "Weekdays or Weekends",
        subtitle: "Flexible Learning Schedule",
      },
      {
        icon: <School className="text-[#f7846f]" />,
        title: "Live + Interactive",
        subtitle: "Learning Mode",
      },
    ],
    tagline:
      "Master Agile methodologies and frameworks, and build the skills to manage projects efficiently with Agile principles.",
    courseFeatures: agileCourseFeatures,
    useCases: agileUseCases,
    career: agileCareer,
    howItWorks: {
      title: (
        <>
          What <span className="text-[#f37458]">Agile</span> skills{" "}
          <span className="text-[#f37458]">will you learn?</span>
        </>
      ),
      description:
        "This course equips you with the essential Agile techniques and best practices to lead successful Agile projects and teams.",
    },
  },
  {
    id: "pgmp-certification-training",
    techName: "Program Management Professional (PgMP®)",
    bannerFeatures: [
      {
        icon: <ClockFading className="text-[#f7846f]" />,
        title: "4 Months",
        subtitle: "Training Duration",
      },
      {
        icon: <BookOpenCheck className="text-[#f7846f]" />,
        title: "Weekend Classes",
        subtitle: "Designed for Working Leaders",
      },
      {
        icon: <School className="text-[#f7846f]" />,
        title: "Live Instructor-Led",
        subtitle: "Learning Mode",
      },
    ],
    tagline:
      "Advance your career with PgMP® certification—designed for senior-level project professionals managing multiple programs.",
    courseFeatures: pgmpCourseFeatures,
    useCases: pgmpUseCases,
    career: pgmpCareer,
    howItWorks: {
      title: (
        <>
          What <span className="text-[#f37458]">Program Management</span>{" "}
          <span className="text-[#f37458]">skills will you gain?</span>
        </>
      ),
      description:
        "This program empowers you with frameworks and leadership strategies to manage complex, interrelated projects effectively across enterprises.",
    },
  },
  {
    id: "ms-project-training",
    techName: "MS Project Training",
    bannerFeatures: [
      {
        icon: <ClockFading className="text-[#f7846f]" />,
        title: "2 Months",
        subtitle: "Training Duration",
      },
      {
        icon: <BookOpenCheck className="text-[#f7846f]" />,
        title: "Weekend/Evening Batches",
        subtitle: "Perfect for Working Professionals",
      },
      {
        icon: <School className="text-[#f7846f]" />,
        title: "Hands-On + Live Sessions",
        subtitle: "Learning Mode",
      },
    ],
    tagline:
      "Master Microsoft Project to plan, execute, and control projects effectively using industry-standard tools.",
    courseFeatures: msProjectCourseFeatures,
    useCases: msProjectUseCases,
    career: msProjectCareer,
    howItWorks: {
      title: (
        <>
          What <span className="text-[#f37458]">MS Project</span>{" "}
          <span className="text-[#f37458]">skills will you develop?</span>
        </>
      ),
      description:
        "Learn to create Gantt charts, manage resources, track project performance, and integrate Microsoft Project into your project workflow.",
    },
  },
  {
    id: "project-risk-management",
    techName: "Project Risk Management",
    bannerFeatures: [
      {
        icon: <ClockFading className="text-[#f7846f]" />,
        title: "2 Months",
        subtitle: "Training Duration",
      },
      {
        icon: <BookOpenCheck className="text-[#f7846f]" />,
        title: "Weekend / Evening Classes",
        subtitle: "Flexible for Professionals",
      },
      {
        icon: <School className="text-[#f7846f]" />,
        title: "Live + Scenario-Based",
        subtitle: "Learning Mode",
      },
    ],
    tagline:
      "Identify, analyze, and manage project risks with proactive strategies and real-world application.",
    courseFeatures: projectRiskCourseFeatures,
    useCases: projectRiskUseCases,
    career: projectRiskCareer,
    howItWorks: {
      title: (
        <>
          What <span className="text-[#f37458]">risk management</span>{" "}
          <span className="text-[#f37458]">skills will you gain?</span>
        </>
      ),
      description:
        "Develop the ability to anticipate project uncertainties, plan mitigation actions, and ensure successful project delivery through effective risk practices.",
    },
  },
  {
    id: "executive-cybersecurity-program",
    techName: "Advanced Executive Program in Cybersecurity",
    bannerFeatures: [
      {
        icon: <ClockFading className="text-[#f7846f]" />,
        title: "6 Months",
        subtitle: "Training Duration",
      },
      {
        icon: <BookOpenCheck className="text-[#f7846f]" />,
        title: "Weekend / Online Live",
        subtitle: "Designed for Leaders & Executives",
      },
      {
        icon: <School className="text-[#f7846f]" />,
        title: "Capstone Projects",
        subtitle: "Strategic and Technical Integration",
      },
    ],
    tagline:
      "Transform your cybersecurity leadership with executive-level skills in risk, compliance, and cyber defense strategy.",
    courseFeatures: advancedExecutiveProgramCybersecurityCourseFeatures,
    useCases: advancedExecutiveProgramCybersecurityUseCases,
    career: advancedExecutiveProgramCybersecurityCareer,
    howItWorks: {
      title: (
        <>
          What <span className="text-[#f37458]">executive cybersecurity</span>{" "}
          <span className="text-[#f37458]">skills will you master?</span>
        </>
      ),
      description:
        "This program enables senior professionals to lead cybersecurity initiatives, manage enterprise risk, and align cyber defense with business objectives.",
    },
  },
  {
    id: "ethical-hacking-training",
    techName: "Ethical Hacking Training",
    bannerFeatures: [
      {
        icon: <ClockFading className="text-[#f7846f]" />,
        title: "3 Months",
        subtitle: "Training Duration",
      },
      {
        icon: <BookOpenCheck className="text-[#f7846f]" />,
        title: "Live + Hands-On Labs",
        subtitle: "Real-Time Cyber Attack Simulations",
      },
      {
        icon: <School className="text-[#f7846f]" />,
        title: "CEH-Aligned Curriculum",
        subtitle: "Industry Standard Training",
      },
    ],
    tagline:
      "Master ethical hacking skills to legally assess, penetrate, and secure systems from cyber threats.",
    courseFeatures: ethicalHackingTrainingCourseFeatures,
    useCases: ethicalHackingTrainingUseCases,
    career: ethicalHackingTrainingCareer,
    howItWorks: {
      title: (
        <>
          What <span className="text-[#f37458]">ethical hacking</span>{" "}
          <span className="text-[#f37458]">skills will you learn?</span>
        </>
      ),
      description:
        "This training equips you with the tools and techniques to identify vulnerabilities, perform penetration testing, and secure digital assets.",
    },
  },
  {
    id: "network-security-specialist",
    techName: "Network Security Specialist",
    bannerFeatures: [
      {
        icon: <ClockFading className="text-[#f7846f]" />,
        title: "4 Months",
        subtitle: "Training Duration",
      },
      {
        icon: <BookOpenCheck className="text-[#f7846f]" />,
        title: "Hands-On + Case Studies",
        subtitle: "Applied Learning Approach",
      },
      {
        icon: <School className="text-[#f7846f]" />,
        title: "Firewall & IDS/IPS Training",
        subtitle: "Network Defense Specialization",
      },
    ],
    tagline:
      "Learn to design, implement, and secure networks from evolving cyber threats with expert-level training.",
    courseFeatures: networkSecuritySpecialistCourseFeatures,
    useCases: networkSecuritySpecialistUseCases,
    career: networkSecuritySpecialistCareer,
    howItWorks: {
      title: (
        <>
          What <span className="text-[#f37458]">network security</span>{" "}
          <span className="text-[#f37458]">skills will you develop?</span>
        </>
      ),
      description:
        "This course prepares you to become a trusted defender of enterprise networks through advanced techniques in securing, monitoring, and auditing network infrastructures.",
    },
  },
  {
    id: "cloud-security-basics",
    techName: "Cloud Security Basics",
    bannerFeatures: [
      {
        icon: <ClockFading className="text-[#f7846f]" />,
        title: "2 Months",
        subtitle: "Training Duration",
      },
      {
        icon: <BookOpenCheck className="text-[#f7846f]" />,
        title: "Beginner Friendly",
        subtitle: "No Prior Cloud Experience Needed",
      },
      {
        icon: <School className="text-[#f7846f]" />,
        title: "AWS & Azure Concepts",
        subtitle: "Cloud Platform Security Fundamentals",
      },
    ],
    tagline:
      "Build a solid foundation in securing cloud environments and understanding key cloud security principles.",
    courseFeatures: cloudSecurityBasicsCourseFeatures,
    useCases: cloudSecurityBasicsUseCases,
    career: cloudSecurityBasicsCareer,
    howItWorks: {
      title: (
        <>
          What <span className="text-[#f37458]">cloud security</span>{" "}
          <span className="text-[#f37458]">skills will you build?</span>
        </>
      ),
      description:
        "This course introduces you to the core principles of cloud security, helping you secure cloud resources and align with modern security practices across leading platforms.",
    },
  },
  {
    id: "cyber-threat-intelligence",
    techName: "Cyber Threat Intelligence",
    bannerFeatures: [
      {
        icon: <ClockFading className="text-[#f7846f]" />,
        title: "3 Months",
        subtitle: "Training Duration",
      },
      {
        icon: <BookOpenCheck className="text-[#f7846f]" />,
        title: "Hands-on Labs",
        subtitle: "Real-Time Threat Simulation",
      },
      {
        icon: <School className="text-[#f7846f]" />,
        title: "Live + Case-Based",
        subtitle: "Industry-Relevant Learning",
      },
    ],
    tagline:
      "Master cyber threat analysis, intelligence gathering, and proactive defense strategies.",
    courseFeatures: cyberThreatIntelligenceCourseFeatures,
    useCases: cyberThreatIntelligenceUseCases,
    career: cyberThreatIntelligenceCareer,
    howItWorks: {
      title: (
        <>
          What <span className="text-[#f37458]">threat intelligence</span>{" "}
          <span className="text-[#f37458]">skills will you build?</span>
        </>
      ),
      description:
        "Learn how to detect, analyze, and respond to cyber threats using real-world intelligence frameworks and strategic defense planning.",
    },
  },
  {
    id: "certified-scrummaster-csm",
    techName: "Certified ScrumMaster® (CSM)",
    bannerFeatures: [
      {
        icon: <ClockFading className="text-[#f7846f]" />,
        title: "2 Days",
        subtitle: "Intensive Training",
      },
      {
        icon: <BookOpenCheck className="text-[#f7846f]" />,
        title: "Official CSM Curriculum",
        subtitle: "Scrum Alliance Accredited",
      },
      {
        icon: <School className="text-[#f7846f]" />,
        title: "Live Instructor-Led",
        subtitle: "Interactive & Scenario-Based",
      },
    ],
    tagline:
      "Become a certified Scrum Master and lead Agile teams to success with confidence and clarity.",
    courseFeatures: scrumMasterCourseFeatures,
    useCases: scrumMasterUseCases,
    career: scrumMasterCareer,
    howItWorks: {
      title: (
        <>
          What <span className="text-[#f37458]">Scrum Master</span>{" "}
          <span className="text-[#f37458]">skills will you build?</span>
        </>
      ),
      description:
        "Gain deep understanding of Agile principles, Scrum framework, team facilitation, and real-world Scrum implementation practices.",
    },
  },
  {
    id: "safe-agilist-certification",
    techName: "SAFe® Agilist Certification",
    bannerFeatures: [
      {
        icon: <ClockFading className="text-[#f7846f]" />,
        title: "2 Days",
        subtitle: "Comprehensive Workshop",
      },
      {
        icon: <BookOpenCheck className="text-[#f7846f]" />,
        title: "Leading SAFe® Curriculum",
        subtitle: "Scaled Agile Framework",
      },
      {
        icon: <School className="text-[#f7846f]" />,
        title: "Live Online / Classroom",
        subtitle: "Certified Trainers",
      },
    ],
    tagline:
      "Lead Agile transformation at scale with SAFe® and become a certified change agent in your organization.",
    courseFeatures: safeAgilistCourseFeatures,
    useCases: safeAgilistUseCases,
    career: safeAgilistCareer,
    howItWorks: {
      title: (
        <>
          What <span className="text-[#f37458]">SAFe® leadership</span>{" "}
          <span className="text-[#f37458]">skills will you gain?</span>
        </>
      ),
      description:
        "Learn to lead enterprise Agile transformation using Lean, Agile, and product development flow principles within the Scaled Agile Framework.",
    },
  },
  {
    id: "agile-fundamentals",
    techName: "Agile Fundamentals",
    bannerFeatures: [
      {
        icon: <ClockFading className="text-[#f7846f]" />,
        title: "4 Weeks",
        subtitle: "Training Duration",
      },
      {
        icon: <BookOpenCheck className="text-[#f7846f]" />,
        title: "Weekdays & Weekends",
        subtitle: "Flexible Scheduling",
      },
      {
        icon: <School className="text-[#f7846f]" />,
        title: "Interactive + Hands-On",
        subtitle: "Learning Mode",
      },
    ],
    tagline:
      "Learn the core principles of Agile and how to apply them in real-world scenarios to drive continuous improvement.",
    courseFeatures: agileFundamentalsCourseFeatures,
    useCases: agileFundamentalsUseCases,
    career: agileFundamentalsCareer,
    howItWorks: {
      title: (
        <>
          What <span className="text-[#f37458]">Agile</span>{" "}
          <span className="text-[#f37458]">skills</span> will you develop?
        </>
      ),
      description:
        "This course will give you a deep understanding of Agile principles and practices, enabling you to lead and participate in Agile teams effectively.",
    },
  },
  {
    id: "scrum-product-owner",
    techName: "Scrum Product Owner",
    bannerFeatures: [
      {
        icon: <ClockFading className="text-[#f7846f]" />,
        title: "6 Weeks",
        subtitle: "Training Duration",
      },
      {
        icon: <BookOpenCheck className="text-[#f7846f]" />,
        title: "Weekdays & Weekends",
        subtitle: "Flexible Scheduling",
      },
      {
        icon: <School className="text-[#f7846f]" />,
        title: "Live + Project-Based",
        subtitle: "Learning Mode",
      },
    ],
    tagline:
      "Master the role of a Scrum Product Owner and learn how to prioritize work, manage product backlogs, and deliver value-driven products.",
    courseFeatures: scrumProductOwnerCourseFeatures,
    useCases: scrumProductOwnerUseCases,
    career: scrumProductOwnerCareer,
    howItWorks: {
      title: (
        <>
          What <span className="text-[#f37458]">Scrum</span> Product Owner{" "}
          <span className="text-[#f37458]">skills</span> will you build?
        </>
      ),
      description:
        "This course teaches you to understand the Scrum framework from the perspective of a Product Owner, focusing on backlog management, stakeholder communication, and agile product development.",
    },
  },
  {
    id: "agile-for-teams",
    techName: "Agile for Teams",
    bannerFeatures: [
      {
        icon: <ClockFading className="text-[#f7846f]" />,
        title: "4 Weeks",
        subtitle: "Training Duration",
      },
      {
        icon: <BookOpenCheck className="text-[#f7846f]" />,
        title: "Weekdays & Weekends",
        subtitle: "Flexible Scheduling",
      },
      {
        icon: <School className="text-[#f7846f]" />,
        title: "Live + Interactive",
        subtitle: "Learning Mode",
      },
    ],
    tagline:
      "Equip your team with Agile methodologies to improve collaboration, adapt to changes, and deliver quality products efficiently.",
    courseFeatures: agileForTeamsCourseFeatures,
    useCases: agileForTeamsUseCases,
    career: agileForTeamsCareer,
    howItWorks: {
      title: (
        <>
          What <span className="text-[#f37458]">Agile</span> skills will your{" "}
          <span className="text-[#f37458]">team</span> build?
        </>
      ),
      description:
        "This course focuses on team-based learning and how to implement Agile practices effectively, with hands-on activities and real-world examples.",
    },
  },
];
