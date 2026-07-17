import type { Metadata } from "next";
import BlogContent from "@/components/pages/BlogContent";

export const metadata: Metadata = {
  title: "Blog | Victoria Botelho Martins",
};

export default function BlogPage() {
  return <BlogContent lang="pt" />;
}
