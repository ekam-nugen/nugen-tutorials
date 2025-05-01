import FirstUser from "../../../public/user1.png";
import SecondUser from "../../../public/user2.png";
import ThirdUser from "../../../public/user3.png";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import {
  Briefcase,
  Scissors,
  Users,
  Award,
  Building2,
  BarChart3,
  Star,
  FileBadge,
  ShieldCheck,
  Monitor,
  Smartphone,
  CheckCircle,
  Cloud,
  Database,
  Brain,
  Sparkles,
  Code,
  BarChart2,
  MessageSquare,
  Zap,
  Wifi,
  TrendingUp,
  Shield,
  Bot,
  Cpu,
  Search,
  Brush,
  Rocket,
  Eye,
} from "lucide-react";
import { FC } from "react";
import Image from "next/image";
import { Service } from "./technologiesTab";

interface ProcessItem {
  number: number;
  title: string;
  description: string;
  icon: FC<{ className?: string }>;
}

interface Competency {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  content: string;
}
interface ServiceAI {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  link?: string;
}

export const UserProfiles = [
  { src: FirstUser, alt: "user1" },
  { src: SecondUser, alt: "user2" },
  { src: ThirdUser, alt: "user3" },
];

export const FooterSections = [
  {
    title: "Links",
    links: ["About Us", "Contact Us", "Services", "Blog"],
  },
  {
    title: "Support",
    links: ["FAQs", "Terms", "Privacy Policy", "Feedback"],
  },
  {
    title: "User Guide",
    links: ["Careers", "Testimonials", "News", "Events"],
  },
];

export const SocialLinks = [
  {
    icon: <FaTwitter />,
    label: "Twitter",
    href: "#",
  },
  {
    icon: <FaInstagram />,
    label: "Instagram",
    href: "#",
  },
  {
    icon: <FaLinkedinIn />,
    label: "LinkedIn",
    href: "#",
  },
  {
    icon: <FaFacebookF />,
    label: "Facebook",
    href: "#",
  },
];

export const servicesData = [
  {
    id: 1,
    title: "WordPress Maintenance",
    description: "Keep your WordPress site secure and up-to-date.",
    iconPath: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z",
    benefits: [
      "🔒 Security Updates",
      "⚙️ Performance Optimization",
      "📅 Regular Backups",
    ],
  },
  {
    id: 2,
    title: "CMS Development",
    description: "Flexible and scalable content management systems.",
    iconPath:
      "M3 3h18v18H3V3zm16 16V5H5v14h14zM7 7h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z",
    benefits: [
      "📝 Easy Content Editing",
      "🛠️ Custom Workflows",
      "🔗 Seamless Integrations",
    ],
  },
  {
    id: 3,
    title: "UI & UX Designing",
    description: "Crafting intuitive and engaging interfaces.",
    iconPath: "M4 8h16M4 16h16M12 12h.01M8 12h.01M16 12h.01",
    benefits: [
      "🎨 User-Centric Design",
      "🖌️ Consistent Aesthetics",
      "📊 Usability Testing",
    ],
  },
  {
    id: 4,
    title: "Customized Web App Development",
    description: "Tailored web apps to meet your needs.",
    iconPath:
      "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
    benefits: [
      "🛠️ Bespoke Solutions",
      "⚡ High Performance",
      "🔒 Secure Architecture",
    ],
  },
  {
    id: 5,
    title: "Optimize Your Website",
    description: "Boost speed and SEO performance.",
    iconPath:
      "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 16c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z",
    benefits: [
      "🚀 Faster Load Times",
      "📈 SEO Enhancements",
      "🛠️ Code Optimization",
    ],
  },
  {
    id: 6,
    title: "Customized App Development",
    description: "Bespoke mobile apps for your business.",
    iconPath:
      "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
    benefits: [
      "📱 Native & Cross-Platform",
      "🎨 Modern UI/UX",
      "⚡ Scalable Solutions",
    ],
  },
  {
    id: 7,
    title: "Web Design & Development",
    description: "Stunning and functional websites.",
    iconPath:
      "M4 3h16a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2zm2 4v10h12V7H6z",
    benefits: [
      "🌐 Responsive Design",
      "🖼️ Visually Appealing",
      "🛠️ Robust Functionality",
    ],
  },
];

