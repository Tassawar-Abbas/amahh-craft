import type { Metadata } from "next";
import Header from "@/app/components/Header";
import Process from "@/app/components/Process";
import CraftLab from "@/app/components/CraftLab";
import CTA from "@/app/components/CTA";
import WhatsAppFab from "@/app/components/WhatsAppFab";
import AmbientCursor from "@/app/components/AmbientCursor";

export const metadata: Metadata = {
  title: "About Amahh Technology | Software Development Company",
  description: "Learn about Amahh Technology - our engineering process, tech stack, and how we deliver world-class software solutions including web development, mobile apps, AI, and cloud services for clients in Pakistan and globally.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <AmbientCursor />
      <main id="top" style={{ paddingTop: "40px" }}>
        <CraftLab />
        <Process />
        <CTA />
      </main>
      <WhatsAppFab />
    </>
  );
}
