import {
  Building2,
  Users,
  BadgeCheck,
  Handshake,
  BadgeDollarSign,
  ClipboardCheck,
} from "lucide-react";

export const MlBootcamp = {
  courseFeatures: [
    {
      icon: BadgeCheck,
      title: "ML Proficiency Certificate",
      description:
        "Earn a credential proving your applied machine learning expertise.",
    },
    {
      icon: Users,
      title: "Expert-Led Classes",
      description:
        "Taught by industry practitioners with real-world ML deployment experience.",
    },
    {
      icon: ClipboardCheck,
      title: "Project-Based Curriculum",
      description:
        "Apply ML models to structured and unstructured datasets in real scenarios.",
    },
    {
      icon: Handshake,
      title: "Capstone Mentorship",
      description: "Work on a portfolio-worthy ML project with mentor support.",
    },
    {
      icon: Building2,
      title: "Industry Datasets",
      description:
        "Train and validate your models on datasets from domains like retail, finance, and health.",
    },
    {
      icon: BadgeDollarSign,
      title: "Career Mentoring",
      description:
        "Prepare for roles like Data Scientist, ML Engineer, or Analyst with résumé reviews and mock interviews.",
    },
  ],
  useCases: [
    "Fraud Detection",
    "Customer Segmentation",
    "Predictive Maintenance",
    "Churn Prediction",
    "Product Recommendation",
    "Credit Scoring",
  ],
  career: [
    {
      id: 1,
      title: "Machine Learning Engineer",
      description: "Designs and deploys production-ready ML models.",
      img: "/frontend.avif",
      benefits: ["🧠 Model Training", "📈 Model Evaluation", "⚙️ MLOps Tools"],
    },
    {
      id: 2,
      title: "Data Scientist",
      description: "Analyzes data trends and builds predictive models.",
      img: "/frontend.avif",
      benefits: [
        "📊 Data Cleaning",
        "📈 Regression & Clustering",
        "📚 Storytelling",
      ],
    },
    {
      id: 3,
      title: "ML Analyst",
      description: "Applies ML to business data to drive decisions.",
      img: "/frontend.avif",
      benefits: ["🔍 Data Mining", "📋 KPI Modeling", "📊 Dashboarding"],
    },
    {
      id: 4,
      title: "AI Product Analyst",
      description: "Collaborates on product decisions using model insights.",
      img: "/frontend.avif",
      benefits: ["🎯 A/B Testing", "🧩 User Modeling", "📈 Adoption Metrics"],
    },
  ],
  howItWorks: {
    title: (
      <>
        What <span className="text-[#f37458]">machine learning</span> skills{" "}
        <span className="text-[#f37458]">will you develop</span>?
      </>
    ),
    description:
      "This career-focused bootcamp trains you in supervised, unsupervised, and reinforcement learning with hands-on Python labs.",
  },
};

export const AiBusiness = {
  courseFeatures: [
    {
      icon: BadgeCheck,
      title: "AI Leadership Certification",
      description:
        "Showcase your ability to lead AI-driven business innovation.",
    },
    {
      icon: Users,
      title: "Led by AI Strategists",
      description: "Learn from experts in AI product management and adoption.",
    },
    {
      icon: ClipboardCheck,
      title: "Decision-Making Frameworks",
      description: "Assess when, where, and how to apply AI in your business.",
    },
    {
      icon: Handshake,
      title: "Cross-Functional Workshops",
      description: "Collaborate with peers on real business cases.",
    },
    {
      icon: Building2,
      title: "Enterprise AI Examples",
      description:
        "Study case studies from healthcare, retail, finance, and logistics.",
    },
    {
      icon: BadgeDollarSign,
      title: "Executive Readiness",
      description:
        "Build your playbook for AI budgeting, vendor selection, and ROI analysis.",
    },
  ],
  useCases: [
    "AI in Customer Experience",
    "Predictive Business Analytics",
    "AI-Driven Marketing",
    "Automating Business Processes",
    "AI in Product Innovation",
    "Risk Management with AI",
  ],
  career: [
    {
      id: 1,
      title: "AI Transformation Leader",
      description: "Drives organization-wide AI strategy and adoption.",
      img: "/frontend.avif",
      benefits: [
        "📊 Change Management",
        "⚙️ AI Readiness",
        "🗂️ Cross-Functional Teams",
      ],
    },
    {
      id: 2,
      title: "Product Owner – AI",
      description: "Oversees AI features within digital products.",
      img: "/frontend.avif",
      benefits: [
        "🧩 Feature Planning",
        "🔄 Agile AI Delivery",
        "📈 KPI Alignment",
      ],
    },
    {
      id: 3,
      title: "Business Analyst (AI)",
      description: "Identifies opportunities to integrate AI into workflows.",
      img: "/frontend.avif",
      benefits: [
        "📋 Use Case Scoping",
        "🔍 Process Mapping",
        "📊 Data Opportunity Sizing",
      ],
    },
    {
      id: 4,
      title: "AI Ethics & Governance Specialist",
      description: "Ensures ethical AI deployment and regulatory compliance.",
      img: "/frontend.avif",
      benefits: [
        "⚖️ Responsible AI Frameworks",
        "📜 Compliance Monitoring",
        "🔐 Data Privacy Assurance",
      ],
    },
    {
      id: 5,
      title: "AI Innovation Strategist",
      description: "Drives innovation through AI-powered business models.",
      img: "/frontend.avif",
      benefits: [
        "🚀 Emerging Tech Scouting",
        "🧠 AI-Driven Value Creation",
        "💡 Ideation Workshops",
      ],
    },
    {
      id: 6,
      title: "AI Project Manager",
      description: "Manages timelines, teams, and budgets for AI projects.",
      img: "/frontend.avif",
      benefits: [
        "📆 Agile Project Management",
        "👥 Cross-Team Coordination",
        "💰 Budget Oversight",
      ],
    },
  ],
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
};

