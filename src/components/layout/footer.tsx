export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-surface-elevated">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-center text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:text-left sm:px-6 lg:px-8">
        <p>Color Design Showcase — built with Next.js, Tailwind CSS, and Framer Motion.</p>
        <p className="sm:text-right">Deploy-ready for Vercel.</p>
      </div>
    </footer>
  );
}
