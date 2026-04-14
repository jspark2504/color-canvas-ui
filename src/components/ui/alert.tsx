import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "info" | "success" | "warning" | "destructive";
  title?: string;
  children: ReactNode;
}

const variantClasses: Record<NonNullable<AlertProps["variant"]>, string> = {
  info: "border-info/40 bg-info/10 text-foreground",
  success: "border-success/40 bg-success/10 text-foreground",
  warning: "border-warning/40 bg-warning/10 text-foreground",
  destructive: "border-destructive/40 bg-destructive/10 text-foreground",
};

export function Alert({ variant = "info", title, className, children, role = "status", ...props }: AlertProps) {
  return (
    <div
      role={role}
      className={cn("rounded-md border px-4 py-3 text-sm", variantClasses[variant], className)}
      {...props}
    >
      {title ? <p className="mb-1 font-semibold text-foreground">{title}</p> : null}
      <div className="text-muted-foreground">{children}</div>
    </div>
  );
}
