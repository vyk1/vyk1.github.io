import Link from "next/link";
import Logo from "./Logo";
import { getDictionary, type Lang } from "@/lib/i18n";
import styles from "./Hero.module.css";

export default function Hero({ lang }: { lang: Lang }) {
  const dict = getDictionary(lang);
  const projetosHref = lang === "en" ? "/en/projetos" : "/projetos";

  return (
    <section className={styles.hero}>
      <svg className={styles.bgCrease} viewBox="0 0 100 100">
        <line x1="10" y1="10" x2="90" y2="90" stroke="var(--color-text)" strokeWidth={0.5} />
        <line x1="90" y1="10" x2="10" y2="90" stroke="var(--color-text)" strokeWidth={0.5} />
        <line x1="50" y1="10" x2="50" y2="90" stroke="var(--color-text)" strokeWidth={0.5} />
        <line x1="10" y1="50" x2="90" y2="50" stroke="var(--color-text)" strokeWidth={0.5} />
      </svg>

      <div className={styles.heroBody}>
        <Logo size={84} />
        <div className={styles.heroText}>
          <div className={styles.eyebrow}>{dict.hero.eyebrow}</div>
          <h1>Victoria Botelho Martins</h1>
          <div className={styles.role}>{dict.hero.role}</div>
          <p className={styles.desc}>{dict.hero.desc}</p>
          <div className={styles.actions}>
            <Link href={projetosHref} className={`${styles.btn} ${styles.primary}`}>
              {dict.hero.verProjetos}
            </Link>
            <a
              href="https://github.com/vyk1"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.btn} ${styles.ghost}`}
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/vyk1"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.btn} ${styles.ghost}`}
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className={styles.stats}>
        {dict.hero.stats.map((stat) => (
          <div key={stat.label} className={styles.stat}>
            <b>{stat.value}</b>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
