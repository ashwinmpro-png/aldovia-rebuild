"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/Button";

const SUBJECT_OPTIONS = [
  "General Enquiry",
  "Room Booking",
  "Wedding Proposal",
  "Corporate Event",
  "Dining Reservation",
];

const initialForm = {
  name: "",
  email: "",
  phone: "",
  subject: SUBJECT_OPTIONS[0],
  message: "",
};

type Status = "idle" | "submitting" | "success" | "error";

const fieldClass =
  "w-full bg-transparent border-b border-aldo-beige/30 focus:border-aldo-beige outline-none py-3 text-sm text-aldo-cream placeholder:text-aldo-muted/60 transition-colors";

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Send failed.");
      }
      setStatus("success");
      setForm(initialForm);
      setTimeout(() => setStatus("idle"), 4000);
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Send failed.");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const submitting = status === "submitting";
  const success = status === "success";

  return (
    <form
      onSubmit={handleSubmit}
      className="p-8 md:p-10 border border-aldo-beige/20 bg-aldo-bg-2"
    >
      <div
        className="uppercase text-[10px] mb-3 text-aldo-beige"
        style={{ letterSpacing: "0.42em" }}
      >
        Send a Message
      </div>
      <h3 className="font-display font-light text-3xl mb-8 text-aldo-cream">
        We will respond shortly.
      </h3>

      <div className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block uppercase text-[10px] mb-2 text-aldo-beige"
            style={{ letterSpacing: "0.42em" }}
          >
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            className={fieldClass}
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block uppercase text-[10px] mb-2 text-aldo-beige"
            style={{ letterSpacing: "0.42em" }}
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            className={fieldClass}
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block uppercase text-[10px] mb-2 text-aldo-beige"
            style={{ letterSpacing: "0.42em" }}
          >
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            className={fieldClass}
          />
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block uppercase text-[10px] mb-2 text-aldo-beige"
            style={{ letterSpacing: "0.42em" }}
          >
            Subject
          </label>
          <select
            id="subject"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            className={fieldClass}
          >
            {SUBJECT_OPTIONS.map((o) => (
              <option key={o} value={o} className="bg-aldo-bg text-aldo-cream">
                {o}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block uppercase text-[10px] mb-2 text-aldo-beige"
            style={{ letterSpacing: "0.42em" }}
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            value={form.message}
            onChange={handleChange}
            className={`${fieldClass} resize-none`}
          />
        </div>

        <Button type="submit" variant="solid" full icon={Send} disabled={submitting}>
          {success ? "Message sent" : submitting ? "Sending…" : "Send Message"}
        </Button>

        {error && (
          <div className="text-xs text-red-300/80" role="alert">
            {error}
          </div>
        )}
      </div>
    </form>
  );
}
