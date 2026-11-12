"use client";

import { useState } from "react";
import NewsCard from "./NewsCard";
import { getContent, type Lang } from "@/content";

export default function NewsList({ lang }: { lang: Lang }) {
  const c = getContent(lang);
  const t = c.ui.actualites;
  const items = c.news;
  const categories = [t.all, ...Array.from(new Set(items.map((n) => n.category)))];
  const [active, setActive] = useState(t.all);
  const shown = active === t.all ? items : items.filter((n) => n.category === active);

  return (
    <section className="py-20">
      <div className="container-x">
        <div role="tablist" aria-label={t.filter} className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={active === cat}
              onClick={() => setActive(cat)}
              className={`rounded-full border px-4 py-2 text-[14px] font-medium transition-colors ${
                active === cat ? "border-ink bg-ink text-white" : "border-line text-body hover:border-ink hover:text-ink"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {shown.map((n) => (
            <NewsCard key={n.slug} item={n} lang={lang} readLabel={c.ui.readArticle} />
          ))}
        </div>
      </div>
    </section>
  );
}
