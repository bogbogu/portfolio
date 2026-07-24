import { useMemo, useState } from "react";
import type { ContactFormErrors, ContactFormValues } from "../../../types/ContactForm";
import { profile } from "../../../constants/profile";

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

    const subject = encodeURIComponent(values.subject);
    const body = encodeURIComponent(
      `Name: ${values.name}\nEmail: ${values.email}\n\n${values.message}`,
    );

    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;

    await new Promise((resolve) => {
      window.setTimeout(resolve, 350);
    });

    setStatusMessage("Your message has been prepared in your mail app.");
    setValues(INITIAL_VALUES);
    setIsSubmitting(false);
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
