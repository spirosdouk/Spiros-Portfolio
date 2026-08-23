import React from "react";

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Spiros Doukeris",
    jobTitle: "Software Engineer",
    description:
      "Software Engineer specializing in React, Next.js, and TypeScript",
    url: "https://spiros-portfolio.vercel.app",
    image: "https://spiros-portfolio.vercel.app/images/profile.png",
    sameAs: [
      "https://github.com/spirosdouk",
      "https://linkedin.com/in/spyros-doukeris-856bb7288",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "University of Crete",
      department: "Computer Science",
    },
    worksFor: {
      "@type": "Organization",
      name: "Logicea",
    },
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "Software Engineering",
      "Web Development",
      "JavaScript",
      "NestJS",
      "Node.js",
      "MongoDB",
      "MySQL",
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "Software Engineer",
      occupationLocation: {
        "@type": "Country",
        name: "Greece",
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger -- static JSON-LD, not user HTML
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
