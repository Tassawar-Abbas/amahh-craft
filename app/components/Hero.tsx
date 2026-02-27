"use client";

import { useEffect, useRef } from "react";
import styles from "./Hero.module.css";

const stats = [
  { value: "50+", label: "successful projects delivered across web, mobile, and enterprise" },
  { value: "30+", label: "satisfied clients from startups to global enterprises" },
  { value: "5+", label: "years of experience building innovative software solutions" },
  { value: "98%", label: "client satisfaction rate with on-time, on-budget delivery" },
];

const trustPills = [
  "Custom Software",
  "Agile Development",
  "24/7 Support",
];

const orbitChips = [
  { label: "AI & Machine Learning", cls: styles.chipOne },
  { label: "Cloud Solutions", cls: styles.chipTwo },
  { label: "IoT Development", cls: styles.chipThree },
  { label: "Blockchain", cls: styles.chipFour },
];

export default function Hero() {
  const copyRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

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
      { threshold: 0.12 }
    );

    [copyRef, stageRef, statsRef].forEach((ref) => {
      if (ref.current) {
        ref.current.setAttribute("data-reveal", "");
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.hero} id="top">
      <div className="container">
        <div className={styles.heroGrid}>
          {/* Copy */}
          <div className={styles.heroCopy} ref={copyRef} data-reveal>
            <span className="eyebrow">Innovative Software Solutions</span>
            <h1 className={`title-xl ${styles.heroTitle}`}>
              Transforming Ideas Into{" "}
              <span className="gradient-text">Digital Reality</span>
            </h1>
            <p className="lead" style={{ maxWidth: "58ch" }}>
              We build innovative software solutions that drive business growth and
              enhance user experiences — from custom applications to enterprise
              platforms powered by AI, Cloud, and modern engineering.
            </p>
            <div className="btn-row">
              <a href="#services" className="btn btn-primary">
                Our Services
              </a>
              <a href="#projects" className="btn btn-secondary">
                View Projects
              </a>
            </div>
            <div className={styles.trustRow}>
              {trustPills.map((pill) => (
                <span key={pill} className={styles.trustPill}>
                  <i className={styles.trustDot} />
                  {pill}
                </span>
              ))}
            </div>
          </div>

          {/* Stage */}
          <div className={styles.heroStage} ref={stageRef} data-reveal>
            <div className={styles.heroGlow} />
            <div className={styles.heroRing} />

            <div className={styles.heroBoard}>
              <div className={styles.boardGrid}>
                <div className={styles.paperStack}>
                  <div className={styles.paperTitle}>Amahh Build</div>
                  <p>End-to-end software development — from architecture to deployment with a focus on scale, performance, and user experience.</p>
                  <div className={styles.paperMeta}>
                    <span>Full Stack</span>
                    <span>AI Powered</span>
                    <span>Cloud Native</span>
                  </div>
                </div>
                <div className={styles.miniColumn}>
                  <div className={`${styles.miniCard} ${styles.miniTop}`}>
                    <h4>Web & Mobile Apps</h4>
                    <p>Modern, responsive apps built with React, Next.js, Flutter, and React Native.</p>
                    <div className={styles.swirl} />
                  </div>
                  <div className={`${styles.miniCard} ${styles.miniBottom}`}>
                    <h4>AI & Data Solutions</h4>
                    <p>ML pipelines, intelligent automation, analytics dashboards, and data engineering.</p>
                    <div className={styles.swirl} />
                  </div>
                </div>
              </div>
            </div>

            {orbitChips.map((chip) => (
              <div key={chip.label} className={`${styles.orbitChip} ${chip.cls}`}>
                {chip.label}
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className={styles.stats} ref={statsRef} data-reveal>
          {stats.map((stat) => (
            <div key={stat.value} className={styles.stat}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
