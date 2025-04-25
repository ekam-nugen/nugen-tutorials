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
      { label: "Full Stack Development", href: "/courses/fullStack" },
      { label: "Frontend Development", href: "/courses/frontEnd" },
      { label: "Backend Development", href: "/courses/backEnd" },
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "About Us", href: "/aboutUs" },
];
