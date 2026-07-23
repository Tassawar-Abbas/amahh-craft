import type { Metadata } from "next";
import Header from "@/app/components/Header";
import Estimator from "@/app/components/Estimator";
import CTA from "@/app/components/CTA";
import WhatsAppFab from "@/app/components/WhatsAppFab";
import AmbientCursor from "@/app/components/AmbientCursor";

export const metadata: Metadata = {
  title: "Project Estimator — Amahh Technology",
  description: "Estimate your project scope, features, and delivery timeline in seconds with our interactive estimator.",
};

export default function EstimatorPage() {
  return (
    <>
      <Header />
      <AmbientCursor />
      <main id="top" style={{ paddingTop: "40px" }}>
        <Estimator />
        <CTA />
      </main>
      <WhatsAppFab />
    </>
  );
}
