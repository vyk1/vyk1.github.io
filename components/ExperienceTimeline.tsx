import type { Experience } from "@/lib/content";
import { formatDateRange } from "@/lib/format";
import styles from "./ExperienceTimeline.module.css";

export default function ExperienceTimeline({ items }: { items: Experience[] }) {
  if (items.length === 0) return null;

  return (
    <div className={styles.timeline}>
      {items.map((item) => (
        <div key={item.slug} className={styles.item}>
          <div className={styles.range}>{formatDateRange(item.startDate, item.endDate)}</div>
          <h3>{item.role}</h3>
          <div className={styles.company}>{item.company}</div>
          {item.highlights.length > 0 && (
            <ul className={styles.highlights}>
              {item.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          )}
          {item.stack.length > 0 && (
            <div className={styles.stack}>
              {item.stack.map((tech) => (
                <span key={tech} className={styles.stackTag}>
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
