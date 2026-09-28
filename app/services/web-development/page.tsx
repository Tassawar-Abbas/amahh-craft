import type { Metadata } from "next";
import Header from "@/app/components/Header";
import CTA from "@/app/components/CTA";
import WhatsAppFab from "@/app/components/WhatsAppFab";
import AmbientCursor from "@/app/components/AmbientCursor";

export const metadata: Metadata = {
  title: "Web Development Services | Amahh Technology",
  description: "Professional web development services by Amahh Technology. We build modern, responsive websites and web applications using Next.js, React, TypeScript, and cutting-edge technologies for businesses worldwide.",
  alternates: {
    canonical: "/services/web-development",
  },
};

export default function WebDevelopmentPage() {
  return (
    <>
      <Header />
      <AmbientCursor />
      <main id="top" style={{ paddingTop: "40px" }}>
        <section className="section">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">Web Development Services</span>
              <h1 className="title-lg">Professional Web Development Solutions</h1>
              <p className="lead">
                We build modern, high-performance websites and web applications that drive business growth. From landing pages to complex enterprise platforms, our web development team delivers scalable, secure, and user-friendly solutions.
              </p>
            </div>

            <div style={{ marginTop: "60px" }}>
              <h2>Our Web Development Services</h2>
              <div style={{ marginTop: "30px", display: "grid", gap: "30px" }}>
                <div>
                  <h3>Custom Website Development</h3>
                  <p>Tailor-made websites built to your exact specifications. We create unique, branded experiences that reflect your business identity and engage your target audience.</p>
                </div>
                <div>
                  <h3>Web Application Development</h3>
                  <p>Full-featured web applications with complex functionality. From SaaS platforms to internal tools, we build scalable solutions that grow with your business.</p>
                </div>
                <div>
                  <h3>E-commerce Development</h3>
                  <p>Online stores and marketplaces built for conversion. We integrate payment gateways, inventory management, and seamless checkout experiences.</p>
                </div>
                <div>
                  <h3>Progressive Web Apps (PWA)</h3>
                  <p>Web applications that work offline and provide native-like experiences. Perfect for businesses wanting app-like functionality without app store deployment.</p>
                </div>
              </div>
            </div>

            <div style={{ marginTop: "60px" }}>
              <h2>Our Technology Stack</h2>
              <div style={{ marginTop: "30px" }}>
                <div className="chip-row">
                  <span className="chip">Next.js</span>
                  <span className="chip">React</span>
                  <span className="chip">TypeScript</span>
                  <span className="chip">Node.js</span>
                  <span className="chip">Tailwind CSS</span>
                  <span className="chip">PostgreSQL</span>
                  <span className="chip">MongoDB</span>
                  <span className="chip">Supabase</span>
                </div>
              </div>
            </div>

            <div style={{ marginTop: "60px" }}>
              <h2>Why Choose Amahh Technology for Web Development?</h2>
              <ul style={{ marginTop: "20px", lineHeight: "1.8" }}>
                <li>✓ Modern, responsive designs that work on all devices</li>
                <li>✓ SEO-optimized architecture for better search visibility</li>
                <li>✓ Fast loading times and optimized performance</li>
                <li>✓ Secure coding practices and data protection</li>
                <li>✓ Scalable solutions that grow with your business</li>
                <li>✓ Ongoing maintenance and support</li>
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
