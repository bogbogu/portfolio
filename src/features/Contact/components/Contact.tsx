import { SectionHeading } from "../../../components/ui/SectionHeading";
import { profile } from "../../../constants/profile";
import { ContactForm } from "./ContactForm";
import { useContactFormService } from "../services/useContactFormService";
import { FadeIn } from "../../../components/ui/FadeIn";

export default function Contact() {
  const {
    values,
    errors,
    isSubmitting,
    isValid,
    statusMessage,
    handleChange,
    handleSubmit,
  } = useContactFormService();

  return (
    <section id="contact" className="section">
      <FadeIn>
        <SectionHeading
          eyebrow="CONTACT"
          title="Let us build something useful"
          description="Open to remote and hybrid opportunities, freelance collaborations, and product teams that value craft."
        />
      </FadeIn>
      <div className="contact-grid">
        <FadeIn>
          <div className="contact-details">
            <p>Email</p>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <p>Phone</p>
            <a href={`tel:${profile.phone}`}>{profile.phone}</a>
          </div>
        </FadeIn>
        <FadeIn delay={0.08}>
          <ContactForm
            values={values}
            errors={errors}
            isSubmitting={isSubmitting}
            isValid={isValid}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
          {statusMessage ? <p className="status-message">{statusMessage}</p> : null}
        </FadeIn>
      </div>
    </section>
  );
}
