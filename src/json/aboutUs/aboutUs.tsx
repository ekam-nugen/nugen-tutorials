import FirstUser from "../../../public/user1.png";
import SecondUser from "../../../public/user2.png";
import ThirdUser from "../../../public/user3.png";

export const UserProfiles = [
  { src: FirstUser, alt: "user1" },
  { src: SecondUser, alt: "user2" },
  { src: ThirdUser, alt: "user3" },
];

export const servicesData = [
  {
    id: 1,
    path: "/aws-solutions-architect",
    title: "AWS Solutions Architect",
    description:
      "Become proficient in AWS services and design fault-tolerant, secure cloud systems.",
    iconPath: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z",
    benefits: [
      "🔧 AWS Cloud Architecture Design",
      "📈 Serverless Application Deployment",
      "📦 CloudFront CDN Setup",
    ],
  },
  {
    id: 2,
    path: "/ethical-hacking-training",
    title: "Ethical Hacking Training",
    description:
      "Master ethical hacking skills to legally assess, penetrate, and secure systems from cyber threats.",
    iconPath:
      "M3 3h18v18H3V3zm16 16V5H5v14h14zM7 7h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z",
    benefits: [
      "📁 Vulnerability Assessment",
      "🛠️ Penetration Testing",
      "🔌 Network Security",
    ],
  },
  {
    id: 3,
    path: "/ux-ui-design-certification",
    title: "UX/UI Design Certification",
    description: "Learn to design intuitive and user-friendly interfaces.",
    iconPath: "M4 8h16M4 16h16M12 12h.01M8 12h.01M16 12h.01",
    benefits: [
      "🎯 Design Thinking Principles",
      "🖌️ Figma & Prototyping",
      "📈 User Testing Techniques",
    ],
  },
  {
    id: 4,
    path: "/google-ads-analytics",
    title: "Google Ads & Analytics",
    description:
      "Master Google Ads and Google Analytics to optimize marketing strategies for better ROI.",
    iconPath:
      "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
    benefits: [
      "🛠️ Search Engine Marketing",
      "📈 Google Analytics Tracking",
      "🔍 Paid Search Advertising",
    ],
  },
  {
    id: 5,
    path: "/ml-bootcamp",
    title: "Machine Learning Bootcamp",
    description:
      "Master machine learning fundamentals and build end-to-end models.",
    iconPath:
      "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 16c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z",
    benefits: [
      "⚡ Credit Scoring",
      "🔍 Fraud Detection",
      "🔧 Predictive Maintenance",
    ],
  },
  {
    id: 6,
    path: "/gen-ai-everyone",
    title: "Generative AI for Everyone",
    description:
      "Understand the foundations of generative AI and how it's transforming industries with real-world applications.",
    iconPath:
      "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
    benefits: [
      "📱 AI-Assisted Content Creation",
      "🧩 Presentation & Slide Generation",
      "📤 Creative Writing Assistance",
    ],
  },
  {
    id: 7,
    path: "/full-stack-developer",
    title: "Full Stack Developer",
    description:
      "Become a full-stack developer by mastering both front-end and back-end technologies.",
    iconPath:
      "M4 3h16a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2zm2 4v10h12V7H6z",
    benefits: [
      "🔧 Full Stack Proficiency",
      "🖥️ Web Application Development",
      "📚 Continuous Learning",
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
