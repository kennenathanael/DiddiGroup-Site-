import ProduitsView from "@/components/views/ProduitsView";
import { pageMeta } from "@/content";

export const metadata = pageMeta("en", "/produits", "produits");

export default function Page() {
  return <ProduitsView lang="en" />;
}
