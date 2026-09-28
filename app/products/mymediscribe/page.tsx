import type { Metadata } from "next";
import Header from "@/app/components/Header";
import CTA from "@/app/components/CTA";
import WhatsAppFab from "@/app/components/WhatsAppFab";
import AmbientCursor from "@/app/components/AmbientCursor";

export const metadata: Metadata = {
  title: "MyMediScribe - Healthcare Technology by Amahh Technology",
  description: "MyMediScribe is a healthcare and medical technology product designed to streamline medical documentation and improve healthcare workflows. Built by Amahh Technology.",
  alternates: {
    canonical: "/products/mymediscribe",
  },
};

export default function MyMediScribePage() {
  return (
    <>
      <Header />
      <AmbientCursor />
      <main id="top" style={{ paddingTop: "40px" }}>
        <section className="section">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">Healthcare Technology</span>
              <h1 className="title-lg">MyMediScribe</h1>
              <p className="lead">
                A healthcare and medical technology product designed to streamline medical documentation and improve healthcare workflows for medical professionals.
              </p>
            </div>

            <div style={{ marginTop: "60px" }}>
              <h2>About MyMediScribe</h2>
              <p style={{ marginTop: "20px", lineHeight: "1.8" }}>
                MyMediScribe addresses the challenges of medical documentation by providing intelligent solutions that help healthcare providers focus on patient care rather than paperwork. Our technology leverages modern software practices to create tools that integrate seamlessly into healthcare environments.
              </p>
            </div>

            <div style={{ marginTop: "60px" }}>
              <h2>Key Capabilities</h2>
              <div style={{ marginTop: "30px", display: "grid", gap: "30px" }}>
                <div>
                  <h3>Medical Documentation</h3>
                  <p>Streamlined documentation tools that reduce administrative burden and allow healthcare providers to focus on patient care.</p>
                </div>
                <div>
                  <h3>Workflow Optimization</h3>
                  <p>Designed to integrate with existing healthcare workflows, MyMediScribe improves processes without disrupting established routines.</p>
                </div>
                <div>
                  <h3>Healthcare-Focused Design</h3>
                  <p>Built with healthcare industry requirements in mind, including considerations for privacy, security, and regulatory compliance.</p>
                </div>
                <div>
                  <h3>User-Friendly Interface</h3>
                  <p>Intuitive design that medical professionals can adopt quickly, minimizing training time and maximizing productivity.</p>
                </div>
              </div>
            </div>

            <div style={{ marginTop: "60px" }}>
              <h2>Technology Focus</h2>
              <div style={{ marginTop: "30px" }}>
                <div className="chip-row">
                  <span className="chip">Web Technologies</span>
                  <span className="chip">Modern Frameworks</span>
                  <span className="chip">Secure Architecture</span>
                  <span className="chip">Healthcare Integration</span>
                </div>
              </div>
            </div>

            <div style={{ marginTop: "60px" }}>
              <h2>Why MyMediScribe?</h2>
              <ul style={{ marginTop: "20px", lineHeight: "1.8" }}>
                <li>✓ Designed specifically for healthcare professionals</li>
                <li>✓ Reduces documentation time and administrative overhead</li>
                <li>✓ Improves workflow efficiency in medical settings</li>
                <li>✓ Built with security and privacy considerations</li>
                <li>✓ Developed by experienced software engineers</li>
              </ul>
            </div>

            <div style={{ marginTop: "60px", textAlign: "center" }}>
              <a
                href="/contact"
                className="btn btn-primary"
                style={{ display: "inline-block" }}
              >
                Learn More About MyMediScribe
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
