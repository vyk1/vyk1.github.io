import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/content";
import styles from "./ProjectCard.module.css";

const VIDEO_EXTENSIONS = ["webm", "mp4"];

type ProjectCardProps = {
  project: Project;
  basePath?: string; // "/projetos" (pt) ou "/en/projetos" (en)
};

export default function ProjectCard({ project, basePath = "/projetos" }: ProjectCardProps) {
  const { title, description, stack, repoUrl, liveUrl, image, demo, slug } = project;
  const isVideo = demo && VIDEO_EXTENSIONS.includes(demo.extension);
  const detailHref = `${basePath}/${slug}`;

  return (
    <div className={styles.card}>
      <Link href={detailHref} className={styles.media}>
        {isVideo && demo ? (
          <video src={demo.url} autoPlay loop muted playsInline />
        ) : demo ? (
          // GIF: next/image com unoptimized preserva a animação
          <Image src={demo.url} alt={`Demo de ${title}`} fill loading="lazy" unoptimized />
        ) : image ? (
          <Image src={image} alt={`Screenshot de ${title}`} fill loading="lazy" />
        ) : null}
      </Link>
      <div className={styles.body}>
        <h3>
          <Link href={detailHref}>{title}</Link>
        </h3>
        <p className={styles.description}>{description}</p>
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
              repo →
            </a>
          )}
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              live →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
