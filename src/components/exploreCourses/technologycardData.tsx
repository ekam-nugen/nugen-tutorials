import {
  Cloud,
  ShoppingCart,
  Paintbrush,
  Globe,
  Smartphone,
  Users,
  FlaskRound,
} from "lucide-react";
import { BsRobot } from "react-icons/bs";

export const services = [
  // Full Stack
  {
    category: "Full Stack",
    title: "Web Development",
    icon: <Globe color="#ff6b3d" />,
    subtitle: "Develop high-performance, SEO-optimized, and responsive websites.",
    linkTitle: "Learn Web Development",
    link:"/exploreCourses/webdevelopment",
  },
  {
    category: "Full Stack",
    title: "Mobile App Development",
    icon: <Smartphone color="#ff6b3d" />,
    subtitle: "Native & cross-platform mobile apps for iOS and Android.",
    linkTitle: "Explore Mobile Development",  
    link:"/exploreCourses/appdevelopment",
  },

  // Frontend
  {
    category: "Frontend",
    title: "UI/UX",
    icon: <Paintbrush color="#ff6b3d" />,
    subtitle: "Craft intuitive and engaging digital experiences with user-centered design.",
    linkTitle: "Learn About UI/UX",
    link:"/exploreCourses/uiux",
  },
  {
    category: "Frontend",
    title: "E-commerce",
    icon: <ShoppingCart color="#ff6b3d" />,
    subtitle: "Build scalable, secure, and user-friendly e-commerce platforms.",
    linkTitle: "Explore E-commerce Solutions",
    link:"/exploreCourses/cms",
  },

  // Backend
  {
    category: "Backend",
    title: "Cloud Engineering",
    icon: <Cloud color="#ff6b3d" />,
    subtitle: "Design, deploy, and manage scalable cloud infrastructure for performance & cost efficiency.",
    linkTitle: "Explore Cloud Services",
    link:"/exploreCourses/cloud-engineering",
  },
  {
    category: "Backend",
    title: "AI/ML/GenAI",
    icon: <BsRobot color="#ff6b3d" />,
    subtitle: "Gain a competitive edge with AI-powered insights and automation.",
    linkTitle: "Explore AI Solutions",
    link:"/exploreCourses/intelligence",
  },
  {
    category: "Backend",
    title: "QA",
    icon: <FlaskRound color="#ff6b3d" />,
    subtitle: "Ensure software reliability through thorough testing and quality assurance.",
    linkTitle: "Explore QA Services",
    link:"/exploreCourses/qa",
  },
  {
    category: "Backend",
    title: "Dedicated Teams",
    icon: <Users color="#ff6b3d" />,
    subtitle: "Build your remote dream team with our vetted tech talent.",
    linkTitle: "Hire Dedicated Teams",
    link:"/exploreCourses/book-an-appointment",
  },
];

