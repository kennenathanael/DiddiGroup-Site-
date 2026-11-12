import { MentionsView } from "@/components/views/LegalViews";
import { pageMeta } from "@/content";

export const metadata = { ...pageMeta("en", "/mentions-legales", "mentions"), robots: { index: false } };

export default function Page() {
  return <MentionsView lang="en" />;
}
