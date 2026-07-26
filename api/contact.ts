import { Resend } from "resend";

interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== "POST") {
    return Response.json({ error: "Method not allowed" }, { status: 405 });
  }

  const env = (globalThis as { process?: { env?: Record<string, string | undefined> } }).process?.env ?? {};
  const resendApiKey = env.RESEND_API_KEY;

  if (!resendApiKey) {
    return Response.json({ error: "Missing RESEND_API_KEY" }, { status: 500 });
  }

  let payload: ContactPayload;

  try {
    payload = (await req.json()) as ContactPayload;
  } catch {
    return Response.json({ error: "Invalid JSON payload" }, { status: 400 });
  }

  const name = payload.name?.trim() ?? "";
  const email = payload.email?.trim() ?? "";
  const subject = payload.subject?.trim() ?? "";
  const message = payload.message?.trim() ?? "";

  if (!name || !email || !subject || !message) {
    return Response.json({ error: "All fields are required" }, { status: 400 });
  }

  if (!isEmail(email)) {
    return Response.json({ error: "Invalid email address" }, { status: 400 });
  }

  const toEmail = env.CONTACT_TO_EMAIL ?? "ogbogubenedict@gmail.com";
  const fromEmail = env.CONTACT_FROM_EMAIL ?? "Portfolio Contact <onboarding@resend.dev>";

  const resend = new Resend(resendApiKey);

  try {
    const result = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      subject: `[Portfolio] ${subject}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    if (result.error) {
      return Response.json({ error: "Email provider error" }, { status: 502 });
    }

    return Response.json({ success: true });
  } catch {
    return Response.json({ error: "Failed to send email" }, { status: 500 });
  }
}
