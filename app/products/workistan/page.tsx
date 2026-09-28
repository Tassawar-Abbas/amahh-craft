import type { Metadata } from "next";
import Header from "@/app/components/Header";
import CTA from "@/app/components/CTA";
import WhatsAppFab from "@/app/components/WhatsAppFab";
import AmbientCursor from "@/app/components/AmbientCursor";

export const metadata: Metadata = {
  title: "Workistan - Global Local Services Marketplace by Amahh Technology",
  description: "Workistan is a global local services marketplace connecting users with trusted service professionals. Features include real-time bidding, task posting, video talent reels, and secured escrow payments. Built by Amahh Technology.",
  alternates: {
    canonical: "/products/workistan",
  },
};

export default function WorkistanPage() {
  return (
    <>
      <Header />
      <AmbientCursor />
      <main id="top" style={{ paddingTop: "40px" }}>
        <section className="section">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">Flagship Product</span>
              <h1 className="title-lg">Workistan</h1>
              <p className="lead">
                A global local services marketplace connecting users with trusted service professionals. Post tasks, receive competitive bids, and hire trusted pros instantly.
              </p>
            </div>

            <div style={{ marginTop: "60px" }}>
              <h2>About Workistan</h2>
              <p style={{ marginTop: "20px", lineHeight: "1.8" }}>
                Workistan is a comprehensive services marketplace designed to bridge the gap between customers and service professionals. Whether you need home services, professional expertise, or creative work, Workistan makes it easy to find, hire, and pay for services securely.
              </p>
            </div>

            <div style={{ marginTop: "60px" }}>
              <h2>Key Features</h2>
              <div style={{ marginTop: "30px", display: "grid", gap: "30px" }}>
                <div>
                  <h3>Real-time Bidding & Tasks</h3>
                  <p>Post your tasks and receive competitive bids from qualified professionals. Compare offers, reviews, and profiles to make the best choice for your needs.</p>
                </div>
                <div>
                  <h3>Short Video Reels for Talent Discovery</h3>
                  <p>Service providers can showcase their skills through short video reels, making it easier for customers to evaluate talent and expertise visually.</p>
                </div>
                <div>
                  <h3>Instant Urgent Booking Mode</h3>
                  <p>Need help immediately? Use urgent booking mode to connect with available professionals who can respond to your request right away.</p>
                </div>
                <div>
                  <h3>Secured Escrow Payments & Instant Chat</h3>
                  <p>Payments are held in escrow until the job is completed to your satisfaction. Built-in instant chat ensures clear communication throughout the project.</p>
                </div>
              </div>
            </div>

            <div style={{ marginTop: "60px" }}>
              <h2>Technology Stack</h2>
              <div style={{ marginTop: "30px" }}>
                <div className="chip-row">
                  <span className="chip">TypeScript</span>
                  <span className="chip">Next.js</span>
                  <span className="chip">React Native (Expo)</span>
                  <span className="chip">Supabase</span>
                  <span className="chip">PostgreSQL</span>
                  <span className="chip">Tailwind CSS</span>
                  <span className="chip">Resend</span>
                </div>
              </div>
            </div>

            <div style={{ marginTop: "60px" }}>
              <h2>Platform Availability</h2>
              <p style={{ marginTop: "20px", lineHeight: "1.8" }}>
                Workistan is available as both a web platform and mobile applications for iOS and Android, providing a seamless experience across all devices.
              </p>
            </div>

            <div style={{ marginTop: "60px", textAlign: "center" }}>
              <a
                href="https://joinworkistan.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ display: "inline-block" }}
              >
                Visit Workistan →
              </a>
            </div>
          </div>
        </section>
        <CTA />
      </main>
      <WhatsAppFab />
    </>
  );
}
