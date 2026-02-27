"use client";

import { useEffect, useRef } from "react";
import styles from "./Process.module.css";
import { applyTilt, resetTilt } from "@/app/lib/tilt";

const steps = [
  {
    num: "01",
    title: "Discover & Plan",
    desc: "We deep-dive into your requirements, business goals, and user needs to define a clear technical roadmap and project scope.",
  },
  {
    num: "02",
    title: "Design & Architect",
    desc: "UI/UX wireframes, system architecture, and technology selection — aligned to your goals before a single line of code is written.",
  },
  {
    num: "03",
    title: "Build & Iterate",
    desc: "Agile sprints with regular demos and feedback loops — shipping working software incrementally with full transparency.",
  },
  {
    num: "04",
    title: "Deploy & Support",
    desc: "Production deployment with CI/CD pipelines, monitoring, and ongoing support to ensure your product runs flawlessly post-launch.",
  },
];

export default function Process() {
  const headRef = useRef<HTMLDivElement>(null);
  const leadRef = useRef<HTMLParagraphElement>(null);

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

    const stepEls = document.querySelectorAll(`.${styles.step}`);
    [headRef.current, leadRef.current, ...Array.from(stepEls)].forEach((el) => {
      if (el) {
        el.setAttribute("data-reveal", "");
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="section" id="process">
      <div className="container">
        <div className="section-head">
          <div ref={headRef} data-reveal>
            <span className="eyebrow">Our Process</span>
            <h2 className="title-lg">How we turn your ideas into reality.</h2>
          </div>
          <p className="lead" ref={leadRef} data-reveal>
            A proven, agile-driven development process that keeps you informed,
            in control, and confident at every step — from kick-off to launch.
          </p>
        </div>

        <div className={styles.processGrid}>
          {steps.map((step) => (
            <article
              key={step.num}
              className={`${styles.step} tilt-card`}
              onMouseMove={(e) => applyTilt(e, 10, 16)}
              onMouseLeave={resetTilt}
              data-reveal
            >
              <div className={styles.stepNum}>{step.num}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
