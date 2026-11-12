"use client";

import { useEffect, useState } from "react";
import { contact, getContent, type Lang } from "@/content";

// Site statique (GitHub Pages) : pas de serveur. Les messages partent vers un service de
// formulaires (ex. Formspree) dont l'URL est fournie par NEXT_PUBLIC_FORM_ENDPOINT.
// Sans cette URL, le formulaire ouvre la messagerie du visiteur, message pré-rempli.
const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT || "";

type Status = "idle" | "sending" | "sent" | "mailto" | "error";

export default function ContactForm({ lang }: { lang: Lang }) {
  const t = getContent(lang).ui.form;
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [subject, setSubject] = useState(t.subjects[0]);

  // Objet pré-sélectionné via ?objet=<index> (liens depuis les pages secteurs).
  useEffect(() => {
    const i = Number(new URLSearchParams(window.location.search).get("objet"));
    if (t.subjects[i]) setSubject(t.subjects[i]);
  }, [t.subjects]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const get = (k: string) => String(data.get(k) || "").trim();
    const next: Record<string, string> = {};
    if (!get("name")) next.name = t.errName;
    if (!/^\S+@\S+\.\S+$/.test(get("email"))) next.email = t.errEmail;
    if (get("message").length < 10) next.message = t.errMessage;
    setErrors(next);
    if (Object.keys(next).length) return;

    if (!endpoint) {
      const body = [
        get("message"),
        "",
        `— ${get("name")}${get("company") ? `, ${get("company")}` : ""}`,
        get("email"),
        get("phone"),
      ].filter((l, i) => i < 3 || l).join("\n");
      window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(`[${get("subject")}] ${t.mailSubject}`)}&body=${encodeURIComponent(body)}`;
      setStatus("mailto");
      return;
    }

    setStatus("sending");
    try {
      data.set("_subject", `[${get("subject")}] ${t.mailSubject} — ${get("name")}`);
      const res = await fetch(endpoint, { method: "POST", body: data, headers: { Accept: "application/json" } });
      if (!res.ok) throw new Error();
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent" || status === "mailto") {
    return (
      <div role="status" className="rounded-lg border border-green/30 bg-green/5 p-8">
        <p className="text-xl font-bold text-ink">{status === "sent" ? t.sentTitle : t.mailtoTitle}</p>
        <p className="mt-2 text-body">
          {status === "sent" ? t.sentText : <>{t.mailtoText} <a className="font-semibold text-green underline" href={`mailto:${contact.email}`}>{contact.email}</a>.</>}
        </p>
      </div>
    );
  }

  const field = "mt-2 w-full rounded-md border border-line bg-white px-4 py-3 text-[15px] text-ink outline-none transition-colors focus:border-green";
  const label = "text-[14px] font-semibold text-ink";
  const err = (k: string) => errors[k] && <p id={`${k}-err`} className="mt-1.5 text-[13px] text-red">{errors[k]}</p>;

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
      <div>
        <label htmlFor="name" className={label}>{t.name} *</label>
        <input id="name" name="name" autoComplete="name" aria-invalid={!!errors.name} aria-describedby="name-err" className={field} />
        {err("name")}
      </div>
      <div>
        <label htmlFor="company" className={label}>{t.company}</label>
        <input id="company" name="company" autoComplete="organization" className={field} />
      </div>
      <div>
        <label htmlFor="email" className={label}>{t.email} *</label>
        <input id="email" name="email" type="email" autoComplete="email" aria-invalid={!!errors.email} aria-describedby="email-err" className={field} />
        {err("email")}
      </div>
      <div>
        <label htmlFor="phone" className={label}>{t.phone}</label>
        <input id="phone" name="phone" type="tel" autoComplete="tel" className={field} />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="subject" className={label}>{t.subject}</label>
        <select id="subject" name="subject" value={subject} onChange={(e) => setSubject(e.target.value)} className={field}>
          {t.subjects.map((s) => <option key={s}>{s}</option>)}
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className={label}>{t.message} *</label>
        <textarea id="message" name="message" rows={6} aria-invalid={!!errors.message} aria-describedby="message-err" className={field} />
        {err("message")}
      </div>
      <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[13px] text-body">{t.required}</p>
        <button type="submit" disabled={status === "sending"} className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-red px-7 py-3.5 font-semibold text-white transition-colors hover:bg-red-dark disabled:opacity-60">
          {status === "sending" ? t.sending : t.send} <span aria-hidden>→</span>
        </button>
      </div>
      {status === "error" && (
        <p role="alert" className="text-[14px] text-red sm:col-span-2">{t.error} {contact.email}.</p>
      )}
    </form>
  );
}
