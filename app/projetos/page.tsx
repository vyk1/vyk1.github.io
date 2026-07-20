import type { Metadata } from "next";
import ProjetosContent from "@/components/pages/ProjetosContent";

export const metadata: Metadata = {
  title: "Projetos | Victoria Botelho Martins",
};

export default function ProjetosPage() {
  return <ProjetosContent lang="pt" />;
}
