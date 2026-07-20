import PageShell from "@/components/PageShell";
import Mdx from "@/components/Mdx";
import type { Post } from "@/lib/content";
import type { Lang } from "@/lib/i18n";
import styles from "../../app/blog/[slug]/page.module.css";

export default function PostDetailContent({ lang, post }: { lang: Lang; post: Post }) {
  const currentPath = lang === "en" ? `/en/blog/${post.slug}` : `/blog/${post.slug}`;

  return (
    <PageShell lang={lang} currentPath={currentPath}>
      <div className={styles.header}>
        <h1>{post.title}</h1>
        <div className={styles.meta}>
          <span>{post.date}</span>
          {post.tags.map((tag) => (
            <span key={tag}>#{tag}</span>
          ))}
        </div>
      </div>
      <div className={styles.prose}>
        <Mdx source={post.body} />
      </div>
    </PageShell>
  );
}
