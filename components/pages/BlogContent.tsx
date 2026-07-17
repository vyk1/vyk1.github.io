import Link from "next/link";
import PageShell from "@/components/PageShell";
import { getAllPosts } from "@/lib/content";
import { getDictionary, type Lang } from "@/lib/i18n";
import styles from "../../app/blog/page.module.css";

export default function BlogContent({ lang }: { lang: Lang }) {
  const dict = getDictionary(lang);
  const posts = getAllPosts();
  const basePath = lang === "en" ? "/en/blog" : "/blog";
  const currentPath = lang === "en" ? "/en/blog" : "/blog";

  return (
    <PageShell lang={lang} currentPath={currentPath}>
      <h1 className={styles.title}>{dict.blogPage.title}</h1>
      <ul className={styles.list}>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`${basePath}/${post.slug}`} className={styles.postTitle}>
              {post.title}
            </Link>
            <div className={styles.meta}>
              <span>{post.date}</span>
              {post.tags.map((tag) => (
                <span key={tag}>#{tag}</span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </PageShell>
  );
}
