import type { Metadata } from "next";
import ProjetosContent from "@/components/pages/ProjetosContent";

export const metadata: Metadata = {
  title: "Projects | Victoria Botelho Martins",
};

export default function ProjetosPageEn() {
  return <ProjetosContent lang="en" />;
}
