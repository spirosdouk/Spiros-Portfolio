import React from "react";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Spiros Doukeris - Frontend Developer Portfolio",
    template: "%s | Spiros Doukeris",
  },
  description:
    "Experienced Frontend Developer specializing in React, Next.js, and TypeScript. View my portfolio showcasing modern web applications and innovative projects.",
  keywords: [
    "Frontend Developer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "Portfolio",
    "Web Development",
    "Spiros Doukeris",
    "Computer Science",
    "Full Stack Developer",
  ],
  authors: [{ name: "Spiros Doukeris" }],
  creator: "Spiros Doukeris",
  publisher: "Spiros Doukeris",
  metadataBase: new URL("https://spiros-portfolio.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://spiros-portfolio.vercel.app",
    title: "Spiros Doukeris - Frontend Developer Portfolio",
    description:
      "Experienced Frontend Developer specializing in React, Next.js, and TypeScript. View my portfolio showcasing modern web applications.",
    siteName: "Spiros Doukeris Portfolio",
    images: [
      {
        url: "/images/profile.png",
        width: 800,
        height: 600,
        alt: "Spiros Doukeris - Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spiros Doukeris - Frontend Developer Portfolio",
    description:
      "Experienced Frontend Developer specializing in React, Next.js, and TypeScript.",
    images: ["/images/profile.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/fonts/GeistVF.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/GeistMonoVF.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      </head>
      <body>{children}</body>
      <Analytics />
    </html>
  );
}
