export type THeaderContent = {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
};
export const HeaderContent: THeaderContent[] = [
  { label: "Home", href: "/" },
  {
    label: "Courses",
    children: [
      { label: "Full Stack Development", href: "/courses/full-stack" },
      { label: "Frontend Development", href: "/courses/front-end" },
      { label: "Backend Development", href: "/courses/back-end" },
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "About Us", href: "/about-us" },
];
