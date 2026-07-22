"use client";

import styles from "./Marquee.module.css";

const items = [
  { label: "Next.js 14", icon: "⚡" },
  { label: "React Native", icon: "📱" },
  { label: "Python AI & ML", icon: "🤖" },
  { label: "Cloud Architecture", icon: "☁️" },
  { label: "Node.js Microservices", icon: "🚀" },
  { label: "TypeScript", icon: "🛡️" },
  { label: "Tailwind CSS", icon: "🎨" },
  { label: "AWS & Docker", icon: "🐋" },
  { label: "PostgreSQL & Redis", icon: "🗄️" },
];

export default function Marquee() {
  const doubled = [...items, ...items, ...items];

  return (
    <div className={styles.marqueeWrap}>
      <div className={styles.marquee}>
        {doubled.map((item, i) => (
          <span key={i} className={styles.marqueeItem}>
            <span className={styles.icon}>{item.icon}</span>
            <span>{item.label}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
