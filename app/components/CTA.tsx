"use client";

import { useEffect, useRef } from "react";
import styles from "./CTA.module.css";

export default function CTA() {
  const ctaRef = useRef<HTMLDivElement>(null);

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

    if (ctaRef.current) {
      ctaRef.current.setAttribute("data-reveal", "");
      observer.observe(ctaRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.ctaSection}>
      <div className="container">
        <div className={styles.cta} ref={ctaRef} data-reveal>
          <div>
            <span className="eyebrow">Ready to build something great?</span>
            <h2 className="title-lg" style={{ marginTop: "14px" }}>
              Let&apos;s transform your idea into a{" "}
              <span className="gradient-text">digital reality.</span>
            </h2>
            <p className="lead" style={{ marginTop: "16px" }}>
              Partner with Amahh to build innovative software solutions that drive
              real business growth — on time, on budget, and beyond expectations.
            </p>
          </div>
          <div>
            <div className="btn-row">
              <a className="btn btn-primary" href="#contact">
                Start a Project
              </a>
              <a className="btn btn-secondary" href="#projects">
                View Our Work
              </a>
            </div>
            <div className={styles.contactPills}>
              <span className={styles.contactPill}>amahh.tech@gmail.com</span>
              <span className={styles.contactPill}>+92 324 9274607</span>
              <span className={styles.contactPill}>Web • Mobile • AI • Cloud</span>
            </div>
          </div>
        </div>

        <footer className={styles.footer}>
          <div className={styles.footerTop}>
            <div className={styles.footerBrand}>
              <div className={styles.footerLogo} />
              <div>
                <strong>Amahh</strong>
                <p>We build innovative software solutions that drive business growth and enhance user experiences.</p>
              </div>
            </div>
            <div className={styles.footerLinks}>
              <div className={styles.footerCol}>
                <h4>Quick Links</h4>
                <a href="#top">Home</a>
                <a href="#services">Services</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
              </div>
              <div className={styles.footerCol}>
                <h4>Contact Us</h4>
                <a href="tel:+923249274607">+92 324 9274607</a>
                <a href="tel:+923116676939">+92 311 6676939</a>
                <a href="mailto:amahh.tech@gmail.com">amahh.tech@gmail.com</a>
              </div>
            </div>
          </div>

          <div className={styles.footerRow}>
            <div>© 2024 Amahh. All rights reserved. Crafted with passion.</div>
            <div className={styles.socialLinks}>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
