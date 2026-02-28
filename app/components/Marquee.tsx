import styles from "./Marquee.module.css";

const items = [
  "Machine Learning",
  "Web Development",
  "Mobile Apps",
];

export default function Marquee() {
  const doubled = [...items, ...items];

  return (
    <div className={styles.marqueeWrap}>
      <div className={styles.marquee}>
        {doubled.map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
    </div>
  );
}
