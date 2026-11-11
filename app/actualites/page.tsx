import type { Metadata } from "next";
import NewsList from "./NewsList";
import { PageHero } from "@/components/ui";
import { news } from "@/content/site";

export const metadata: Metadata = {
  title: "Actualités",
  description: "Les dernières actualités de DIDDI GROUP et de ses filiales.",
};

export default function ActualitesPage() {
  return (
    <>
      <PageHero
        eyebrow="Actualités"
        title="La vie du groupe."
        intro="Formation, transport, infrastructures : suivez les actualités de DIDDI GROUP et de ses filiales."
        image="/images/douala-skyline.png"
        imageAlt="Skyline de Douala"
      />
      <NewsList items={news} />
    </>
  );
}
