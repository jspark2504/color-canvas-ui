import type { Metadata } from "next";
import { ComponentGallery } from "@/components/component-gallery";
import { Section } from "@/components/layout/section";

export const metadata: Metadata = {
  title: "Components",
  description: "Buttons, inputs, cards, badges, and alerts with copy-ready snippets.",
};

export default function ComponentsPage() {
  return (
    <main>
      <Section
        title="Component gallery"
        description="Primitives reference design tokens. Each sample includes a focused snippet you can copy into your own project."
      >
        <ComponentGallery />
      </Section>
    </main>
  );
}
