"use client";

import type { ReactNode } from "react";
import { CopyButton } from "@/components/copy-button";
import { Alert } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

interface GalleryItemProps {
  title: string;
  description: string;
  code: string;
  children: ReactNode;
}

function GalleryItem({ title, description, code, children }: GalleryItemProps) {
  return (
    <article className="rounded-lg border border-border bg-surface-elevated p-4 shadow-sm sm:p-6">
      <header className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-base font-semibold text-foreground">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        <CopyButton text={code} label={`Copy ${title} example code`} className="shrink-0" />
      </header>
      <div className="mb-4 flex flex-wrap items-center gap-3 rounded-md border border-dashed border-border bg-surface p-4">{children}</div>
      <pre
        className="max-h-48 overflow-x-auto overflow-y-auto rounded-md border border-border bg-neutral-100 p-3 text-[11px] leading-relaxed text-foreground dark:bg-neutral-50"
        tabIndex={0}
        role="region"
        aria-label={`${title} code sample`}
      >
        <code>{code}</code>
      </pre>
    </article>
  );
}

const buttonCode = `import { Button } from "@/components/ui/button";

export function Example() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
    </div>
  );
}`;

const inputCode = `import { Input } from "@/components/ui/input";

export function Example() {
  return (
    <Input type="email" placeholder="you@example.com" aria-label="Email" />
  );
}`;

const cardCode = `import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Example() {
  return (
    <Card className="max-w-sm">
      <CardHeader>
        <CardTitle>Card title</CardTitle>
      </CardHeader>
      <CardContent>Supporting copy using muted token color.</CardContent>
    </Card>
  );
}`;

const badgeCode = `import { Badge } from "@/components/ui/badge";

export function Example() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge>Default</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  );
}`;

const alertCode = `import { Alert } from "@/components/ui/alert";

export function Example() {
  return (
    <div className="flex flex-col gap-3">
      <Alert variant="info" title="Heads up">
        Contextual message using semantic info tokens.
      </Alert>
      <Alert variant="success" title="Saved">
        Your changes were applied successfully.
      </Alert>
      <Alert variant="warning" title="Review">
        This action may affect billing.
      </Alert>
      <Alert variant="destructive" title="Error" role="alert">
        Something went wrong. Try again.
      </Alert>
    </div>
  );
}`;

export function ComponentGallery() {
  return (
    <div className="flex flex-col gap-8">
      <GalleryItem title="Button" description="Variants and sizes for actions." code={buttonCode}>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Destructive</Button>
        <Button size="sm">Small</Button>
        <Button size="lg">Large</Button>
      </GalleryItem>

      <GalleryItem title="Input" description="Token-backed field styles." code={inputCode}>
        <Input className="max-w-xs" type="email" placeholder="you@example.com" aria-label="Email" />
      </GalleryItem>

      <GalleryItem title="Card" description="Elevated surface with header and body." code={cardCode}>
        <Card className="max-w-sm">
          <CardHeader>
            <CardTitle>Card title</CardTitle>
          </CardHeader>
          <CardContent>Supporting copy using muted token color.</CardContent>
        </Card>
      </GalleryItem>

      <GalleryItem title="Badge" description="Compact status chips." code={badgeCode}>
        <Badge>Default</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="destructive">Destructive</Badge>
        <Badge variant="outline">Outline</Badge>
      </GalleryItem>

      <GalleryItem title="Alert" description="Accessible status regions." code={alertCode}>
        <div className="flex w-full flex-col gap-3">
          <Alert variant="info" title="Heads up">
            Contextual message using semantic info tokens.
          </Alert>
          <Alert variant="success" title="Saved">
            Your changes were applied successfully.
          </Alert>
          <Alert variant="warning" title="Review">
            This action may affect billing.
          </Alert>
          <Alert variant="destructive" title="Error" role="alert">
            Something went wrong. Try again.
          </Alert>
        </div>
      </GalleryItem>
    </div>
  );
}
