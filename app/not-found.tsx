import { ButtonLink } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-center bg-ink pt-24 text-white">
      <div className="container-x text-center">
        <p className="font-display text-7xl font-extrabold text-red">404</p>
        <h1 className="mt-4 text-3xl font-extrabold">Page introuvable</h1>
        <p className="mt-3 text-white/70">La page que vous recherchez n&apos;existe pas ou a été déplacée.</p>
        <div className="mt-8"><ButtonLink href="/">Retour à l&apos;accueil</ButtonLink></div>
      </div>
    </section>
  );
}
