import React from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import DesktopNavbar from "./components/navbar/DesktopNavbar";
import MobileNavbar from "./components/navbar/MobileNavbar";
import StructuredData from "./components/StructuredData";
import HeroSection from "./components/hero/HeroSection";

const ExperienceSection = dynamic(
  () => import("./components/experience/ExperienceSection"),
  {
    loading: () => (
      <div className="min-h-[300px] flex items-center justify-center">
        Loading experience...
      </div>
    ),
    ssr: true,
  },
);

const ProjectSection = dynamic(
  () => import("./components/projects/ProjectSection"),
  {
    loading: () => (
      <div className="min-h-[300px] flex items-center justify-center">
        Loading projects...
      </div>
    ),
    ssr: true,
  },
);

const CoursesSection = dynamic(
  () => import("./components/courses/CoursesSection"),
  {
    loading: () => (
      <div className="min-h-[200px] flex items-center justify-center">
        Loading courses...
      </div>
    ),
    ssr: true,
  },
);

const ContactFormSection = dynamic(
  () => import("./components/contact/ContactMeMobile"),
  {
    loading: () => (
      <div className="min-h-[200px] flex items-center justify-center">
        Loading contact form...
      </div>
    ),
    ssr: true,
  },
);

export const metadata: Metadata = {
  title: "Spiros Doukeris - Software Engineer Portfolio",
  description:
    "Explore the portfolio of Spiros Doukeris, a Software Engineer at Logicea and Research Fellow at ICS-FORTH, currently pursuing an M.Sc. in Computer Science at the University of Crete.",
  openGraph: {
    title: "Spiros Doukeris - Software Engineer",
    description:
      "Discover the projects and technical skills of Spiros Doukeris on his official portfolio website. Featuring React, Next.js, TypeScript, and full-stack work.",
    images: [
      {
        url: "https://spiros-portfolio.vercel.app/images/profile.png",
        width: 800,
        height: 600,
        alt: "Spiros Doukeris - Software Engineer Profile Picture",
      },
    ],
    url: "https://spiros-portfolio.vercel.app/",
  },
  keywords: [
    "software engineer",
    "web development",
    "programming portfolio",
    "Spiros Doukeris",
    "Computer Science M.Sc.",
    "Computer Science",
    "React",
    "Next.js",
    "TypeScript",
    "Logicea",
    "ICS-FORTH",
    "University of Crete",
    "NestJS",
    "Node.js",
    "JavaScript",
    "Full Stack Developer",
  ],
};

export default function Home() {
  return (
    <>
      <StructuredData />
      <DesktopNavbar />
      <MobileNavbar />
      <HeroSection />
      <ExperienceSection />
      <ProjectSection />
      <CoursesSection />
      <ContactFormSection />
    </>
  );
}
