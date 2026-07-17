import type { Publication } from "@/lib/content";
import styles from "./Publications.module.css";

export default function Publications({ items }: { items: Publication[] }) {
  if (items.length === 0) return null;

  return (
    <ul className={styles.list}>
      {items.map((publication) => (
        <li key={publication.link}>
          <a href={publication.link} target="_blank" rel="noopener noreferrer">
            {publication.title}
          </a>
        </li>
      ))}
    </ul>
  );
}
