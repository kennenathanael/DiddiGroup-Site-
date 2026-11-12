import GroupeView from "@/components/views/GroupeView";
import { pageMeta } from "@/content";

export const metadata = pageMeta("en", "/le-groupe", "groupe");

export default function Page() {
  return <GroupeView lang="en" />;
}
