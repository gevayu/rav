import { SearchX } from "lucide-react";
import { Button } from "@/components/ui/Button";

type EmptyStateProps = {
  onReset: () => void;
};

export function EmptyState({ onReset }: EmptyStateProps) {
  return (
    <div className="mt-20 flex flex-col items-center gap-6 rounded-[32px] border border-dashed border-[color:var(--color-ink)]/15 bg-white/60 px-8 py-20 text-center">
      <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-[color:var(--color-bronze)]/12 text-[color:var(--color-bronze-ink)]">
        <SearchX className="h-6 w-6" strokeWidth={1.6} />
      </span>
      <div className="flex flex-col items-center gap-2">
        <h3 className="font-display text-2xl font-medium text-[color:var(--color-ink)]">
          לא נמצאו קורסים בסינון הזה
        </h3>
        <p className="max-w-md text-[14px] text-[color:var(--color-ink-muted)]">
          נסה לשחרר את אחד הסינונים, או חזור לתצוגה המלאה. אנחנו מוסיפים קורסים
          חדשים בכל מחזור.
        </p>
      </div>
      <Button variant="secondary" size="md" trailingIcon={false} onClick={onReset}>
        נקה סינונים
      </Button>
    </div>
  );
}
