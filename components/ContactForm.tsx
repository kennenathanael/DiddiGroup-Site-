"use client";

import { useState } from "react";

const subjects = ["Partenariat", "Commercial", "Presse", "Recrutement", "Autre"];

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm({ defaultSubject = "", withCv = false }: { defaultSubject?: string; withCv?: boolean }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const next: Record<string, string> = {};
    if (!String(data.get("name") || "").trim()) next.name = "Indiquez votre nom.";
    if (!/^\S+@\S+\.\S+$/.test(String(data.get("email") || ""))) next.email = "Indiquez une adresse email valide.";
    if (String(data.get("message") || "").trim().length < 10) next.message = "Votre message est trop court.";
    setErrors(next);
    if (Object.keys(next).length) return;

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", { method: "POST", body: data });
      if (!res.ok) throw new Error();
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="rounded-lg border border-green/30 bg-green/5 p-8">
        <p className="text-xl font-bold text-ink">Merci, votre message a bien été envoyé.</p>
        <p className="mt-2 text-body">Nos équipes reviendront vers vous dans les meilleurs délais.</p>
      </div>
    );
  }

  const field = "mt-2 w-full rounded-md border border-line bg-white px-4 py-3 text-[15px] text-ink outline-none transition-colors focus:border-green";
  const label = "text-[14px] font-semibold text-ink";
  const err = (k: string) => errors[k] && <p id={`${k}-err`} className="mt-1.5 text-[13px] text-red">{errors[k]}</p>;

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
      <div>
        <label htmlFor="name" className={label}>Nom complet *</label>
        <input id="name" name="name" autoComplete="name" aria-invalid={!!errors.name} aria-describedby="name-err" className={field} />
        {err("name")}
      </div>
      <div>
        <label htmlFor="company" className={label}>Société</label>
        <input id="company" name="company" autoComplete="organization" className={field} />
      </div>
      <div>
        <label htmlFor="email" className={label}>Email *</label>
        <input id="email" name="email" type="email" autoComplete="email" aria-invalid={!!errors.email} aria-describedby="email-err" className={field} />
        {err("email")}
      </div>
      <div>
        <label htmlFor="phone" className={label}>Téléphone</label>
        <input id="phone" name="phone" type="tel" autoComplete="tel" className={field} />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="subject" className={label}>Objet</label>
        <select id="subject" name="subject" defaultValue={defaultSubject || subjects[0]} className={field}>
          {subjects.map((s) => <option key={s}>{s}</option>)}
        </select>
      </div>
      {withCv && (
        <div className="sm:col-span-2">
          <label htmlFor="cv" className={label}>CV (PDF)</label>
          <input id="cv" name="cv" type="file" accept=".pdf,.doc,.docx" className={`${field} file:mr-4 file:rounded file:border-0 file:bg-paper file:px-3 file:py-1.5 file:font-semibold`} />
        </div>
      )}
      <div className="sm:col-span-2">
        <label htmlFor="message" className={label}>Message *</label>
        <textarea id="message" name="message" rows={6} aria-invalid={!!errors.message} aria-describedby="message-err" className={field} />
        {err("message")}
      </div>
      <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[13px] text-body">* Champs obligatoires. Vos données sont traitées conformément à notre politique de confidentialité.</p>
        <button type="submit" disabled={status === "sending"} className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-red px-7 py-3.5 font-semibold text-white transition-colors hover:bg-red-dark disabled:opacity-60">
          {status === "sending" ? "Envoi…" : "Envoyer"} <span aria-hidden>→</span>
        </button>
      </div>
      {status === "error" && (
        <p role="alert" className="text-[14px] text-red sm:col-span-2">L&apos;envoi a échoué. Réessayez ou écrivez-nous directement à contact@diddi-group.com.</p>
      )}
    </form>
  );
}
