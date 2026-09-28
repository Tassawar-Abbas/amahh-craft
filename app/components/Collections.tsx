"use client";

import { useEffect, useRef } from "react";
import styles from "./Collections.module.css";
import { applyTilt, resetTilt } from "@/app/lib/tilt";

const cards = [
  {
    icon: "⚡",
    index: "01",
    title: "Custom Software Development",
    desc: "Tailor made software solutions built to your exact specifications scalable, maintainable, and designed to solve real business problems.",
    chips: ["Full Stack", "API Design", "Microservices"],
    link: { href: "/services/custom-software-development", label: "Learn more →" },
  },
  {
    icon: "📱",
    index: "02",
    title: "Mobile App Development",
    desc: "Cross platform and native mobile applications that deliver seamless user experiences on iOS and Android with high performance.",
    chips: ["React Native", "Flutter", "iOS / Android"],
    link: { href: "/services/mobile-app-development", label: "Learn more →" },
  },
  {
    icon: "🌐",
    index: "03",
    title: "Web Development",
    desc: "Modern, responsive web applications and websites built with cutting edge frameworks fast, accessible, and conversion optimized.",
    chips: ["Next.js", "React", "TypeScript"],
    link: { href: "/services/web-development", label: "Learn more →" },
  },
  {
    icon: "☁️",
    index: "04",
    title: "Cloud Solutions",
    desc: "End to end cloud architecture, migration, and DevOps secure, resilient infrastructure that scales with your business.",
    chips: ["AWS", "GCP", "Docker / K8s"],
    link: { href: "/services/cloud-devops", label: "Learn more →" },
  },
  {
    icon: "🤖",
    index: "05",
    title: "AI Solutions",
    desc: "Transform raw data into actionable business intelligence dashboards, ML models, pipelines, and predictive analytics.",
    chips: ["Python", "ML Models", "Automation"],
    link: { href: "/services/ai-solutions", label: "Learn more →" },
  },
  {
    icon: "�",
    index: "06",
    title: "E-commerce Development",
    desc: "Build online stores and marketplaces with secure payment integration, inventory management, and conversion-optimized designs.",
    chips: ["Next.js", "Stripe", "PostgreSQL"],
    link: { href: "/services/ecommerce-development", label: "Learn more →" },
  },
];

function SpotlightCard({ card }: { card: (typeof cards)[0] }) {
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    // spotlight CSS vars
    e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
    // 3D tilt
    applyTilt(e, 9, 16);
  };

  return (
    <article
      className={`${styles.spotlightCard} tilt-card`}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
      data-reveal
    >
      <div>
        <div className={styles.cardTop}>
          <div className={styles.cardIcon}>{card.icon}</div>
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
      { 
        threshold: 0.02,
        rootMargin: "0px 0px 40px 0px"
      }
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
            We offer a full range of software development services, from ideation
            to deployment, tailored to your business goals and built for long-term
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
