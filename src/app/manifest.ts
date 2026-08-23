import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Spiros Doukeris - Software Engineer Portfolio",
    short_name: "Spiros Portfolio",
    description:
      "Software Engineer Portfolio showcasing React, Next.js, and TypeScript projects",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
