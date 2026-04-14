import type { ReactNode } from "react";

export interface SectionProps {
  id?: string;
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, title, description, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 ${className}`}>
      {(title || description) && (
        <header className="mb-8 max-w-2xl">
          {title ? <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">{title}</h2> : null}
          {description ? <p className="mt-2 text-sm text-muted-foreground sm:text-base">{description}</p> : null}
        </header>
      )}
      {children}
    </section>
  );
}
