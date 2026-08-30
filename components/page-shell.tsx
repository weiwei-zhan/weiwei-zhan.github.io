import type { ReactNode } from "react";

export function PageShell({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <main className="page-shell">
      <div className="page-shell__content">
        <header className="page-intro">
          <h1>{title}</h1>
          <p className="page-intro__lead">{intro}</p>
        </header>
        {children}
      </div>
    </main>
  );
}
