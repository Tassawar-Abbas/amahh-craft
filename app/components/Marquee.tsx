import styles from "./Marquee.module.css";

const items = [
  "Artificial Intelligence",
  "Machine Learning",
  "Cloud Solutions",
  "IoT Development",
  "AR & VR",
  "Blockchain",
  "Data Analytics",
  "Web Development",
  "Mobile Apps",
  "Cybersecurity",
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
