import type { Metadata } from "next";
import BlogContent from "@/components/pages/BlogContent";

export const metadata: Metadata = {
  title: "Blog | Victoria Botelho Martins",
};

export default function BlogPageEn() {
  return <BlogContent lang="en" />;
}
