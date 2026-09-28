import type { Metadata } from "next";
import Header from "@/app/components/Header";
import CTA from "@/app/components/CTA";
import WhatsAppFab from "@/app/components/WhatsAppFab";
import AmbientCursor from "@/app/components/AmbientCursor";

export const metadata: Metadata = {
  title: "AI Solutions & Machine Learning Development | Amahh Technology",
  description: "AI and machine learning development services by Amahh Technology. We build intelligent solutions including ML models, automation, data analytics, and AI-powered applications for businesses.",
  alternates: {
    canonical: "/services/ai-solutions",
  },
};

export default function AISolutionsPage() {
  return (
    <>
      <Header />
      <AmbientCursor />
      <main id="top" style={{ paddingTop: "40px" }}>
        <section className="section">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">AI & Machine Learning Solutions</span>
              <h1 className="title-lg">Intelligent AI Solutions for Your Business</h1>
              <p className="lead">
                We harness the power of artificial intelligence and machine learning to solve complex business problems. From predictive analytics to intelligent automation, our AI solutions help businesses work smarter and gain competitive advantages.
              </p>
            </div>

            <div style={{ marginTop: "60px" }}>
              <h2>Our AI & ML Services</h2>
              <div style={{ marginTop: "30px", display: "grid", gap: "30px" }}>
                <div>
                  <h3>Machine Learning Models</h3>
                  <p>Custom ML models for prediction, classification, and pattern recognition. We train models on your data to deliver actionable insights and automate decision-making.</p>
                </div>
                <div>
                  <h3>Natural Language Processing (NLP)</h3>
                  <p>Text analysis, sentiment analysis, chatbots, and language understanding. We build NLP solutions that process and understand human language at scale.</p>
                </div>
                <div>
                  <h3>Intelligent Automation</h3>
                  <p>Automate complex workflows with AI-powered decision making. We build systems that learn and improve over time, reducing manual intervention.</p>
                </div>
                <div>
                  <h3>Data Analytics & Visualization</h3>
                  <p>Transform raw data into actionable business intelligence. We create dashboards and analytics platforms powered by ML for deeper insights.</p>
                </div>
              </div>
            </div>

            <div style={{ marginTop: "60px" }}>
              <h2>Our Technology Stack</h2>
              <div style={{ marginTop: "30px" }}>
                <div className="chip-row">
                  <span className="chip">Python</span>
                  <span className="chip">TensorFlow</span>
                  <span className="chip">PyTorch</span>
                  <span className="chip">scikit-learn</span>
                  <span className="chip">OpenAI API</span>
                  <span className="chip">Pandas</span>
                  <span className="chip">NumPy</span>
                </div>
              </div>
            </div>

            <div style={{ marginTop: "60px" }}>
              <h2>Why Choose Amahh Technology for AI Solutions?</h2>
              <ul style={{ marginTop: "20px", lineHeight: "1.8" }}>
                <li>✓ Expert team with experience in ML and AI technologies</li>
                <li>✓ Custom solutions tailored to your data and use cases</li>
                <li>✓ Focus on practical, business-value-driven AI</li>
                <li>✓ Ethical AI practices and data privacy considerations</li>
                <li>✓ Model training, deployment, and ongoing optimization</li>
                <li>✓ Integration with existing systems and workflows</li>
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
