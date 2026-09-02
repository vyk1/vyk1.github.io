# vyk1.github.io

Portfólio pessoal da Victoria Botelho Martins — Next.js (App Router), export estático, conteúdo em MDX, PT-BR e EN.

Site: https://vyk1.github.io

## Stack

- **Next.js 14** (App Router) com `output: "export"` — gera site 100% estático em `out/`, sem servidor.
- **MDX** (`gray-matter` + `next-mdx-remote`) para o conteúdo de projetos, posts, experiência e páginas.
- **react-pdf** para gerar o currículo em PDF a partir dos mesmos dados de `content/`.
- CSS Modules, sem framework de UI.

## Rodando localmente

```bash
npm install
npm run dev
```

Abre em [http://localhost:3000](http://localhost:3000).

## Estrutura

```
app/            rotas (App Router) — PT na raiz, EN espelhado em app/en/*
components/     componentes de UI e components/pages/*Content.tsx (conteúdo de cada rota)
content/        MDX + frontmatter: projects/, posts/, experience/, pages/
lib/            leitura de content/ (content.ts), i18n (i18n.ts), formatação (format.ts)
public/         assets estáticos — imagens de projetos em public/projects/<slug>/
scripts/        generate-cv.tsx (currículo em PDF) e generate-redirects.mjs (redirects pós-build)
```

## Conteúdo

Cada projeto vive em `content/projects/<slug>/index.mdx` (canônico, PT) e opcionalmente
`index.en.mdx` (título/descrição/corpo em EN — os demais campos do frontmatter, como stack e
links, são sempre lidos do `.mdx` em PT). Imagens/vídeos referenciados no frontmatter (`image`,
`demo`) resolvem para `public/projects/<slug>/<arquivo>`.

Posts (`content/posts/*.mdx`) e experiência (`content/experience/*.mdx`) seguem o mesmo padrão
de frontmatter + corpo em Markdown. Ver `lib/content.ts` para os campos esperados de cada tipo.

## Scripts

| comando               | o que faz                                                        |
| ---------------------- | ----------------------------------------------------------------- |
| `npm run dev`           | servidor de desenvolvimento                                       |
| `npm run build`         | export estático (`next build` → `out/`) + `postbuild` (redirects) |
| `npm run lint`          | ESLint                                                             |
| `npm run generate:cv`   | gera `public/cv/*.pdf` (PT/EN) a partir de `content/`             |

## Deploy

Push em `main` dispara o workflow [`.github/workflows/gatsby-build-deploy.yml`](.github/workflows/gatsby-build-deploy.yml)
(nome legado de quando o site era em Gatsby), que builda e publica `out/` na branch `gh-pages`
via `peaceiris/actions-gh-pages` — servido em `vyk1.github.io` pelo GitHub Pages.

URLs antigas (`/projects/<slug>/`, de antes da migração pra Next.js) continuam funcionando: o
`postbuild` (`scripts/generate-redirects.mjs`) gera stubs estáticos que redirecionam pra
`/projetos/<slug>/`, já que GitHub Pages não suporta redirects no servidor.
