import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Marvin Splitt",
    short_name: "msdev.digital",
    description: "Realize your product idea through user-centric prototypes",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#D2572D",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/apple-icon.png",
        type: "image/png",
        sizes: "192x192",
      },
      {
        src: "/icon.png",
        type: "image/png",
        sizes: "512x512",
      },
    ],
  };
}
