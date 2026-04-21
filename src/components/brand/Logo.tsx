import Image from "next/image";

type LogoProps = {
  className?: string;
  showWordmark?: boolean;
  tone?: "bronze" | "ink" | "paper";
  size?: "sm" | "md" | "lg";
};

// CSS filter to recolor the bronze PNG for different tones
const toneFilter: Record<string, string> = {
  bronze: "none",
  ink: "brightness(0) saturate(0) opacity(0.85)",
  paper: "brightness(0) invert(1) opacity(0.9)",
};

const wordmarkColor: Record<string, string> = {
  bronze: "var(--color-bronze)",
  ink: "var(--color-ink)",
  paper: "var(--color-paper-soft)",
};

const sizeClass = {
  sm: "h-12 w-12",
  md: "h-16 w-16",
  lg: "h-24 w-24",
};

const sizePx = { sm: "48px", md: "64px", lg: "96px" };

export function Logo({ className, showWordmark = false, tone = "bronze", size = "lg" }: LogoProps) {
  return (
    <div className={`flex items-center gap-0 ${className ?? ""}`.trim()}>
      <div
        className={`relative ${sizeClass[size]} shrink-0`}
        style={{ filter: toneFilter[tone] }}
      >
        <Image
          src="/images/logo-mark.png"
          alt="לוגו המרכז הרב-תחומי להכשרות Ai"
          fill
          sizes={sizePx[size]}
          className="object-contain"
          priority

        />
      </div>
      {showWordmark ? (
        <div className="flex flex-col leading-[1.2] translate-x-[-5px] translate-y-[5px]">
          <span
            className="font-display text-[14px] font-medium tracking-tight"
            style={{ color: wordmarkColor[tone] }}
          >
            המרכז הרב-תחומי
          </span>
          <span
            className="font-display text-[14px] font-medium tracking-tight"
            style={{ color: wordmarkColor[tone] }}
          >
            להכשרות Ai
          </span>
        </div>
      ) : null}
    </div>
  );
}