export const evoultionData = [
  {
    year: "2010",
    description:
      "Nugen was founded in India, igniting a journey to deliver innovative web and mobile solutions, bridging the gap in digital excellence across global markets.",
    image:
      "https://media.istockphoto.com/id/1144645520/photo/busy-call-centre-in-operation.webp?a=1&b=1&s=612x612&w=0&k=20&c=T6ZwyGztBHa-dwPacz2Vc8kFnh4L1p0W1rsWO4CDJQA=",
  },
  {
    year: "2015",
    description:
      "Secured ISO 9001 and 27001 certifications, establishing Nugen as a trusted leader in quality management and data security worldwide.",
    image:
      "https://media.istockphoto.com/id/923222068/photo/senior-businesswoman-explaining-strategy-at-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=sfV2b-QznBlfclBW-RiHY-lzjgxYl2FdzcEAy5cRWYc=",
  },
  {
    year: "2022",
    description:
      "Earned AWS Partner Recognition, showcasing Nugen’s expertise in cloud deployment and empowering businesses with scalable digital solutions.",
    image:
      "https://media.istockphoto.com/id/923222068/photo/senior-businesswoman-explaining-strategy-at-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=sfV2b-QznBlfclBW-RiHY-lzjgxYl2FdzcEAy5cRWYc=",
  },
];

export const aboutUsData = [
  {
    name: "AI/ML/GenAI",
    color: "border-green-500",
    target: "view-ai-ml",
  },
  {
    name: "Web & Mobile Development",
    color: "border-blue-500",
    target: "view-backend-development",
  },
  {
    name: "Custom Software Development",
    color: "border-purple-500",
    target: "view-frameworks",
  },
  {
    name: "E-commerce",
    color: "border-orange-500",
    target: "view-cms",
  },
  {
    name: "UI/UX",
    color: "border-pink-500",
    target: "view-design",
  },
  {
    name: "Cloud Solutions",
    color: "border-teal-500",
    target: "view-cloud",
  },
  {
    name: "Data Science & Analytics",
    color: "border-indigo-500",
    target: "view-warehousing",
  },
];

export const industriesData = [
  {
    name: "Information Technology",
    image:
      "https://www.capitalnumbers.com/images/staff-augmentation/empower1.svg",
    alt: "Information Technology",
  },
  {
    name: "Healthcare",
    image:
      "https://www.capitalnumbers.com/images/staff-augmentation/empower2.svg",
    alt: "Healthcare",
  },
  {
    name: "Retail and E-commerce",
    image:
      "https://www.capitalnumbers.com/images/staff-augmentation/empower3.svg",
    alt: "Retail and E-commerce",
  },
  {
    name: "Media & Entertainment",
    image:
      "https://www.capitalnumbers.com/images/staff-augmentation/empower6.svg",
    alt: "Media & Entertainment",
  },
  {
    name: "Financial Services",
    image:
      "https://www.capitalnumbers.com/images/staff-augmentation/empower4.svg",
    alt: "Financial Services",
  },
];

export const logos = [
  "/clients/ivoyant.png",
  "/clients/quay.png",
  "/clients/blinkPayment.svg",
  "/clients/capitalNumber.png",
  "/clients/simply5.svg",
  "/clients/protaxCanada.png",
  "/clients/Scott.png",
  "/clients/ganpatiLogo.jpeg",
  "/clients/sunriseIntegration.jpg",
  "/clients/indiaCar.png",
  "/clients/madEngine.webp",
  "/clients/insideInjuries.png",
  "/clients/Qudos.png",
  "/clients/luckyR.jpeg",
  "/clients/magicEdt.jpeg",
  "/clients/dapt.png",
  "/clients/cloudways.webp",
  "/clients/optumLogo.png",
  "/clients/skeepLogo.webp",
];

