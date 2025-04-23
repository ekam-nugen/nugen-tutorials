import BgImage from "../../public/service-bg.jpg" 
export const blogs = [
  {
    title: "Enhance Online Presence Drive Digital Success",
    description:
      "Learn strategies to elevate your brand visibility and grow your audience online.",
    image: BgImage,
    date: "30, April 2024",
    author: "admin",
  },
  {
    title: "Grow Your Business Digitally Reach New Customers",
    description:
      "Discover digital channels that can help your business scale faster and smarter.",
    image: BgImage,
    date: "30, April 2024",
    author: "admin",
  },
  {
    title: "Boost Your Brand Online Reach Your Audience Digitally",
    description:
      "Uncover tools and platforms to effectively reach and engage your target market.",
    image: BgImage,
    date: "30, April 2024",
    author: "admin",
  },
  // 9 more dummy blogs to make 12
  ...Array.from({ length: 12 }, (_, i) => ({
    title: `Blog Title ${i + 4}`,
    description: `This is a brief description of blog post number ${i + 4}.`,
    image: BgImage,
    date: "30, April 2024",
    author: "admin",
  })),
];
