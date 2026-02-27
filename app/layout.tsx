import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["700", "800"],
});

export const metadata: Metadata = {
  title: "Amahh — Innovative Software Solutions",
  description:
    "We build innovative software solutions that drive business growth and enhance user experiences — custom software, mobile apps, web development, cloud, AI, and cybersecurity.",
  keywords: [
    "software development",
    "mobile app development",
    "web development",
    "cloud solutions",
    "AI ML development",
    "cybersecurity",
    "custom software",
    "Amahh",
  ],
  openGraph: {
    title: "Amahh — Innovative Software Solutions",
    description:
      "Transforming ideas into digital reality. Full-stack software development, AI, cloud, and mobile solutions for businesses worldwide.",
    type: "website",
    url: "https://amahh-craft.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable}`}>{children}</body>
    </html>
  );
}
