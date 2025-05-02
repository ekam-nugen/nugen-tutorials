import { GetServerSideProps } from "next";
import { packageCourseStack } from "@/src/json/packageCourses";
import { courseStack } from "@/src/json/coursesContent";
import { blogData } from "@/src/json/blog";

const Sitemap = () => null;

const blogSlugify = (title: string) =>
  title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const baseUrl = "http://localhost:3000/";

  const staticRoutes = [
    "/",
    "/aboutUs",
    "/blog",
    "/contactUs",
    "/courses",
    "/exploreCourses",
    "/ourMission",
    "/ourTeam",
    "/review",
    "/sitemap",
  ];

  const dynamicCources = packageCourseStack.map((cs) => ({
    path: `/courses/${cs.id}`,
    label: cs.techName,
  }));

  const dynamicBlog = blogData.map((cs) => ({
    path: `/blog/${blogSlugify(cs.title)}`,
    label: cs.title,
  }));

  const dynamicTrendingCourses = courseStack.map((tech) => ({
    path: `/${tech.id}`,
    label: tech.techName || tech.id,
  }));
  const allRoutes = [
    ...staticRoutes,
    ...dynamicCources,
    ...dynamicBlog,
    ...dynamicTrendingCourses,
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allRoutes
    .map((route) => {
      return `
  <url>
    <loc>${baseUrl}/${route}</loc>
  </url>
    `;
    })
    .join("")}
</urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return { props: {} };
};

export default Sitemap;
