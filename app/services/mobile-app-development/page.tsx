import type { Metadata } from "next";
import Header from "@/app/components/Header";
import CTA from "@/app/components/CTA";
import WhatsAppFab from "@/app/components/WhatsAppFab";
import AmbientCursor from "@/app/components/AmbientCursor";

export const metadata: Metadata = {
  title: "Mobile App Development Services | Amahh Technology",
  description: "Expert mobile app development by Amahh Technology. We build native and cross-platform mobile applications for iOS and Android using React Native, Flutter, and modern frameworks.",
  alternates: {
    canonical: "/services/mobile-app-development",
  },
};

export default function MobileAppDevelopmentPage() {
  return (
    <>
      <Header />
      <AmbientCursor />
      <main id="top" style={{ paddingTop: "40px" }}>
        <section className="section">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">Mobile App Development</span>
              <h1 className="title-lg">Professional Mobile App Development</h1>
              <p className="lead">
                We build high-performance mobile applications for iOS and Android. From consumer apps to enterprise solutions, our mobile development team delivers intuitive, feature-rich experiences that users love.
              </p>
            </div>

            <div style={{ marginTop: "60px" }}>
              <h2>Our Mobile Development Services</h2>
              <div style={{ marginTop: "30px", display: "grid", gap: "30px" }}>
                <div>
                  <h3>iOS App Development</h3>
                  <p>Native iOS applications built with Swift and SwiftUI. We create polished, Apple-design-compliant apps that leverage the full potential of iOS ecosystem.</p>
                </div>
                <div>
                  <h3>Android App Development</h3>
                  <p>Native Android applications using Kotlin and Jetpack Compose. We build apps that provide seamless experiences across all Android devices.</p>
                </div>
                <div>
                  <h3>Cross-Platform Development</h3>
                  <p>Single codebase solutions using React Native and Flutter. Reach both iOS and Android users with reduced development time and cost while maintaining native-like performance.</p>
                </div>
                <div>
                  <h3>App Maintenance & Updates</h3>
                  <p>Ongoing support to keep your apps running smoothly. We handle bug fixes, feature updates, and OS compatibility to ensure long-term success.</p>
                </div>
              </div>
            </div>

            <div style={{ marginTop: "60px" }}>
              <h2>Our Technology Stack</h2>
              <div style={{ marginTop: "30px" }}>
                <div className="chip-row">
                  <span className="chip">React Native</span>
                  <span className="chip">Flutter</span>
                  <span className="chip">Expo</span>
                  <span className="chip">Swift</span>
                  <span className="chip">Kotlin</span>
                  <span className="chip">TypeScript</span>
                </div>
              </div>
            </div>

            <div style={{ marginTop: "60px" }}>
              <h2>Why Choose Amahh Technology for Mobile Development?</h2>
              <ul style={{ marginTop: "20px", lineHeight: "1.8" }}>
                <li>✓ Expertise in both native and cross-platform development</li>
                <li>✓ User-centric design with intuitive interfaces</li>
                <li>✓ Performance optimization for smooth user experience</li>
                <li>✓ App Store and Play Store deployment expertise</li>
                <li>✓ Integration with backend services and APIs</li>
                <li>✓ Push notifications and real-time features</li>
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
