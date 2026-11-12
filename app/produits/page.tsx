import ProduitsView from "@/components/views/ProduitsView";
import { pageMeta } from "@/content";

export const metadata = pageMeta("fr", "/produits", "produits");

export default function Page() {
  return <ProduitsView lang="fr" />;
}
