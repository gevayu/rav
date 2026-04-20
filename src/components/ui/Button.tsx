"use client";

import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { ArrowLeft, Loader2 } from "lucide-react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

type ButtonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  loading?: boolean;
  trailingIcon?: boolean;
  as?: "button" | "a";
  href?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children">;

const base =
  "group relative inline-flex items-center justify-center gap-3 font-medium tracking-tight " +
  "transition-[transform,background-color,color,border-color,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-bronze)] focus-visible:ring-offset-2 " +
  "disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]";

const sizes: Record<Size, string> = {
  md: "h-12 px-6 text-sm rounded-full",
  lg: "h-14 px-8 text-base rounded-full",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-[#059669] text-white shadow-[0_1px_0_rgba(255,255,255,0.25)_inset,0_12px_32px_-12px_rgba(5,150,105,0.6)] hover:bg-[#064e3b] hover:shadow-[0_1px_0_rgba(255,255,255,0.25)_inset,0_16px_40px_-10px_rgba(5,150,105,0.7)]",
  secondary:
    "bg-transparent text-[color:var(--color-bronze)] border border-[color:var(--color-bronze)]/55 hover:bg-[color:var(--color-bronze)]/10 hover:border-[color:var(--color-bronze)]",
  ghost:
    "bg-transparent text-[color:var(--color-bronze)] hover:text-[color:var(--color-bronze-deep)] px-0 h-auto rounded-none",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    children,
    variant = "primary",
    size = "md",
    loading = false,
    trailingIcon = true,
    className,
    disabled,
    as = "button",
    href,
    ...rest
  },
  ref,
) {
  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className ?? ""}`.trim();

  const body = (
    <>
      <span className={loading ? "opacity-0" : "opacity-100 transition-opacity"}>
        {children}
      </span>
      {loading ? (
        <Loader2 className="absolute h-5 w-5 animate-spin" aria-hidden="true" />
      ) : trailingIcon && variant !== "ghost" ? (
        <span
          className={
            "inline-flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] " +
            (variant === "primary"
              ? "bg-white/15 group-hover:-translate-x-1 group-hover:bg-white/25"
              : "bg-[color:var(--color-bronze)]/15 group-hover:-translate-x-1 group-hover:bg-[color:var(--color-bronze)]/25")
          }
          aria-hidden="true"
        >
          <ArrowLeft className="h-4 w-4" strokeWidth={1.6} />
        </span>
      ) : variant === "ghost" && trailingIcon ? (
        <ArrowLeft
          className="h-4 w-4 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-x-1"
          strokeWidth={1.6}
          aria-hidden="true"
        />
      ) : null}
    </>
  );

  if (as === "a" && href) {
    return (
      <a href={href} className={classes}>
        {body}
      </a>
    );
  }

  return (
    <button
      ref={ref}
      className={classes}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...rest}
    >
      {body}
    </button>
  );
});
