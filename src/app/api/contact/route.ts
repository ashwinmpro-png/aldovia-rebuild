// Contact form endpoint. Resend wire-up deferred until the Warden provides the API key.
// For now this returns 200 and logs the payload server-side. Replace with the Resend send
// when env.RESEND_API_KEY and env.CONTACT_TO are populated.

import { NextResponse, type NextRequest } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
};

function isValidEmail(value: string | undefined): value is string {
  if (!value) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: NextRequest) {
  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const { name, email, phone, subject, message } = body;

  if (!name || !isValidEmail(email) || !message) {
    return NextResponse.json(
      { ok: false, error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  const resendKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO ?? "info@aldovia.in";

  if (resendKey) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendKey}`,
        },
        body: JSON.stringify({
          from: "Aldovia Website <noreply@aldovia.in>",
          to: [to],
          reply_to: email,
          subject: `[Aldovia Enquiry] ${subject ?? "General Enquiry"}`,
          text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone ?? "-"}\nSubject: ${subject ?? "-"}\n\n${message}`,
        }),
      });

      if (!res.ok) {
        const err = await res.text();
        console.error("[contact] Resend error", res.status, err);
        return NextResponse.json({ ok: false, error: "Send failed." }, { status: 502 });
      }
    } catch (err) {
      console.error("[contact] Resend exception", err);
      return NextResponse.json({ ok: false, error: "Send failed." }, { status: 502 });
    }
  } else {
    console.log("[contact] (stub) payload:", { name, email, phone, subject, message });
  }

  return NextResponse.json({ ok: true });
}
