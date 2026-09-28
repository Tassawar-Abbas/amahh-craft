import type { Metadata } from "next";
import Header from "@/app/components/Header";
import Collections from "@/app/components/Collections";
import CTA from "@/app/components/CTA";
import WhatsAppFab from "@/app/components/WhatsAppFab";
import AmbientCursor from "@/app/components/AmbientCursor";

export const metadata: Metadata = {
  title: "Services | Amahh Technology - Web, Mobile, AI & Software Development",
  description: "Explore Amahh Technology's full range of software development services: web development, mobile apps, custom software, AI solutions, SaaS, e-commerce, cloud infrastructure, and DevOps for businesses worldwide.",
  alternates: {
    canonical: "/services",
  },
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
