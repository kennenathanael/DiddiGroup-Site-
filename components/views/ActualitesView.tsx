import NewsList from "@/components/NewsList";
import { PageHero } from "@/components/ui";
import { getContent, type Lang } from "@/content";

export default function ActualitesView({ lang }: { lang: Lang }) {
  const c = getContent(lang);
  const t = c.ui.actualites;
  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={t.title} intro={t.intro} image="/images/douala-skyline.webp" imageAlt="" />
      <NewsList lang={lang} />
    </>
  );
}
