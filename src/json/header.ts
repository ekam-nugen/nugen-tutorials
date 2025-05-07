import {
  BookMarked,
  House,
  LucideIcon,
  MessageSquareText,
  NotebookPen,
} from "lucide-react";

export type THeaderContent = {
  label: string;
  href?: string;
  icon: LucideIcon;
  children?: { label: string; href: string }[];
};
export const HeaderContent: THeaderContent[] = [
  { label: "Home", href: "/", icon: House },
  {
    label: "Courses",
    children: [
      { label: "Full Stack Development", href: "/courses/full-stack" },
      { label: "Frontend Development", href: "/courses/front-end" },
      { label: "Backend Development", href: "/courses/back-end" },
    ],
    icon: BookMarked,
  },
  { label: "Blog", href: "/blog", icon: NotebookPen },
  { label: "About Us", href: "/about-us", icon: MessageSquareText },
];
