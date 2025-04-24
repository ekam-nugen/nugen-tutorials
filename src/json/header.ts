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
        { label: "Full Stack Development", href: "/full-stack" },
        { label: "Frontend Development", href: "/courses" },
        { label: "Backend Development", href: "/backend" },
      ],
    },
    { label: "Blog", href: "/blog" },
    { label: "About Us", href: "/aboutUs" },
  ];