import { profile } from "../../constants/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <p>
        Built by {profile.name} with React, TypeScript, and Vite. {year}.
      </p>
    </footer>
  );
}