export const DeepLearning = {
  courseFeatures: [
    {
      icon: BadgeCheck,
      title: "TensorFlow DL Certificate",
      description:
        "Get certified in building, training, and deploying deep learning models.",
    },
    {
      icon: Users,
      title: "Instructor-Guided Labs",
      description:
        "Learn from experts with hands-on coding exercises in Jupyter & Colab.",
    },
    {
      icon: ClipboardCheck,
      title: "Model Building Workouts",
      description: "Train CNNs, RNNs, and autoencoders from scratch.",
    },
    {
      icon: Handshake,
      title: "Capstone Collaboration",
      description:
        "Build a real-world project such as image recognition or sentiment analysis.",
    },
    {
      icon: Building2,
      title: "Real Dataset Applications",
      description: "Apply deep learning to text, image, and time-series data.",
    },
    {
      icon: BadgeDollarSign,
      title: "Deployment Skills",
      description:
        "Learn model saving, versioning, and inference on the cloud.",
    },
  ],
  useCases: [
    "Image Classification",
    "Object Detection",
    "Text Generation",
    "Speech Recognition",
    "Time Series Forecasting",
    "Anomaly Detection",
  ],
  career: [
    {
      id: 1,
      title: "Deep Learning Engineer",
      description: "Implements and deploys complex neural architectures.",
      img: "/frontend.avif",
      benefits: [
        "📦 TensorFlow APIs",
        "🧠 Model Optimization",
        "☁️ Cloud Inference",
      ],
    },
    {
      id: 2,
      title: "AI Application Developer",
      description: "Builds AI-powered tools using DL models.",
      img: "/frontend.avif",
      benefits: ["📲 DL in Apps", "🧩 TensorFlow Lite", "📈 Model Integration"],
    },
    {
      id: 3,
      title: "Computer Vision Specialist",
      description: "Applies DL to solve visual perception tasks.",
      img: "/frontend.avif",
      benefits: [
        "📸 CNN Design",
        "🎞️ Video Processing",
        "🔍 Image Segmentation",
      ],
    },
    {
      id: 4,
      title: "NLP Engineer (Deep Learning)",
      description:
        "Develops DL models for language understanding and generation.",
      img: "/frontend.avif",
      benefits: [
        "🗣️ Transformer Architectures",
        "📚 Language Modeling",
        "🧾 Text Classification",
      ],
    },
    {
      id: 5,
      title: "DL Research Scientist",
      description:
        "Explores new architectures and training methods for deep learning.",
      img: "/frontend.avif",
      benefits: [
        "🔬 Experimental Design",
        "🧪 Novel Architectures",
        "📊 Benchmarking & Papers",
      ],
    },
    {
      id: 6,
      title: "Speech Recognition Engineer",
      description: "Applies DL techniques to audio and speech processing.",
      img: "/frontend.avif",
      benefits: [
        "🎤 Audio Preprocessing",
        "🧠 RNNs & Transformers",
        "🔊 Real-time Inference",
      ],
    },
  ],
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
};

