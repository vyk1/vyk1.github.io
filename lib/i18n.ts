export type Lang = "pt" | "en";

export const LANGS: Lang[] = ["pt", "en"];

type Dictionary = {
  nav: {
    sobre: string;
    projetos: string;
    experiencia: string;
    posts: string;
    downloadPdf: string;
  };
  hero: {
    eyebrow: string;
    role: string;
    desc: string;
    verProjetos: string;
    stats: { value: string; label: string }[];
  };
  sections: {
    sobre: string;
    skills: string;
    projetosDestaque: string;
    experiencia: string;
    publicacoes: string;
    verTodos: string;
  };
  projetosPage: {
    title: string;
    todos: string;
    repo: string;
    live: string;
  };
  blogPage: {
    title: string;
  };
  sobrePage: {
    title: string;
  };
  projectDetail: {
    repo: string;
    live: string;
  };
};

export const dictionaries: Record<Lang, Dictionary> = {
  pt: {
    nav: {
      sobre: "Sobre",
      projetos: "Projetos",
      experiencia: "Experiência",
      posts: "Posts",
      downloadPdf: "Baixar PDF",
    },
    hero: {
      eyebrow: "Backend Engineer",
      role: "Java · AWS · Open Source · Sistemas distribuídos",
      desc: "Motores de conciliação financeira que eliminam trabalho manual em escala — e baixo em Drop C pra desligar a cabeça depois do expediente.",
      verProjetos: "Ver projetos",
      stats: [
        { value: "19k+", label: "inconsistências/mês processadas" },
        { value: "R$3M", label: "em correções desde o deploy" },
        { value: "15", label: "processos automatizados (CGE/SC)" },
      ],
    },
    sections: {
      sobre: "Sobre",
      skills: "Skills",
      projetosDestaque: "Projetos em destaque",
      experiencia: "Experiência",
      publicacoes: "Publicações",
      verTodos: "Ver todos os projetos →",
    },
    projetosPage: { title: "Projetos", todos: "todos", repo: "repo →", live: "live →" },
    blogPage: { title: "Posts" },
    sobrePage: { title: "Sobre" },
    projectDetail: { repo: "Repositório →", live: "Ver no ar →" },
  },
  en: {
    nav: {
      sobre: "About",
      projetos: "Projects",
      experiencia: "Experience",
      posts: "Posts",
      downloadPdf: "Download PDF",
    },
    hero: {
      eyebrow: "Backend Engineer",
      role: "Java · AWS · Open Source · Distributed systems",
      desc: "Financial reconciliation engines that remove manual work at scale — and low Drop C bass to switch my brain off after hours.",
      verProjetos: "See projects",
      stats: [
        { value: "19k+", label: "inconsistencies/month processed" },
        { value: "R$3M", label: "in corrections since deployment" },
        { value: "15", label: "automated processes (CGE/SC)" },
      ],
    },
    sections: {
      sobre: "About",
      skills: "Skills",
      projetosDestaque: "Featured projects",
      experiencia: "Experience",
      publicacoes: "Publications",
      verTodos: "See all projects →",
    },
    projetosPage: { title: "Projects", todos: "all", repo: "repo →", live: "live →" },
    blogPage: { title: "Posts" },
    sobrePage: { title: "About" },
    projectDetail: { repo: "Repository →", live: "Live site →" },
  },
};

export const getDictionary = (lang: Lang) => dictionaries[lang];

// Constrói o href pro par PT/EN de uma mesma rota — usado no toggle do header.
export const localizedPath = (path: string, lang: Lang): string => {
  const withoutLangPrefix = path.replace(/^\/en/, "") || "/";
  if (lang === "pt") return withoutLangPrefix;
  return `/en${withoutLangPrefix === "/" ? "" : withoutLangPrefix}`;
};
