import chroma from "chroma-js";

export interface PaletteSwatch {
  id: string;
  label: string;
  /** Underlying design token (matches globals.css), e.g. --ds-primary */
  cssVar: string;
  /** Tailwind class for preview background */
  previewClassName: string;
}

export interface PaletteGroup {
  id: string;
  title: string;
  description: string;
  swatches: PaletteSwatch[];
}

export const paletteGroups: PaletteGroup[] = [
  {
    id: "primary",
    title: "Primary",
    description: "Brand and interactive emphasis.",
    swatches: [
      {
        id: "primary",
        label: "Primary",
        cssVar: "--ds-primary",
        previewClassName: "bg-primary",
      },
      {
        id: "primary-foreground",
        label: "On primary",
        cssVar: "--ds-primary-foreground",
        previewClassName: "bg-primary-foreground",
      },
    ],
  },
  {
    id: "neutral",
    title: "Neutral",
    description: "Surfaces, borders, and readable text.",
    swatches: [
      { id: "n50", label: "50", cssVar: "--ds-neutral-50", previewClassName: "bg-neutral-50" },
      { id: "n100", label: "100", cssVar: "--ds-neutral-100", previewClassName: "bg-neutral-100" },
      { id: "n200", label: "200", cssVar: "--ds-neutral-200", previewClassName: "bg-neutral-200" },
      { id: "n300", label: "300", cssVar: "--ds-neutral-300", previewClassName: "bg-neutral-300" },
      { id: "n400", label: "400", cssVar: "--ds-neutral-400", previewClassName: "bg-neutral-400" },
      { id: "n500", label: "500", cssVar: "--ds-neutral-500", previewClassName: "bg-neutral-500" },
      { id: "n600", label: "600", cssVar: "--ds-neutral-600", previewClassName: "bg-neutral-600" },
      { id: "n700", label: "700", cssVar: "--ds-neutral-700", previewClassName: "bg-neutral-700" },
      { id: "n800", label: "800", cssVar: "--ds-neutral-800", previewClassName: "bg-neutral-800" },
      { id: "n900", label: "900", cssVar: "--ds-neutral-900", previewClassName: "bg-neutral-900" },
    ],
  },
  {
    id: "semantic",
    title: "Semantic",
    description: "Status and feedback colors.",
    swatches: [
      {
        id: "success",
        label: "Success",
        cssVar: "--ds-success",
        previewClassName: "bg-success",
      },
      {
        id: "warning",
        label: "Warning",
        cssVar: "--ds-warning",
        previewClassName: "bg-warning",
      },
      {
        id: "destructive",
        label: "Destructive",
        cssVar: "--ds-destructive",
        previewClassName: "bg-destructive",
      },
      {
        id: "info",
        label: "Info",
        cssVar: "--ds-info",
        previewClassName: "bg-info",
      },
    ],
  },
];

export interface ColorFormats {
  hex: string;
  rgb: string;
  hsl: string;
}

export function getColorFormats(value: string): ColorFormats | null {
  try {
    const c = chroma(value.trim());
    return {
      hex: c.hex().toUpperCase(),
      rgb: c.css(),
      hsl: c.css("hsl"),
    };
  } catch {
    return null;
  }
}

export function hslToHex(h: number, s: number, l: number): string {
  return chroma.hsl(h, s / 100, l / 100).hex().toUpperCase();
}
