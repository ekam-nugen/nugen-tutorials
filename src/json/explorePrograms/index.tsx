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
import {
  itil4FoundationCourseFeatures,
  itil4FoundationUseCases,
  itil4FoundationCareer,
  AgileITSMPracticesCourseFeatures,
  AgileITSMPracticesUseCases,
  AgileITSMPracticesCareer,
  enterpriseArchitectureFundamentalsCareer,
  enterpriseArchitectureFundamentalsCourseFeatures,
  enterpriseArchitectureFundamentalsUseCases,
  ITServiceManagementWithServiceNowCareer,
  ITServiceManagementWithServiceNowCourseFeatures,
  ITServiceManagementWithServiceNowUseCases,
  ITStrategyAndGovernanceCareer,
  ITStrategyAndGovernanceCourseFeatures,
  ITStrategyAndGovernanceUseCases,
} from "./itServiceAndArchitecture";
import {
  sixSigmaGreenBeltCourseFeatures,
  sixSigmaGreenBeltUseCases,
  sixSigmaGreenBeltCareer,
  leanSixSigmaYellowBeltCareer,
  leanSixSigmaYellowBeltCourseFeatures,
  leanSixSigmaYellowBeltUseCases,
  qualityManagementSystemsCareer,
  qualityManagementSystemsCourseFeatures,
  qualityManagementSystemsUseCases,
  iso90012015TrainingCareer,
  iso90012015TrainingCourseFeatures,
  iso90012015TrainingUseCases,
  rootCauseAnalysisWorkshopCareer,
  rootCauseAnalysisWorkshopCourseFeatures,
  rootCauseAnalysisWorkshopUseCases,
} from "./qualityManagement";
import {
  AwsSolutionsCareer,
  AwsSolutionsCourseFeatures,
  AwsSolutionsUseCases,
  AzureCareer,
  AzureCourseFeatures,
  AzureUseCases,
  CloudArchitectCareer,
  CloudArchitectCourseFeatures,
  CloudArchitectUseCases,
  DevOpsEngineerCareer,
  DevOpsEngineerCourseFeatures,
  DevOpsEngineerUseCases,
  KubernetesCareer,
  KubernetesCourseFeatures,
  KubernetesUseCases,
} from "./cloudCompAndDevOps";
import {
  digitalMarketingSpecialistCourseFeatures,
  digitalMarketingSpecialistUseCases,
  digitalMarketingSpecialistCareer,
  seoSemFundamentalsCareer,
  seoSemFundamentalsCourseFeatures,
  seoSemFundamentalsUseCases,
  socialMediaMarketingCareer,
  socialMediaMarketingCourseFeatures,
  socialMediaMarketingUseCases,
  contentStrategyBootcampCareer,
  contentStrategyBootcampCourseFeatures,
  contentStrategyBootcampUseCases,
  googleAdsAnalyticsCareer,
  googleAdsAnalyticsCourseFeatures,
  googleAdsAnalyticsUseCases,
} from "./digitalMarketing";
import {
  UxUiCourseFeatures,
  UxUiUseCases,
  UxUiCareer,
  FigmaMasterclassUseCases,
  FigmaMasterclassCareer,
  DesignThinkingCourseFeatures,
  DesignThinkingUseCases,
  DesignThinkingCareer,
  InteractionDesignCourseFeatures,
  InteractionDesignUseCases,
  InteractionDesignCareer,
  PrototypingUsabilityCourseFeatures,
  PrototypingUsabilityUseCases,
  PrototypingUsabilityCareer,
  FigmaMasterclassCourseFeatures,
} from "./productAndDesign";
import {
  FullStackDevCourseFeatures,
  FullStackDevUseCases,
  FullStackDevCareer,
  SoftwareEngineeringPrinciplesUseCases,
  SoftwareEngineeringPrinciplesCareer,
  CleanCodeArchitectureUseCases,
  CleanCodeArchitectureCareer,
  ReactFrontendDevCareer,
  ReactFrontendDevCourseFeatures,
  ReactFrontendDevUseCases,
  NodejsBackendDevCareer,
  NodejsBackendDevCourseFeatures,
  NodejsBackendDevUseCases,
  SoftwareEngineeringPrinciplesCourseFeatures,
  CleanCodeArchitectureCourseFeatures,
} from "./softwareDevelopment";
import {
  BusinessCommunicationCareer,
  BusinessCommunicationCourseFeatures,
  BusinessCommunicationUseCases,
  ChangeManagementCareer,
  ChangeManagementCourseFeatures,
  ChangeManagementUseCases,
  ExecutiveLeadershipCareer,
  ExecutiveLeadershipCourseFeatures,
  ExecutiveLeadershipUseCases,
  InnovationCareer,
  InnovationCourseFeatures,
  InnovationUseCases,
  StrategicThinkingCareer,
  StrategicThinkingCourseFeatures,
  StrategicThinkingUseCases,
} from "./businessAndLeadership";

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
          <span className="text-[#f37458]">will you master</span>?
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
          What <span className="text-[#f37458]">deep learning </span>techniques{" "}
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
          <span className="text-[#f37458]">will you gain</span>?
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
          <span className="text-[#f37458]">will you gain</span>?
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
          <span className="text-[#f37458]">will you build</span>?
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
          <span className="text-[#f37458]">will you master</span>?
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
          <span className="text-[#f37458]">will you apply in business</span>?
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
          <span className="text-[#f37458]">will you master</span>?
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
          <span className="text-[#f37458]">will you learn</span>?
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
          <span className="text-[#f37458]">skills will you gain</span>?
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
          <span className="text-[#f37458]">skills will you develop</span>?
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
          <span className="text-[#f37458]">skills will you gain</span>?
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
          <span className="text-[#f37458]">skills will you master</span>?
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
          <span className="text-[#f37458]">skills will you learn</span>?
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
          <span className="text-[#f37458]">skills will you develop</span>?
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
          <span className="text-[#f37458]">skills will you build</span>?
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
          <span className="text-[#f37458]">skills will you build</span>?
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
          <span className="text-[#f37458]">skills will you build</span>?
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
          <span className="text-[#f37458]">skills will you gain</span>?
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
          <span className="text-[#f37458]">team build</span>?
        </>
      ),
      description:
        "This course focuses on team-based learning and how to implement Agile practices effectively, with hands-on activities and real-world examples.",
    },
  },
  {
    id: "itil-4-foundation",
    techName: "ITIL® 4 Foundation Certification",
    bannerFeatures: [
      {
        icon: <ClockFading className="text-[#f7846f]" />,
        title: "3 Weeks",
        subtitle: "Training Duration",
      },
      {
        icon: <BookOpenCheck className="text-[#f7846f]" />,
        title: "Weekends & Weekdays",
        subtitle: "Flexible Scheduling",
      },
      {
        icon: <School className="text-[#f7846f]" />,
        title: "Live + Interactive",
        subtitle: "Learning Mode",
      },
    ],
    tagline:
      "Master ITIL® 4 Foundation principles to improve service management and align IT with business needs.",
    courseFeatures: itil4FoundationCourseFeatures,
    useCases: itil4FoundationUseCases,
    career: itil4FoundationCareer,
    howItWorks: {
      title: (
        <>
          What <span className="text-[#f37458]">ITIL® 4</span> skills will you{" "}
          <span className="text-[#f37458]">develop</span>?
        </>
      ),
      description:
        "This course helps you gain essential knowledge on the ITIL® 4 framework, allowing you to optimize IT service management processes and align them with modern business needs.",
    },
  },
  {
    id: "enterprise-architecture-fundamentals",
    techName: "Enterprise Architecture Fundamentals",
    bannerFeatures: [
      {
        icon: <ClockFading className="text-[#f7846f]" />,
        title: "6 Weeks",
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
      "Build a strong foundation in Enterprise Architecture to support business transformation and align IT strategy with business goals.",
    courseFeatures: enterpriseArchitectureFundamentalsCourseFeatures,
    useCases: enterpriseArchitectureFundamentalsUseCases,
    career: enterpriseArchitectureFundamentalsCareer,
    howItWorks: {
      title: (
        <>
          What <span className="text-[#f37458]">Enterprise Architecture</span>{" "}
          skills will you <span className="text-[#f37458]">develop</span>?
        </>
      ),
      description:
        "This course provides the core knowledge and tools to understand and design enterprise architectures, enabling you to bridge the gap between business strategy and IT systems.",
    },
  },
  {
    id: "it-service-management-servicenow",
    techName: "IT Service Management with ServiceNow",
    bannerFeatures: [
      {
        icon: <ClockFading className="text-[#f7846f]" />,
        title: "8 Weeks",
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
      "Learn how to implement and manage IT Service Management processes using ServiceNow to improve service delivery, streamline operations, and enhance customer experience.",
    courseFeatures: ITServiceManagementWithServiceNowCourseFeatures,
    useCases: ITServiceManagementWithServiceNowUseCases,
    career: ITServiceManagementWithServiceNowCareer,
    howItWorks: {
      title: (
        <>
          What <span className="text-[#f37458]">ServiceNow</span> skills will
          you <span className="text-[#f37458]">master</span>?
        </>
      ),
      description:
        "This course focuses on using ServiceNow to manage IT service delivery, automate workflows, and ensure optimal IT operations and service management, all with hands-on projects.",
    },
  },
  {
    id: "agile-itsm-practices",
    techName: "Agile ITSM Practices",
    bannerFeatures: [
      {
        icon: <ClockFading className="text-[#f7846f]" />,
        title: "6 Weeks",
        subtitle: "Training Duration",
      },
      {
        icon: <BookOpenCheck className="text-[#f7846f]" />,
        title: "Weekdays & Weekends",
        subtitle: "Flexible Schedule for All",
      },
      {
        icon: <School className="text-[#f7846f]" />,
        title: "Live + Project-Based",
        subtitle: "Learning Mode",
      },
    ],
    tagline:
      "Master Agile practices tailored to IT Service Management (ITSM) to drive continuous improvement and accelerate service delivery.",
    courseFeatures: AgileITSMPracticesCourseFeatures,
    useCases: AgileITSMPracticesUseCases,
    career: AgileITSMPracticesCareer,
    howItWorks: {
      title: (
        <>
          What <span className="text-[#f37458]">Agile ITSM</span> skills will
          you <span className="text-[#f37458]">develop</span>?
        </>
      ),
      description:
        "This course will help you adopt Agile methodologies within IT Service Management, equipping you with the tools and skills to drive service improvements and enhance team collaboration.",
    },
  },
  {
    id: "it-strategy-governance",
    techName: "IT Strategy and Governance",
    bannerFeatures: [
      {
        icon: <ClockFading className="text-[#f7846f]" />,
        title: "8 Weeks",
        subtitle: "Training Duration",
      },
      {
        icon: <BookOpenCheck className="text-[#f7846f]" />,
        title: "Weekdays & Weekends",
        subtitle: "Flexible Schedule",
      },
      {
        icon: <School className="text-[#f7846f]" />,
        title: "Live + Project-Based",
        subtitle: "Learning Mode",
      },
    ],
    tagline:
      "Develop strategic IT governance and management skills to align IT initiatives with business goals and drive transformation.",
    courseFeatures: ITStrategyAndGovernanceCourseFeatures,
    useCases: ITStrategyAndGovernanceUseCases,
    career: ITStrategyAndGovernanceCareer,
    howItWorks: {
      title: (
        <>
          What <span className="text-[#f37458]">IT Strategy</span> and{" "}
          <span className="text-[#f37458]">Governance</span> skills will you
          build?
        </>
      ),
      description:
        "This course empowers you to design, implement, and evaluate IT strategies that support business transformation, with a strong focus on governance, compliance, and risk management.",
    },
  },
  {
    id: "six-sigma-green-belt",
    techName: "Six Sigma Green Belt Certification",
    bannerFeatures: [
      {
        icon: <ClockFading className="text-[#f7846f]" />,
        title: "3 Months",
        subtitle: "Training Duration",
      },
      {
        icon: <BookOpenCheck className="text-[#f7846f]" />,
        title: "Weekdays & Weekends",
        subtitle: "Flexible Schedule",
      },
      {
        icon: <School className="text-[#f7846f]" />,
        title: "Live + Project-Based",
        subtitle: "Learning Mode",
      },
    ],
    tagline:
      "Master Six Sigma methodologies to drive process improvement, reduce defects, and enhance organizational efficiency.",
    courseFeatures: sixSigmaGreenBeltCourseFeatures,
    useCases: sixSigmaGreenBeltUseCases,
    career: sixSigmaGreenBeltCareer,
    howItWorks: {
      title: (
        <>
          What <span className="text-[#f37458]">Six Sigma</span> skills will{" "}
          <span className="text-[#f37458]">you build</span>?
        </>
      ),
      description:
        "This course equips you with the tools to lead process improvement projects, apply DMAIC (Define, Measure, Analyze, Improve, Control), and drive measurable business impact in any industry.",
    },
  },
  {
    id: "lean-six-sigma-yellow-belt",
    techName: "Lean Six Sigma Yellow Belt",
    bannerFeatures: [
      {
        icon: <ClockFading className="text-[#f7846f]" />,
        title: "1-2 Months",
        subtitle: "Training Duration",
      },
      {
        icon: <BookOpenCheck className="text-[#f7846f]" />,
        title: "Weekdays & Weekends",
        subtitle: "Flexible Schedule",
      },
      {
        icon: <School className="text-[#f7846f]" />,
        title: "Live + Project-Based",
        subtitle: "Learning Mode",
      },
    ],
    tagline:
      "Gain foundational knowledge in Lean Six Sigma principles and contribute to process improvements at an organizational level.",
    courseFeatures: leanSixSigmaYellowBeltCourseFeatures,
    useCases: leanSixSigmaYellowBeltUseCases,
    career: leanSixSigmaYellowBeltCareer,
    howItWorks: {
      title: (
        <>
          What <span className="text-[#f37458]">Lean Six Sigma</span> skills{" "}
          <span className="text-[#f37458]">will you build</span>?
        </>
      ),
      description:
        "This course provides the essential tools to support Lean Six Sigma projects and effectively collaborate with Green and Black Belts to improve processes and reduce waste.",
    },
  },
  {
    id: "quality-management-systems",
    techName: "Quality Management Systems",
    bannerFeatures: [
      {
        icon: <ClockFading className="text-[#f7846f]" />,
        title: "2-3 Months",
        subtitle: "Training Duration",
      },
      {
        icon: <BookOpenCheck className="text-[#f7846f]" />,
        title: "Weekdays & Weekends",
        subtitle: "Flexible Schedule",
      },
      {
        icon: <School className="text-[#f7846f]" />,
        title: "Live + Project-Based",
        subtitle: "Learning Mode",
      },
    ],
    tagline:
      "Learn the principles and practices of quality management systems to enhance the effectiveness and efficiency of organizational processes.",
    courseFeatures: qualityManagementSystemsCourseFeatures,
    useCases: qualityManagementSystemsUseCases,
    career: qualityManagementSystemsCareer,
    howItWorks: {
      title: (
        <>
          What <span className="text-[#f37458]">Quality Management</span> skills{" "}
          <span className="text-[#f37458]">will you build</span>?
        </>
      ),
      description:
        "This course prepares you to understand and apply quality management principles like ISO 9001, continuous improvement, and audit methodologies in various industries.",
    },
  },
  {
    id: "iso-9001-2015-training",
    techName: "ISO 9001:2015 Training",
    bannerFeatures: [
      {
        icon: <ClockFading className="text-[#f7846f]" />,
        title: "3 Months",
        subtitle: "Training Duration",
      },
      {
        icon: <BookOpenCheck className="text-[#f7846f]" />,
        title: "Weekdays & Weekends",
        subtitle: "Flexible Schedule",
      },
      {
        icon: <School className="text-[#f7846f]" />,
        title: "Live + Project-Based",
        subtitle: "Learning Mode",
      },
    ],
    tagline:
      "Master the principles of quality management and the ISO 9001:2015 standards to improve organizational processes and performance.",
    courseFeatures: iso90012015TrainingCourseFeatures,
    useCases: iso90012015TrainingUseCases,
    career: iso90012015TrainingCareer,
    howItWorks: {
      title: (
        <>
          What <span className="text-[#f37458]">ISO 9001:2015</span> skills{" "}
          <span className="text-[#f37458]">will you build</span>?
        </>
      ),
      description:
        "This course prepares you to implement, manage, and audit quality management systems according to the internationally recognized ISO 9001:2015 standard.",
    },
  },
  {
    id: "root-cause-analysis-workshop",
    techName: "Root Cause Analysis Workshop",
    bannerFeatures: [
      {
        icon: <ClockFading className="text-[#f7846f]" />,
        title: "2 Days",
        subtitle: "Workshop Duration",
      },
      {
        icon: <BookOpenCheck className="text-[#f7846f]" />,
        title: "Weekends Only",
        subtitle: "Ideal for Working Professionals",
      },
      {
        icon: <School className="text-[#f7846f]" />,
        title: "Interactive + Case Studies",
        subtitle: "Learning Mode",
      },
    ],
    tagline:
      "Learn to identify and analyze root causes of issues in your organization with hands-on exercises and practical tools.",
    courseFeatures: rootCauseAnalysisWorkshopCourseFeatures,
    useCases: rootCauseAnalysisWorkshopUseCases,
    career: rootCauseAnalysisWorkshopCareer,
    howItWorks: {
      title: (
        <>
          What <span className="text-[#f37458]">Root Cause Analysis</span>{" "}
          skills <span className="text-[#f37458]">will you build</span>?
        </>
      ),
      description:
        "This workshop equips you with effective techniques to identify underlying causes of problems and apply solutions to enhance business processes.",
    },
  },
  {
    id: "digital-marketing-specialist-program",
    techName: "Digital Marketing Specialist Program",
    bannerFeatures: [
      {
        icon: <ClockFading className="text-[#f7846f]" />,
        title: "6 Months",
        subtitle: "Training Duration",
      },
      {
        icon: <BookOpenCheck className="text-[#f7846f]" />,
        title: "Weekends & Weekdays",
        subtitle: "Ideal for Working Professionals",
      },
      {
        icon: <School className="text-[#f7846f]" />,
        title: "Live + Project-Based",
        subtitle: "Learning Mode",
      },
    ],
    tagline:
      "Master the core digital marketing skills with hands-on projects and prepare for a rewarding career in marketing.",
    courseFeatures: digitalMarketingSpecialistCourseFeatures,
    useCases: digitalMarketingSpecialistUseCases,
    career: digitalMarketingSpecialistCareer,
    howItWorks: {
      title: (
        <>
          What <span className="text-[#f37458]">Digital Marketing</span> skills{" "}
          <span className="text-[#f37458]">will you build</span>?
        </>
      ),
      description:
        "This program empowers you to leverage digital marketing strategies to drive business growth across various channels, including SEO, SEM, content, and social media.",
    },
  },
  {
    id: "seo-sem-fundamentals",
    techName: "SEO & SEM Fundamentals",
    bannerFeatures: [
      {
        icon: <ClockFading className="text-[#f7846f]" />,
        title: "3 Months",
        subtitle: "Training Duration",
      },
      {
        icon: <BookOpenCheck className="text-[#f7846f]" />,
        title: "Weekends & Weekdays",
        subtitle: "Ideal for Working Professionals",
      },
      {
        icon: <School className="text-[#f7846f]" />,
        title: "Live + Project-Based",
        subtitle: "Learning Mode",
      },
    ],
    tagline:
      "Gain a deep understanding of SEO and SEM to drive organic and paid traffic to websites and improve online visibility.",
    courseFeatures: seoSemFundamentalsCourseFeatures,
    useCases: seoSemFundamentalsUseCases,
    career: seoSemFundamentalsCareer,
    howItWorks: {
      title: (
        <>
          What <span className="text-[#f37458]">SEO & SEM</span> skills{" "}
          <span className="text-[#f37458]">will you build</span>?
        </>
      ),
      description:
        "This course equips you with hands-on skills in search engine optimization and search engine marketing to maximize online presence and drive business success.",
    },
  },
  {
    id: "social-media-marketing",
    techName: "Social Media Marketing",
    bannerFeatures: [
      {
        icon: <ClockFading className="text-[#f7846f]" />,
        title: "3 Months",
        subtitle: "Training Duration",
      },
      {
        icon: <BookOpenCheck className="text-[#f7846f]" />,
        title: "Weekends & Weekdays",
        subtitle: "Ideal for Working Professionals",
      },
      {
        icon: <School className="text-[#f7846f]" />,
        title: "Live + Project-Based",
        subtitle: "Learning Mode",
      },
    ],
    tagline:
      "Master the art of building brand presence, engaging with audiences, and driving conversions on platforms like Facebook, Instagram, LinkedIn, and Twitter.",
    courseFeatures: socialMediaMarketingCourseFeatures,
    useCases: socialMediaMarketingUseCases,
    career: socialMediaMarketingCareer,
    howItWorks: {
      title: (
        <>
          What <span className="text-[#f37458]">Social Media</span> skills{" "}
          <span className="text-[#f37458]">will you build</span>?
        </>
      ),
      description:
        "This course provides hands-on training in creating, managing, and analyzing successful social media campaigns that drive growth and engagement for brands.",
    },
  },
  {
    id: "content-strategy-bootcamp",
    techName: "Content Strategy Bootcamp",
    bannerFeatures: [
      {
        icon: <ClockFading className="text-[#f7846f]" />,
        title: "4 Months",
        subtitle: "Training Duration",
      },
      {
        icon: <BookOpenCheck className="text-[#f7846f]" />,
        title: "Weekends & Weekdays",
        subtitle: "Ideal for Working Professionals",
      },
      {
        icon: <School className="text-[#f7846f]" />,
        title: "Live + Project-Based",
        subtitle: "Learning Mode",
      },
    ],
    tagline:
      "Learn to craft compelling content strategies that drive engagement, align with business goals, and improve brand awareness and conversions.",
    courseFeatures: contentStrategyBootcampCourseFeatures,
    useCases: contentStrategyBootcampUseCases,
    career: contentStrategyBootcampCareer,
    howItWorks: {
      title: (
        <>
          What <span className="text-[#f37458]">Content Strategy</span> skills{" "}
          <span className="text-[#f37458]">will you build</span>?
        </>
      ),
      description:
        "This bootcamp will teach you how to develop strategic content plans, create compelling narratives, and measure the impact of your content for different platforms and audiences.",
    },
  },
  {
    id: "google-ads-analytics",
    techName: "Google Ads & Analytics",
    bannerFeatures: [
      {
        icon: <ClockFading className="text-[#f7846f]" />,
        title: "3 Months",
        subtitle: "Training Duration",
      },
      {
        icon: <BookOpenCheck className="text-[#f7846f]" />,
        title: "Weekends & Weekdays",
        subtitle: "Ideal for Working Professionals",
      },
      {
        icon: <School className="text-[#f7846f]" />,
        title: "Live + Project-Based",
        subtitle: "Learning Mode",
      },
    ],
    tagline:
      "Master Google Ads and Google Analytics to effectively manage campaigns, measure performance, and optimize marketing strategies for better ROI.",
    courseFeatures: googleAdsAnalyticsCourseFeatures,
    useCases: googleAdsAnalyticsUseCases,
    career: googleAdsAnalyticsCareer,
    howItWorks: {
      title: (
        <>
          What <span className="text-[#f37458]">Google Ads</span> &{" "}
          <span className="text-[#f37458]">Analytics</span> skills{" "}
          <span className="text-[#f37458]">will you build</span>?
        </>
      ),
      description:
        "This course will turn you into an expert in digital marketing with Google Ads and Analytics, teaching you to run campaigns, analyze traffic, and optimize performance for successful marketing strategies.",
    },
  },
  {
    id: "cloud-architect-program",
    techName: "Cloud Architect Program",
    bannerFeatures: [
      {
        icon: <ClockFading className="text-[#f7846f]" />,
        title: "12 Months",
        subtitle: "Training Duration",
      },
      {
        icon: <BookOpenCheck className="text-[#f7846f]" />,
        title: "Flexible Schedule",
        subtitle: "Weekend & Evening Batches",
      },
      {
        icon: <School className="text-[#f7846f]" />,
        title: "Live Online",
        subtitle: "Learning Mode",
      },
    ],
    tagline:
      "Master multi-cloud infrastructure and architecture strategies to lead enterprise transformation.",
    howItWorks: {
      title: (
        <>
          What <span className="text-[#f37458]">Cloud Architecture</span> skills{" "}
          <span className="text-[#f37458]">will you master</span>?
        </>
      ),
      description:
        "This comprehensive program walks you through cloud infrastructure, hybrid setups, and architectural design patterns across AWS, Azure, and GCP.",
    },
    courseFeatures: CloudArchitectCourseFeatures,
    useCases: CloudArchitectUseCases,
    career: CloudArchitectCareer,
  },
  {
    id: "aws-solutions-architect",
    techName: "AWS Solutions Architect",
    bannerFeatures: [
      {
        icon: <ClockFading className="text-[#f7846f]" />,
        title: "4 Months",
        subtitle: "Training Duration",
      },
      {
        icon: <BookOpenCheck className="text-[#f7846f]" />,
        title: "Weekday Evenings",
        subtitle: "Flexible Timing",
      },
      {
        icon: <School className="text-[#f7846f]" />,
        title: "Live Online",
        subtitle: "Learning Mode",
      },
    ],
    tagline:
      "Become proficient in AWS services and design fault-tolerant, secure cloud systems.",
    howItWorks: {
      title: (
        <>
          What <span className="text-[#f37458]">AWS Solutions</span> knowledge{" "}
          <span className="text-[#f37458]">will you gain</span>?
        </>
      ),
      description:
        "Get hands-on with AWS services, architecture best practices, and tools to design secure, cost-optimized, and scalable systems.",
    },
    courseFeatures: AwsSolutionsCourseFeatures,
    useCases: AwsSolutionsUseCases,
    career: AwsSolutionsCareer,
  },
  {
    id: "devops-certification",
    techName: "DevOps Engineer Certification",
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
      "Learn CI/CD, containerization, and infrastructure automation to accelerate software delivery.",
    howItWorks: {
      title: (
        <>
          What <span className="text-[#f37458]">DevOps capabilities</span>{" "}
          <span className="text-[#f37458]">will you build</span>?
        </>
      ),
      description:
        "From pipelines to container orchestration, this program equips you with the skills to automate, deploy, and manage modern applications.",
    },
    courseFeatures: DevOpsEngineerCourseFeatures,
    useCases: DevOpsEngineerUseCases,
    career: DevOpsEngineerCareer,
  },
  {
    id: "kubernetes-for-developers",
    techName: "Kubernetes for Developers",
    bannerFeatures: [
      {
        icon: <ClockFading className="text-[#f7846f]" />,
        title: "3 Months",
        subtitle: "Training Duration",
      },
      {
        icon: <BookOpenCheck className="text-[#f7846f]" />,
        title: "Weekend Sessions",
        subtitle: "Developer-Friendly",
      },
      {
        icon: <School className="text-[#f7846f]" />,
        title: "Live Online",
        subtitle: "Learning Mode",
      },
    ],
    tagline:
      "Master Kubernetes fundamentals and apply them to real-world app development.",
    howItWorks: {
      title: (
        <>
          What <span className="text-[#f37458]">Kubernetes skills</span>{" "}
          <span className="text-[#f37458]">will you apply</span>?
        </>
      ),
      description:
        "Learn how to build, deploy, and scale containerized applications using Kubernetes, Helm, and monitoring tools in real-world settings.",
    },
    courseFeatures: KubernetesCourseFeatures,
    useCases: KubernetesUseCases,
    career: KubernetesCareer,
  },
  {
    id: "azure-fundamentals",
    techName: "Azure Fundamentals",
    bannerFeatures: [
      {
        icon: <ClockFading className="text-[#f7846f]" />,
        title: "8 Weeks",
        subtitle: "Training Duration",
      },
      {
        icon: <BookOpenCheck className="text-[#f7846f]" />,
        title: "Weekday & Weekend",
        subtitle: "Flexible Learning",
      },
      {
        icon: <School className="text-[#f7846f]" />,
        title: "Live Online",
        subtitle: "Learning Mode",
      },
    ],
    tagline:
      "Gain foundational knowledge to confidently navigate Microsoft Azure cloud services.",
    howItWorks: {
      title: (
        <>
          What <span className="text-[#f37458]">Azure cloud basics</span>{" "}
          <span className="text-[#f37458]">will you understand</span>?
        </>
      ),
      description:
        "This beginner-level course demystifies core Azure services, architecture principles, and identity access management practices.",
    },
    courseFeatures: AzureCourseFeatures,
    useCases: AzureUseCases,
    career: AzureCareer,
  },
  {
    id: "ux-ui-design-certification",
    techName: "UX/UI Design Certification",
    bannerFeatures: [
      {
        icon: <ClockFading className="text-[#f7846f]" />,
        title: "4 Months",
        subtitle: "Training Duration",
      },
      {
        icon: <BookOpenCheck className="text-[#f7846f]" />,
        title: "Weekends & Weekdays",
        subtitle: "Flexible Schedule",
      },
      {
        icon: <School className="text-[#f7846f]" />,
        title: "Live + Capstone Projects",
        subtitle: "Learning Mode",
      },
    ],
    tagline:
      "Learn user-centric design, wireframing, prototyping, and tools like Figma and Adobe XD to become a UX/UI design professional.",
    courseFeatures: UxUiCourseFeatures,
    useCases: UxUiUseCases,
    career: UxUiCareer,
    howItWorks: {
      title: (
        <>
          What <span className="text-[#f37458]">UX/UI Design</span>{" "}
          <span className="text-[#f37458]">skills will you build?</span>
        </>
      ),
      description:
        "This certification helps you build hands-on UX/UI design skills with a focus on real-world applications, design systems, and user research techniques to create intuitive digital experiences.",
    },
  },
  {
    id: "figma-masterclass",
    techName: "Figma Masterclass",
    bannerFeatures: [
      {
        icon: <ClockFading className="text-[#f7846f]" />,
        title: "6 Weeks",
        subtitle: "Training Duration",
      },
      {
        icon: <BookOpenCheck className="text-[#f7846f]" />,
        title: "Weekends Only",
        subtitle: "Great for Busy Designers",
      },
      {
        icon: <School className="text-[#f7846f]" />,
        title: "Live + Hands-On",
        subtitle: "Learning Mode",
      },
    ],
    tagline:
      "Master Figma for modern UI design—learn wireframing, prototyping, design systems, and collaboration workflows.",
    courseFeatures: FigmaMasterclassCourseFeatures,
    useCases: FigmaMasterclassUseCases,
    career: FigmaMasterclassCareer,
    howItWorks: {
      title: (
        <>
          What <span className="text-[#f37458]">Figma</span>{" "}
          <span className="text-[#f37458]">skills will you build?</span>
        </>
      ),
      description:
        "This course transforms your UI design workflow by mastering Figma’s full suite—from responsive layouts to team collaboration and prototyping best practices.",
    },
  },
  {
    id: "design-thinking-innovation",
    techName: "Design Thinking for Innovation",
    bannerFeatures: [
      {
        icon: <ClockFading className="text-[#f7846f]" />,
        title: "4 Weeks",
        subtitle: "Training Duration",
      },
      {
        icon: <BookOpenCheck className="text-[#f7846f]" />,
        title: "Flexible Schedule",
        subtitle: "Designed for Teams & Individuals",
      },
      {
        icon: <School className="text-[#f7846f]" />,
        title: "Live + Workshop Format",
        subtitle: "Learning Mode",
      },
    ],
    tagline:
      "Unlock creative problem-solving through a structured approach to innovation using human-centered design.",
    courseFeatures: DesignThinkingCourseFeatures,
    useCases: DesignThinkingUseCases,
    career: DesignThinkingCareer,
    howItWorks: {
      title: (
        <>
          What <span className="text-[#f37458]">Design Thinking</span>{" "}
          <span className="text-[#f37458]">skills will you build?</span>
        </>
      ),
      description:
        "This program equips you with hands-on tools to approach complex problems, prototype solutions, and drive user-centric innovation within any organization.",
    },
  },
  {
    id: "interaction-design-essentials",
    techName: "Interaction Design Essentials",
    bannerFeatures: [
      {
        icon: <ClockFading className="text-[#f7846f]" />,
        title: "5 Weeks",
        subtitle: "Training Duration",
      },
      {
        icon: <BookOpenCheck className="text-[#f7846f]" />,
        title: "Weekends & Evenings",
        subtitle: "Ideal for Working Professionals",
      },
      {
        icon: <School className="text-[#f7846f]" />,
        title: "Live + Hands-On Projects",
        subtitle: "Learning Mode",
      },
    ],
    tagline:
      "Master the principles of intuitive digital interactions and enhance user engagement through better design.",
    courseFeatures: InteractionDesignCourseFeatures,
    useCases: InteractionDesignUseCases,
    career: InteractionDesignCareer,
    howItWorks: {
      title: (
        <>
          What <span className="text-[#f37458]">Interaction Design</span>{" "}
          <span className="text-[#f37458]">skills will you develop?</span>
        </>
      ),
      description:
        "Learn to design seamless user experiences with a focus on usability, accessibility, and behavioral insights, applying best practices in real-world scenarios.",
    },
  },
  {
    id: "prototyping-usability-testing",
    techName: "Prototyping & Usability Testing",
    bannerFeatures: [
      {
        icon: <ClockFading className="text-[#f7846f]" />,
        title: "4 Weeks",
        subtitle: "Training Duration",
      },
      {
        icon: <BookOpenCheck className="text-[#f7846f]" />,
        title: "Weekday Evenings",
        subtitle: "Flexible Schedule",
      },
      {
        icon: <School className="text-[#f7846f]" />,
        title: "Live + Case Studies",
        subtitle: "Learning Mode",
      },
    ],
    tagline:
      "Build interactive prototypes and conduct effective usability testing to create user-friendly designs.",
    courseFeatures: PrototypingUsabilityCourseFeatures,
    useCases: PrototypingUsabilityUseCases,
    career: PrototypingUsabilityCareer,
    howItWorks: {
      title: (
        <>
          What <span className="text-[#f37458]">Prototyping & Testing</span>{" "}
          <span className="text-[#f37458]">skills will you master?</span>
        </>
      ),
      description:
        "This course empowers you to build realistic prototypes and run usability sessions that uncover real user insights, helping shape impactful digital products.",
    },
  },
  {
    id: "full-stack-developer",
    techName: "Full Stack Developer Course",
    bannerFeatures: [
      {
        icon: <ClockFading className="text-[#f7846f]" />,
        title: "6 Months",
        subtitle: "Training Duration",
      },
      {
        icon: <BookOpenCheck className="text-[#f7846f]" />,
        title: "Weekends & Weekdays",
        subtitle: "Flexible Schedule",
      },
      {
        icon: <School className="text-[#f7846f]" />,
        title: "Live + Project-Based",
        subtitle: "Learning Mode",
      },
    ],
    tagline:
      "Become a full-stack developer by mastering both front-end and back-end technologies, including JavaScript, Node.js, React, and more.",
    courseFeatures: FullStackDevCourseFeatures,
    useCases: FullStackDevUseCases,
    career: FullStackDevCareer,
    howItWorks: {
      title: (
        <>
          What <span className="text-[#f37458]">Full Stack</span>{" "}
          <span className="text-[#f37458]">skills will you master?</span>
        </>
      ),
      description:
        "This course prepares you to design, develop, and deploy modern full-stack applications, covering both client-side and server-side technologies.",
    },
  },
  {
    id: "frontend-development-react",
    techName: "Frontend Development with React",
    bannerFeatures: [
      {
        icon: <ClockFading className="text-[#f7846f]" />,
        title: "3 Months",
        subtitle: "Training Duration",
      },
      {
        icon: <BookOpenCheck className="text-[#f7846f]" />,
        title: "Weekends & Weekdays",
        subtitle: "Flexible Schedule",
      },
      {
        icon: <School className="text-[#f7846f]" />,
        title: "Live + Project-Based",
        subtitle: "Learning Mode",
      },
    ],
    tagline:
      "Master React.js and build dynamic, responsive web applications with industry-standard front-end tools and libraries.",
    courseFeatures: ReactFrontendDevCourseFeatures,
    useCases: ReactFrontendDevUseCases,
    career: ReactFrontendDevCareer,
    howItWorks: {
      title: (
        <>
          What <span className="text-[#f37458]">React</span>{" "}
          <span className="text-[#f37458]">skills will you master?</span>
        </>
      ),
      description:
        "This course equips you with the skills to build scalable, interactive web applications using React.js, hooks, and Redux for state management.",
    },
  },
  {
    id: "backend-development-nodejs",
    techName: "Backend Development with Node.js",
    bannerFeatures: [
      {
        icon: <ClockFading className="text-[#f7846f]" />,
        title: "4 Months",
        subtitle: "Training Duration",
      },
      {
        icon: <BookOpenCheck className="text-[#f7846f]" />,
        title: "Weekdays & Weekends",
        subtitle: "Flexible Schedule",
      },
      {
        icon: <School className="text-[#f7846f]" />,
        title: "Live + Project-Based",
        subtitle: "Learning Mode",
      },
    ],
    tagline:
      "Build scalable, server-side applications with Node.js, Express, and MongoDB to power modern web services.",
    courseFeatures: NodejsBackendDevCourseFeatures,
    useCases: NodejsBackendDevUseCases,
    career: NodejsBackendDevCareer,
    howItWorks: {
      title: (
        <>
          What <span className="text-[#f37458]">Node.js</span>{" "}
          <span className="text-[#f37458]">skills will you master?</span>
        </>
      ),
      description:
        "This course will turn you into a backend expert, teaching you how to build RESTful APIs, manage databases, handle authentication, and deploy scalable applications.",
    },
  },
  {
    id: "software-engineering-principles",
    techName: "Software Engineering Principles",
    bannerFeatures: [
      {
        icon: <ClockFading className="text-[#f7846f]" />,
        title: "6 Weeks",
        subtitle: "Training Duration",
      },
      {
        icon: <BookOpenCheck className="text-[#f7846f]" />,
        title: "Weekdays & Weekends",
        subtitle: "Flexible Schedule",
      },
      {
        icon: <School className="text-[#f7846f]" />,
        title: "Live + Project-Based",
        subtitle: "Learning Mode",
      },
    ],
    tagline:
      "Master the core principles of software engineering to design, develop, and maintain high-quality software systems.",
    courseFeatures: SoftwareEngineeringPrinciplesCourseFeatures,
    useCases: SoftwareEngineeringPrinciplesUseCases,
    career: SoftwareEngineeringPrinciplesCareer,
    howItWorks: {
      title: (
        <>
          What <span className="text-[#f37458]">Software Engineering</span>{" "}
          <span className="text-[#f37458]">principles will you learn?</span>
        </>
      ),
      description:
        "This course covers the essential principles of software engineering, including software design patterns, best practices, testing, and version control. You'll build the foundation to develop scalable, maintainable, and efficient software.",
    },
  },
  {
    id: "clean-code-architecture",
    techName: "Clean Code and Architecture",
    bannerFeatures: [
      {
        icon: <ClockFading className="text-[#f7846f]" />,
        title: "8 Weeks",
        subtitle: "Training Duration",
      },
      {
        icon: <BookOpenCheck className="text-[#f7846f]" />,
        title: "Weekdays & Weekends",
        subtitle: "Flexible Schedule",
      },
      {
        icon: <School className="text-[#f7846f]" />,
        title: "Live + Hands-On",
        subtitle: "Learning Mode",
      },
    ],
    tagline:
      "Master clean code practices and software architecture principles to write maintainable and scalable applications.",
    courseFeatures: CleanCodeArchitectureCourseFeatures,
    useCases: CleanCodeArchitectureUseCases,
    career: CleanCodeArchitectureCareer,
    howItWorks: {
      title: (
        <>
          What <span className="text-[#f37458]">Clean Code</span> and{" "}
          <span className="text-[#f37458]">Architecture</span> skills will you
          learn?
        </>
      ),
      description:
        "This course dives deep into writing clean, readable, and maintainable code. It covers the architecture of software systems and how to structure your code to be scalable, testable, and easy to modify over time.",
    },
  },
  {
    id: "executive-leadership",
    techName: "Executive Leadership Program",
    bannerFeatures: [
      {
        icon: <ClockFading className="text-[#f7846f]" />,
        title: "8 Months",
        subtitle: "Training Duration",
      },
      {
        icon: <BookOpenCheck className="text-[#f7846f]" />,
        title: "Weekend",
        subtitle: "Designed for Busy Executives",
      },
      {
        icon: <School className="text-[#f7846f]" />,
        title: "Live Online + Capstone",
        subtitle: "Learning Mode",
      },
    ],
    courseFeatures: ExecutiveLeadershipCourseFeatures,
    useCases: ExecutiveLeadershipUseCases,
    tagline:
      "Accelerate your leadership career with hands-on boardroom simulations and executive mentorship.",
    career: ExecutiveLeadershipCareer,
    howItWorks: {
      title: (
        <>
          What <span className="text-[#f37458]">Executive Leadership</span>{" "}
          capabilities will you <span className="text-[#f37458]">master</span>?
        </>
      ),
      description:
        "Gain decision-making skills, lead organizational change, and grow into CXO-level leadership roles with real-world business insights.",
    },
  },
  {
    id: "strategic-thinking",
    techName: "Strategic Thinking for Leaders",
    bannerFeatures: [
      {
        icon: <ClockFading className="text-[#f7846f]" />,
        title: "3 Months",
        subtitle: "Training Duration",
      },
      {
        icon: <BookOpenCheck className="text-[#f7846f]" />,
        title: "Weekday Evenings",
        subtitle: "Flexible Timings",
      },
      {
        icon: <School className="text-[#f7846f]" />,
        title: "Live Online",
        subtitle: "Learning Mode",
      },
    ],
    courseFeatures: StrategicThinkingCourseFeatures,
    useCases: StrategicThinkingUseCases,
    tagline:
      "Learn to think like a strategist and apply proven models to complex business decisions and growth challenges.",
    career: StrategicThinkingCareer,
    howItWorks: {
      title: (
        <>
          What <span className="text-[#f37458]">Strategic Thinking</span> skills{" "}
          will you <span className="text-[#f37458]">develop</span>?
        </>
      ),
      description:
        "Apply industry-leading frameworks to structure business problems, align with long-term goals, and design strategic initiatives.",
    },
  },
  {
    id: "business-communication",
    techName: "Business Communication Mastery",
    bannerFeatures: [
      {
        icon: <ClockFading className="text-[#f7846f]" />,
        title: "6 Weeks",
        subtitle: "Training Duration",
      },
      {
        icon: <BookOpenCheck className="text-[#f7846f]" />,
        title: "Weekday Evenings",
        subtitle: "Flexible Timing",
      },
      {
        icon: <School className="text-[#f7846f]" />,
        title: "Live Online + Peer Practice",
        subtitle: "Learning Mode",
      },
    ],
    courseFeatures: BusinessCommunicationCourseFeatures,
    useCases: BusinessCommunicationUseCases,
    tagline:
      "Master the art of professional communication—from writing and pitching to high-impact executive delivery.",
    career: BusinessCommunicationCareer,
    howItWorks: {
      title: (
        <>
          What <span className="text-[#f37458]">Business Communication</span>{" "}
          skills will you <span className="text-[#f37458]">gain</span>?
        </>
      ),
      description:
        "From persuasive presentations to conflict resolution, this course builds your executive presence and communication clarity.",
    },
  },
  {
    id: "change-management",
    techName: "Change Management",
    bannerFeatures: [
      {
        icon: <ClockFading className="text-[#f7846f]" />,
        title: "2 Months",
        subtitle: "Training Duration",
      },
      {
        icon: <BookOpenCheck className="text-[#f7846f]" />,
        title: "Weekend Cohorts",
        subtitle: "For Working Professionals",
      },
      {
        icon: <School className="text-[#f7846f]" />,
        title: "Live Online",
        subtitle: "Learning Mode",
      },
    ],
    courseFeatures: ChangeManagementCourseFeatures,
    useCases: ChangeManagementUseCases,
    tagline:
      "Lead successful change initiatives with structured frameworks and real-world tools for organizational transformation.",
    career: ChangeManagementCareer,
    howItWorks: {
      title: (
        <>
          What <span className="text-[#f37458]">Change Management</span>{" "}
          capabilities will you <span className="text-[#f37458]">build</span>?
        </>
      ),
      description:
        "Learn to lead transformation, reduce resistance, and align people and processes for long-term change success.",
    },
  },
  {
    id: "innovation-growth",
    techName: "Innovation and Growth",
    bannerFeatures: [
      {
        icon: <ClockFading className="text-[#f7846f]" />,
        title: "1 Month",
        subtitle: "Training Duration",
      },
      {
        icon: <BookOpenCheck className="text-[#f7846f]" />,
        title: "Evenings & Weekends",
        subtitle: "Accelerated Format",
      },
      {
        icon: <School className="text-[#f7846f]" />,
        title: "Live Online + Workshops",
        subtitle: "Learning Mode",
      },
    ],
    courseFeatures: InnovationCourseFeatures,
    useCases: InnovationUseCases,
    tagline:
      "Apply innovation frameworks to launch ideas, drive growth, and lead market-disrupting initiatives.",
    career: InnovationCareer,
    howItWorks: {
      title: (
        <>
          What <span className="text-[#f37458]">Innovation and Growth</span>{" "}
          skills will you <span className="text-[#f37458]">learn</span>?
        </>
      ),
      description:
        "Master design thinking, business model innovation, and lean execution to bring bold ideas to life in real markets.",
    },
  },
];
