import PageShell from "@/components/PageShell";
import ProjectsGrid from "@/components/ProjectsGrid";
import { getAllProjects } from "@/lib/content";
import { getDictionary, type Lang } from "@/lib/i18n";
import styles from "../../app/projetos/page.module.css";

export default function ProjetosContent({ lang }: { lang: Lang }) {
  const dict = getDictionary(lang);
  const projects = getAllProjects();
  const basePath = lang === "en" ? "/en/projetos" : "/projetos";
  const currentPath = lang === "en" ? "/en/projetos" : "/projetos";

  return (
    <PageShell lang={lang} currentPath={currentPath} width="wide">
      <h1 className={styles.title}>{dict.projetosPage.title}</h1>
      <ProjectsGrid projects={projects} basePath={basePath} todosLabel={dict.projetosPage.todos} />
    </PageShell>
  );
}
