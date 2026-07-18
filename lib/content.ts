import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content");

export type Project = {
  slug: string;
  title: string;
  description: string;
  stack: string[];
  image: string | null;
  demo: { url: string; extension: string } | null;
  repoUrl: string | null;
  liveUrl: string | null;
  featured: boolean;
  order: number;
  body: string;
};

export type Experience = {
  slug: string;
  company: string;
  role: string;
  startDate: string | null;
  endDate: string | null;
  highlights: string[];
  stack: string[];
};

export type Post = {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  body: string;
};

// Frontmatter usa convenção `./arquivo.ext` relativa à pasta do projeto — os
// assets reais vivem em public/projects/<slug>/ (ver README de conteúdo).
const resolveAsset = (slug: string, relativePath: string | undefined | null) => {
  if (!relativePath) return null;
  const filename = relativePath.replace(/^\.\//, "");
  return `/projects/${slug}/${filename}`;
};

// Campos que não mudam por idioma (stack, links, mídia, ordem) sempre vêm do
// index.mdx canônico (PT). title/description/corpo vêm do index.en.mdx quando
// `lang === "en"` e o arquivo existir — cai pro PT (index.mdx) se não existir.
export function getAllProjects(lang: "pt" | "en" = "pt"): Project[] {
  const projectsDir = path.join(CONTENT_DIR, "projects");
  const slugs = fs.readdirSync(projectsDir).filter((entry) =>
    fs.statSync(path.join(projectsDir, entry)).isDirectory()
  );

  const projects = slugs.map((slug) => {
    const filePath = path.join(projectsDir, slug, "index.mdx");
    const { data, content } = matter(fs.readFileSync(filePath, "utf8"));
    const image = resolveAsset(slug, data.image);
    const demoUrl = resolveAsset(slug, data.demo);

    let title = data.title;
    let description = data.description ?? "";
    let body = content;

    const enFilePath = path.join(projectsDir, slug, "index.en.mdx");
    if (lang === "en" && fs.existsSync(enFilePath)) {
      const en = matter(fs.readFileSync(enFilePath, "utf8"));
      title = en.data.title ?? title;
      description = en.data.description ?? description;
      body = en.content;
    }

    return {
      slug,
      title,
      description,
      stack: data.stack ?? [],
      image,
      demo: demoUrl ? { url: demoUrl, extension: (data.demo as string).split(".").pop() ?? "" } : null,
      repoUrl: data.repoUrl ?? null,
      liveUrl: data.liveUrl ?? null,
      featured: data.featured ?? false,
      order: data.order ?? 0,
      body,
    } satisfies Project;
  });

  return projects.sort((a, b) => a.order - b.order);
}

export function getProjectBySlug(slug: string, lang: "pt" | "en" = "pt"): Project | null {
  return getAllProjects(lang).find((project) => project.slug === slug) ?? null;
}

export function getFeaturedProjects(lang: "pt" | "en" = "pt"): Project[] {
  const all = getAllProjects(lang);
  const featured = all.filter((project) => project.featured);
  return featured.length > 0 ? featured : all.slice(0, 3);
}

export function getAllExperience(lang: "pt" | "en" = "pt"): Experience[] {
  const experienceDir = path.join(CONTENT_DIR, "experience");
  const files = fs.readdirSync(experienceDir).filter((file) => file.endsWith(".mdx"));

  // Frontmatter tem os campos em PT + variantes opcionais `*_en` — cai pro PT
  // se a tradução ainda não existir, em vez de quebrar.
  const experience = files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const { data } = matter(fs.readFileSync(path.join(experienceDir, file), "utf8"));
    const en = lang === "en";

    return {
      slug,
      company: (en && data.company_en) || data.company,
      role: (en && data.role_en) || data.role,
      startDate: data.startDate ? String(data.startDate) : null,
      endDate: data.endDate ? String(data.endDate) : null,
      highlights: (en && data.highlights_en) || data.highlights || [],
      stack: data.stack ?? [],
    } satisfies Experience;
  });

  return experience.sort((a, b) => (b.startDate ?? "").localeCompare(a.startDate ?? ""));
}

export function getAllPosts(): Post[] {
  const postsDir = path.join(CONTENT_DIR, "posts");
  const files = fs.readdirSync(postsDir).filter((file) => file.endsWith(".mdx"));

  const posts = files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const { data, content } = matter(fs.readFileSync(path.join(postsDir, file), "utf8"));

    return {
      slug,
      title: data.title,
      date: String(data.date),
      tags: data.tags ?? [],
      body: content,
    } satisfies Post;
  });

  return posts.sort((a, b) => b.date.localeCompare(a.date));
}

export function getPostBySlug(slug: string): Post | null {
  return getAllPosts().find((post) => post.slug === slug) ?? null;
}

export function getSobreContent(lang: "pt" | "en" = "pt"): string {
  const filename = lang === "en" ? "sobre.en.mdx" : "sobre.mdx";
  const filePath = path.join(CONTENT_DIR, "pages", filename);
  const { content } = matter(fs.readFileSync(filePath, "utf8"));
  return content;
}

export function getSkills(): string[] {
  const skills = new Set<string>();
  getAllProjects().forEach((project) => project.stack.forEach((tech) => skills.add(tech)));
  getAllExperience().forEach((experience) => experience.stack.forEach((tech) => skills.add(tech)));
  return Array.from(skills).sort((a, b) => a.localeCompare(b));
}

export type Publication = {
  title: string;
  link: string;
};

// Fetch em BUILD TIME (Server Component / generateStaticParams), não client-side
// como na versão anterior — evita flash de conteúdo vazio e funciona sem JS.
export async function getPublications(): Promise<Publication[]> {
  try {
    // `force-cache` (default) é o que permite o fetch rodar em build time e o
    // resultado virar parte do HTML estático — `no-store` forçaria a rota
    // inteira a virar dinâmica, o que quebra o `output: "export"`.
    const res = await fetch("https://raw.githubusercontent.com/vyk1/vyk1/master/info.json", {
      cache: "force-cache",
    });
    if (!res.ok) return [];
    const json = await res.json();
    return json?.publications ?? [];
  } catch {
    return [];
  }
}
