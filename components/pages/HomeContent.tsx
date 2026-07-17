import Image from "next/image";
import PageShell from "@/components/PageShell";
import Hero from "@/components/Hero";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import { getDictionary, type Lang } from "@/lib/i18n";
import { getAllExperience } from "@/lib/content";
import styles from "../../app/page.module.css";

export default async function HomeContent({ lang }: { lang: Lang }) {
  const dict = getDictionary(lang);
  const currentPath = lang === "en" ? "/en" : "/";

  const experience = getAllExperience(lang);

  return (
    <PageShell lang={lang} currentPath={currentPath}>
      <Hero lang={lang} />
      <section id="experiencia" className={styles.section}>
        <h2 className={styles.sectionTitle}>{dict.sections.experiencia}</h2>
        <ExperienceTimeline items={experience} />
      </section>

      <section className={styles.bottom}>
        <div className={styles.bottomImage}>
          <Image src="/images/fur-on-canvas.jpg" alt="Dalila, Estelar, Freya e Tinininha" fill />
        </div>
        <p className={styles.bottomCaption}>Dalila, Estelar, Freya and Tinininha - Fur on Canvas, 2025</p>
      </section>
    </PageShell>
  );
}
