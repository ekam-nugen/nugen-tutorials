// pages/sitemap.tsx
import { blogData } from "@/src/json/blog";
import { packageCourseStack } from "@/src/json/packageCourses";
import { courseStack } from "@/src/json/coursesContent";
import Link from "next/link";

const blogSlugify = (title: string) =>
  title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");

const Sitemap = () => {
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

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">HTML Sitemap</h1>

      <div className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold mb-2">Static Pages</h2>
          <ul className="list-disc list-inside space-y-1">
            {staticRoutes.map((route) => (
              <li key={route}>
                <Link href={route} className="text-blue-600 hover:underline">
                  {route}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Our Courses</h2>
          <ul className="list-disc list-inside space-y-1">
            {dynamicCources.map(({ path, label }) => (
              <li key={path}>
                <Link href={path} className="text-blue-600 hover:underline">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Blog</h2>
          <ul className="list-disc list-inside space-y-1">
            {dynamicBlog.map(({ path, label }) => (
              <li key={path}>
                <Link href={path} className="text-blue-600 hover:underline">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Tranding Courses</h2>
          <ul className="list-disc list-inside space-y-1">
            {dynamicTrendingCourses.map(({ path, label }) => (
              <li key={path}>
                <Link href={path} className="text-blue-600 hover:underline">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;
