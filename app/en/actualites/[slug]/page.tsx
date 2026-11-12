import ArticleView from "@/components/views/ArticleView";
import { getContent, pageMeta } from "@/content";

export const dynamicParams = false;

export function generateStaticParams() {
  return getContent("en").news.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: PageProps<"/en/actualites/[slug]">) {
  const { slug } = await params;
  const n = getContent("en").news.find((x) => x.slug === slug);
  return pageMeta("en", `/actualites/${slug}`, "actualites", n && { title: n.title, description: n.excerpt, image: n.image });
}

export default async function Page({ params }: PageProps<"/en/actualites/[slug]">) {
  const { slug } = await params;
  return <ArticleView lang="en" slug={slug} />;
}
