import { ButtonLink } from "@/components/ui";
import { getContent } from "@/content";

// 404 bilingue : une seule page est générée pour tout le site statique.
export default function NotFound() {
  const fr = getContent("fr").ui.notFound;
  const en = getContent("en").ui.notFound;
  return (
    <section className="flex min-h-[80vh] items-center bg-ink pt-24 text-white">
      <div className="container-x text-center">
        <p className="font-display text-7xl font-extrabold text-red">404</p>
        <h1 className="mt-4 text-3xl font-extrabold">{fr.title}</h1>
        <p className="mt-3 text-white/70">{fr.text}</p>
        <p className="mt-1 text-white/50">{en.title} — {en.text}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <ButtonLink href="/">{fr.back}</ButtonLink>
          <ButtonLink href="/en" variant="light">{en.back}</ButtonLink>
        </div>
      </div>
    </section>
  );
}
