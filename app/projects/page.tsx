import type { Metadata } from "next";
import Header from "@/app/components/Header";
import Signature from "@/app/components/Signature";
import Proprietary from "@/app/components/Proprietary";
import CTA from "@/app/components/CTA";
import WhatsAppFab from "@/app/components/WhatsAppFab";
import AmbientCursor from "@/app/components/AmbientCursor";

export const metadata: Metadata = {
  title: "Projects — Amahh Technology",
  description: "Explore our portfolio of web, mobile, enterprise and AI projects built for global clients.",
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
