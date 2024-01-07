import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { aeonik } from "@/font/fonts";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  metadataBase: new URL(
    (process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000") || "https://msdev.digital"
  ),
  title: "Marvin Splitt - Freelance Product Developer",
  description:
    "Realize your product idea through user-centric prototype development. Production-ready applications for start and scale-ups. Fast, efficient and without unnecessary costs.",
  keywords: [
    "Product Development",
    "Product Developer",
    "Web Development",
    "Freelancer",
    "Full-Stack",
    "Lean",
    "MVP",
    "Prototyping",
    "Startups",
    "Scale-ups",
  ],
  openGraph: {
    title: "Marvin Splitt - Freelance Product Developer",
    description:
      "Realize your product idea through user-centric prototype development. Production-ready applications for start and scale-ups. Fast, efficient and without unnecessary costs.",
    url: "https://msdev.digital",
    type: "profile",
    siteName: "Marvin Splitt - Freelance Product Developer",
    firstName: "Marvin",
    lastName: "Splitt",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${aeonik.variable}`}>
      <head>
        <Script
          strategy="afterInteractive"
          defer
          data-domain="msdev.digital"
          src="https://plausible.io/js/script.js"
        />
      </head>

      <body className="min-h-screen w-full">
        <Header />
        <main>{children}</main>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
