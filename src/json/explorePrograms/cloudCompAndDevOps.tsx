import {
  Building2,
  Users,
  BadgeCheck,
  Handshake,
  BadgeDollarSign,
  ClipboardCheck,
} from "lucide-react";

export const CloudArchitect = {
  courseFeatures: [
    {
      icon: BadgeCheck,
      title: "Multi-Cloud Certification",
      description:
        "Get certified in AWS, Azure, and Google Cloud architecture principles.",
    },
    {
      icon: Users,
      title: "Taught by Cloud Experts",
      description:
        "Learn from certified architects with years of real-world deployment experience.",
    },
    {
      icon: ClipboardCheck,
      title: "Project-Based Learning",
      description:
        "Design and implement enterprise-grade architecture across cloud providers.",
    },
    {
      icon: Handshake,
      title: "Peer Collaboration Labs",
      description: "Collaborate on solution designs and architectural reviews.",
    },
    {
      icon: Building2,
      title: "Real Business Scenarios",
      description:
        "Apply architectural thinking to real industry challenges and scale plans.",
    },
    {
      icon: BadgeDollarSign,
      title: "Career Accelerator",
      description:
        "Build a cloud portfolio that helps you transition into cloud architect roles.",
    },
  ],
  useCases: [
    "Multi-Cloud Architecture Design",
    "Disaster Recovery Planning",
    "Infrastructure as Code (IaC)",
    "Cloud Migration Strategies",
    "Compliance & Security Policies",
    "Cloud Cost Optimization",
  ],
  career: [
    {
      id: 1,
      title: "Cloud Solutions Architect",
      description: "Designs and implements scalable cloud infrastructure.",
      img: "/frontend.avif",
      benefits: [
        "🏗️ Architecture Planning",
        "☁️ Cloud Security",
        "💰 Cost Control",
      ],
    },
    {
      id: 2,
      title: "Enterprise Cloud Consultant",
      description: "Advises enterprises on multi-cloud strategies.",
      img: "/frontend.avif",
      benefits: [
        "📊 Needs Assessment",
        "⚙️ Vendor Integration",
        "📈 ROI Tracking",
      ],
    },
    {
      id: 3,
      title: "Cloud Security Architect",
      description: "Focuses on securing cloud environments and data.",
      img: "/frontend.avif",
      benefits: ["🔐 IAM Systems", "🛡️ Compliance", "📁 Data Encryption"],
    },
    {
      id: 4,
      title: "Infrastructure Engineer",
      description: "Builds and maintains cloud-native infrastructure.",
      img: "/frontend.avif",
      benefits: [
        "🧱 IaC with Terraform",
        "⚙️ CI/CD Pipelines",
        "🧪 System Testing",
      ],
    },
    {
      id: 5,
      title: "Cloud Network Engineer",
      description: "Manages cloud networking and hybrid connectivity.",
      img: "/frontend.avif",
      benefits: [
        "🌐 VPN & Routing",
        "🧩 Subnet Planning",
        "📡 Latency Monitoring",
      ],
    },
    {
      id: 6,
      title: "Cloud Project Manager",
      description: "Leads cloud initiatives across teams and vendors.",
      img: "/frontend.avif",
      benefits: [
        "📋 Sprint Planning",
        "🤝 Stakeholder Alignment",
        "🧭 Migration Roadmaps",
      ],
    },
  ],
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
};

