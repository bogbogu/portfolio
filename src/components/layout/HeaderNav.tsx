import { navigation } from "../../constants/navigation";
import { profile } from "../../constants/profile";
import { socialLinks } from "../../constants/socialLinks";
import { FaGithub, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

function getSocialIcon(label: string) {
  switch (label.toLowerCase()) {
    case "github":
      return <FaGithub aria-hidden="true" />;
    case "linkedin":
      return <FaLinkedinIn aria-hidden="true" />;
    case "x":
      return <FaXTwitter aria-hidden="true" />;
    case "instagram":
      return <FaInstagram aria-hidden="true" />;
    default:
      return null;
  }
}

export function HeaderNav() {
  return (
    <aside className="site-header">
      <div className="sidebar-intro">
        <h1 className="name">{profile.name}</h1>
        <p className="role">{profile.role}</p>
        <p className="sidebar-bio">{profile.shortBio}</p>
      </div>

      <nav aria-label="Primary">
        <ul>
          {navigation.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      <footer className="sidebar-footer">
        <div className="contact-info">
          <p>Phone</p>
          <a href={`tel:${profile.phone}`}>{profile.phone}</a>
          <p>Email</p>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </div>
        <ul className="social-links" aria-label="Social links">
          {socialLinks.map((item) => (
            <li key={item.label}>
              <a href={item.url} target="_blank" rel="noreferrer" aria-label={item.label} title={item.label}>
                {getSocialIcon(item.label) ?? item.label}
              </a>
            </li>
          ))}
        </ul>
      </footer>
    </aside>
  );
}
