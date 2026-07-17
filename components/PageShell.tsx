import type { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import type { Lang } from "@/lib/i18n";
import styles from "./PageShell.module.css";

type PageShellProps = {
  children: ReactNode;
  lang: Lang;
  currentPath: string;
  // "narrow" (960px) é o container padrão do site; "wide" (1200px) é usado só
  // na grid de /projetos, que precisa de mais espaço horizontal. O mockup
  // original (760px) vale só pro bloco do Hero (ver Hero.module.css).
  width?: "narrow" | "wide";
};

export default function PageShell({ children, lang, currentPath, width = "narrow" }: PageShellProps) {
  return (
    <div
      className={styles.container}
      style={{ maxWidth: width === "wide" ? "var(--container-wide)" : "var(--container-narrow)" }}
    >
      <Header lang={lang} currentPath={currentPath} />
      {children}
      <Footer />
    </div>
  );
}
