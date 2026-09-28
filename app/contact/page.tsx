import type { Metadata } from "next";
import Header from "@/app/components/Header";
import FAQ from "@/app/components/FAQ";
import CTA from "@/app/components/CTA";
import WhatsAppFab from "@/app/components/WhatsAppFab";
import AmbientCursor from "@/app/components/AmbientCursor";

export const metadata: Metadata = {
  title: "Contact Amahh Technology | Software Development Company",
  description: "Get in touch with Amahh Technology for your software development project. Contact us via WhatsApp at +923714932094 or email amahh.tech@gmail.com for web, mobile, AI, and custom software solutions.",
  alternates: {
    canonical: "/contact",
  },
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
