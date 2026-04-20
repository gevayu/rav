type EyebrowProps = {
  children: React.ReactNode;
  tone?: "bronze" | "ink" | "paper";
  className?: string;
};

export function Eyebrow({ children, tone = "bronze", className }: EyebrowProps) {
  const toneClass =
    tone === "bronze"
      ? "text-[color:var(--color-bronze)]"
      : tone === "ink"
        ? "text-[color:var(--color-ink)]"
        : "text-[color:var(--color-paper-soft)]";

  return (
    <span
      className={`inline-flex items-center text-[20px] font-medium uppercase tracking-[0.22em] ${toneClass} ${className ?? ""}`.trim()}
    >
      {children}
    </span>
  );
}
