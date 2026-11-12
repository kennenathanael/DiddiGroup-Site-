import FilialesView from "@/components/views/FilialesView";
import { pageMeta } from "@/content";

export const metadata = pageMeta("fr", "/filiales", "filiales");

export default function Page() {
  return <FilialesView lang="fr" />;
}
