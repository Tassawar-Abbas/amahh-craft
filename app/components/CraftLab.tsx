"use client";

import { useState, useRef, useEffect } from "react";
import styles from "./CraftLab.module.css";

type TabKey = "frontend" | "backend" | "mobile" | "cloud" | "ai";

interface TabData {
  title: string;
  text: string;
  tags: string[];
  swatches: string[];
  metric1: string;
  metric2: string;
  metric3: string;
  cards: { title: string; text: string }[];
  bg: string;
}

const labData: Record<TabKey, TabData> = {
  frontend: {
    title: "Frontend Development",
    text: "We craft blazing-fast, pixel-perfect user interfaces using modern frameworks that deliver exceptional user experiences across all devices.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    swatches: ["#61dafb", "#000000", "#3178c6", "#06b6d4"],
    metric1: "Web, PWA, Dashboard",
    metric2: "2–4 weeks for MVPs",
    metric3: "SSR, CSR, Static, Edge",
    cards: [
      { title: "React & Next.js", text: "Component-driven UIs with server-side rendering for peak SEO performance." },
      { title: "TypeScript", text: "Type-safe codebases that scale cleanly as your product grows." },
      { title: "UI/UX Design", text: "Figma-to-code workflows with pixel-perfect responsive implementations." },
    ],
    bg: "radial-gradient(circle at 20% 20%,rgba(97,218,251,.16),transparent 22%), linear-gradient(160deg,#1a2b3b,#12191d)",
  },
  backend: {
    title: "Backend & APIs",
    text: "Robust, scalable server-side architecture with RESTful and GraphQL APIs, microservices, and real-time systems built to handle growth.",
    tags: ["Node.js", "Python", "Django", "PostgreSQL"],
    swatches: ["#68a063", "#3776ab", "#092e20", "#336791"],
    metric1: "APIs, Microservices, SaaS",
    metric2: "3–6 weeks for complex systems",
    metric3: "REST, GraphQL, WebSocket",
    cards: [
      { title: "Node.js & Python", text: "High-performance server runtimes for scalable API architectures." },
      { title: "Database Design", text: "PostgreSQL, MongoDB, Redis — optimized schemas and query performance." },
      { title: "Microservices", text: "Loosely coupled services with event-driven communication patterns." },
    ],
    bg: "radial-gradient(circle at 24% 18%,rgba(104,160,99,.16),transparent 22%), linear-gradient(160deg,#1c2a1c,#121812)",
  },
  mobile: {
    title: "Mobile Development",
    text: "Native and cross-platform mobile applications that deliver premium experiences on iOS and Android, built with modern frameworks.",
    tags: ["React Native", "Flutter", "iOS", "Android"],
    swatches: ["#61dafb", "#54c5f8", "#000000", "#3ddc84"],
    metric1: "iOS, Android, Cross-platform",
    metric2: "4–8 weeks for full apps",
    metric3: "OTA Updates, Push, Offline",
    cards: [
      { title: "React Native", text: "Single codebase for both platforms with native performance and feel." },
      { title: "Flutter", text: "Google's UI toolkit for beautiful, natively compiled applications." },
      { title: "App Store Ready", text: "CI/CD pipelines for seamless App Store and Play Store deployment." },
    ],
    bg: "radial-gradient(circle at 22% 18%,rgba(61,220,132,.18),transparent 22%), linear-gradient(160deg,#1a2e22,#121a13)",
  },
  cloud: {
    title: "Cloud & DevOps",
    text: "Secure, resilient cloud infrastructure on AWS, GCP, and Azure — with full CI/CD automation, monitoring, and zero-downtime deployments.",
    tags: ["AWS", "GCP", "Docker", "Kubernetes"],
    swatches: ["#ff9900", "#4285f4", "#2496ed", "#326ce5"],
    metric1: "Infrastructure, DevOps, Migration",
    metric2: "Continuous deployment",
    metric3: "99.9% uptime SLA",
    cards: [
      { title: "Cloud Architecture", text: "Auto-scaling infrastructure designed for reliability and cost efficiency." },
      { title: "CI/CD Pipelines", text: "Automated testing and deployment with GitHub Actions, Jenkins, ArgoCD." },
      { title: "Monitoring", text: "Real-time observability with Datadog, Grafana, and PagerDuty alerts." },
    ],
    bg: "radial-gradient(circle at 24% 18%,rgba(66,133,244,.18),transparent 22%), linear-gradient(160deg,#1a2230,#13151d)",
  },
  ai: {
    title: "AI & Data Engineering",
    text: "Custom AI/ML solutions, intelligent automation, and data pipelines that extract actionable insights and unlock business intelligence.",
    tags: ["TensorFlow", "PyTorch", "OpenAI", "LangChain"],
    swatches: ["#ff6f00", "#ee4c2c", "#412991", "#1c3f5e"],
    metric1: "ML, NLP, Computer Vision",
    metric2: "Iterative, sprint-based",
    metric3: "Python, Spark, dbt, Airflow",
    cards: [
      { title: "LLM Integration", text: "GPT-4, Claude, and open-source LLMs embedded into your product workflows." },
      { title: "Predictive Analytics", text: "ML models trained on your data to forecast trends and automate decisions." },
      { title: "Data Pipelines", text: "ETL/ELT workflows, real-time streaming, and data warehouse design." },
    ],
    bg: "radial-gradient(circle at 24% 18%,rgba(255,111,0,.18),transparent 22%), linear-gradient(160deg,#2a1a0e,#17100a)",
  },
};

