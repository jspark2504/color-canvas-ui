import type { Metadata } from "next";
import { Section } from "@/components/layout/section";

export const metadata: Metadata = {
  title: "Typography",
  description: "Type scale, weights, and pairing across display, sans, and mono.",
};

const scaleSteps: { token: string; label: string; sample: string }[] = [
  { token: "text-xs", label: "Extra small", sample: "The quick brown fox" },
  { token: "text-sm", label: "Small", sample: "The quick brown fox jumps over the lazy dog." },
  { token: "text-base", label: "Base", sample: "The quick brown fox jumps over the lazy dog." },
  { token: "text-lg", label: "Large", sample: "The quick brown fox jumps over the lazy dog." },
  { token: "text-xl", label: "Extra large", sample: "The quick brown fox jumps over the lazy dog." },
  { token: "text-2xl", label: "2XL", sample: "Color rhythm at a glance." },
  { token: "text-3xl", label: "3XL", sample: "Readable hierarchy" },
  { token: "text-4xl", label: "4XL", sample: "Display moments" },
  { token: "text-5xl", label: "5XL", sample: "Hero scale" },
];

const weights: { token: string; label: string }[] = [
  { token: "font-thin", label: "Thin" },
  { token: "font-light", label: "Light" },
  { token: "font-normal", label: "Normal" },
  { token: "font-medium", label: "Medium" },
  { token: "font-semibold", label: "Semibold" },
  { token: "font-bold", label: "Bold" },
  { token: "font-extrabold", label: "Extrabold" },
];

export default function TypographyPage() {
  return (
    <main>
      <Section
        title="Typography"
        description="Mobile-first scale using Tailwind utilities. Pairing combines display serif with Geist Sans and mono for code."
      >
        <div className="flex flex-col gap-12">
          <section aria-labelledby="type-scale-heading">
            <h3 id="type-scale-heading" className="mb-4 text-lg font-semibold text-foreground">
              Scale
            </h3>
            <ul className="divide-y divide-border rounded-lg border border-border bg-surface-elevated">
              {scaleSteps.map((row) => (
                <li key={row.token} className="flex flex-col gap-1 px-4 py-4 sm:flex-row sm:items-baseline sm:gap-6">
                  <div className="shrink-0 sm:w-40">
                    <p className="text-xs font-medium text-muted-foreground">{row.label}</p>
                    <p className="font-mono text-[11px] text-muted-foreground">{row.token}</p>
                  </div>
                  <p className={`${row.token} text-foreground`}>{row.sample}</p>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="type-weights-heading">
            <h3 id="type-weights-heading" className="mb-4 text-lg font-semibold text-foreground">
              Weights
            </h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {weights.map((w) => (
                <div
                  key={w.token}
                  className="rounded-lg border border-border bg-surface-elevated px-4 py-3"
                >
                  <p className="font-mono text-[11px] text-muted-foreground">{w.token}</p>
                  <p className={`${w.token} text-2xl text-foreground`}>{w.label}</p>
                </div>
              ))}
            </div>
          </section>

          <section aria-labelledby="type-styles-heading">
            <h3 id="type-styles-heading" className="mb-4 text-lg font-semibold text-foreground">
              Styles
            </h3>
            <ul className="grid gap-3 sm:grid-cols-3">
              <li className="rounded-lg border border-border bg-surface-elevated px-4 py-3">
                <p className="font-mono text-[11px] text-muted-foreground">italic</p>
                <p className="text-lg italic text-foreground">Italic emphasis</p>
              </li>
              <li className="rounded-lg border border-border bg-surface-elevated px-4 py-3">
                <p className="font-mono text-[11px] text-muted-foreground">underline</p>
                <p className="text-lg text-foreground underline">Underlined link tone</p>
              </li>
              <li className="rounded-lg border border-border bg-surface-elevated px-4 py-3">
                <p className="font-mono text-[11px] text-muted-foreground">uppercase tracking</p>
                <p className="text-sm font-semibold uppercase tracking-widest text-foreground">Eyebrow</p>
              </li>
            </ul>
          </section>

          <section aria-labelledby="type-pairing-heading">
            <h3 id="type-pairing-heading" className="mb-4 text-lg font-semibold text-foreground">
              Pairing
            </h3>
            <div className="rounded-lg border border-border bg-surface-elevated p-6">
              <p className="font-display text-4xl text-foreground">Instrument Serif for display</p>
              <p className="mt-3 max-w-2xl text-base text-muted-foreground">
                Geist Sans carries UI copy and dense paragraphs with neutral rhythm. Code and tokens use Geist Mono for
                alignment and legibility.
              </p>
              <pre className="mt-4 overflow-x-auto rounded-md border border-border bg-neutral-100 p-3 font-mono text-xs text-foreground dark:bg-neutral-50">
                <code>const theme = {`{ primary: "var(--ds-primary)" }`};</code>
              </pre>
            </div>
          </section>
        </div>
      </Section>
    </main>
  );
}
