import type { Metadata } from "next";
import Header from "@/app/components/Header";
import CTA from "@/app/components/CTA";
import WhatsAppFab from "@/app/components/WhatsAppFab";
import AmbientCursor from "@/app/components/AmbientCursor";

export const metadata: Metadata = {
  title: "E-commerce Development Services | Amahh Technology",
  description: "E-commerce development by Amahh Technology. We build online stores and marketplaces with secure payment integration, inventory management, and conversion-optimized designs for businesses.",
  alternates: {
    canonical: "/services/ecommerce-development",
  },
};

export default function EcommerceDevelopmentPage() {
  return (
    <>
      <Header />
      <AmbientCursor />
      <main id="top" style={{ paddingTop: "40px" }}>
        <section className="section">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">E-commerce Development</span>
              <h1 className="title-lg">E-commerce Solutions That Drive Sales</h1>
              <p className="lead">
                We build high-converting online stores and marketplaces. From product catalogs to secure checkout experiences, our e-commerce solutions are designed to maximize sales and provide seamless shopping experiences.
              </p>
            </div>

            <div style={{ marginTop: "60px" }}>
              <h2>Our E-commerce Services</h2>
              <div style={{ marginTop: "30px", display: "grid", gap: "30px" }}>
                <div>
                  <h3>Custom Online Stores</h3>
                  <p>Tailor-made e-commerce websites built to your specifications. We create unique shopping experiences that reflect your brand and convert visitors into customers.</p>
                </div>
                <div>
                  <h3>Marketplace Development</h3>
                  <p>Multi-vendor marketplaces where multiple sellers can list products. We build platforms with vendor management, commission systems, and unified checkout.</p>
                </div>
                <div>
                  <h3>Payment Integration</h3>
                  <p>Secure payment gateway integration supporting multiple payment methods. We implement Stripe, PayPal, local payment providers, and cryptocurrency options.</p>
                </div>
                <div>
                  <h3>Inventory & Order Management</h3>
                  <p>Backend systems for managing products, orders, and customers. We build dashboards that streamline operations and provide real-time insights.</p>
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
                  <span className="chip">Stripe</span>
                  <span className="chip">PayPal</span>
                  <span className="chip">PostgreSQL</span>
                  <span className="chip">MongoDB</span>
                  <span className="chip">Supabase</span>
                </div>
              </div>
            </div>

            <div style={{ marginTop: "60px" }}>
              <h2>Why Choose Amahh Technology for E-commerce?</h2>
              <ul style={{ marginTop: "20px", lineHeight: "1.8" }}>
                <li>✓ Conversion-optimized designs and user flows</li>
                <li>✓ Secure payment processing and data protection</li>
                <li>✓ Mobile-responsive shopping experiences</li>
                <li>✓ SEO-friendly architecture for product visibility</li>
                <li>✓ Integration with shipping and logistics providers</li>
                <li>✓ Analytics and reporting for business insights</li>
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
