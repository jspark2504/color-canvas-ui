import type { Metadata } from "next";
import { ColorPaletteGrid } from "@/components/colors/color-palette-grid";
import { LiveThemeEditor } from "@/components/colors/live-theme-editor";
import { Section } from "@/components/layout/section";
import { paletteGroups } from "@/lib/colors";

export const metadata: Metadata = {
  title: "Colors",
  description: "Primary, neutral, and semantic palettes with live primary editing.",
};

export default function ColorsPage() {
  return (
    <main>
      <Section
        title="Color system"
        description="Tokens map to CSS variables and Tailwind utilities. Click a swatch for formats and copy actions."
      >
        <div className="mb-10">
          <LiveThemeEditor />
        </div>
        <ColorPaletteGrid groups={paletteGroups} />
      </Section>
    </main>
  );
}
