import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { aeonik } from "@/font/fonts";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://msdev.digital"),
  title: "Marvin Splitt - Freelance Product Engineer",
  description:
    "Realize your product idea through user-centric prototype development. Production-ready applications for start and scale-ups. Fast, efficient and without unnecessary costs.",
  keywords: [
    "Product Engineering",
    "Product Engineer",
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
    title: "Marvin Splitt - Freelance Product Engineer",
    description:
      "Realize your product idea through user-centric prototype development. Production-ready applications for start and scale-ups. Fast, efficient and without unnecessary costs.",
    url: "https://msdev.digital",
    type: "profile",
    siteName: "Marvin Splitt - Freelance Product Engineer",
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
      <Script
        strategy="afterInteractive"
        defer
        data-domain="msdev.digital"
        src="https://plausible.io/js/script.js"
      />

      <body className="min-h-screen w-full">
        <Header />
        <main>{children}</main>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