export const AwsSolutions = {
  courseFeatures: [
    {
      icon: BadgeCheck,
      title: "AWS Certification Prep",
      description:
        "Aligned with AWS Solutions Architect Associate certification.",
    },
    {
      icon: Users,
      title: "Live Mentorship",
      description: "Guided sessions with AWS-certified professionals.",
    },
    {
      icon: ClipboardCheck,
      title: "Hands-On Labs",
      description: "Work directly with services like EC2, S3, VPC, and RDS.",
    },
    {
      icon: Handshake,
      title: "Architecture Blueprints",
      description: "Design high-availability and fault-tolerant systems.",
    },
    {
      icon: Building2,
      title: "Enterprise Use Cases",
      description:
        "Learn how AWS is used in finance, healthcare, and e-commerce.",
    },
    {
      icon: BadgeDollarSign,
      title: "Role-Focused Learning",
      description:
        "Gain practical experience for cloud architect and engineering roles.",
    },
  ],
  useCases: [
    "AWS Cloud Architecture Design",
    "Serverless Application Deployment",
    "Data Lake Construction with S3",
    "High Availability Systems",
    "CloudFront CDN Setup",
    "IAM and Security Best Practices",
  ],
  career: [
    {
      id: 1,
      title: "AWS Solutions Architect",
      description: "Builds secure and scalable cloud solutions using AWS.",
      img: "/frontend.avif",
      benefits: ["☁️ EC2 & Lambda", "🔒 IAM Policies", "📦 S3 & RDS"],
    },
    {
      id: 2,
      title: "Cloud DevOps Engineer",
      description: "Implements automation and deployment pipelines.",
      img: "/frontend.avif",
      benefits: ["🔁 CI/CD", "🧪 CodePipeline", "⚙️ CloudFormation"],
    },
    {
      id: 3,
      title: "AWS Cloud Support Engineer",
      description: "Supports AWS infrastructure for clients and teams.",
      img: "/frontend.avif",
      benefits: [
        "🧰 Troubleshooting",
        "📞 Incident Response",
        "📈 Performance Monitoring",
      ],
    },
    {
      id: 4,
      title: "Cloud Cost Analyst",
      description: "Manages budgets and optimizes AWS resource usage.",
      img: "/frontend.avif",
      benefits: ["💸 Budget Alerts", "📊 Usage Reports", "🧮 Pricing Models"],
    },
    {
      id: 5,
      title: "Serverless Architect",
      description: "Designs microservices using AWS Lambda and API Gateway.",
      img: "/frontend.avif",
      benefits: [
        "⚙️ Event Triggers",
        "🛠️ FaaS Architecture",
        "🔄 Auto Scaling",
      ],
    },
    {
      id: 6,
      title: "AWS Data Engineer",
      description: "Builds data pipelines using AWS analytics tools.",
      img: "/frontend.avif",
      benefits: ["📂 Glue & Athena", "🚀 Redshift", "📈 Kinesis"],
    },
  ],
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
};

export const DevOpsEngineer = {
  courseFeatures: [
    {
      icon: BadgeCheck,
      title: "DevOps Certification",
      description: "Earn credentials validating your DevOps automation skills.",
    },
    {
      icon: Users,
      title: "Expert-Led Bootcamps",
      description:
        "Learn from engineers with CI/CD and cloud deployment experience.",
    },
    {
      icon: ClipboardCheck,
      title: "CI/CD Projects",
      description:
        "Work on GitHub Actions, Jenkins pipelines, and deployment automation.",
    },
    {
      icon: Handshake,
      title: "Team-Based Exercises",
      description: "Collaborate with peers on live DevOps simulations.",
    },
    {
      icon: Building2,
      title: "Toolchain Mastery",
      description:
        "Master tools like Docker, Terraform, Ansible, and Prometheus.",
    },
    {
      icon: BadgeDollarSign,
      title: "Real-World Readiness",
      description:
        "Prepare for DevOps roles in product and enterprise environments.",
    },
  ],
  useCases: [
    "CI/CD Pipeline Design",
    "Automated Infrastructure Provisioning",
    "Monitoring and Logging Systems",
    "Container Orchestration with Kubernetes",
    "Blue-Green Deployment",
    "DevSecOps Integration",
  ],
  career: [
    {
      id: 1,
      title: "DevOps Engineer",
      description: "Builds automated systems for continuous delivery.",
      img: "/frontend.avif",
      benefits: [
        "⚙️ Jenkins & GitHub Actions",
        "🔄 CI/CD Flows",
        "📊 Monitoring Tools",
      ],
    },
    {
      id: 2,
      title: "SRE (Site Reliability Engineer)",
      description: "Ensures uptime and performance of production systems.",
      img: "/frontend.avif",
      benefits: ["📈 SLOs & SLAs", "🛠️ Alerting Systems", "🧪 Load Testing"],
    },
    {
      id: 3,
      title: "Platform Engineer",
      description: "Builds internal platforms to streamline development.",
      img: "/frontend.avif",
      benefits: [
        "🧱 Toolchains",
        "🧪 Test Automation",
        "📦 Infrastructure Scaling",
      ],
    },
    {
      id: 4,
      title: "Release Manager",
      description: "Manages release workflows and environment readiness.",
      img: "/frontend.avif",
      benefits: [
        "📋 Change Management",
        "🧪 Rollback Protocols",
        "✅ QA Coordination",
      ],
    },
    {
      id: 5,
      title: "DevSecOps Engineer",
      description: "Integrates security into DevOps workflows.",
      img: "/frontend.avif",
      benefits: [
        "🔒 Static Code Analysis",
        "📜 Audit Logs",
        "🛡️ Vulnerability Scans",
      ],
    },
    {
      id: 6,
      title: "Automation Engineer",
      description: "Writes scripts and pipelines to reduce manual effort.",
      img: "/frontend.avif",
      benefits: [
        "📝 Shell/Python",
        "📂 Ansible & Terraform",
        "📡 System Hooks",
      ],
    },
  ],
  howItWorks: {
    title: (
      <>
        What <span className="text-[#f37458]">DevOps capabilities</span> will
        you build?
      </>
    ),
    description:
      "From pipelines to container orchestration, this program equips you with the skills to automate, deploy, and manage modern applications.",
  },
};

