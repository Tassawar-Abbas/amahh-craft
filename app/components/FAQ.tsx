"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./FAQ.module.css";
import { applyTilt, resetTilt } from "@/app/lib/tilt";

const faqItems = [
  {
    q: "What types of software projects does Amahh Craft handle?",
    a: "We specialize in custom web applications, mobile apps (iOS and Android), AI and data engineering pipelines, microservices backends, and cloud infrastructure.",
  },
  {
    q: "What is your typical project timeline?",
    a: "MVPs and rapid prototypes take 2 to 4 weeks. Full scale web or mobile platforms typically take 6 to 12 weeks depending on scope and feature complexity.",
  },
  {
    q: "How do you ensure code quality and IP security?",
    a: "We sign strict NDAs before work begins. All codebases are developed with strict TypeScript typing, automated CI/CD testing, and full client IP ownership.",
  },
  {
    q: "Do you offer post launch support and maintenance?",
    a: "Yes! We offer 24/7 post launch monitoring, security updates, SLA maintenance agreements, and continuous feature updates.",
  },
];

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const headRef = useRef<HTMLDivElement>(null);
  const leadRef = useRef<HTMLParagraphElement>(null);
  const introRef = useRef<HTMLDivElement>(null);

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

    [headRef.current, leadRef.current, introRef.current].forEach((el) => {
      if (el) {
        el.setAttribute("data-reveal", "");
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-head">
          <div ref={headRef} data-reveal>
            <span className="eyebrow">Contact & FAQ</span>
            <h2 className="title-lg">
              Have questions? Let&apos;s talk.
            </h2>
          </div>
          <p className="lead" ref={leadRef} data-reveal>
            We&apos;d love to hear about your ideas and explore how we can help transform them into high-impact digital solutions.
          </p>
        </div>

        <div className={styles.faqWrap}>
          <div className={styles.faqGrid}>
            {/* Contact info panel */}
            <div className={styles.faqIntro} ref={introRef} data-reveal>
              <h3>Get in Touch</h3>
              <p className="lead" style={{ maxWidth: "none", marginBottom: "20px" }}>
                We&apos;re here to help with any questions about our services or to discuss
                your project requirements. Reach out through any channel below.
              </p>

              <div className={styles.contactInfoList}>
                <div className={styles.contactInfoItem}>
                  <div className={styles.contactInfoIcon}>✉</div>
                  <div>
                    <b>Email</b>
                    <a href="mailto:amahh.tech@gmail.com">amahh.tech@gmail.com</a>
                  </div>
                </div>
                <div className={styles.contactInfoItem}>
                  <div className={styles.contactInfoIcon}>💬</div>
                  <div>
                    <b>WhatsApp</b>
                    <a href="https://wa.me/923714932094" target="_blank" rel="noopener noreferrer">
                      +92 3714932094
                    </a>
                  </div>
                </div>
              </div>

              <div className="btn-row" style={{ marginTop: "24px" }}>
                <a
                  href="https://wa.me/923714932094"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  💬 Chat on WhatsApp (+92 3714932094)
                </a>
                <a
                  href="mailto:amahh.tech@gmail.com"
                  className="btn btn-secondary"
                >
                  ✉ Send Email
                </a>
              </div>

              <div className={styles.contactPills}>
                <span className={styles.contactPill}>Custom Software</span>
                <span className={styles.contactPill}>Mobile Apps</span>
                <span className={styles.contactPill}>Cloud & AI</span>
                <span className={styles.contactPill}>Web Development</span>
              </div>
            </div>
          </div>

          {/* Interactive Accordion Section */}
          <div className={styles.accordionContainer}>
            <h3 className={styles.accordionHeaderTitle}>Frequently Asked Questions</h3>
            <div className={styles.accordionList}>
              {faqItems.map((item, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className={`${styles.accordionItem} ${isOpen ? styles.accordionItemOpen : ""}`}
                  >
                    <button
                      type="button"
                      className={styles.accordionTrigger}
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                    >
                      <span>{item.q}</span>
                      <span className={styles.accordionIcon}>{isOpen ? "−" : "+"}</span>
                    </button>
                    {isOpen && (
                      <div className={styles.accordionContent}>
                        <p>{item.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
