"use client";

import { useRef, useState } from "react";
import { CopyButton } from "@/components/copy-button";
import type { ColorFormats, PaletteGroup } from "@/lib/colors";
import { getColorFormats } from "@/lib/colors";
import { cn } from "@/lib/cn";

export interface ColorPaletteGridProps {
  groups: PaletteGroup[];
}

export function ColorPaletteGrid({ groups }: ColorPaletteGridProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="space-y-12">
      {groups.map((group) => (
        <section key={group.id} aria-labelledby={`palette-${group.id}`}>
          <header className="mb-4">
            <h3 id={`palette-${group.id}`} className="text-lg font-semibold text-foreground">
              {group.title}
            </h3>
            <p className="text-sm text-muted-foreground">{group.description}</p>
          </header>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {group.swatches.map((swatch) => (
              <li key={swatch.id}>
                <SwatchCard
                  swatch={swatch}
                  groupId={group.id}
                  expanded={openId === `${group.id}-${swatch.id}`}
                  onToggle={() =>
                    setOpenId((prev) => (prev === `${group.id}-${swatch.id}` ? null : `${group.id}-${swatch.id}`))
                  }
                />
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

interface SwatchCardProps {
  swatch: PaletteGroup["swatches"][number];
  groupId: string;
  expanded: boolean;
  onToggle: () => void;
}

function SwatchCard({ swatch, groupId, expanded, onToggle }: SwatchCardProps) {
  const chipRef = useRef<HTMLSpanElement>(null);
  const [formats, setFormats] = useState<ColorFormats | null>(null);

  const panelId = `swatch-panel-${groupId}-${swatch.id}`;

  const handleActivate = () => {
    if (expanded) {
      setFormats(null);
      onToggle();
      return;
    }
    const el = chipRef.current;
    const rgb = el ? getComputedStyle(el).backgroundColor : "";
    setFormats(getColorFormats(rgb));
    onToggle();
  };

  return (
    <div className="rounded-lg border border-border bg-surface-elevated p-2 shadow-sm">
      <button
        type="button"
        onClick={handleActivate}
        className={cn(
          "flex w-full flex-col gap-2 rounded-md p-1 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          expanded && "bg-neutral-100 dark:bg-neutral-800",
        )}
        aria-expanded={expanded}
        aria-controls={panelId}
      >
        <span
          ref={chipRef}
          className={cn("h-16 w-full rounded-md border border-border shadow-inner", swatch.previewClassName)}
          aria-hidden
        />
        <span className="px-1 text-xs font-medium text-foreground">{swatch.label}</span>
        <span className="px-1 font-mono text-[10px] text-muted-foreground">{swatch.cssVar}</span>
      </button>

      {expanded ? (
        <div id={panelId} className="mt-3 space-y-2 border-t border-border pt-3" role="region" aria-label={`${swatch.label} values`}>
          {formats ? (
            <>
              <ValueRow label="HEX" value={formats.hex} />
              <ValueRow label="RGB" value={formats.rgb} />
              <ValueRow label="HSL" value={formats.hsl} />
              <div className="flex flex-wrap gap-2 pt-1">
                <CopyButton text={formats.hex} label={`Copy ${swatch.label} HEX`} />
                <CopyButton text={formats.rgb} label={`Copy ${swatch.label} RGB`} />
                <CopyButton text={formats.hsl} label={`Copy ${swatch.label} HSL`} />
              </div>
            </>
          ) : (
            <p className="text-xs text-muted-foreground">Could not parse the computed color for this swatch.</p>
          )}
        </div>
      ) : null}
    </div>
  );
}

interface ValueRowProps {
  label: string;
  value: string;
}

function ValueRow({ label, value }: ValueRowProps) {
  return (
    <div className="flex items-baseline justify-between gap-2 text-xs">
      <span className="font-medium text-muted-foreground">{label}</span>
      <span className="font-mono text-[11px] text-foreground">{value}</span>
    </div>
  );
}
