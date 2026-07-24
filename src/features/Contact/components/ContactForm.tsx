import type { ContactFormErrors, ContactFormValues } from "../../../types/ContactForm";

interface ContactFormProps {
  values: ContactFormValues;
  errors: ContactFormErrors;
  isSubmitting: boolean;
  isValid: boolean;
  onChange: (field: keyof ContactFormValues, value: string) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

export function ContactForm({
  values,
  errors,
  isSubmitting,
  isValid,
  onChange,
  onSubmit,
}: ContactFormProps) {
  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate>
      <label>
        Name
        <input
          type="text"
          value={values.name}
          onChange={(event) => onChange("name", event.target.value)}
          aria-invalid={Boolean(errors.name)}
        />
        {errors.name ? <span className="field-error">{errors.name}</span> : null}
      </label>

      <label>
        Email
        <input
          type="email"
          value={values.email}
          onChange={(event) => onChange("email", event.target.value)}
          aria-invalid={Boolean(errors.email)}
        />
        {errors.email ? <span className="field-error">{errors.email}</span> : null}
      </label>

      <label>
        Subject
        <input
          type="text"
          value={values.subject}
          onChange={(event) => onChange("subject", event.target.value)}
          aria-invalid={Boolean(errors.subject)}
        />
        {errors.subject ? (
          <span className="field-error">{errors.subject}</span>
        ) : null}
      </label>

      <label>
        Message
        <textarea
          rows={5}
          value={values.message}
          onChange={(event) => onChange("message", event.target.value)}
          aria-invalid={Boolean(errors.message)}
        />
        {errors.message ? (
          <span className="field-error">{errors.message}</span>
        ) : null}
      </label>

      <button type="submit" disabled={isSubmitting || !isValid}>
        {isSubmitting ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