const tabs: { key: TabKey; label: string; sub: string }[] = [
  { key: "frontend", label: "Frontend", sub: "React, Next.js, TypeScript, UI/UX" },
  { key: "backend", label: "Backend & APIs", sub: "Node.js, Python, PostgreSQL" },
  { key: "mobile", label: "Mobile Apps", sub: "React Native, Flutter, iOS & Android" },
  { key: "cloud", label: "Cloud & DevOps", sub: "AWS, GCP, Docker, Kubernetes" },
  { key: "ai", label: "AI & Data", sub: "LLMs, ML models, data pipelines" },
];

export default function CraftLab() {
  const [active, setActive] = useState<TabKey>("frontend");
  const artRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const leadRef = useRef<HTMLParagraphElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  const data = labData[active];

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

    [headRef.current, leadRef.current, tabsRef.current, previewRef.current].forEach((el) => {
      if (el) {
        el.setAttribute("data-reveal", "");
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  const handleTabChange = (key: TabKey) => {
    setActive(key);
    if (artRef.current) {
      artRef.current.animate(
        [
          { opacity: 0.6, transform: "translateY(10px) scale(0.97)" },
          { opacity: 1, transform: "translateY(0) scale(1)" },
        ],
        { duration: 260, easing: "cubic-bezier(0.22, 1, 0.36, 1)" }
      );
    }
  };

  return (
    <section className="section" id="technologies">
      <div className="container">
        <div className="section-head">
          <div ref={headRef} data-reveal>
            <span className="eyebrow">Technologies</span>
            <h2 className="title-lg">
              Cutting-edge tech stacks for every challenge.
            </h2>
          </div>
          <p className="lead" ref={leadRef} data-reveal>
            We stay at the forefront of technological advancements — continuously
            learning and adopting new tools to deliver the best solutions for our
            clients.
          </p>
        </div>

        <div className={styles.lab}>
          <div className={styles.labTabs} ref={tabsRef} data-reveal>
            {tabs.map((tab) => (
              <button
                key={tab.key}
                className={`${styles.tabBtn} ${active === tab.key ? styles.tabActive : ""}`}
                onClick={() => handleTabChange(tab.key)}
              >
                <span>
                  {tab.label}
                  <small>{tab.sub}</small>
                </span>
                <span>↗</span>
              </button>
            ))}
          </div>

          <div className={styles.labPreview} ref={previewRef} data-reveal>
            <div className={styles.labShell}>
              <div
                className={styles.previewArt}
                ref={artRef}
                style={{ background: data.bg }}
              >
                {data.cards.map((card, i) => (
                  <div key={i} className={styles.artCard}>
                    <h4>{card.title}</h4>
                    <p>{card.text}</p>
                  </div>
                ))}
              </div>

              <div className={styles.previewMeta}>
                <div>
                  <h3>{data.title}</h3>
                  <p>{data.text}</p>
                </div>

                <div className="chip-row">
                  {data.tags.map((tag) => (
                    <span key={tag} className="chip">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className={styles.swatches}>
                  {data.swatches.map((color) => (
                    <span
                      key={color}
                      className={styles.swatch}
                      style={{ background: color }}
                    />
                  ))}
                </div>

                <div className={styles.metricGrid}>
                  <div className={styles.metric}>
                    <b>Best for</b>
                    <span>{data.metric1}</span>
                  </div>
                  <div className={styles.metric}>
                    <b>Timeline</b>
                    <span>{data.metric2}</span>
                  </div>
                  <div className={styles.metric}>
                    <b>Delivery</b>
                    <span>{data.metric3}</span>
                  </div>
                </div>

                <div className="btn-row">
                  <a href="#contact" className="btn btn-primary">
                    Start a project
                  </a>
                  <a href="#projects" className="btn btn-secondary">
                    See our work
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
