import CarrieresView from "@/components/views/CarrieresView";
import { pageMeta } from "@/content";

export const metadata = pageMeta("fr", "/carrieres", "carrieres");

export default function Page() {
  return <CarrieresView lang="fr" />;
}
