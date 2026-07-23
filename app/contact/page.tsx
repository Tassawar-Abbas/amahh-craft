import type { Metadata } from "next";
import Header from "@/app/components/Header";
import FAQ from "@/app/components/FAQ";
import CTA from "@/app/components/CTA";
import WhatsAppFab from "@/app/components/WhatsAppFab";
import AmbientCursor from "@/app/components/AmbientCursor";

export const metadata: Metadata = {
  title: "Contact — Amahh Technology",
  description: "Get in touch with Amahh Technology to discuss your project, get a quote, or ask us anything.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <AmbientCursor />
      <main id="top" style={{ paddingTop: "40px" }}>
        <FAQ />
        <CTA />
      </main>
      <WhatsAppFab />
    </>
  );
}
