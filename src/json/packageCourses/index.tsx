import { PackageCourseProps } from "@/src/types";
import {
  Backpack,
  BadgeDollarSign,
  BookOpenCheck,
  BriefcaseBusiness,
  Building2,
  ChartNoAxesCombined,
  ClockFading,
  GraduationCap,
  School,
} from "lucide-react";
export const packageCourseStack: PackageCourseProps[] = [
  {
    id: "full-stack",
    techName: "Full Stack Developement",
    bannerFeatures: [
      {
        icon: <ClockFading className="text-[#f7846f]" />,
        title: "3 Months",
        subtitle: "Course Duration",
      },
      {
        icon: <BookOpenCheck className="text-[#f7846f]" />,
        title: "1st of Every Month",
        subtitle: "Next Batch",
      },
      {
        icon: <School className="text-[#f7846f]" />,
        title: "Hybrid Classes",
        subtitle: "Learning Mode",
      },
    ],
    courseFeatures: [
      {
        icon: GraduationCap,
        title: "Personalized Mentorship",
        description: "Focused guidance from seasoned experts",
      },
      {
        icon: Building2,
        title: "Real-world Project",
        description: "Hands-on work on a live project",
      },
      {
        icon: BriefcaseBusiness,
        title: "Industry-driven Curriculum",
        description: "Based on technologies shaping different sectors",
      },
      {
        icon: ChartNoAxesCombined,
        title: "Career Support",
        description: "Dedicated assistance in your professional journey",
      },
      {
        icon: Backpack,
        title: "Individualized Learning Experience",
        description: "Training crafted as per your suitability",
      },
      {
        icon: BadgeDollarSign,
        title: "Exclusive Job Opportunities",
        description: "Top performers gain priority access to placements",
      },
    ],
    useCases: [
      {
        name: "HTML, CSS, JS, React Basics",
        image: "/clients/illustration1.svg",
      },
      {
        name: "State Management & Routing",
        image: "/clients/illustration3.svg",
      },
      {
        name: "Node.js & API Development",
        image: "/clients/illustration2.svg",
      },
      {
        name: "Database Integration (SQL/NoSQL)",
        image: "/clients/illustration4.svg",
      },
      { name: "Full Stack Deployment", image: "/clients/illustration5.svg" },
      {
        name: "Version Control & Collaboration",
        image: "/clients/illustration6.svg",
      },
    ],
    tagline:
      "Learn both frontend and backend to build full-scale, production-ready applications from scratch.",
  },
  {
    id: "front-end",
    techName: "Frontend Developement",
    bannerFeatures: [
      {
        icon: <ClockFading className="text-[#f7846f]" />,
        title: "2 Months",
        subtitle: "Course Duration",
      },
      {
        icon: <BookOpenCheck className="text-[#f7846f]" />,
        title: "5th of Every Month",
        subtitle: "Next Batch",
      },
      {
        icon: <School className="text-[#f7846f]" />,
        title: "Offline Classes",
        subtitle: "Learning Mode",
      },
    ],
    courseFeatures: [
      {
        icon: GraduationCap,
        title: "Personalized Mentorship",
        description: "Focused guidance from seasoned experts",
      },
      {
        icon: Building2,
        title: "Real-world Project",
        description: "Hands-on work on a live project",
      },
      {
        icon: BriefcaseBusiness,
        title: "Industry-driven Curriculum",
        description: "Based on technologies shaping different sectors",
      },
      {
        icon: ChartNoAxesCombined,
        title: "Career Support",
        description: "Dedicated assistance in your professional journey",
      },
      {
        icon: Backpack,
        title: "Individualized Learning Experience",
        description: "Training crafted as per your suitability",
      },
      {
        icon: BadgeDollarSign,
        title: "Exclusive Job Opportunities",
        description: "Top performers gain priority access to placements",
      },
    ],
    useCases: [
      {
        name: "Basics of HTML and CSS",
        image: "/clients/illustration1.svg",
      },
      {
        name: "Fundamentals of JavaScript",
        image: "/clients/illustration3.svg",
      },
      {
        name: "Building Interfaces with ReactJS",
        image: "/clients/illustration2.svg",
      },
      {
        name: "Working with UI Frameworks",
        image: "/clients/illustration4.svg",
      },
      { name: "VCS Hosting", image: "/clients/illustration5.svg" },
      {
        name: "Related Web Security Solutions",
        image: "/clients/illustration6.svg",
      },
    ],
    tagline:
      "Master modern frontend skills and create breathtaking web experiences. No limits, just creation.",
  },
  {
    id: "back-end",
    techName: "Backend Developement",
    bannerFeatures: [
      {
        icon: <ClockFading className="text-[#f7846f]" />,
        title: "3 Months",
        subtitle: "Course Duration",
      },
      {
        icon: <BookOpenCheck className="text-[#f7846f]" />,
        title: "1st of Every Month",
        subtitle: "Next Batch",
      },
      {
        icon: <School className="text-[#f7846f]" />,
        title: "Hybrid Classes",
        subtitle: "Learning Mode",
      },
    ],
    courseFeatures: [
      {
        icon: GraduationCap,
        title: "Personalized Mentorship",
        description: "Focused guidance from seasoned experts",
      },
      {
        icon: Building2,
        title: "Real-world Project",
        description: "Hands-on work on a live backend system",
      },
      {
        icon: BriefcaseBusiness,
        title: "Industry-driven Curriculum",
        description: "Learn tools and frameworks used in real-world systems",
      },
      {
        icon: ChartNoAxesCombined,
        title: "Career Support",
        description: "Get help landing backend-specific roles",
      },
      {
        icon: Backpack,
        title: "Individualized Learning Experience",
        description: "Course tailored to your learning style and pace",
      },
      {
        icon: BadgeDollarSign,
        title: "Exclusive Job Opportunities",
        description: "Top students get priority interview access",
      },
    ],
    useCases: [
      {
        name: "Node.js & Express.js",
        image: "/clients/illustration1.svg",
      },
      {
        name: "RESTful APIs & GraphQL",
        image: "/clients/illustration3.svg",
      },
      {
        name: "Authentication & Authorization",
        image: "/clients/illustration2.svg",
      },
      {
        name: "Databases: SQL & NoSQL",
        image: "/clients/illustration4.svg",
      },
      { name: "CI/CD & Deployment", image: "/clients/illustration5.svg" },
      {
        name: "Testing & Debugging",
        image: "/clients/illustration6.svg",
      },
    ],
    tagline:
      "Learn to build scalable servers, APIs, and services using modern backend technologies.",
  },
];
