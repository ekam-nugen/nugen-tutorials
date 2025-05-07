"use client";

import React, { useState } from "react";
import Image from "next/image";
import { blogData, blogSidebar } from "@/src/json/blog";

// Helper to generate slug from title
const slugify = (title: string) =>
  title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");

const BlogSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const filteredBlogs =
    selectedCategory === ""
      ? blogData
      : blogData.filter((blog) => blog.categorie === selectedCategory);

  return (
    <section className="bg-white py-16 text-black px-4 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Blog List */}
        <div className="lg:col-span-2 space-y-14">
          <div>
            <h2 className="text-sm text-gray-500 font-semibold uppercase mb-2">
              Blogs
            </h2>
            <h1 className="text-4xl font-bold mb-12">
              Discover Our Digital Insights
            </h1>
          </div>

          {filteredBlogs.length === 0 ? (
            <p className="text-gray-500 text-lg italic">
              No blogs found for this category.
            </p>
          ) : (
            filteredBlogs.map((blog, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center"
              >
                <div className="col-span-1">
                  <Image
                    width={100}
                    height={100}
                    src={blog.featuredImage}
                    alt={blog.title}
                    className="w-full h-52 object-cover rounded-lg shadow-md"
                  />
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-xl font-bold mb-1">{blog.title}</h3>
                  <p className="text-sm text-gray-500 mb-2">
                    {blog.author} | {blog.date}
                  </p>
                  <p className="text-gray-700 mb-3">{blog.shortDescription}</p>
                  <a
                    href={`/blog/${slugify(blog.title)}`}
                    className="text-[#ef8961] font-medium hover:underline"
                  >
                    Learn More →
                  </a>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Sticky Sidebar */}
        <aside className="lg:sticky top-20 h-fit space-y-10 self-start">
          <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">
              Filter by Category
            </h2>
            <ul className="space-y-3 text-sm text-gray-700">
              {blogSidebar.categories.map((category, index) => (
                <li key={index}>
                  <button
                    onClick={() => setSelectedCategory(category)}
                    className={`transition-all ${
                      selectedCategory === category
                        ? "font-bold text-[#ef8961]"
                        : "hover:text-[#ef8961]"
                    }`}
                  >
                    {category}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => setSelectedCategory("")}
                  className={`transition-all ${
                    selectedCategory === ""
                      ? "font-bold text-[#ef8961]"
                      : "hover:text-[#ef8961]"
                  }`}
                >
                  All Categories
                </button>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-pink-500 to-orange-400 rounded-lg p-6 text-white shadow-lg">
            <h3 className="text-xl font-semibold mb-2">
              {blogSidebar.cta.title}
            </h3>
            <p className="text-sm">{blogSidebar.cta.description}</p>
            <a
              href={blogSidebar.cta.button.url}
              className="inline-block mt-4 bg-white text-[#ef8961] font-semibold text-sm px-4 py-2 rounded hover:bg-gray-100"
            >
              {blogSidebar.cta.button.label}
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default BlogSection;
