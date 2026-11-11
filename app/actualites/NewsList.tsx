"use client";

import { useState } from "react";
import NewsCard from "@/components/NewsCard";
import type { NewsItem } from "@/content/site";

export default function NewsList({ items }: { items: NewsItem[] }) {
  const categories = ["Toutes", ...Array.from(new Set(items.map((n) => n.category)))];
  const [active, setActive] = useState("Toutes");
  const shown = active === "Toutes" ? items : items.filter((n) => n.category === active);

  return (
    <section className="py-20">
      <div className="container-x">
        <div role="tablist" aria-label="Filtrer par catégorie" className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={active === c}
              onClick={() => setActive(c)}
              className={`rounded-full border px-4 py-2 text-[14px] font-medium transition-colors ${
                active === c ? "border-ink bg-ink text-white" : "border-line text-body hover:border-ink hover:text-ink"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {shown.map((n) => (
            <NewsCard key={n.slug} item={n} />
          ))}
        </div>
      </div>
    </section>
  );
}
