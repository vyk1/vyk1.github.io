import PageShell from "@/components/PageShell";
import Mdx from "@/components/Mdx";
import { getSobreContent } from "@/lib/content";
import { getDictionary, type Lang } from "@/lib/i18n";
import styles from "../../app/sobre/page.module.css";

export default function SobreContent({ lang }: { lang: Lang }) {
  const dict = getDictionary(lang);
  const content = getSobreContent(lang);
  const currentPath = lang === "en" ? "/en/sobre" : "/sobre";

  return (
    <PageShell lang={lang} currentPath={currentPath}>
      <h1 className={styles.title}>{dict.sobrePage.title}</h1>
      <div className={styles.prose}>
        <Mdx source={content} />
      </div>
    </PageShell>
  );
}
