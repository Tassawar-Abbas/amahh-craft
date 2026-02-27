"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import styles from "./Reviews.module.css";

const testimonials = [
  {
    quote:
      "Working with this team was an absolute pleasure. They delivered our project on time and exceeded our expectations in terms of quality and functionality.",
    avatar: "SJ",
    name: "Sarah Johnson",
    role: "TechCorp Inc.",
    heading: "On time, on point, exceptional",
    body: "Their attention to technical detail and communication throughout the project made the entire experience seamless and professional.",
    stat1Label: "Project type",
    stat1: "Custom enterprise software platform",
    stat2Label: "What stood out",
    stat2: "On-time delivery, quality code, transparent process",
  },
  {
    quote:
      "The mobile app they developed for us has received outstanding feedback from our users. Their attention to detail and user experience expertise is unmatched.",
    avatar: "MC",
    name: "Michael Chen",
    role: "Innovate Solutions",
    heading: "Outstanding UX, user-loved app",
    body: "The team understood our users' needs deeply and translated them into a polished, intuitive mobile experience that our customers love.",
    stat1Label: "Project type",
    stat1: "Cross-platform mobile application",
    stat2Label: "What stood out",
    stat2: "UX expertise, performance, user feedback scores",
  },
  {
    quote:
      "They transformed our outdated systems into a modern, efficient platform. Their team was responsive, professional, and truly understood our business needs.",
    avatar: "ER",
    name: "Emily Rodriguez",
    role: "Global Retail Group",
    heading: "Modernized, efficient, scalable",
    body: "Our conversion rate has skyrocketed since the platform relaunch. They didn't just build software — they understood our business and delivered measurable results.",
    stat1Label: "Project type",
    stat1: "Legacy system modernization & re-platform",
    stat2Label: "What stood out",
    stat2: "Business understanding, execution speed, ROI delivered",
  },
  {
    quote:
      "The custom healthcare solution they built has streamlined our operations and improved patient care. Their expertise in both technology and healthcare was invaluable.",
    avatar: "DK",
    name: "David Kim",
    role: "HealthTech Solutions",
    heading: "Domain expertise that delivered ROI",
    body: "Rare to find a team that combines deep technical skills with genuine understanding of a regulated, high-stakes industry like healthcare.",
    stat1Label: "Project type",
    stat1: "Healthcare operations & patient management",
    stat2Label: "What stood out",
    stat2: "Domain knowledge, compliance, impactful outcomes",
  },
  {
    quote:
      "The website redesign exceeded all our expectations. Our conversion rate has increased by 40% since launch, and customer feedback has been overwhelmingly positive.",
    avatar: "JW",
    name: "James Wilson",
    role: "Creative Studios",
    heading: "+40% conversion rate uplift",
    body: "The team's combination of design thinking and engineering execution created a website that doesn't just look great — it converts visitors into customers.",
    stat1Label: "Project type",
    stat1: "Website redesign & conversion optimization",
    stat2Label: "What stood out",
    stat2: "Design quality, performance, measurable business results",
  },
];

export default function Reviews() {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const leadRef = useRef<HTMLParagraphElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const controlsRef = useRef<HTMLDivElement>(null);

  const goTo = useCallback((index: number) => {
    setCurrent(((index % testimonials.length) + testimonials.length) % testimonials.length);
  }, []);

  const restartAuto = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 4500);
  }, []);

  useEffect(() => {
    restartAuto();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [restartAuto]);

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

    [headRef.current, leadRef.current, wrapRef.current, controlsRef.current].forEach((el) => {
      if (el) {
        el.setAttribute("data-reveal", "");
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  const handleNav = (dir: number) => {
    goTo(current + dir);
    restartAuto();
  };

  return (
    <section className="section" id="reviews">
      <div className="container">
        <div className="section-head">
          <div ref={headRef} data-reveal>
            <span className="eyebrow">Client Reviews</span>
            <h2 className="title-lg">Don&apos;t just take our word for it.</h2>
          </div>
          <p className="lead" ref={leadRef} data-reveal>
            Here&apos;s what our clients have to say about working with us — real
            outcomes, real feedback, and the relationships we&apos;ve built along the way.
          </p>
        </div>

        <div className={styles.testimonialWrap} ref={wrapRef} data-reveal>
          <div className={styles.testimonialTrack} style={{ transform: `translateX(-${current * 100}%)` }}>
            {testimonials.map((item, i) => (
              <article key={i} className={styles.testimonial}>
                <div className={styles.quotePanel}>
                  <div className={styles.quoteMark}>&ldquo;</div>
                  <p>{item.quote}</p>
                  <div className={styles.person}>
                    <div className={styles.avatar}>{item.avatar}</div>
                    <div>
                      <strong>{item.name}</strong>
                      <small>{item.role}</small>
                    </div>
                  </div>
                </div>
                <div className={styles.resultCard}>
                  <div>
                    <div className={styles.rating}>★★★★★</div>
                    <h3>{item.heading}</h3>
                    <p className="lead" style={{ maxWidth: "none", marginTop: "10px" }}>
                      {item.body}
                    </p>
                  </div>
                  <div className={styles.resultTop}>
                    <div className={styles.miniResult}>
                      <b>{item.stat1Label}</b>
                      <span>{item.stat1}</span>
                    </div>
                    <div className={styles.miniResult}>
                      <b>{item.stat2Label}</b>
                      <span>{item.stat2}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className={styles.testimonialControls} ref={controlsRef} data-reveal>
          <div className={styles.dots}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === current ? styles.dotActive : ""}`}
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => { goTo(i); restartAuto(); }}
              />
            ))}
          </div>
          <div className={styles.controlBtns}>
            <button className={styles.iconBtn} aria-label="Previous" onClick={() => handleNav(-1)}>←</button>
            <button className={styles.iconBtn} aria-label="Next" onClick={() => handleNav(1)}>→</button>
          </div>
        </div>
      </div>
    </section>
  );
}
