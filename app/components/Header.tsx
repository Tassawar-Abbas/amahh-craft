"use client";

import { useState } from "react";
import styles from "./Header.module.css";

const navLinks = [
  { href: "#top", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={styles.siteHeader}>
      <div className="container">
        <div className={styles.nav}>
          <a href="#top" className={styles.brand} aria-label="Amahh Craft home">
            <div className={styles.brandMark} />
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
