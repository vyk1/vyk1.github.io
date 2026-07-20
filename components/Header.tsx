import Link from "next/link";
import Logo from "./Logo";
import { getDictionary, localizedPath, type Lang } from "@/lib/i18n";
import styles from "./Header.module.css";

type HeaderProps = {
  lang: Lang;
  currentPath: string; // caminho sem prefixo de idioma, ex: "/", "/projetos"
};

export default function Header({ lang, currentPath }: HeaderProps) {
  const dict = getDictionary(lang);
  const home = lang === "en" ? "/en" : "/";
  const prefix = lang === "en" ? "/en" : "";

  const navItems = [
    { title: dict.nav.sobre, href: `${prefix}/sobre` },
    { title: dict.nav.projetos, href: `${prefix}/projetos` },
    { title: dict.nav.experiencia, href: `${home}#experiencia` },
    { title: dict.nav.posts, href: `${prefix}/blog` },
  ];

  const otherLang = lang === "pt" ? "en" : "pt";

  return (
    <nav className={styles.nav}>
      <Link href={home} className={styles.logoLink} aria-label="Victoria Botelho Martins - Início">
        <Logo size={36} />
      </Link>
      <div className={styles.links}>
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.title}
          </Link>
        ))}
        {/* iOS Safari ignora o atributo `download` em PDFs e abre o viewer
            nativo por cima da página inteira — target="_blank" garante que
            isso acontece numa aba nova, sem perder o site (nav incluído). */}
        <a
          href={`/cv/victoria-botelho-martins-${lang}.pdf`}
          download
          target="_blank"
          rel="noopener noreferrer"
        >
          {dict.nav.downloadPdf}
        </a>
        <Link href={localizedPath(currentPath, otherLang)}>{otherLang.toUpperCase()}</Link>
      </div>
    </nav>
  );
}
