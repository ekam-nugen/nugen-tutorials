"use client";
import Image from "next/image";
import Head from "next/head";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Loader from "@/src/components/common/Loader";
import { blogData, blogSidebar } from "@/src/json/blog";

const slugify = (title: string) =>
  title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");

export default function BlogPostPage() {
  const { title } = useParams<{ title: string }>();
  const [loading, setLoading] = useState(true);

  const post = blogData.find(
    (b) =>
      slugify(b.title) ===
      (typeof title === "string" && title.trim().toLowerCase())
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  if (!post) {
    return (
      <div className="p-10 text-center text-xl text-red-500">
        Blog post <strong>{title}</strong> not found 🚫
      </div>
    );
  }

  const metaDescription =
    post.shortDescription ||
    post.sections[0]?.content?.[0]?.replace(/(<([^>]+)>)/gi, "").slice(0, 160);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Head>
        <title>{post.title} | Nugen Blog</title>
        <meta name="description" content={metaDescription} />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content={`Nugen, Blog, ${post.title}, ${post.author}`}
        />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={post.featuredImage} />
        <meta
          property="og:url"
          content={`https://www.nugeninfo.com/blog/${slugify(post.title)}`}
        />
        <meta property="og:site_name" content="Nugen Blog" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={post.featuredImage} />

        {/* Canonical */}
        <link
          rel="canonical"
          href={`https://www.nugeninfo.com/blog/${slugify(post.title)}`}
        />
      </Head>

      <div className="bg-white text-gray-800">
        <main className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <article className="lg:col-span-2 space-y-6">
            <h2 className="text-4xl font-bold leading-tight text-gray-900">
              {post.title}
            </h2>
            <p className="text-sm text-gray-500">
              By {post.author} | {post.date}
            </p>
            <Image
              src={post.featuredImage}
              alt={post.title}
              height={100}
              width={100}
              className="rounded-lg shadow-md w-full h-auto"
            />
            <div className="space-y-6 text-base leading-relaxed">
              {post.sections.map((section, index) => (
                <div key={index}>
                  {section.heading && (
                    <h3 className="text-2xl font-semibold mt-8">
                      {section.heading}
                    </h3>
                  )}
                  {section.content &&
                    section.content.map((text, i) => (
                      <p key={i} dangerouslySetInnerHTML={{ __html: text }}></p>
                    ))}
                  {section.quote && (
                    <blockquote className="border-l-4 border-pink-600 pl-4 italic text-gray-600">
                      &quot;{section.quote}&quot;
                    </blockquote>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-12 border-t pt-6 text-sm text-gray-500">
              <p>
                {post.authorNote.text}
                <strong className="text-gray-800">
                  {post.authorNote.author}
                </strong>
                , {post.authorNote.description}
              </p>
            </div>
          </article>

          <aside className="lg:sticky top-20 self-start space-y-8 h-fit">
            <div className="bg-gray-100 rounded-lg p-4 shadow-sm">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                Popular Posts
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                {blogData.slice(0, 3).map((post, idx) => (
                  <li key={idx}>
                    <a
                      href={`/blog/${slugify(post.title)}`}
                      className="hover:text-[#ef8961]"
                    >
                      {post.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-r from-pink-500 to-orange-400 rounded-lg p-4 text-white shadow-lg">
              <h5 className="text-lg font-semibold">{blogSidebar.cta.title}</h5>
              <p className="text-sm mt-2">{blogSidebar.cta.description}</p>
              <a
                href={blogSidebar.cta.button.url}
                className="inline-block mt-3 bg-white text-[#ef8961] font-semibold text-sm px-4 py-2 rounded hover:bg-gray-100"
              >
                {blogSidebar.cta.button.label}
              </a>
            </div>
          </aside>
        </main>
      </div>
    </>
  );
}
