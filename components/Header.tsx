"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { nav } from "@/content/site";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  // Les articles n'ont pas de hero sombre : en-tête plein d'emblée.
  const lightTop = /^\/actualites\/[^/]+$/.test(pathname);
  const solid = scrolled || open || lightTop;
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? "bg-white/95 shadow-[0_1px_0_var(--color-line)] backdrop-blur" : "bg-gradient-to-b from-black/50 to-transparent"
      }`}
    >
      <div className="container-x flex h-[76px] items-center justify-between gap-6">
        <Logo onDark={!solid} />

        <nav aria-label="Navigation principale" className="hidden items-center gap-0.5 xl:flex">
          {nav.map((item) => (
            <div key={item.href} className="group relative">
              <Link
                href={item.href}
                className={`relative whitespace-nowrap rounded-md px-3 py-2 text-[14px] font-medium transition-colors ${
                  solid ? "text-ink hover:text-green" : "text-white/90 hover:text-white"
                } ${isActive(item.href) ? (solid ? "text-green" : "text-white") : ""}`}
              >
                {item.label}
                {isActive(item.href) && <span className="absolute inset-x-3 -bottom-0.5 h-0.5 bg-red" />}
              </Link>
              {item.children && (
                <div className="invisible absolute left-0 top-full pt-3 opacity-0 transition-all group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                  <div className="w-72 rounded-lg border border-line bg-white p-2 shadow-xl">
                    {item.children.map((c) => (
                      <Link key={c.href} href={c.href} className="block rounded-md px-3 py-2 text-[14px] text-ink hover:bg-paper hover:text-green">
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden whitespace-nowrap rounded-md bg-red px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-red-dark sm:inline-flex"
          >
            Nous contacter
          </Link>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            className={`inline-flex h-10 w-10 items-center justify-center rounded-md xl:hidden ${solid ? "text-ink" : "text-white"}`}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="max-h-[calc(100vh-76px)] overflow-y-auto border-t border-line bg-white xl:hidden">
          <nav aria-label="Navigation mobile" className="container-x flex flex-col py-4">
            {nav.map((item) => (
              <div key={item.href}>
                <Link href={item.href} className={`block py-3 text-[17px] font-semibold ${isActive(item.href) ? "text-green" : "text-ink"}`}>
                  {item.label}
                </Link>
                {item.children && (
                  <div className="mb-2 grid grid-cols-1 gap-1 border-l-2 border-line pl-4">
                    {item.children.map((c) => (
                      <Link key={c.href} href={c.href} className="py-1.5 text-[15px] text-body">
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link href="/contact" className="mt-4 rounded-md bg-red px-5 py-3 text-center font-semibold text-white">
              Nous contacter
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
