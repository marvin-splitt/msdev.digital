import localFont from "next/font/local";

export const aeonik = localFont({
  display: "swap",
  variable: "--font-aeonik",
  src: [
    {
      path: "./AeonikPro-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./AeonikPro-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
});
