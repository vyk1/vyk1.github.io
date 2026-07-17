import Image from "next/image";
import Link from "next/link";
import Mdx from "@/components/Mdx";
import PageShell from "@/components/PageShell";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import ProjectCard from "@/components/ProjectCard";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Publications from "@/components/Publications";
import { getDictionary, type Lang } from "@/lib/i18n";
import {
  getAllExperience,
  getFeaturedProjects,
  getPublications,
  getSkills,
  getSobreContent,
} from "@/lib/content";
import styles from "../../app/page.module.css";

export default async function HomeContent({ lang }: { lang: Lang }) {
  const dict = getDictionary(lang);
  const basePath = lang === "en" ? "/en/projetos" : "/projetos";
  const currentPath = lang === "en" ? "/en" : "/";

  const featuredProjects = getFeaturedProjects();
  const skills = getSkills();
  const experience = getAllExperience();
  const publications = await getPublications();
  const sobreContent = getSobreContent(lang);

  return (
    <PageShell lang={lang} currentPath={currentPath}>
      <Hero lang={lang} />

      <section className={styles.bottom}>
        <div className={styles.bottomImage}>
          <Image src="/images/fur-on-canvas.jpg" alt="Dalila, Estelar, Freya e Tinininha" fill />
        </div>
        <p className={styles.bottomCaption}>Dalila, Estelar, Freya and Tinininha - Fur on Canvas, 2025</p>
      </section>
    </PageShell>
  );
}
