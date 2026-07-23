"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./Proprietary.module.css";
import { applyTilt, resetTilt } from "@/app/lib/tilt";

export default function Proprietary() {
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
      {
        threshold: 0.02,
        rootMargin: "0px 0px 40px 0px"
      }
    );

    [headRef.current, cardRef.current].forEach((el) => {
      if (el) {
        el.setAttribute("data-reveal", "");
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="section" id="proprietary" style={{ background: "rgba(10, 15, 30, 0.4)" }}>
      <div className="container">
        <div className="section-head">
          <div ref={headRef} data-reveal>
            <span className="eyebrow" style={{ color: "var(--accent-2)" }}>Our Proprietary Product Launch</span>
            <h2 className="title-lg">
              Introducing Workistan.
            </h2>
          </div>
          <p className="lead">
            Built, launched, and scaled in house by Amahh Technology. Workistan is a global local services marketplace bridging customers with verified service professionals.
          </p>
        </div>

        <div
          className={`${styles.productCard} tilt-card`}
          ref={cardRef}
          onMouseMove={(e) => applyTilt(e, 3, 6)}
          onMouseLeave={resetTilt}
          data-reveal
        >
          <div className={styles.grid}>
            {/* Visual/Demo Column */}
            <div className={styles.visualColumn}>
              <div className={styles.glowBlob} />
              <div className={styles.mockupContainer}>
                {/* Brand Logo Display */}
                <div className={styles.brandBadge}>
                  <span className={styles.rocketIcon}>🚀</span>
                  <span>Flagship Product</span>
                </div>
                <h3 className={styles.brandTitle}>Workistan</h3>
                <p className={styles.brandSub}>Global-Local Services Ecosystem</p>

                <div className={styles.featuresStack}>
                  <div className={styles.featItem}>
                    <span className={styles.featDot}>✓</span>
                    <span>Real-time Bidding & Tasks</span>
                  </div>
                  <div className={styles.featItem}>
                    <span className={styles.featDot}>✓</span>
                    <span>Short Video Reels for Talent Discovery</span>
                  </div>
                  <div className={styles.featItem}>
                    <span className={styles.featDot}>✓</span>
                    <span>Instant Urgent Booking Mode</span>
                  </div>
                  <div className={styles.featItem}>
                    <span className={styles.featDot}>✓</span>
                    <span>Secured Escrow Payments & Instant Chat</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content/Link Column */}
            <div className={styles.contentColumn}>
              <div className={styles.badgeRow}>
                <span className={styles.platformBadge}>🌐 Web Platform</span>
                <span className={styles.platformBadge}>📱 Mobile App (iOS & Android)</span>
              </div>
              <h4 className={styles.pitchTitle}>The Future of Freelance & Local Work</h4>
              <p className={styles.pitchText}>
                Workistan enables users to post tasks, receive competitive bids, and hire trusted pros instantly. The entire platform was designed, architected, and built by our team using a cutting edge tech stack optimized for performance, scalability, and seamless client-freelancer communications.
              </p>

              <div className={styles.techStackContainer}>
                <h5>TECHNOLOGY STACK</h5>
                <div className="chip-row">
                  <span className="chip">TypeScript</span>
                  <span className="chip">Next.js</span>
                  <span className="chip">React Native (Expo)</span>
                  <span className="chip">Supabase</span>
                  <span className="chip">PostgreSQL</span>
                  <span className="chip">Tailwind CSS</span>
                  <span className="chip">Resend</span>
                </div>
              </div>

              <div className={styles.actionRow}>
                <a
                  href="https://joinworkistan.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Visit joinworkistan.com →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
