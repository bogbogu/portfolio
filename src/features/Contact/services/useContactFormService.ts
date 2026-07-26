import { useMemo, useState } from "react";
import type { ContactFormErrors, ContactFormValues } from "../../../types/ContactForm";

const INITIAL_VALUES: ContactFormValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function validate(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!values.name.trim()) {
    errors.name = "Name is required.";
  }

  if (!values.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }

  if (!values.subject.trim()) {
    errors.subject = "Subject is required.";
  }

  if (!values.message.trim()) {
    errors.message = "Message is required.";
  } else if (values.message.trim().length < 20) {
    errors.message = "Message should be at least 20 characters.";
  }

  return errors;
}

export function useContactFormService() {
  const [values, setValues] = useState<ContactFormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const isValid = useMemo(() => Object.keys(validate(values)).length === 0, [values]);

  const handleChange = (field: keyof ContactFormValues, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
    setStatusMessage("");
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        let apiError = "Unable to send right now. Please try again shortly.";

        try {
          const payload = (await response.json()) as { error?: string };
          if (payload.error) {
            apiError = payload.error;
          }
        } catch {
          // Keep the fallback message when the response is not JSON.
        }

        if (response.status === 404 && window.location.port === "5173") {
          apiError = "Local Vite dev server does not run /api routes. Use Vercel dev or test on a deployed preview.";
        }

        throw new Error(apiError);
      }

      setStatusMessage("Message sent successfully. I will get back to you soon.");
      setValues(INITIAL_VALUES);
    } catch (error) {
      setStatusMessage(
        error instanceof Error
          ? error.message
          : "Unable to send right now. Please try again shortly.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    values,
    errors,
    isSubmitting,
    isValid,
    statusMessage,
    handleChange,
    handleSubmit,
  };
}
