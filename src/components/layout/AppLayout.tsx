import type { ReactNode } from "react";
import { Footer } from "./Footer";
import { HeaderNav } from "./HeaderNav";

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="app-shell">
      <div className="ambient-bg" aria-hidden="true" />
      <div className="layout-columns">
        <HeaderNav />
        <main className="main-content">
          {children}
          <Footer />
        </main>
      </div>
    </div>
  );
}
