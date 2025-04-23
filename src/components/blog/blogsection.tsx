"use client";

import { blogs } from "@/src/json/blog";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const blogsPerPage = 12;

export default function BlogSectionPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(blogs.length / blogsPerPage);
  const paginatedBlogs = blogs.slice(
    (currentPage - 1) * blogsPerPage,
    currentPage * blogsPerPage
  );

  return (
    <section className="bg-white py-20 px-4 text-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4">
          <h2 className="text-3xl sm:text-4xl font-bold">News & Blogs</h2>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {paginatedBlogs.map((blog, idx) => (
            <div
              key={idx}
              className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 bg-white hover:scale-[1.02]"
            >
              <div className="relative w-full h-64">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  layout="fill"
                  objectFit="cover"
                  className="z-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
              </div>
              <div className="p-6 space-y-3 z-20 relative">
                <div className="text-sm text-gray-500 flex items-center gap-4">
                  <span>By {blog.author}</span>
                  <span className="text-[#ff6b3d]">|</span>
                  <span>{blog.date}</span>
                </div>
                <h3 className="text-xl font-semibold leading-snug text-gray-900">
                  {blog.title}
                </h3>
                <p className="text-sm text-gray-600">{blog.description}</p>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 font-semibold text-[#ff6b3d] group"
                >
                  READ MORE
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-10 space-x-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`w-10 h-10 rounded-full border ${
                currentPage === i + 1
                  ? "bg-[#ff6b3d] text-white"
                  : "bg-white text-black"
              } hover:bg-[#ff6b3d]/80 hover:text-white transition`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
