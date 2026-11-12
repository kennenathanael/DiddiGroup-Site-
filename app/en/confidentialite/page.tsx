import { ConfidentialiteView } from "@/components/views/LegalViews";
import { pageMeta } from "@/content";

export const metadata = { ...pageMeta("en", "/confidentialite", "confidentialite"), robots: { index: false } };

export default function Page() {
  return <ConfidentialiteView lang="en" />;
}
