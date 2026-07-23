"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Header.module.css";

const navLinks = [
  { href: "#top", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#proprietary", label: "Workistan" },
  { href: "#estimator", label: "Estimator" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "gold">("dark");

  const closeMenu = () => setMenuOpen(false);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "gold" : "dark";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
  };

  return (
    <header className={styles.siteHeader}>
      <div className="container">
        <div className={styles.nav}>
          <a href="#top" className={styles.brand} aria-label="Amahh Craft home">
            <div className={styles.brandMark}>
              <Image
                src="/image.png"
                alt="Amahh Logo"
                width={42}
                height={42}
                style={{ borderRadius: "12px", objectFit: "cover" }}
                priority
              />
            </div>
            <div className={styles.brandText}>
              <span>Amahh</span>
              <small>Innovative Software Solutions</small>
            </div>
          </a>

          <nav className={styles.navLinks} aria-label="Primary">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className={styles.navActions}>
            <button
              type="button"
              className={styles.themeBtn}
              onClick={toggleTheme}
              title={`Switch to ${theme === "dark" ? "Light theme" : "Dark theme"}`}
            >
              {theme === "dark" ? "☀️ Light Theme" : "🌙 Dark Theme"}
            </button>
            <a href="#contact" className="btn btn-primary">
              Get in Touch
            </a>
            <button
              className={styles.menuToggle}
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className={styles.mobileMenu}>
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            ))}
            <a href="#contact" onClick={closeMenu}>
              Get in Touch
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
