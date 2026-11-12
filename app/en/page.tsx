import HomeView from "@/components/views/HomeView";
import { pageMeta } from "@/content";

export const metadata = pageMeta("en", "/", "home");

export default function Page() {
  return <HomeView lang="en" />;
}
