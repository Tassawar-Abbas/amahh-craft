import type { Metadata } from "next";
import Header from "@/app/components/Header";
import Collections from "@/app/components/Collections";
import CTA from "@/app/components/CTA";
import WhatsAppFab from "@/app/components/WhatsAppFab";
import AmbientCursor from "@/app/components/AmbientCursor";

export const metadata: Metadata = {
  title: "Services — Amahh Technology",
  description: "Explore our full range of software development services — from web & mobile apps to AI, cloud, and enterprise solutions.",
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <AmbientCursor />
      <main id="top" style={{ paddingTop: "40px" }}>
        <Collections />
        <CTA />
      </main>
      <WhatsAppFab />
    </>
  );
}
