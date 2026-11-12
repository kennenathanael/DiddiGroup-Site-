import ArticleView from "@/components/views/ArticleView";
import { getContent, pageMeta } from "@/content";

export const dynamicParams = false;

export function generateStaticParams() {
  return getContent("fr").news.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: PageProps<"/actualites/[slug]">) {
  const { slug } = await params;
  const n = getContent("fr").news.find((x) => x.slug === slug);
  return pageMeta("fr", `/actualites/${slug}`, "actualites", n && { title: n.title, description: n.excerpt, image: n.image });
}

export default async function Page({ params }: PageProps<"/actualites/[slug]">) {
  const { slug } = await params;
  return <ArticleView lang="fr" slug={slug} />;
}
