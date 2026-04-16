import type { ReactNode } from "react";
import { Eyebrow } from "./Eyebrow";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  align?: "start" | "center";
  tone?: "ink" | "paper";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "start",
  tone = "ink",
  className,
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "items-center text-center mx-auto" : "items-start text-start";
  const titleTone =
    tone === "ink" ? "text-[color:var(--color-ink)]" : "text-[color:var(--color-paper-soft)]";
  const ledeTone =
    tone === "ink"
      ? "text-[color:var(--color-ink-muted)]"
      : "text-[color:var(--color-paper-soft)]/70";
  const eyebrowTone = tone === "ink" ? "ink" : "paper";

  return (
    <header
      className={`flex max-w-3xl flex-col gap-6 ${alignment} ${className ?? ""}`.trim()}
    >
      {eyebrow ? <Eyebrow tone="bronze">{eyebrow}</Eyebrow> : null}
      <h2
        className={`font-display text-[clamp(2rem,4.2vw,3.25rem)] font-medium leading-[1.05] tracking-tight ${titleTone}`}
      >
        {title}
      </h2>
      {lede ? (
        <p className={`max-w-2xl text-lg leading-relaxed ${ledeTone}`}>{lede}</p>
      ) : null}
      <span
        aria-hidden="true"
        className="h-px w-14 bg-[color:var(--color-bronze)]"
      />
    </header>
  );
}
