import React from "react";
import Link from "next/link";
import { getAllPosts, formatDate } from "@/lib/blog";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: "var(--background)",
        color: "var(--foreground)",
      }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 mb-6 transition-opacity hover:opacity-80"
            style={{ color: "var(--accent-blue)" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
            Back to Home
          </Link>
          <h1
            className="text-4xl sm:text-5xl font-bold mb-4"
            style={{ color: "var(--foreground)" }}
          >
            Blog
          </h1>
          <p
            className="text-lg"
            style={{ color: "var(--foreground-secondary)" }}
          >
            Thoughts on web development, programming, and general yapping.
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p
              className="text-lg"
              style={{ color: "var(--foreground-secondary)" }}
            >
              No blog posts yet. Check back soon!
            </p>
          </div>
        ) : (
          <div className="space-y-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="rounded-lg p-6 transition-all hover:shadow-lg"
                style={{
                  backgroundColor: "var(--background-secondary)",
                  borderColor: "var(--border-color)",
                  border: "1px solid",
                }}
              >
                <Link href={`/blog/${post.slug}`}>
                  <h2
                    className="text-2xl font-bold mb-2 transition-colors hover:opacity-80"
                    style={{ color: "var(--accent-blue)" }}
                  >
                    {post.title}
                  </h2>
                </Link>
                <div
                  className="flex items-center gap-4 text-sm mb-3"
                  style={{ color: "var(--foreground-secondary)" }}
                >
                  <time
                    className="mb-1 text-sm font-normal leading-none text-gray-600 dark:text-gray-300"
                    dateTime={post.date}
                  >
                    {formatDate(post.date)}
                  </time>
                </div>
                <p
                  className="mb-4"
                  style={{ color: "var(--foreground-secondary)" }}
                >
                  {post.description}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1 transition-opacity hover:opacity-80"
                  style={{ color: "var(--accent-blue)" }}
                >
                  Read more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
