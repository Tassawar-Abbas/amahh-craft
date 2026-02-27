"use client";

import { useEffect, useRef } from "react";
import styles from "./Collections.module.css";

const cards = [
  {
    icon: "⚡",
    index: "01",
    title: "Custom Software Development",
    desc: "Tailor-made software solutions built to your exact specifications — scalable, maintainable, and designed to solve real business problems.",
    chips: ["Full Stack", "API Design", "Microservices"],
    link: { href: "#contact", label: "Start a project →" },
  },
  {
    icon: "📱",
    index: "02",
    title: "Mobile App Development",
    desc: "Cross-platform and native mobile applications that deliver seamless user experiences on iOS and Android with high performance.",
    chips: ["React Native", "Flutter", "iOS / Android"],
    link: { href: "#contact", label: "Build your app →" },
  },
  {
    icon: "🌐",
    index: "03",
    title: "Web Development",
    desc: "Modern, responsive web applications and websites built with cutting-edge frameworks — fast, accessible, and conversion-optimized.",
    chips: ["Next.js", "React", "TypeScript"],
    link: { href: "#contact", label: "Launch your site →" },
  },
  {
    icon: "☁️",
    index: "04",
    title: "Cloud Solutions",
    desc: "End-to-end cloud architecture, migration, and DevOps — secure, resilient infrastructure that scales with your business.",
    chips: ["AWS", "GCP", "Docker / K8s"],
    link: { href: "#contact", label: "Go cloud-native →" },
  },
  {
    icon: "📊",
    index: "05",
    title: "Data Analytics",
    desc: "Transform raw data into actionable business intelligence — dashboards, ML models, pipelines, and predictive analytics.",
    chips: ["Python", "BI Dashboards", "ML Models"],
    link: { href: "#contact", label: "Unlock your data →" },
  },
  {
    icon: "🔒",
    index: "06",
    title: "Cybersecurity",
    desc: "Protect your digital assets with comprehensive security audits, penetration testing, compliance, and robust security architecture.",
    chips: ["Pen Testing", "Compliance", "Zero Trust"],
    link: { href: "#contact", label: "Secure your stack →" },
  },
];

function SpotlightCard({ card }: { card: (typeof cards)[0] }) {
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <article
      className={styles.spotlightCard}
      onMouseMove={handleMouseMove}
      data-reveal
    >
      <div>
        <div className={styles.cardTop}>
          <div className={styles.cardIcon}>{card.icon}</div>
          <div className={styles.cardIndex}>{card.index}</div>
        </div>
        <h3>{card.title}</h3>
        <p>{card.desc}</p>
        <div className="chip-row">
          {card.chips.map((chip) => (
            <span key={chip} className="chip">
              {chip}
            </span>
          ))}
        </div>
      </div>
      <a href={card.link.href} className={styles.cardLink}>
        {card.link.label}
      </a>
    </article>
  );
}

export default function Collections() {
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
      { threshold: 0.08 }
    );

    const cardEls = document.querySelectorAll(`.${styles.spotlightCard}`);
    [headRef.current, leadRef.current, ...Array.from(cardEls)].forEach((el) => {
      if (el) {
        el.setAttribute("data-reveal", "");
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-head">
          <div ref={headRef} data-reveal>
            <span className="eyebrow">Our Services</span>
            <h2 className="title-lg">
              Comprehensive services to help your business thrive.
            </h2>
          </div>
          <p className="lead" ref={leadRef} data-reveal>
            We offer a full range of software development services — from ideation
            to deployment — tailored to your business goals and built for long-term
            scalability.
          </p>
        </div>

        <div className={styles.cardGrid}>
          {cards.map((card) => (
            <SpotlightCard key={card.index} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
