import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug, formatDate, getAllPosts } from "@/lib/blog";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "../blog.css";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post || !post.published) {
    notFound();
  }

  const allPosts = getAllPosts();
  const currentIndex = allPosts.findIndex((p) => p.slug === params.slug);
  const prevPost =
    currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: "var(--background)",
        color: "var(--foreground)",
      }}
    >
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 mb-8 transition-opacity hover:opacity-80"
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
          Back to Blog
        </Link>

        <header className="mb-8">
          <h1
            className="text-4xl sm:text-5xl font-bold mb-4"
            style={{ color: "var(--foreground)" }}
          >
            {post.title}
          </h1>
          <div
            className="flex flex-wrap items-center gap-4"
            style={{ color: "var(--foreground-secondary)" }}
          >
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            {post.tags.length > 0 && (
              <div className="flex gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-sm"
                    style={{ backgroundColor: "var(--background-tertiary)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </header>

        <div className="blog-content">
          <MDXRemote
            source={post.content}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [rehypeHighlight],
              },
            }}
          />
        </div>

        {(prevPost || nextPost) && (
          <nav
            className="mt-12 pt-8"
            style={{ borderTop: "1px solid var(--border-color)" }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {prevPost && (
                <Link
                  href={`/blog/${prevPost.slug}`}
                  className="group p-4 rounded-lg transition-all hover:shadow-lg"
                  style={{
                    border: "1px solid var(--border-color)",
                    backgroundColor: "var(--background-secondary)",
                  }}
                >
                  <div
                    className="text-sm mb-1"
                    style={{ color: "var(--foreground-secondary)" }}
                  >
                    ← Previous
                  </div>
                  <div
                    className="font-semibold transition-colors"
                    style={{ color: "var(--foreground)" }}
                  >
                    {prevPost.title}
                  </div>
                </Link>
              )}
              {nextPost && (
                <Link
                  href={`/blog/${nextPost.slug}`}
                  className="group p-4 rounded-lg transition-all sm:text-right hover:shadow-lg"
                  style={{
                    border: "1px solid var(--border-color)",
                    backgroundColor: "var(--background-secondary)",
                  }}
                >
                  <div
                    className="text-sm mb-1"
                    style={{ color: "var(--foreground-secondary)" }}
                  >
                    Next →
                  </div>
                  <div
                    className="font-semibold transition-colors"
                    style={{ color: "var(--foreground)" }}
                  >
                    {nextPost.title}
                  </div>
                </Link>
              )}
            </div>
          </nav>
        )}
      </article>
    </div>
  );
}
