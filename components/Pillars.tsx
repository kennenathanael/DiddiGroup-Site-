import { engagement } from "@/content/site";
import Reveal from "./Reveal";

const icons: Record<string, React.ReactNode> = {
  local: <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11Zm0-8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />,
  reliability: <path d="M12 3 4 6v6c0 4.5 3.4 8.3 8 9 4.6-.7 8-4.5 8-9V6l-8-3Zm-3.5 9 2.5 2.5 4.5-5" />,
  impact: <path d="M12 21V11m0 0c0-4 3-7 7-7 0 4-3 7-7 7Zm0 0C12 7 9 4 5 4c0 4 3 7 7 7Z" />,
};

export default function Pillars({ onDark = false }: { onDark?: boolean }) {
  return (
    <div className="grid gap-px overflow-hidden rounded-lg md:grid-cols-3" style={{ background: onDark ? "rgba(255,255,255,0.12)" : "var(--color-line)" }}>
      {engagement.pillars.map((p, i) => (
        <Reveal key={p.key} delay={i * 0.1} className={onDark ? "bg-ink/80 p-8 backdrop-blur" : "bg-white p-8"}>
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={onDark ? "text-sand" : "text-green"} aria-hidden>
            {icons[p.key]}
          </svg>
          <h3 className={`mt-6 text-xl font-bold ${onDark ? "text-white" : "text-ink"}`}>{p.title}</h3>
          <p className={`mt-3 leading-relaxed ${onDark ? "text-white/70" : "text-body"}`}>{p.text}</p>
        </Reveal>
      ))}
    </div>
  );
}
