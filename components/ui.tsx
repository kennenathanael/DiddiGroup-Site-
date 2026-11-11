import Link from "next/link";
import type { ReactNode } from "react";
import Media from "./Media";

export function Eyebrow({ children, onDark = false }: { children: ReactNode; onDark?: boolean }) {
  return (
    <p className={`eyebrow flex items-center gap-3 ${onDark ? "text-white/80" : "text-green"}`}>
      <span className="h-px w-8 bg-red" aria-hidden />
      {children}
    </p>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "light" | "outline";
}) {
  const styles = {
    primary: "bg-red text-white hover:bg-red-dark",
    light: "border border-white/40 text-white hover:bg-white hover:text-ink",
    outline: "border border-ink/20 text-ink hover:border-green hover:text-green",
  }[variant];
  return (
    <Link href={href} className={`inline-flex items-center gap-2 rounded-md px-6 py-3.5 text-[15px] font-semibold transition-colors ${styles}`}>
      {children}
      <span aria-hidden>→</span>
    </Link>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  image: string | null;
  imageAlt: string;
}) {
  return (
    <section className="relative flex min-h-[460px] items-end overflow-hidden bg-ink pb-16 pt-36 md:min-h-[540px]">
      <Media src={image} alt={imageAlt} preload />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/20" aria-hidden />
      <div className="container-x relative">
        <Eyebrow onDark>{eyebrow}</Eyebrow>
        <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-[1.08] text-white md:text-6xl">{title}</h1>
        {intro && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">{intro}</p>}
      </div>
    </section>
  );
}

export function Todo({ children }: { children: ReactNode }) {
  return (
    <span className="rounded border border-dashed border-sand/70 bg-sand/10 px-1.5 py-0.5 text-[0.92em] text-[#8a6d2f]">{children}</span>
  );
}

// Affiche une chaîne en surlignant les placeholders [ ... — à compléter].
export function Txt({ children }: { children: string }) {
  const parts = children.split(/(\[[^\]]*à compléter\])/g);
  return (
    <>
      {parts.map((p, i) => (p.endsWith("à compléter]") ? <Todo key={i}>{p.slice(1, -1)}</Todo> : p))}
    </>
  );
}
