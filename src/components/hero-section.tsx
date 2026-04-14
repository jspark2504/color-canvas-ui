"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function HeroSection() {
  return (
    <section
      className="relative flex min-h-[calc(100dvh-3.5rem)] flex-col justify-center overflow-hidden px-4 py-16 sm:px-6 lg:px-8"
      style={{
        backgroundImage: "linear-gradient(135deg, var(--ds-primary), var(--ds-info), var(--ds-neutral-600))",
      }}
      aria-labelledby="hero-title"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,color-mix(in_oklab,var(--ds-surface-elevated)_35%,transparent),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_60%,color-mix(in_oklab,var(--ds-primary-foreground)_12%,transparent),transparent_50%)]" />

      <div className="relative mx-auto flex max-w-3xl flex-col gap-8 text-center">
        <motion.p
          custom={0}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/90 sm:text-sm"
        >
          Color Design Showcase
        </motion.p>
        <motion.h1
          id="hero-title"
          custom={1}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="font-display text-4xl font-normal leading-tight text-primary-foreground sm:text-5xl lg:text-6xl"
        >
          A living design system you can tune, preview, and ship.
        </motion.h1>
        <motion.p
          custom={2}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="text-base text-primary-foreground/85 sm:text-lg"
        >
          Explore palettes, typography rhythm, and UI primitives — all wired to tokens, dark mode, and motion.
        </motion.p>
        <motion.div
          custom={3}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center"
        >
          <Link
            href="/colors"
            className="inline-flex h-11 items-center justify-center rounded-md bg-primary-foreground px-6 text-sm font-semibold text-primary shadow-lg transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
          >
            View color system
          </Link>
          <Link
            href="/components"
            className="inline-flex h-11 items-center justify-center rounded-md border border-primary-foreground/40 bg-transparent px-6 text-sm font-semibold text-primary-foreground backdrop-blur-sm transition-colors hover:bg-primary-foreground/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
          >
            Browse components
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