export const Kubernetes = {
  courseFeatures: [
    {
      icon: BadgeCheck,
      title: "Developer-Focused K8s Training",
      description:
        "Designed for software engineers transitioning into cloud-native roles.",
    },
    {
      icon: Users,
      title: "Led by Cloud-Native Engineers",
      description:
        "Instructors with deep experience in container orchestration.",
    },
    {
      icon: ClipboardCheck,
      title: "Cluster Management Labs",
      description:
        "Practice deploying, scaling, and debugging apps in Kubernetes clusters.",
    },
    {
      icon: Handshake,
      title: "Code & YAML Challenges",
      description:
        "Write manifests, define services, and troubleshoot with kubectl.",
    },
    {
      icon: Building2,
      title: "Microservice Design Patterns",
      description:
        "Apply K8s to real-world architecture like API gateways and service meshes.",
    },
    {
      icon: BadgeDollarSign,
      title: "Deployment Readiness",
      description: "Get job-ready for engineering teams adopting Kubernetes.",
    },
  ],
  useCases: [
    "Microservices Deployment",
    "Helm Chart Packaging",
    "Auto-Scaling Workloads",
    "Rolling Updates & Rollbacks",
    "Service Discovery & Load Balancing",
    "K8s Security & Secrets Management",
  ],
  career: [
    {
      id: 1,
      title: "Kubernetes Developer",
      description: "Develops and deploys containerized apps using K8s.",
      img: "/frontend.avif",
      benefits: [
        "📦 Helm & YAML",
        "⚙️ Cluster Management",
        "📈 App Monitoring",
      ],
    },
    {
      id: 2,
      title: "Cloud Native Developer",
      description:
        "Builds scalable, portable applications for cloud platforms.",
      img: "/frontend.avif",
      benefits: ["🐳 Docker + K8s", "🛠️ Operator SDKs", "🔁 Service Mesh"],
    },
    {
      id: 3,
      title: "Kubernetes Administrator",
      description: "Maintains production-grade Kubernetes clusters.",
      img: "/frontend.avif",
      benefits: ["🔧 kubeadm", "📜 RBAC Setup", "🔍 Log Management"],
    },
    {
      id: 4,
      title: "Platform Reliability Engineer",
      description: "Ensures application uptime within K8s environments.",
      img: "/frontend.avif",
      benefits: ["📊 Grafana & Prometheus", "📋 Health Probes", "🧪 E2E Tests"],
    },
    {
      id: 5,
      title: "DevOps Engineer – K8s",
      description: "Implements CI/CD pipelines targeting K8s clusters.",
      img: "/frontend.avif",
      benefits: ["🧩 ArgoCD", "🧪 GitOps", "📈 Deployment Strategies"],
    },
    {
      id: 6,
      title: "Kubernetes Consultant",
      description: "Advises on best practices for Kubernetes adoption.",
      img: "/frontend.avif",
      benefits: [
        "🧠 Architecture Review",
        "📁 Policy Enforcement",
        "🔐 Security Hardening",
      ],
    },
  ],
  howItWorks: {
    title: (
      <>
        What <span className="text-[#f37458]">Kubernetes </span>skills{" "}
        <span className="text-[#f37458]">will you apply</span>?
      </>
    ),
    description:
      "Learn how to build, deploy, and scale containerized applications using Kubernetes, Helm, and monitoring tools in real-world settings.",
  },
};

