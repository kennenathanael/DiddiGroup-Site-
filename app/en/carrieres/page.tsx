import CarrieresView from "@/components/views/CarrieresView";
import { pageMeta } from "@/content";

export const metadata = pageMeta("en", "/carrieres", "carrieres");

export default function Page() {
  return <CarrieresView lang="en" />;
}
