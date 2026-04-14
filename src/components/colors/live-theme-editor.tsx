"use client";

import chroma from "chroma-js";
import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { hslToHex } from "@/lib/colors";
import { useIsClient } from "@/lib/use-is-client";

function readPrimaryHsl(): { h: number; s: number; l: number } {
  const raw = getComputedStyle(document.documentElement).getPropertyValue("--ds-primary").trim();
  try {
    const [hh, ss, ll] = chroma(raw).hsl();
    return {
      h: Math.round(Number.isFinite(hh) ? hh : 0),
      s: Math.round(ss * 100),
      l: Math.round(ll * 100),
    };
  } catch {
    return { h: 250, s: 65, l: 55 };
  }
}

export function LiveThemeEditor() {
  const isClient = useIsClient();

  if (!isClient) {
    return (
      <div
        className="min-h-[200px] rounded-lg border border-border bg-surface-elevated p-4 shadow-sm sm:min-h-[220px] sm:p-6"
        aria-hidden
      />
    );
  }

  return <LiveThemeEditorClient />;
}

function LiveThemeEditorClient() {
  const initial = useMemo(() => readPrimaryHsl(), []);
  const [h, setH] = useState(initial.h);
  const [s, setS] = useState(initial.s);
  const [l, setL] = useState(initial.l);

  useEffect(() => {
    const hex = hslToHex(h, s, l);
    document.documentElement.style.setProperty("--ds-primary", hex);
    document.documentElement.style.setProperty("--ds-ring", hex);
  }, [h, s, l]);

  const handleReset = () => {
    document.documentElement.style.removeProperty("--ds-primary");
    document.documentElement.style.removeProperty("--ds-ring");
    const next = readPrimaryHsl();
    setH(next.h);
    setS(next.s);
    setL(next.l);
  };

  const previewHex = hslToHex(h, s, l);

  return (
    <div
      className="rounded-lg border border-border bg-surface-elevated p-4 shadow-sm sm:p-6"
      role="region"
      aria-labelledby="live-theme-editor-title"
    >
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 id="live-theme-editor-title" className="text-base font-semibold text-foreground">
            Live theme editor
          </h3>
          <p className="text-sm text-muted-foreground">Adjust primary; tokens update across the site.</p>
        </div>
        <div className="flex items-center gap-3">
          <span
            className="h-10 w-10 shrink-0 rounded-md border border-border shadow-inner"
            style={{ backgroundColor: previewHex }}
            aria-hidden
          />
          <Button type="button" variant="outline" size="sm" onClick={handleReset}>
            Reset
          </Button>
        </div>
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-3">
        <SliderField
          id="primary-hue"
          label="Hue"
          min={0}
          max={360}
          value={h}
          onChange={setH}
          formatValue={(v) => `${v}°`}
        />
        <SliderField
          id="primary-saturation"
          label="Saturation"
          min={0}
          max={100}
          value={s}
          onChange={setS}
          formatValue={(v) => `${v}%`}
        />
        <SliderField
          id="primary-lightness"
          label="Lightness"
          min={0}
          max={100}
          value={l}
          onChange={setL}
          formatValue={(v) => `${v}%`}
        />
      </div>
    </div>
  );
}

interface SliderFieldProps {
  id: string;
  label: string;
  min: number;
  max: number;
  value: number;
  onChange: (v: number) => void;
  formatValue: (v: number) => string;
}

function SliderField({ id, label, min, max, value, onChange, formatValue }: SliderFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between gap-2">
        <label htmlFor={id} className="text-sm font-medium text-foreground">
          {label}
        </label>
        <span className="text-xs text-muted-foreground" aria-live="polite">
          {formatValue(value)}
        </span>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="h-2 w-full cursor-pointer accent-primary"
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={value}
        aria-valuetext={formatValue(value)}
      />
    </div>
  );
}
