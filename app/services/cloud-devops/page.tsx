import type { Metadata } from "next";
import Header from "@/app/components/Header";
import CTA from "@/app/components/CTA";
import WhatsAppFab from "@/app/components/WhatsAppFab";
import AmbientCursor from "@/app/components/AmbientCursor";

export const metadata: Metadata = {
  title: "Cloud Infrastructure & DevOps Services | Amahh Technology",
  description: "Cloud infrastructure and DevOps services by Amahh Technology. We provide cloud architecture, deployment automation, CI/CD pipelines, and infrastructure management using AWS, GCP, and Docker.",
  alternates: {
    canonical: "/services/cloud-devops",
  },
};

export default function CloudDevOpsPage() {
  return (
    <>
      <Header />
      <AmbientCursor />
      <main id="top" style={{ paddingTop: "40px" }}>
        <section className="section">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">Cloud Infrastructure & DevOps</span>
              <h1 className="title-lg">Modern Cloud & DevOps Solutions</h1>
              <p className="lead">
                We design and manage cloud infrastructure that scales with your business. From architecture to deployment automation, our DevOps services ensure reliable, secure, and efficient operations.
              </p>
            </div>

            <div style={{ marginTop: "60px" }}>
              <h2>Our Cloud & DevOps Services</h2>
              <div style={{ marginTop: "30px", display: "grid", gap: "30px" }}>
                <div>
                  <h3>Cloud Architecture Design</h3>
                  <p>Scalable cloud architecture on AWS, GCP, and Azure. We design systems that are cost-effective, resilient, and optimized for performance.</p>
                </div>
                <div>
                  <h3>CI/CD Pipeline Setup</h3>
                  <p>Automated build, test, and deployment pipelines. We implement GitHub Actions, GitLab CI, and custom workflows for reliable releases.</p>
                </div>
                <div>
                  <h3>Containerization & Orchestration</h3>
                  <p>Docker containerization and Kubernetes orchestration for scalable application deployment and management.</p>
                </div>
                <div>
                  <h3>Infrastructure as Code</h3>
                  <p>Terraform and CloudFormation for infrastructure automation. We version-control your infrastructure for reproducibility and consistency.</p>
                </div>
              </div>
            </div>

            <div style={{ marginTop: "60px" }}>
              <h2>Our Technology Stack</h2>
              <div style={{ marginTop: "30px" }}>
                <div className="chip-row">
                  <span className="chip">AWS</span>
                  <span className="chip">Google Cloud</span>
                  <span className="chip">Docker</span>
                  <span className="chip">Kubernetes</span>
                  <span className="chip">Terraform</span>
                  <span className="chip">GitHub Actions</span>
                  <span className="chip">Linux</span>
                </div>
              </div>
            </div>

            <div style={{ marginTop: "60px" }}>
              <h2>Why Choose Amahh Technology for Cloud & DevOps?</h2>
              <ul style={{ marginTop: "20px", lineHeight: "1.8" }}>
                <li>✓ Expertise across major cloud providers</li>
                <li>✓ Cost-optimized infrastructure design</li>
                <li>✓ Automated deployment and scaling</li>
                <li>✓ Security best practices and compliance</li>
                <li>✓ Monitoring and alerting setup</li>
                <li>✓ Disaster recovery and backup strategies</li>
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
