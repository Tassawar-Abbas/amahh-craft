import type { Metadata } from "next";
import Header from "@/app/components/Header";
import Signature from "@/app/components/Signature";
import Proprietary from "@/app/components/Proprietary";
import CTA from "@/app/components/CTA";
import WhatsAppFab from "@/app/components/WhatsAppFab";
import AmbientCursor from "@/app/components/AmbientCursor";

export const metadata: Metadata = {
  title: "Projects Portfolio | Amahh Technology Software Development",
  description: "Explore Amahh Technology's portfolio of software projects including Workistan, mobile apps, web platforms, enterprise solutions, and AI applications built for global clients using Next.js, React, and modern technologies.",
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <AmbientCursor />
      <main id="top" style={{ paddingTop: "40px" }}>
        <Signature />
        <Proprietary />
        <CTA />
      </main>
      <WhatsAppFab />
    </>
  );
}
