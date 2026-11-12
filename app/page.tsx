import HomeView from "@/components/views/HomeView";
import { pageMeta } from "@/content";

export const metadata = pageMeta("fr", "/", "home");

export default function Page() {
  return <HomeView lang="fr" />;
}
