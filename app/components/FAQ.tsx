"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./FAQ.module.css";
import { applyTilt, resetTilt } from "@/app/lib/tilt";

export default function FAQ() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const headRef = useRef<HTMLDivElement>(null);
  const leadRef = useRef<HTMLParagraphElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

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

    [headRef.current, leadRef.current, introRef.current, listRef.current].forEach((el) => {
      if (el) {
        el.setAttribute("data-reveal", "");
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-head">
          <div ref={headRef} data-reveal>
            <span className="eyebrow">Contact Us</span>
            <h2 className="title-lg">
              Have a project in mind? Let&apos;s talk.
            </h2>
          </div>
          <p className="lead" ref={leadRef} data-reveal>
            Fill out the form and our team will get back to you within 24 hours.
            We&apos;d love to hear about your ideas and explore how we can help.
          </p>
        </div>

        <div className={styles.faqGrid}>
          {/* Contact info panel */}
          <div className={styles.faqIntro} ref={introRef} data-reveal>
            <h3>Get in Touch</h3>
            <p className="lead" style={{ maxWidth: "none" }}>
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
                  <a href="https://wa.me/923249274607" target="_blank" rel="noopener noreferrer">
                    +92 324 9274607
                  </a>
                 
                </div>
              </div>
            </div>

            <div className={styles.contactPills}>
              <span className={styles.contactPill}>Custom Software</span>
              <span className={styles.contactPill}>Mobile Apps</span>
              <span className={styles.contactPill}>Cloud & AI</span>
              <span className={styles.contactPill}>Web Development</span>
            </div>
          </div>

          {/* Contact form */}
          <div
            className={`${styles.faqList} tilt-card`}
            ref={listRef}
            onMouseMove={(e) => applyTilt(e, 3, 6)}
            onMouseLeave={resetTilt}
            data-reveal
          >
            {sent ? (
              <div className={styles.successMsg}>
                <div className={styles.successIcon}>✓</div>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. Our team will get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.contactForm}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="subject">Subject</label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="Project inquiry, partnership..."
                    required
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell us about your project, goals, and timeline..."
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
