"use client";

import { useCallback, useId, useState } from "react";
import { cn } from "@/lib/cn";

export interface CopyButtonProps {
  text: string;
  /** Visible label for assistive tech */
  label: string;
  className?: string;
}

export function CopyButton({ text, label, className }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);
  const statusId = useId();

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }, [text]);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={handleCopy}
        className={cn(
          "inline-flex items-center justify-center rounded-md border border-border bg-surface-elevated px-2 py-1 text-xs font-medium text-foreground shadow-sm transition-colors hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background dark:hover:bg-neutral-800",
          className,
        )}
        aria-label={label}
        aria-describedby={statusId}
      >
        {copied ? "Copied" : "Copy"}
      </button>
      <span id={statusId} className="sr-only" role="status" aria-live="polite">
        {copied ? "Copied to clipboard" : ""}
      </span>
    </div>
  );
}
