import FilialesView from "@/components/views/FilialesView";
import { pageMeta } from "@/content";

export const metadata = pageMeta("en", "/filiales", "filiales");

export default function Page() {
  return <FilialesView lang="en" />;
}
