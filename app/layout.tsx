import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import StructuredData from "./components/StructuredData";

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
  metadataBase: new URL("https://www.amahhtechnology.com"),
  title: {
    default: "Amahh Technology | Software, AI, Web & Mobile App Development",
    template: "%s | Amahh Technology"
  },
  description:
    "Amahh Technology develops professional websites, mobile apps, custom software, AI solutions, SaaS products, APIs, dashboards, and cloud infrastructure. Transform your ideas into digital reality with our expert software development team serving Pakistan and global clients.",
  keywords: [
    "Amahh Technology",
    "software development company",
    "web development company",
    "mobile app development company",
    "AI development company",
    "custom software development",
    "Next.js development",
    "React development",
    "Node.js development",
    "healthcare software development",
    "SaaS development",
    "e-commerce development",
    "cloud infrastructure",
    "DevOps",
    "Pakistan software company",
  ],
  icons: {
    icon: "/image.png",
    shortcut: "/image.png",
    apple: "/image.png",
  },
  openGraph: {
    title: "Amahh Technology | Software, AI, Web & Mobile App Development",
    description:
      "Transforming ideas into digital reality. Amahh Technology provides professional software development services including web development, mobile apps, custom software, AI solutions, SaaS, APIs, and cloud infrastructure for businesses worldwide.",
    type: "website",
    url: "https://www.amahhtechnology.com/",
    siteName: "Amahh Technology",
    images: [{ 
      url: "/image.png",
      width: 1200,
      height: 630,
      alt: "Amahh Technology - Software Development Company"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amahh Technology | Software, AI, Web & Mobile App Development",
    description:
      "Transforming ideas into digital reality. Professional software development services including web, mobile apps, AI, SaaS, and cloud solutions.",
    images: ["/image.png"],
  },
  verification: {
    google: "HA7Gonbpn858nGCZbjTKh2C5TfQWMbp2b2iQEl6zgf8",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body className={`${inter.variable} ${playfair.variable}`}>{children}</body>
    </html>
  );
}