export const MlModel = {
  courseFeatures: [
    {
      icon: BadgeCheck,
      title: "ML Deployment Certificate",
      description: "Earn a badge for deploying real-time ML applications.",
    },
    {
      icon: Users,
      title: "DevOps for ML",
      description:
        "Taught by engineers with MLOps and cloud deployment expertise.",
    },
    {
      icon: ClipboardCheck,
      title: "Serving with APIs",
      description: "Expose models using REST APIs with FastAPI or Flask.",
    },
    {
      icon: Handshake,
      title: "Dockerized Workflows",
      description: "Containerize models for reproducibility and scaling.",
    },
    {
      icon: Building2,
      title: "Monitoring & Logging",
      description: "Track drift, latency, and model accuracy in production.",
    },
    {
      icon: BadgeDollarSign,
      title: "Production-Readiness",
      description:
        "Learn deployment best practices for cloud and edge use cases.",
    },
  ],
  useCases: [
    "Real-Time Inference",
    "Batch Model Serving",
    "Cloud Deployment (AWS/GCP)",
    "Model Drift Monitoring",
    "API-Based Model Access",
    "CI/CD for ML Models",
  ],
  career: [
    {
      id: 1,
      title: "MLOps Engineer",
      description:
        "Builds and maintains ML infrastructure and deployment systems.",
      img: "/frontend.avif",
      benefits: [
        "🛠️ Docker & K8s",
        "📡 Monitoring Tools",
        "⛅ CI/CD Pipelines",
      ],
    },
    {
      id: 2,
      title: "ML Infrastructure Engineer",
      description: "Optimizes model latency and performance in production.",
      img: "/frontend.avif",
      benefits: ["📦 Model Serving", "🌐 API Scaling", "🧠 Version Management"],
    },
    {
      id: 3,
      title: "AI DevOps Specialist",
      description: "Bridges ML development and deployment teams.",
      img: "/frontend.avif",
      benefits: [
        "🔁 Reproducibility",
        "🧰 Tool Integration",
        "📈 Uptime Monitoring",
      ],
    },
    {
      id: 4,
      title: "ML Model Governance Analyst",
      description:
        "Ensures compliance, traceability, and auditability of ML models.",
      img: "/frontend.avif",
      benefits: [
        "📋 Model Documentation",
        "🔎 Audit Trails",
        "⚖️ Compliance Reporting",
      ],
    },
    {
      id: 5,
      title: "Model Performance Analyst",
      description:
        "Monitors and tunes models post-deployment for drift and decay.",
      img: "/frontend.avif",
      benefits: [
        "📊 A/B Testing",
        "📉 Drift Detection",
        "🔧 Performance Tuning",
      ],
    },
    {
      id: 6,
      title: "ML Deployment Specialist",
      description: "Manages rollout strategies and safe updates of ML systems.",
      img: "/frontend.avif",
      benefits: [
        "🚀 Blue-Green Deployments",
        "🔁 Canary Releases",
        "🔒 Rollback Handling",
      ],
    },
  ],
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
};
export const AiStrategy = {
  courseFeatures: [
    {
      icon: BadgeCheck,
      title: "Ethical AI Certificate",
      description:
        "Show your mastery in designing responsible and ethical AI solutions.",
    },
    {
      icon: Users,
      title: "Taught by AI Policy Experts",
      description:
        "Learn from professionals involved in AI governance, ethics, and legal frameworks.",
    },
    {
      icon: ClipboardCheck,
      title: "Case-Based Learning",
      description:
        "Analyze real-world scenarios in surveillance, bias, labor, and safety.",
    },
    {
      icon: Handshake,
      title: "Responsible AI Frameworks",
      description:
        "Learn key principles: fairness, explainability, transparency, and safety.",
    },
    {
      icon: Building2,
      title: "Strategy & Risk Mitigation",
      description:
        "Create AI playbooks that align with ESG, compliance, and long-term goals.",
    },
    {
      icon: BadgeDollarSign,
      title: "AI Governance Models",
      description:
        "Design policies for data privacy, algorithmic accountability, and ethics boards.",
    },
  ],
  useCases: [
    "Bias & Fairness Audits",
    "Responsible AI Design",
    "Algorithmic Accountability",
    "AI Risk Assessment",
    "AI Policy Development",
    "Corporate AI Governance",
  ],
  career: [
    {
      id: 1,
      title: "AI Ethics Specialist",
      description:
        "Develops and implements ethical AI practices in organizations.",
      img: "/frontend.avif",
      benefits: [
        "🧭 Ethical Frameworks",
        "📜 Policy Writing",
        "⚖️ Compliance Audits",
      ],
    },
    {
      id: 2,
      title: "AI Policy Advisor",
      description:
        "Advises companies and governments on AI regulation and safety.",
      img: "/frontend.avif",
      benefits: [
        "🏛️ Legal Oversight",
        "📊 Risk Analysis",
        "📘 Standards Research",
      ],
    },
    {
      id: 3,
      title: "Responsible AI Strategist",
      description:
        "Ensures AI aligns with business values, regulations, and human rights.",
      img: "/frontend.avif",
      benefits: ["📈 ESG Strategy", "🧠 Strategic Ethics", "🔍 AI Governance"],
    },
    {
      id: 4,
      title: "AI Risk Manager",
      description: "Identifies and mitigates potential risks in AI deployment.",
      img: "/frontend.avif",
      benefits: [
        "⚠️ Risk Frameworks",
        "📉 Bias Detection",
        "📋 Mitigation Planning",
      ],
    },
    {
      id: 5,
      title: "AI Governance Consultant",
      description: "Designs organizational structures for accountable AI use.",
      img: "/frontend.avif",
      benefits: [
        "🏢 Governance Models",
        "🔍 Oversight Mechanisms",
        "📎 Stakeholder Reporting",
      ],
    },
    {
      id: 6,
      title: "AI Transparency Advocate",
      description: "Promotes explainability and openness in AI systems.",
      img: "/frontend.avif",
      benefits: [
        "🔍 Explainable AI (XAI)",
        "📣 Public Communication",
        "📊 Model Interpretability",
      ],
    },
  ],
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
};
