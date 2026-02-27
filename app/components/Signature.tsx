"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./Signature.module.css";

type FilterKey = "All" | "Web" | "Mobile" | "Enterprise" | "AI";

const filters: FilterKey[] = ["All", "Web", "Mobile", "Enterprise", "AI"];

const projects = [
  {
    title: "Global Airport Taxi",
    desc: "A seamless transportation booking system with real-time tracking, driver management, and automated dispatch for airport transfers worldwide.",
    tags: ["Web", "Mobile"],
    chips: ["React", "Node.js", "Real-time", "Maps API"],
    size: "large",
  },
  {
    title: "Tamadres",
    desc: "Online bookstore and cultural platform that aims to remind readers that books are products of culture — with curated collections and community features.",
    tags: ["Web"],
    chips: ["Next.js", "E-commerce", "CMS"],
    size: "normal",
  },
  {
    title: "Partner Dashboard Management",
    desc: "All-in-one platform for coaches, course creators, and community builders to share knowledge, engage audiences, and monetize content.",
    tags: ["Enterprise", "Web"],
    chips: ["Dashboard", "Analytics", "Payments"],
    size: "tall",
  },
  {
    title: "Member Learning & Events",
    desc: "Wisdome's dashboard offers a centralized hub for creators to manage courses, events, and community interactions with audience engagement tools.",
    tags: ["Enterprise", "Web"],
    chips: ["LMS", "Events", "Community"],
    size: "normal",
  },
  {
    title: "Wisdome Mobile App",
    desc: "Mobile-first learning experience for community members — course access, live events, challenges, and social engagement on iOS and Android.",
    tags: ["Mobile"],
    chips: ["React Native", "Push Notifications", "Offline"],
    size: "normal",
  },
];

export default function Signature() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("All");
  const headRef = useRef<HTMLDivElement>(null);
  const leadRef = useRef<HTMLParagraphElement>(null);

  const filtered = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.tags.includes(activeFilter));

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

    const bentos = document.querySelectorAll(`.${styles.bentoCard}`);
    [headRef.current, leadRef.current, ...Array.from(bentos)].forEach((el) => {
      if (el) {
        el.setAttribute("data-reveal", "");
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-head">
          <div ref={headRef} data-reveal>
            <span className="eyebrow">Our Creations at Amahh</span>
            <h2 className="title-lg">
              Dive into our portfolio — blending imagination and impact.
            </h2>
          </div>
          <p className="lead" ref={leadRef} data-reveal>
            From transportation platforms to e-learning ecosystems — we build
            digital products that solve real problems and create lasting value
            for businesses and their users.
          </p>
        </div>

        {/* Filter tabs */}
        <div className={styles.filterRow}>
          {filters.map((f) => (
            <button
              key={f}
              className={`${styles.filterBtn} ${activeFilter === f ? styles.filterActive : ""}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className={styles.bento}>
          {filtered.map((project, i) => (
            <article
              key={project.title}
              className={`${styles.bentoCard} ${project.size === "large" ? styles.bentoLarge : ""} ${project.size === "tall" ? styles.bentoTall : ""} ${i === 0 ? styles.bentoAccent : ""}`}
              data-reveal
            >
              <div className={styles.projectHeader}>
                <span className={styles.projectTag}>{project.tags[0]}</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <div className="chip-row" style={{ marginTop: "16px" }}>
                {project.chips.map((chip) => (
                  <span key={chip} className="chip">{chip}</span>
                ))}
              </div>
              <a href="#contact" className={styles.projectLink}>View Details →</a>
              {project.size === "large" && (
                <div className={styles.shapeStack}><i /><i /><i /></div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
