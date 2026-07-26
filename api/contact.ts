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

interface VercelLikeRequest {
  method?: string;
  body?: unknown;
}

interface VercelLikeResponse {
  status: (code: number) => VercelLikeResponse;
  json: (payload: unknown) => void;
  setHeader: (name: string, value: string) => void;
}

function parsePayload(body: unknown): ContactPayload | null {
  if (!body) {
    return null;
  }

  if (typeof body === "string") {
    try {
      return JSON.parse(body) as ContactPayload;
    } catch {
      return null;
    }
  }

  if (typeof body === "object") {
    return body as ContactPayload;
  }

  return null;
}

function withTimeout<T>(promise: Promise<T>, timeoutMs: number): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    const timer = setTimeout(() => {
      reject(new Error("Email provider timeout"));
    }, timeoutMs);

    promise
      .then((value) => {
        clearTimeout(timer);
        resolve(value);
      })
      .catch((error: unknown) => {
        clearTimeout(timer);
        reject(error);
      });
  });
}

export default async function handler(req: VercelLikeRequest, res: VercelLikeResponse): Promise<void> {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const env = (globalThis as { process?: { env?: Record<string, string | undefined> } }).process?.env ?? {};
  const resendApiKey = env.RESEND_API_KEY;

  if (!resendApiKey) {
    res.status(500).json({ error: "Missing RESEND_API_KEY" });
    return;
  }

  const payload = parsePayload(req.body);

  if (!payload) {
    res.status(400).json({ error: "Invalid JSON payload" });
    return;
  }

  const name = payload.name?.trim() ?? "";
  const email = payload.email?.trim() ?? "";
  const subject = payload.subject?.trim() ?? "";
  const message = payload.message?.trim() ?? "";

  if (!name || !email || !subject || !message) {
    res.status(400).json({ error: "All fields are required" });
    return;
  }

  if (!isEmail(email)) {
    res.status(400).json({ error: "Invalid email address" });
    return;
  }

  const toEmail = env.CONTACT_TO_EMAIL ?? "ogbogubenedict@gmail.com";
  const fromEmail = env.CONTACT_FROM_EMAIL ?? "Portfolio Contact <onboarding@resend.dev>";

  const resend = new Resend(resendApiKey);

  try {
    const result = await withTimeout(
      resend.emails.send({
        from: fromEmail,
        to: [toEmail],
        subject: `[Portfolio] ${subject}`,
        replyTo: email,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      }),
      8_000,
    );

    if (result.error) {
      const providerMessage = result.error.message ?? "Email provider error";
      res.status(502).json({ error: providerMessage });
      return;
    }

    res.status(200).json({ success: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to send email";
    if (message === "Email provider timeout") {
      res.status(504).json({ error: "Email request timed out. Please try again." });
      return;
    }

    res.status(500).json({ error: message });
  }
}