export const faqData = [
  {
    question: "What Will I Learn in the Frontend Development Course?",
    answer:
      "You'll learn HTML, CSS, JavaScript, React, and responsive design principles to build engaging user interfaces.",
  },
  {
    question: "What Technologies Are Covered in the Backend Development Course?",
    answer:
      "The backend course covers Node.js, Express.js, MongoDB, SQL, RESTful APIs, and authentication techniques.",
  },
  {
    question: "Is the Fullstack Course a Combination of Frontend and Backend?",
    answer:
      "Yes, the Fullstack course combines both frontend and backend skills, including React, Node.js, Express, and databases like MongoDB and PostgreSQL.",
  },
  {
    question: "Are Real-World Projects Included in These Courses?",
    answer:
      "Yes, each course includes hands-on projects such as building a full-featured e-commerce site or task manager app.",
  },
  {
    question: "Do the Courses Cover Version Control Tools?",
    answer:
      "All courses include training on Git and GitHub for version control and collaboration.",
  },
  {
    question: "Are There Any Prerequisites for Enrolling?",
    answer:
      "Basic computer knowledge is recommended. For the backend and fullstack courses, some familiarity with JavaScript is helpful.",
  },
  {
    question: "Will I Learn Deployment and Hosting?",
    answer:
      "Yes, you'll learn how to deploy applications using platforms like Vercel, Netlify, and Heroku, and manage environments.",
  },
  {
    question: "Are These Courses Suitable for Beginners?",
    answer:
      "Absolutely! The courses start from the fundamentals and gradually progress to advanced topics.",
  },
  {
    question: "Do I Get a Certificate After Completion?",
    answer:
      "Yes, you'll receive a certificate upon successful completion of any course.",
  },
  {
    question: "Is There Any Job Placement or Career Support?",
    answer:
      "Yes, we offer resume building, mock interviews, and job referral support after course completion.",
  },
];


export const stats = [
  { icon: <Briefcase size={22} />, title: "Public Listed*", subtitle: "BSE" },
  { icon: <Scissors size={22} />, title: "2012+", subtitle: "Established" },
  {
    icon: <ShieldCheck size={22} />,
    title: "500+",
    subtitle: "Skilled Employees",
  },
  {
    icon: <CheckCircle size={22} />,
    title: "50+",
    subtitle: "Technologies Supported",
  },
  { icon: <Users size={22} />, title: "250+", subtitle: "Clients Worldwide" },
  {
    icon: <Award size={22} />,
    title: "50+",
    subtitle: "Awards in the Last 11 Years",
  },
  {
    icon: <Building2 size={22} />,
    title: "02",
    subtitle: "Development Centers",
  },
  {
    icon: <BarChart3 size={22} />,
    title: "30+%",
    subtitle: "YOY Organic Revenue Growth",
  },
  { icon: <Star size={22} />, title: "300+", subtitle: "Five Star Reviews" },
  {
    icon: <FileBadge size={22} />,
    title: "ISO 9001 & ISO 27001",
    subtitle: "Certified",
  },
  {
    icon: <ShieldCheck size={22} />,
    title: "SOC 2 Type II",
    subtitle: "Certified",
  },
  {
    icon: (
      <Image
        src="/salesforce.svg"
        alt="Salesforce"
        className="w-5 h-5"
        width={20}
        height={20}
      />
    ),
    title: "Salesforce",
    subtitle: "Partner",
  },
  {
    icon: (
      <Image
        src="/adobe.svg"
        alt="Adobe"
        className="w-5 h-5"
        width={20}
        height={20}
      />
    ),
    title: "Adobe",
    subtitle: "Partner",
  },
  {
    icon: (
      <Image
        src="/microsoft.svg"
        alt="Microsoft"
        className="w-5 h-5"
        width={20}
        height={20}
      />
    ),
    title: "Microsoft",
    subtitle: "Partner",
  },
];

