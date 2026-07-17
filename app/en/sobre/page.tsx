import type { Metadata } from "next";
import SobreContent from "@/components/pages/SobreContent";

export const metadata: Metadata = {
  title: "About | Victoria Botelho Martins",
};

export default function SobrePageEn() {
  return <SobreContent lang="en" />;
}
