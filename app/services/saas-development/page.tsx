import type { Metadata } from "next";
import Header from "@/app/components/Header";
import CTA from "@/app/components/CTA";
import WhatsAppFab from "@/app/components/WhatsAppFab";
import AmbientCursor from "@/app/components/AmbientCursor";

export const metadata: Metadata = {
  title: "SaaS Development Services | Amahh Technology",
  description: "SaaS development by Amahh Technology. We build scalable Software-as-a-Service applications with subscription management, multi-tenancy, and cloud infrastructure for recurring revenue businesses.",
  alternates: {
    canonical: "/services/saas-development",
  },
};

export default function SaaSDevelopmentPage() {
  return (
    <>
      <Header />
      <AmbientCursor />
      <main id="top" style={{ paddingTop: "40px" }}>
        <section className="section">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">SaaS Development</span>
              <h1 className="title-lg">Scalable SaaS Applications</h1>
              <p className="lead">
                We build Software-as-a-Service applications designed for growth. From subscription management to multi-tenant architecture, our SaaS solutions provide the foundation for successful recurring revenue businesses.
              </p>
            </div>

            <div style={{ marginTop: "60px" }}>
              <h2>Our SaaS Development Services</h2>
              <div style={{ marginTop: "30px", display: "grid", gap: "30px" }}>
                <div>
                  <h3>Multi-Tenant Architecture</h3>
                  <p>Scalable multi-tenant SaaS platforms that serve multiple customers from a single codebase while maintaining data isolation and customization options.</p>
                </div>
                <div>
                  <h3>Subscription & Billing Management</h3>
                  <p>Integrated subscription systems with tiered pricing, trial periods, and automated billing. We implement Stripe, PayPal, and custom billing solutions.</p>
                </div>
                <div>
                  <h3>User Authentication & Security</h3>
                  <p>Secure authentication systems with role-based access control, SSO integration, and compliance with data protection regulations.</p>
                </div>
                <div>
                  <h3>Analytics & Reporting</h3>
                  <p>Built-in analytics dashboards for both admins and end-users. We provide insights into usage, engagement, and business metrics.</p>
                </div>
              </div>
            </div>

            <div style={{ marginTop: "60px" }}>
              <h2>Our Technology Stack</h2>
              <div style={{ marginTop: "30px" }}>
                <div className="chip-row">
                  <span className="chip">Next.js</span>
                  <span className="chip">React</span>
                  <span className="chip">Node.js</span>
                  <span className="chip">TypeScript</span>
                  <span className="chip">PostgreSQL</span>
                  <span className="chip">Stripe</span>
                  <span className="chip">AWS</span>
                  <span className="chip">Docker</span>
                </div>
              </div>
            </div>

            <div style={{ marginTop: "60px" }}>
              <h2>Why Choose Amahh Technology for SaaS Development?</h2>
              <ul style={{ marginTop: "20px", lineHeight: "1.8" }}>
                <li>✓ Experience building scalable multi-tenant systems</li>
                <li>✓ Focus on security and data isolation</li>
                <li>✓ Subscription and billing expertise</li>
                <li>✓ Cloud-native architecture for reliability</li>
                <li>✓ User experience optimized for retention</li>
                <li>✓ Analytics and monitoring built-in</li>
              </ul>
            </div>
          </div>
        </section>
        <CTA />
      </main>
      <WhatsAppFab />
    </>
  );
}