export const servicesTechData: Service[] = [
  {
    id: "frontend-development",
    title: "Frontend Development",
    tabs: [
      {
        id: "frontend-basics",
        name: "Core Technologies",
        icon: Monitor,
        items: [
          {
            title: "HTML, CSS & JavaScript",
            description:
              "Master the building blocks of the web. Learn to create structured, styled, and interactive interfaces from scratch.",
          },
          {
            title: "Responsive Design",
            description:
              "Build mobile-first, adaptable websites using Flexbox, Grid, and media queries to ensure perfect layout across devices.",
          },
          {
            title: "Version Control with Git",
            description:
              "Track code changes, collaborate effectively, and manage your codebase using Git and GitHub.",
          },
        ],
        link: {
          href: "/courses/frontEnd",
          text: "Explore Frontend Development",
        },
      },
    ],
  },
  {
    id: "backend-development",
    title: "Backend Development",
    tabs: [
      {
        id: "backend-core",
        name: "Core Technologies",
        icon: Database,
        items: [
          {
            title: "Node.js & Express.js",
            description:
              "Build scalable server-side applications using JavaScript with Node and the Express framework.",
          },
          {
            title: "Databases (SQL & NoSQL)",
            description:
              "Design and manage databases using PostgreSQL, MongoDB, and MySQL for efficient data storage.",
          },
          {
            title: "REST APIs & Authentication",
            description:
              "Create secure APIs and implement authentication using JWT, OAuth, and other strategies.",
          },
        ],
        link: {
          href: "/courses/backEnd",
          text: "Discover Backend Development",
        },
      },
    ],
  },
  {
    id: "fullstack-development",
    title: "Fullstack Development",
    tabs: [
      {
        id: "fullstack-skillset",
        name: "Comprehensive Skillset",
        icon: Smartphone,
        items: [
          {
            title: "Frontend + Backend Integration",
            description:
              "Learn to connect frontend interfaces with backend logic for a seamless fullstack application.",
          },
          {
            title: "MERN Stack Development",
            description:
              "Build complete applications using MongoDB, Express, React, and Node.js from front to back.",
          },
          {
            title: "Project-Based Learning",
            description:
              "Apply your skills in real-world projects like e-commerce, social media, or booking platforms.",
          },
        ],
        link: {
          href: "/courses/fullStack",
          text: "Start Your Fullstack Journey",
        },
      },
    ],
  },
];


export const services: ServiceAI[] = [
  {
    id: "ai-software",
    title: "AI Software Development",
    description:
      "We develop custom software from scratch, integrating AI functionalities tailored to your needs. Our comprehensive AI solutions enhance automation, deliver personalized experiences, and provide advanced insights.",
    icon: Code,
    link: "https://www.capitalnumbers.com/custom-software-development.php",
  },
  {
    id: "ai-ml-integration",
    title: "AI & ML Integration",
    description:
      "Hire our AI developers to integrate AI and ML functionalities into your existing systems. We customize solutions to enhance workflows, improve decision-making, and drive efficiency.",
    icon: Cpu,
  },
  {
    id: "generative-ai",
    title: "Generative AI Development",
    description:
      "Experience the power of Generative AI with our tailored development services. From AI-driven content creation to intelligent automation, we build innovative solutions.",
    icon: Bot,
    link: "/generative-ai-development.php",
  },
  {
    id: "ai-bi",
    title: "AI-Driven Business Intelligence",
    description:
      "Implement AI into your BI systems with our expertise in developing AI models for predictions, insights, and recommendations to make data-driven decisions.",
    icon: BarChart2,
  },
  {
    id: "ai-ml-consulting",
    title: "AI & ML Consulting",
    description:
      "Get our consulting services to identify AI and ML integration opportunities for predictive analytics, process automation, and strategic decision-making.",
    icon: MessageSquare,
  },
  {
    id: "ai-ml-cloud",
    title: "AI & ML Cloud Services",
    description:
      "Enhance your business with scalable AI & ML cloud solutions that reduce costs, eliminate errors, and provide real-time analytics for better outcomes.",
    icon: Cloud,
  },
  {
    id: "openai-service",
    title: "OpenAI as a Service",
    description:
      "Implement OpenAI's cutting-edge models into your applications to improve automation, enhance decision-making, and elevate user interactions.",
    icon: Brain,
  },
  {
    id: "predictive-analytics",
    title: "Predictive Analytics & Forecasting",
    description:
      "Our AI developers build smart solutions using advanced models to anticipate trends, optimize operations, and make data-driven decisions.",
    icon: TrendingUp,
  },
  {
    id: "ai-iot",
    title: "AI-based IoT",
    description:
      "Integrate AI with IoT for real-time insights, predictive maintenance, and automated processes to enhance efficiency and reduce downtime.",
    icon: Wifi,
  },
  {
    id: "self-learning",
    title: "Self-Learning Analytics Tool",
    description:
      "Build self-learning analytics tools that integrate data-driven insights into customer preferences for personalized products and services.",
    icon: Zap,
  },
  {
    id: "data-support",
    title: "Data-related Support for AI/ML",
    description:
      "We provide data-related support through advanced data engineering services to ensure high-quality datasets for optimized AI/ML algorithms.",
    icon: Database,
    link: "https://www.capitalnumbers.com/data-engineering.php",
  },
  {
    id: "ai-optimization",
    title: "AI Solution Support & Optimization",
    description:
      "Ensure your AI solutions perform at their best with continuous monitoring, fine-tuning, and integration of the latest advancements.",
    icon: Shield,
  },
];

