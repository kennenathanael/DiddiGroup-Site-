import ActivitesView from "@/components/views/ActivitesView";
import { pageMeta } from "@/content";

export const metadata = pageMeta("fr", "/activites", "activites");

export default function Page() {
  return <ActivitesView lang="fr" />;
}
