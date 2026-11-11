import Image from "next/image";

// Image plein cadre avec repli élégant quand la photo n'est pas encore disponible.
export default function Media({
  src,
  alt,
  label,
  sizes = "100vw",
  preload = false,
  className = "",
}: {
  src: string | null;
  alt: string;
  label?: string;
  sizes?: string;
  preload?: boolean;
  className?: string;
}) {
  if (!src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`absolute inset-0 overflow-hidden bg-ink ${className}`}
        style={{
          backgroundImage:
            "radial-gradient(120% 90% at 85% 10%, rgba(0,145,59,0.55), transparent 55%), radial-gradient(90% 80% at 0% 100%, rgba(228,40,28,0.35), transparent 60%), repeating-linear-gradient(135deg, rgba(255,255,255,0.04) 0 1px, transparent 1px 22px)",
        }}
      >
        {label && (
          <span className="eyebrow absolute bottom-4 right-4 text-white/40">{label}</span>
        )}
      </div>
    );
  }
  return (
    <Image src={src} alt={alt} fill sizes={sizes} preload={preload} className={`object-cover ${className}`} />
  );
}