export const processItems: ProcessItem[] = [
  {
    number: 1,
    title: "AI Product Discovery",
    description:
      "We identify your business needs and explore potential AI solutions. Our custom AI development team conducts thorough discussions to gather requirements and define the scope, ensuring the AI product aligns with your strategic goals and delivers value.",
    icon: Search,
  },
  {
    number: 2,
    title: "Data Cleaning",
    description:
      "We collect raw data and clean it to remove errors and inconsistencies. This step ensures the dataset is accurate and reliable, forming a solid foundation for the AI/ML models.",
    icon: Brush,
  },
  {
    number: 3,
    title: "Data Preparation",
    description:
      "We preprocess and structure the cleaned data. Our AI developers transform the data into a suitable format for analysis, enhancing the accuracy and reliability of AI models.",
    icon: Database,
  },
  {
    number: 4,
    title: "AI/ML Model Training",
    description:
      "Our custom AI/ML development team trains the models using the prepared data. We use advanced algorithms and machine learning techniques to develop models that provide predictive analytics, automate processes, and deliver actionable insights.",
    icon: Brain,
  },
  {
    number: 5,
    title: "AI Product Deployment",
    description:
      "We deploy the AI models into your business environment. Our team ensures seamless integration with your existing systems, providing a smooth transition and immediate operational benefits.",
    icon: Rocket,
  },
  {
    number: 6,
    title: "AI Model Monitoring",
    description:
      "We continuously monitor the deployed AI models to ensure optimal performance. Our AI software development services include ongoing support, ensuring necessary adjustments and improvements are made to maintain and enhance the effectiveness of your AI solutions.",
    icon: Monitor,
  },
];

export const competencies: Competency[] = [
  {
    icon: Sparkles,
    title: "Generative AI",
    content:
      'Our AI developers explore limitless opportunities with <Link href="/generative-ai-development" className="text-blue-600 hover:underline">Generative AI</Link>, using strong technical knowledge around foundational models like GPT-4. We create high-quality applications, code, images, content, and other innovative solutions, delivering exceptional results for your business.',
  },
  {
    icon: BarChart2,
    title: "Data Science",
    content:
      "Automate and operationalize your data science models with our advanced AI ML development solutions. Our AI and data science consultants integrate these technologies to automate data interpretation and decision-making processes, resulting in improved performance and accelerated growth.",
  },
  {
    icon: MessageSquare,
    title: "Natural Language Processing",
    content:
      "We are proficient in Natural Language Processing (NLP), enabling machines to understand and interact with human language. Our developers build models for sentiment analysis, chatbots, language translation, and text summarization, improving customer interactions and automating communication tasks.",
  },
  {
    icon: Brain,
    title: "Deep Learning",
    content:
      "Our expertise in deep learning involves using neural networks to tackle complex problems. We apply these techniques to image and speech recognition, autonomous systems, and predictive analytics, helping businesses innovate and achieve technological advancements.",
  },
  {
    icon: Eye,
    title: "Computer Vision",
    content:
      "Our AI developers have strong capabilities in computer vision, allowing systems to interpret and act on visual data. We create applications for image classification, object detection, facial recognition, and video analytics, enhancing efficiency and safety across industries.",
  },
  {
    icon: Bot,
    title: "Robotic Process Automation",
    content:
      "Our AI/ML developers have extensive experience in Robotic Process Automation (RPA), automating repetitive tasks to improve productivity and accuracy. We combine RPA with AI's cognitive ability to optimize business processes, reduce operational costs, and more.",
  },
];
