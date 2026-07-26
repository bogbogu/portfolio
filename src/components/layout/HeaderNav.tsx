import { useEffect, useState } from "react";
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
  const [activeHref, setActiveHref] = useState(navigation[0]?.href ?? "");

  useEffect(() => {
    let rafId = 0;

    const updateActiveSection = () => {
      const sections = navigation
        .map((item) => {
          const id = item.href.replace("#", "");
          const element = document.getElementById(id);
          return element ? { href: item.href, element } : null;
        })
        .filter(
          (section): section is { href: string; element: HTMLElement } =>
            Boolean(section),
        );

      if (sections.length === 0) {
        return;
      }

      if (window.scrollY < 24) {
        setActiveHref(sections[0].href);
        return;
      }

      const viewportProbe = window.innerHeight * 0.35;
      let currentHref = sections[sections.length - 1].href;

      for (const section of sections) {
        const rect = section.element.getBoundingClientRect();
        if (rect.top <= viewportProbe && rect.bottom > viewportProbe) {
          currentHref = section.href;
          break;
        }

        if (rect.top > viewportProbe) {
          break;
        }

        currentHref = section.href;
      }

      setActiveHref(currentHref);
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    window.addEventListener("hashchange", updateActiveSection);
    window.addEventListener("load", updateActiveSection);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateActiveSection);
      window.removeEventListener("hashchange", updateActiveSection);
      window.removeEventListener("load", updateActiveSection);
    };
  }, []);

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
              <a
                href={item.href}
                className={activeHref === item.href ? "is-active" : undefined}
                aria-current={activeHref === item.href ? "true" : undefined}
                onClick={() => setActiveHref(item.href)}
              >
                {item.label}
              </a>
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
