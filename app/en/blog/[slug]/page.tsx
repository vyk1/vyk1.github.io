import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PostDetailContent from "@/components/pages/PostDetailContent";
import { getAllPosts, getPostBySlug } from "@/lib/content";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPostBySlug(params.slug);
  return { title: post ? `${post.title} | Victoria Botelho Martins` : "Post" };
}

export default function PostPageEn({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return <PostDetailContent lang="en" post={post} />;
}
