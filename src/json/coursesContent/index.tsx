import { ClockFading, BookOpenCheck, School } from "lucide-react";

import { TechDescriptionProps } from "../../types";
import {
  Ai_MlCareer,
  Ai_MlCourseFeatures,
  Ai_MlUseCases,
  CyberSecurityCareer,
  CyberSecurityCourseFeatures,
  CyberSecurityUseCases,
  PmpCareer,
  PmpCourseFeatures,
  PmpUseCases,
  ScrumCareer,
  ScrumCourseFeatures,
  ScrumUseCases,
} from "./content";

export const courseStack: TechDescriptionProps[] = [
  {
    id: "scrum-master",
    techName: "Certified ScrumMaster®",
    bannerFeatures: [
      {
        icon: <ClockFading className="text-[#f7846f]" />,
        title: "2 Days",
        subtitle: "Training Duration",
      },
      {
        icon: <BookOpenCheck className="text-[#f7846f]" />,
        title: "Every Weekend",
        subtitle: "Next Batch",
      },
      {
        icon: <School className="text-[#f7846f]" />,
        title: "Live Online",
        subtitle: "Learning Mode",
      },
    ],
    courseFeatures: ScrumCourseFeatures,
    useCases: ScrumUseCases,
    tagline:
      "Master Agile principles, facilitate high-performing teams, and earn your globally recognized CSM certification.",
    career: ScrumCareer,
    howItWorks: {
      title: (
        <>
          What <span className="text-[#f37458]">Scrum</span> concepts{" "}
          <span className="text-[#f37458]">will you master</span>?
        </>
      ),
      description:
        "This Certified ScrumMaster® course equips you with the Agile mindset, tools, and confidence to lead Scrum teams effectively and deliver continuous value to customers.",
    },
  },
  {
    id: "pmp",
    techName: "PMP® Certified Project Manager",
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
    courseFeatures: PmpCourseFeatures,
    useCases: PmpUseCases,
    tagline:
      "Master project management frameworks, processes, and tools to lead successful projects and pass the PMP® exam with confidence.",
    career: PmpCareer,
    howItWorks: {
      title: (
        <>
          What <span className="text-[#f37458]">PMP®</span> concepts{" "}
          <span className="text-[#f37458]">will you master</span>?
        </>
      ),
      description:
        "This PMP® certification training will help you manage projects effectively across various domains using standardized tools, techniques, and leadership principles.",
    },
  },
  {
    id: "ai-ml",
    techName: "Certified Generative AI & ML Expert",
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
    courseFeatures: Ai_MlCourseFeatures,
    useCases: Ai_MlUseCases,
    tagline:
      "Master cutting-edge AI techniques, generative models, and machine learning frameworks to build innovative solutions and excel in the AI industry.",
    career: Ai_MlCareer,
    howItWorks: {
      title: (
        <>
          What <span className="text-[#f37458]">Generative AI & ML</span>{" "}
          concepts <span className="text-[#f37458]">will you master</span>?
        </>
      ),
      description:
        "This certification course equips you with the skills to design, develop, and deploy AI models using modern tools, frameworks, and ethical practices.",
    },
  },
  {
    id: "cyber-security",
    techName: "Cybersecurity Expert Certification",
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
    courseFeatures: CyberSecurityCourseFeatures,
    useCases: CyberSecurityUseCases,
    tagline:
      "Master cutting-edge cybersecurity strategies, tools, and frameworks to protect organizations and excel in the Advanced Executive Program in Cybersecurity.",
    career: CyberSecurityCareer,
    howItWorks: {
      title: (
        <>
          What <span className="text-[#f37458]">Cybersecurity</span> concepts{" "}
          <span className="text-[#f37458]">will you master</span>?
        </>
      ),
      description:
        "This Advanced Executive Program in Cybersecurity equips you with the skills to secure digital assets, mitigate threats, and lead cybersecurity initiatives across industries.",
    },
  },
];
