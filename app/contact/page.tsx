import ContactView from "@/components/views/ContactView";
import { pageMeta } from "@/content";

export const metadata = pageMeta("fr", "/contact", "contact");

export default function Page() {
  return <ContactView lang="fr" />;
}
