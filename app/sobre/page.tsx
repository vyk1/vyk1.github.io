import type { Metadata } from "next";
import SobreContent from "@/components/pages/SobreContent";

export const metadata: Metadata = {
  title: "Sobre | Victoria Botelho Martins",
};

export default function SobrePage() {
  return <SobreContent lang="pt" />;
}
