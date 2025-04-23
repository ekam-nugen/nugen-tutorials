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
    CheckCircle,
  } from "lucide-react";
   
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
      icon: <img src="/salesforce.svg" alt="Salesforce" className="w-5 h-5" />,
      title: "Salesforce",
      subtitle: "Partner",
    },
    {
      icon: <img src="/adobe.svg" alt="Adobe" className="w-5 h-5" />,
      title: "Adobe",
      subtitle: "Partner",
    },
    {
      icon: <img src="/microsoft.svg" alt="Microsoft" className="w-5 h-5" />,
      title: "Microsoft",
      subtitle: "Partner",
    },
  ];