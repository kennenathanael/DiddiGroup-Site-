import ActualitesView from "@/components/views/ActualitesView";
import { pageMeta } from "@/content";

export const metadata = pageMeta("en", "/actualites", "actualites");

export default function Page() {
  return <ActualitesView lang="en" />;
}
