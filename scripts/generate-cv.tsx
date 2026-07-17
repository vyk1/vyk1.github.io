// Gera os PDFs do currículo (PT e EN) a partir dos mesmos dados de content/.
// Roda manualmente via `npm run generate:cv` — não faz parte do build automático
// (mesmo padrão do script de OG image do projeto anterior). Reexecute sempre
// que experience/projects/skills mudarem.
import path from "node:path";
import { fileURLToPath } from "node:url";
import * as React from "react";
import { Document, Page, Text, View, StyleSheet, Link, renderToFile } from "@react-pdf/renderer";
import { getAllExperience, getAllProjects, getSkills } from "../lib/content";
import { formatDateRange } from "../lib/format";
import { getDictionary, type Lang } from "../lib/i18n";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const brasa = {
  background: "#0A0A0A",
  text: "#F5F5F0",
  textSecondary: "#8A8A85",
  border: "#2A2A2A",
  accent: "#B5502F",
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: brasa.background,
    color: brasa.text,
    padding: 40,
    fontSize: 10,
    fontFamily: "Helvetica",
  },
  eyebrow: {
    fontSize: 9,
    color: brasa.accent,
    letterSpacing: 2,
    marginBottom: 6,
    textTransform: "uppercase",
  },
  name: {
    fontSize: 22,
    fontFamily: "Helvetica-Bold",
    marginBottom: 4,
  },
  role: {
    fontSize: 11,
    color: brasa.textSecondary,
    marginBottom: 4,
  },
  links: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 20,
  },
  link: {
    fontSize: 9,
    color: brasa.accent,
    textDecoration: "none",
  },
  sectionTitle: {
    fontSize: 12,
    fontFamily: "Helvetica-Bold",
    marginTop: 18,
    marginBottom: 8,
    borderBottom: `1px solid ${brasa.border}`,
    paddingBottom: 4,
  },
  itemTitle: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
    marginBottom: 2,
  },
  itemSubtitle: {
    fontSize: 9,
    color: brasa.textSecondary,
    marginBottom: 4,
  },
  itemBody: {
    fontSize: 9,
    color: "#c9c9c4",
    marginBottom: 8,
    lineHeight: 1.5,
  },
  tagRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 4,
    marginBottom: 10,
  },
  tag: {
    fontSize: 8,
    color: brasa.textSecondary,
    border: `1px solid ${brasa.border}`,
    borderRadius: 3,
    padding: "2 5",
  },
});

function CvDocument({ lang }: { lang: Lang }) {
  const dict = getDictionary(lang);
  const experience = getAllExperience(lang);
  const projects = getAllProjects().slice(0, 6);
  const skills = getSkills();

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.eyebrow}>{dict.hero.eyebrow}</Text>
        <Text style={styles.name}>Victoria Botelho Martins</Text>
        <Text style={styles.role}>{dict.hero.role}</Text>
        <View style={styles.links}>
          <Link style={styles.link} src="https://github.com/vyk1">
            github.com/vyk1
          </Link>
          <Link style={styles.link} src="https://www.linkedin.com/in/vyk1">
            linkedin.com/in/vyk1
          </Link>
          <Link style={styles.link} src="http://lattes.cnpq.br/6294297168242307">
            Lattes
          </Link>
        </View>

        <Text style={styles.sectionTitle}>{dict.sections.experiencia}</Text>
        {experience.map((item) => (
          <View key={item.slug} wrap={false}>
            <Text style={styles.itemTitle}>
              {item.role} — {item.company}
            </Text>
            <Text style={styles.itemSubtitle}>{formatDateRange(item.startDate, item.endDate)}</Text>
            {item.highlights.map((highlight) => (
              <Text key={highlight} style={styles.itemBody}>
                • {highlight}
              </Text>
            ))}
          </View>
        ))}

        <Text style={styles.sectionTitle}>{dict.sections.skills}</Text>
        <View style={styles.tagRow}>
          {skills.map((skill) => (
            <Text key={skill} style={styles.tag}>
              {skill}
            </Text>
          ))}
        </View>

        <Text style={styles.sectionTitle}>{dict.sections.projetosDestaque}</Text>
        {projects.map((project) => (
          <View key={project.slug} wrap={false}>
            <Text style={styles.itemTitle}>{project.title}</Text>
            <Text style={styles.itemBody}>{project.description}</Text>
          </View>
        ))}
      </Page>
    </Document>
  );
}

async function main() {
  const outDir = path.join(__dirname, "..", "public", "cv");

  for (const lang of ["pt", "en"] as const) {
    const outputPath = path.join(outDir, `victoria-botelho-martins-${lang}.pdf`);
    await renderToFile(<CvDocument lang={lang} />, outputPath);
    console.log(`CV (${lang}) gerado em ${outputPath}`);
  }
}

main();
