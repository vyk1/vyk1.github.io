import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";

// Wrapper fino sobre MDXRemote com remark-gfm sempre ligado (footnotes `[^1]`,
// tabelas, strikethrough) — mesma config que o remarkGfm do setup anterior.
export default function Mdx({ source }: { source: string }) {
  return (
    <MDXRemote
      source={source}
      options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
    />
  );
}
