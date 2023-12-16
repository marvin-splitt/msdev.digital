import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { aeonik } from "@/font/fonts";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Marvin Splitt - Product Developer",
  description:
    "Realize your product idea through user-centric prototype development. Production-ready applications for start and scale-ups. Fast, efficient and without unnecessary costs.",
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
      <body>{children}</body>
    </html>
  );
}
