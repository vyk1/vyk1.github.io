// GitHub Pages não suporta redirects no servidor — este script roda depois do
// `next build` (output: "export") e cria stubs estáticos em out/projects/*
// que mandam quem cair nas URLs antigas (Gatsby) pra rota nova em /projetos/*.
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const OUT_DIR = path.join(ROOT, "out");
const SITE_URL = "https://vyk1.github.io";

const redirectHtml = (target) => `<!DOCTYPE html>
<html lang="pt-br">
<head>
<meta charset="utf-8">
<title>Redirecionando…</title>
<link rel="canonical" href="${SITE_URL}${target}">
<meta http-equiv="refresh" content="0; url=${target}">
<meta name="robots" content="noindex">
<script>location.replace(${JSON.stringify(target)});</script>
</head>
<body>
<p>Esta página foi movida para <a href="${target}">${target}</a>.</p>
</body>
</html>
`;

const writeRedirect = (outPath, target) => {
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, redirectHtml(target));
};

const slugs = fs
  .readdirSync(path.join(ROOT, "content", "projects"))
  .filter((entry) => fs.statSync(path.join(ROOT, "content", "projects", entry)).isDirectory());

writeRedirect(path.join(OUT_DIR, "projects", "index.html"), "/projetos/");
writeRedirect(path.join(OUT_DIR, "en", "projects", "index.html"), "/en/projetos/");

for (const slug of slugs) {
  writeRedirect(path.join(OUT_DIR, "projects", slug, "index.html"), `/projetos/${slug}/`);
  writeRedirect(path.join(OUT_DIR, "en", "projects", slug, "index.html"), `/en/projetos/${slug}/`);
}

console.log(`generate-redirects: ${slugs.length * 2 + 2} stubs criados em out/`);
