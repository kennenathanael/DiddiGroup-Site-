import SectorView from "@/components/views/SectorView";
import { getContent, pageMeta } from "@/content";

export const dynamicParams = false;

export function generateStaticParams() {
  return getContent("fr").sectors.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/activites/[slug]">) {
  const { slug } = await params;
  const s = getContent("fr").sectors.find((x) => x.slug === slug);
  return pageMeta("fr", `/activites/${slug}`, "activites", s && { title: s.title, description: s.short, image: s.image });
}

export default async function Page({ params }: PageProps<"/activites/[slug]">) {
  const { slug } = await params;
  return <SectorView lang="fr" slug={slug} />;
}
