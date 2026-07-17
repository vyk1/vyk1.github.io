import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectDetailContent from "@/components/pages/ProjectDetailContent";
import { getAllProjects, getProjectBySlug } from "@/lib/content";

export function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = getProjectBySlug(params.slug);
  return { title: project ? `${project.title} | Victoria Botelho Martins` : "Project" };
}

export default function ProjectPageEn({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  return <ProjectDetailContent lang="en" project={project} />;
}
