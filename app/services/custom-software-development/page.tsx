import type { Metadata } from "next";
import Header from "@/app/components/Header";
import CTA from "@/app/components/CTA";
import WhatsAppFab from "@/app/components/WhatsAppFab";
import AmbientCursor from "@/app/components/AmbientCursor";

export const metadata: Metadata = {
  title: "Custom Software Development Services | Amahh Technology",
  description: "Custom software development by Amahh Technology. We build tailored software solutions to solve your unique business challenges. From enterprise applications to specialized tools.",
  alternates: {
    canonical: "/services/custom-software-development",
  },
};

export default function CustomSoftwareDevelopmentPage() {
  return (
    <>
      <Header />
      <AmbientCursor />
      <main id="top" style={{ paddingTop: "40px" }}>
        <section className="section">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">Custom Software Development</span>
              <h1 className="title-lg">Tailored Software Solutions for Your Business</h1>
              <p className="lead">
                We build custom software solutions designed to address your specific business needs. Off-the-shelf solutions don't always fit—our team creates bespoke software that aligns perfectly with your workflows and objectives.
              </p>
            </div>

            <div style={{ marginTop: "60px" }}>
              <h2>Our Custom Software Services</h2>
              <div style={{ marginTop: "30px", display: "grid", gap: "30px" }}>
                <div>
                  <h3>Enterprise Software Development</h3>
                  <p>Scalable enterprise applications that integrate with your existing systems. We build robust solutions for large organizations with complex requirements.</p>
                </div>
                <div>
                  <h3>Business Process Automation</h3>
                  <p>Automate repetitive tasks and streamline operations. We develop software that reduces manual work, improves efficiency, and minimizes errors.</p>
                </div>
                <div>
                  <h3>API Development & Integration</h3>
                  <p>Custom APIs and third-party integrations. We connect your systems seamlessly, enabling data flow and functionality across platforms.</p>
                </div>
                <div>
                  <h3>Dashboard & Analytics Platforms</h3>
                  <p>Custom dashboards for data visualization and business intelligence. We build tools that help you make data-driven decisions.</p>
                </div>
              </div>
            </div>

            <div style={{ marginTop: "60px" }}>
              <h2>Our Technology Stack</h2>
              <div style={{ marginTop: "30px" }}>
                <div className="chip-row">
                  <span className="chip">Node.js</span>
                  <span className="chip">Python</span>
                  <span className="chip">TypeScript</span>
                  <span className="chip">React</span>
                  <span className="chip">Next.js</span>
                  <span className="chip">PostgreSQL</span>
                  <span className="chip">MongoDB</span>
                  <span className="chip">AWS</span>
                  <span className="chip">Docker</span>
                </div>
              </div>
            </div>

            <div style={{ marginTop: "60px" }}>
              <h2>Why Choose Amahh Technology for Custom Software?</h2>
              <ul style={{ marginTop: "20px", lineHeight: "1.8" }}>
                <li>✓ Solutions tailored to your specific business requirements</li>
                <li>✓ Scalable architecture that grows with your business</li>
                <li>✓ Integration with existing systems and workflows</li>
                <li>✓ Focus on security, performance, and reliability</li>
                <li>✓ Agile development with regular updates and feedback</li>
                <li>✓ Comprehensive documentation and knowledge transfer</li>
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
