"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./Estimator.module.css";
import { applyTilt, resetTilt } from "@/app/lib/tilt";

const projectTypes = [
  { id: "web", label: "Web Application", icon: "🌐", baseWeeks: 3 },
  { id: "mobile", label: "Mobile App (iOS & Android)", icon: "📱", baseWeeks: 4 },
  { id: "enterprise", label: "Enterprise Platform", icon: "🏢", baseWeeks: 6 },
  { id: "ai", label: "AI & Machine Learning", icon: "🤖", baseWeeks: 5 },
];

const timelineScopes = [
  { id: "express", label: "MVP / Express", desc: "Fast launch, core essential features", multiplier: 1 },
  { id: "standard", label: "Full Solution", desc: "Complete feature set, polished UX", multiplier: 1.5 },
  { id: "scale", label: "Enterprise Scale", desc: "High availability, microservices, AI", multiplier: 2.2 },
];

const featureList = [
  { id: "ui", label: "Custom UI/UX & Design System" },
  { id: "api", label: "Scalable API & Database Architecture" },
  { id: "auth", label: "User Authentication & Roles" },
  { id: "payment", label: "Payment Gateway Integration" },
  { id: "realtime", label: "Real-time Tracking / Notifications" },
  { id: "admin", label: "Admin Management Dashboard" },
  { id: "ai_integration", label: "Intelligent AI / ML Integration" },
  { id: "cloud", label: "Cloud Hosting & Automated CI/CD" },
];

export default function Estimator() {
  const [selectedType, setSelectedType] = useState("web");
  const [selectedScope, setSelectedScope] = useState("standard");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    "ui",
    "api",
    "auth",
    "admin",
  ]);

  const headRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-seen");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    [headRef.current, cardRef.current].forEach((el) => {
      if (el) {
        el.setAttribute("data-reveal", "");
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  const toggleFeature = (id: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const typeObj = projectTypes.find((t) => t.id === selectedType) || projectTypes[0];
  const scopeObj = timelineScopes.find((s) => s.id === selectedScope) || timelineScopes[1];

  const estimatedWeeks = Math.max(
    2,
    Math.round((typeObj.baseWeeks + selectedFeatures.length * 0.5) * scopeObj.multiplier)
  );

  const getWhatsAppMessage = () => {
    const featureLabels = selectedFeatures
      ? featureList
          .filter((f) => selectedFeatures.includes(f.id))
          .map((f) => f.label)
          .join(", ")
      : "Standard Features";

    const text = `Hi Amahh Craft Team! 👋%0A%0AI used your Interactive Project Estimator on your website:%0A• *Project Type:* ${typeObj.label}%0A• *Scope:* ${scopeObj.label}%0A• *Features Selected:* ${featureLabels}%0A• *Estimated Timeline:* ~${estimatedWeeks} Weeks%0A%0AI would like to discuss starting this project with you!`;
    return `https://wa.me/923714932094?text=${text}`;
  };

  return (
    <section className="section" id="estimator">
      <div className="container">
        <div className="section-head">
          <div ref={headRef} data-reveal>
            <span className="eyebrow">Interactive Project Estimator</span>
            <h2 className="title-lg">
              Estimate your project scope & timeline in seconds.
            </h2>
          </div>
          <p className="lead">
            Select your project preferences below to calculate an estimated delivery timeline and generate an instant consultation request for our engineering team.
          </p>
        </div>

        <div
          className={`${styles.estimatorCard} tilt-card`}
          ref={cardRef}
          onMouseMove={(e) => applyTilt(e, 3, 6)}
          onMouseLeave={resetTilt}
          data-reveal
        >
          <div className={styles.grid}>
            {/* Options Panel */}
            <div className={styles.optionsPanel}>
              {/* Step 1 */}
              <div className={styles.stepBlock}>
                <span className={styles.stepBadge}>Step 1</span>
                <h3 className={styles.stepTitle}>Select Project Type</h3>
                <div className={styles.typesGrid}>
                  {projectTypes.map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      className={`${styles.typeBtn} ${selectedType === t.id ? styles.activeOption : ""}`}
                      onClick={() => setSelectedType(t.id)}
                    >
                      <span className={styles.typeIcon}>{t.icon}</span>
                      <span>{t.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2 */}
              <div className={styles.stepBlock}>
                <span className={styles.stepBadge}>Step 2</span>
                <h3 className={styles.stepTitle}>Select Delivery Pace & Scope</h3>
                <div className={styles.scopesGrid}>
                  {timelineScopes.map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      className={`${styles.scopeBtn} ${selectedScope === s.id ? styles.activeOption : ""}`}
                      onClick={() => setSelectedScope(s.id)}
                    >
                      <strong>{s.label}</strong>
                      <small>{s.desc}</small>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3 */}
              <div className={styles.stepBlock}>
                <span className={styles.stepBadge}>Step 3</span>
                <h3 className={styles.stepTitle}>Select Required Features</h3>
                <div className={styles.featuresGrid}>
                  {featureList.map((f) => {
                    const active = selectedFeatures.includes(f.id);
                    return (
                      <button
                        key={f.id}
                        type="button"
                        className={`${styles.featureBtn} ${active ? styles.activeFeature : ""}`}
                        onClick={() => toggleFeature(f.id)}
                      >
                        <span className={styles.checkMark}>{active ? "✓" : "+"}</span>
                        <span>{f.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Summary Box */}
            <div className={styles.summaryPanel}>
              <div className={styles.summaryHeader}>
                <span className={styles.summaryBadge}>Project Breakdown</span>
                <h4>Estimated Timeline</h4>
                <div className={styles.timeValue}>
                  <strong>~{estimatedWeeks}</strong>
                  <span>Weeks</span>
                </div>
              </div>

              <div className={styles.summaryList}>
                <div className={styles.summaryRow}>
                  <span>Target Stack:</span>
                  <strong>{typeObj.label}</strong>
                </div>
                <div className={styles.summaryRow}>
                  <span>Engineering Mode:</span>
                  <strong>{scopeObj.label}</strong>
                </div>
                <div className={styles.summaryRow}>
                  <span>Selected Features:</span>
                  <strong>{selectedFeatures.length} Items</strong>
                </div>
              </div>

              <div className={styles.summaryCta}>
                <a
                  href={getWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ width: "100%" }}
                >
                  💬 Send Estimate to WhatsApp
                </a>
                <small className={styles.guaranteeText}>
                  ⚡ Guaranteed 24-hour response & preliminary technical consultation.
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