export const AzureFundamentals = {
  courseFeatures: [
    {
      icon: BadgeCheck,
      title: "Microsoft Certified Curriculum",
      description: "Structured around the official AZ-900 certification path.",
    },
    {
      icon: Users,
      title: "Delivered by Azure Professionals",
      description:
        "Get trained by engineers working on Azure enterprise deployments.",
    },
    {
      icon: ClipboardCheck,
      title: "Hands-On Azure Portal Labs",
      description:
        "Provision resources and configure networks in live Azure sandboxes.",
    },
    {
      icon: Handshake,
      title: "Live Q&A and Discussion Forums",
      description:
        "Get real-time help and insights from instructors and peers.",
    },
    {
      icon: Building2,
      title: "Real Cloud Use Cases",
      description:
        "Explore examples from industries like healthcare and logistics.",
    },
    {
      icon: BadgeDollarSign,
      title: "IT Career Foundations",
      description:
        "Build a solid starting point for roles in cloud support, admin, and security.",
    },
  ],
  useCases: [
    "Azure Resource Management",
    "Virtual Machine Provisioning",
    "Storage Solutions in Azure",
    "Networking in the Cloud",
    "Identity & Access with Azure AD",
    "Azure Monitoring & Reporting",
  ],
  career: [
    {
      id: 1,
      title: "Azure Cloud Engineer",
      description: "Manages infrastructure and services in Azure.",
      img: "/frontend.avif",
      benefits: ["🧰 Azure Portal", "⚙️ ARM Templates", "📈 Performance Logs"],
    },
    {
      id: 2,
      title: "Cloud Support Associate – Azure",
      description: "Provides support for Azure infrastructure and services.",
      img: "/frontend.avif",
      benefits: [
        "🔧 VM Troubleshooting",
        "📞 SLA Management",
        "🧪 Connectivity Issues",
      ],
    },
    {
      id: 3,
      title: "Azure Administrator",
      description: "Configures and monitors Azure-based resources.",
      img: "/frontend.avif",
      benefits: [
        "📂 Blob Storage",
        "🛠️ Network Security Groups",
        "📋 Role Assignments",
      ],
    },
    {
      id: 4,
      title: "Azure Data Engineer (Junior)",
      description: "Supports data pipelines and analytics on Azure.",
      img: "/frontend.avif",
      benefits: [
        "📊 Synapse Analytics",
        "🧪 Data Factory",
        "📁 Storage Explorer",
      ],
    },
    {
      id: 5,
      title: "Azure Developer (Entry Level)",
      description: "Builds basic cloud applications using Azure tools.",
      img: "/frontend.avif",
      benefits: [
        "🖥️ App Services",
        "🧩 Azure Functions",
        "🔐 Managed Identity",
      ],
    },
    {
      id: 6,
      title: "Cloud Project Coordinator – Azure",
      description: "Assists in the planning and delivery of Azure projects.",
      img: "/frontend.avif",
      benefits: [
        "📅 Timeline Planning",
        "🔁 Milestone Tracking",
        "🧾 Documentation",
      ],
    },
  ],
  howItWorks: {
    title: (
      <>
        What <span className="text-[#f37458]">Azure cloud basics</span> will you{" "}
        <span className="text-[#f37458]"> understand</span>?
      </>
    ),
    description:
      "This beginner-level course demystifies core Azure services, architecture principles, and identity access management practices.",
  },
};
