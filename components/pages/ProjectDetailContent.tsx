import Image from "next/image";
import PageShell from "@/components/PageShell";
import Mdx from "@/components/Mdx";
import type { Project } from "@/lib/content";
import { getDictionary, type Lang } from "@/lib/i18n";
import styles from "../../app/projetos/[slug]/page.module.css";

const VIDEO_EXTENSIONS = ["webm", "mp4"];

export default function ProjectDetailContent({ lang, project }: { lang: Lang; project: Project }) {
  const dict = getDictionary(lang);
  const { title, description, stack, repoUrl, liveUrl, image, demo, body } = project;
  const isVideo = demo && VIDEO_EXTENSIONS.includes(demo.extension);
  const currentPath = lang === "en" ? `/en/projetos/${project.slug}` : `/projetos/${project.slug}`;

  return (
    <PageShell lang={lang} currentPath={currentPath} width="wide">
      <div className={styles.header}>
        <h1>{title}</h1>
        <p className={styles.description}>{description}</p>
      </div>

      {(demo || image) && (
        <div className={styles.media}>
          {isVideo && demo ? (
            <video src={demo.url} autoPlay loop muted playsInline />
          ) : demo ? (
            <Image src={demo.url} alt={`Demo de ${title}`} fill unoptimized />
          ) : image ? (
            <Image src={image} alt={`Screenshot de ${title}`} fill />
          ) : null}
        </div>
      )}

      {stack.length > 0 && (
        <div className={styles.stack}>
          {stack.map((tech) => (
            <span key={tech} className={styles.stackTag}>
              {tech}
            </span>
          ))}
        </div>
      )}

      <div className={styles.links}>
        {repoUrl && (
          <a href={repoUrl} target="_blank" rel="noopener noreferrer">
            {dict.projectDetail.repo}
          </a>
        )}
        {liveUrl && (
          <a href={liveUrl} target="_blank" rel="noopener noreferrer">
            {dict.projectDetail.live}
          </a>
        )}
      </div>

      <div className={styles.prose}>
        <Mdx source={body} />
      </div>
    </PageShell>
  );
}
