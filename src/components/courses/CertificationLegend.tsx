import { ShieldCheck } from "lucide-react";
import { CERTIFICATION_ORDER, CERTIFICATION_TIERS, TIER_COLORS } from "./labels";

export function CertificationLegend() {
  return (
    <div
      className="mb-8 rounded-[22px] border border-[color:var(--color-ink)]/10 bg-white/60 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] sm:p-6"
      aria-label="מדרג ההסמכה Ai01 Ai05 Ai10"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
        <div className="flex items-start gap-3 sm:max-w-xs">
          <ShieldCheck
            className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--color-bronze)]"
            strokeWidth={1.8}
            aria-hidden="true"
          />
          <div className="flex flex-col gap-1">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[color:var(--color-bronze-ink)]">
              מדרג ההסמכה
            </p>
            <p className="text-[13px] leading-relaxed text-[color:var(--color-ink-muted)]">
              שלוש דרגות - כל קורס מעלה דרגה אחת לפי רמת העומק שלו.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3" role="list">
          {CERTIFICATION_ORDER.map((tier, idx) => {
            const { label, name } = CERTIFICATION_TIERS[tier];
            return (
              <div key={tier} className="flex items-center gap-2 sm:gap-3" role="listitem">
                <div className="flex flex-col items-center gap-1">
                  <span className={`inline-flex items-center rounded-full border-2 px-3 py-1 font-display text-[13px] font-medium tracking-[0.06em] ${TIER_COLORS[tier].bg} ${TIER_COLORS[tier].border} ${TIER_COLORS[tier].text}`}>
                    {label}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.18em] text-[color:var(--color-ink-muted)]/80">
                    {name}
                  </span>
                </div>
                {idx < CERTIFICATION_ORDER.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="h-px w-6 bg-gradient-to-l from-[color:var(--color-bronze)]/55 to-[color:var(--color-bronze)]/15 sm:w-10"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
