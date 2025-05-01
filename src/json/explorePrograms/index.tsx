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
];
