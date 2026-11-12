import ContactView from "@/components/views/ContactView";
import { pageMeta } from "@/content";

export const metadata = pageMeta("en", "/contact", "contact");

export default function Page() {
  return <ContactView lang="en" />;
}
