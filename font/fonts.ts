import localFont from "next/font/local";

export const aeonik = localFont({
  display: "swap",
  variable: "--font-aeonik",
  src: [
    {
      path: "./AeonikPro-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./AeonikPro-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./AeonikPro-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});
