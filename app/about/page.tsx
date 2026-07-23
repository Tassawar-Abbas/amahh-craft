import type { Metadata } from "next";
import Header from "@/app/components/Header";
import Process from "@/app/components/Process";
import CraftLab from "@/app/components/CraftLab";
import CTA from "@/app/components/CTA";
import WhatsAppFab from "@/app/components/WhatsAppFab";
import AmbientCursor from "@/app/components/AmbientCursor";

export const metadata: Metadata = {
  title: "About — Amahh Technology",
  description: "Learn about our engineering process, tech stack, and how we deliver world-class software.",
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
