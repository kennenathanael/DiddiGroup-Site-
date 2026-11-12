import SectorView from "@/components/views/SectorView";
import { getContent, pageMeta } from "@/content";

export const dynamicParams = false;

export function generateStaticParams() {
  return getContent("en").sectors.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/en/activites/[slug]">) {
  const { slug } = await params;
  const s = getContent("en").sectors.find((x) => x.slug === slug);
  return pageMeta("en", `/activites/${slug}`, "activites", s && { title: s.title, description: s.short, image: s.image });
}

export default async function Page({ params }: PageProps<"/en/activites/[slug]">) {
  const { slug } = await params;
  return <SectorView lang="en" slug={slug} />;
}
