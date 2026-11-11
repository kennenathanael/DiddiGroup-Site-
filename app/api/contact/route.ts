// Réception des formulaires (contact et candidature).
// À BRANCHER : envoi réel vers contact@diddi-group.com (Resend, SMTP, etc.).
// Tant que ce n'est pas fait, les messages sont seulement journalisés côté serveur.
export async function POST(request: Request) {
  const data = await request.formData();
  const name = String(data.get("name") || "").trim();
  const email = String(data.get("email") || "").trim();
  const message = String(data.get("message") || "").trim();

  if (!name || !/^\S+@\S+\.\S+$/.test(email) || message.length < 10) {
    return Response.json({ ok: false, error: "Champs invalides" }, { status: 400 });
  }

  const cv = data.get("cv");
  console.log("[contact]", {
    name,
    email,
    company: data.get("company"),
    phone: data.get("phone"),
    subject: data.get("subject"),
    message,
    cv: cv instanceof File && cv.size ? `${cv.name} (${cv.size} o)` : null,
  });

  return Response.json({ ok: true });
}
