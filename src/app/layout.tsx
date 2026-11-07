import type { Metadata } from "next";
import localFont from "next/font/local";
import SmoothScroll from "@/components/smooth-scroll";
import { publicAssetPath } from "@/data/site-path";
import "lenis/dist/lenis.css";
import "./globals.css";

const bigShouldersDisplay = localFont({
  src: "../fonts/BigShouldersDisplay-Variable.ttf",
  variable: "--font-big-shoulders-display",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Golden Gym",
  description: "The Golden Gym website, built with Next.js and Tailwind CSS.",
  icons: {
    icon: { url: publicAssetPath("/favicon.png"), type: "image/png" },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={bigShouldersDisplay.variable}
    >
      <head>
        <link rel="stylesheet" href={publicAssetPath("/fonts/montserrat.css")} />
      </head>
      <body className="font-sans">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
