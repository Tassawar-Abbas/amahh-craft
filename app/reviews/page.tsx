import type { Metadata } from "next";
import Header from "@/app/components/Header";
import Reviews from "@/app/components/Reviews";
import CTA from "@/app/components/CTA";
import WhatsAppFab from "@/app/components/WhatsAppFab";
import AmbientCursor from "@/app/components/AmbientCursor";

export const metadata: Metadata = {
  title: "Reviews — Amahh Technology",
  description: "Read what our global clients say about working with Amahh Technology.",
};

export default function ReviewsPage() {
  return (
    <>
      <Header />
      <AmbientCursor />
      <main id="top" style={{ paddingTop: "40px" }}>
        <Reviews />
        <CTA />
      </main>
      <WhatsAppFab />
    </>
  );
}
