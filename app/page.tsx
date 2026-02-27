import Header from "./components/Header";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Collections from "./components/Collections";
import Signature from "./components/Signature";
import CraftLab from "./components/CraftLab";
import Process from "./components/Process";
import Reviews from "./components/Reviews";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Marquee />
        <Collections />
        <Signature />
        <CraftLab />
        <Process />
        <Reviews />
        <FAQ />
        <CTA />
      </main>
    </>
  );
}
