export type THeaderContent = {
    label: string;
    href?: string;
    children?: { label: string; href: string }[];
  };
export const HeaderContent:THeaderContent[] = [
    { label: "Home", href: "/" },
    {
      label: "Courses",
      children: [
        { label: "Web Development", href: "/web-dev" },
        { label: "Data Science", href: "/data-science" },
        { label: "Cyber Security", href: "/cyber-security" },
        { label: "Cloud Computing", href: "/cloud" },
        { label: "AI and Machine Learning", href: "/ai-ml" },
      ],
    },
    { label: "Blog", href: "/blog" },
    { label: "About Us", href: "/aboutUs" },
  ];