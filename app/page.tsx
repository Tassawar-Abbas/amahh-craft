import Header from "./components/Header";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Collections from "./components/Collections";
import Signature from "./components/Signature";
import Proprietary from "./components/Proprietary";
import Estimator from "./components/Estimator";
import CraftLab from "./components/CraftLab";
import Process from "./components/Process";
import Reviews from "./components/Reviews";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import WhatsAppFab from "./components/WhatsAppFab";
import AmbientCursor from "./components/AmbientCursor";

export default function Home() {
  return (
    <>
      <Header />
      <AmbientCursor />
      <main id="top">
        <Hero />
        <Marquee />
        <Collections />
        <Signature />
        <Proprietary />
        <Estimator />
        <CraftLab />
        <Process />
        <Reviews />
        <FAQ />
        <CTA />
      </main>
      <WhatsAppFab />
    </>
  );
}
