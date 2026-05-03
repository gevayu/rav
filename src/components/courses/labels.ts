import type {
  CertificationTier,
  Course,
  CourseFormat,
  CourseLevel,
} from "@/data/courses";

export const LEVEL_LABELS: Record<CourseLevel, string> = {
  foundation: "Ai01",
  advanced: "Ai05",
  mastery: "Ai05",
};

export const FORMAT_LABELS: Record<CourseFormat, string> = {
  live: "לייב",
  hybrid: "משולב",
  "self-paced": "בקצב עצמי",
};

export const LEVEL_ORDER: CourseLevel[] = ["foundation", "advanced", "mastery"];
export const FORMAT_ORDER: CourseFormat[] = ["live", "hybrid", "self-paced"];

export const CERTIFICATION_TIERS: Record<
  CertificationTier,
  { label: string; name: string }
> = {
  Ai01: { label: "Ai01", name: "יסוד" },
  Ai03: { label: "Ai03", name: "התמחות מקצועית" },
  Ai05: { label: "Ai05", name: "יישום ארגוני" },
};

export const CERTIFICATION_ORDER: CertificationTier[] = ["Ai01", "Ai03", "Ai05"];

export const TIER_COLORS: Record<
  CertificationTier,
  { bg: string; border: string; text: string }
> = {
  Ai01: {
    bg: "bg-[color:var(--color-tier-01-bg)]",
    border: "border-[color:var(--color-tier-01-border)]",
    text: "text-[color:var(--color-tier-01-ink)]",
  },
  Ai03: {
    bg: "bg-[#22c55e]",
    border: "border-[#16a34a]",
    text: "text-[#052e16]",
  },
  Ai05: {
    bg: "bg-[color:var(--color-tier-05-bg)]",
    border: "border-[color:var(--color-tier-05-border)]",
    text: "text-[color:var(--color-tier-05-ink)]",
  },
};

type CertificationPath = {
  entry: CertificationTier | null;
  exit: CertificationTier;
};

export function getCertificationPath(course: Course): CertificationPath {
  if (course.certification) return course.certification;
  switch (course.level) {
    case "foundation":
      return { entry: null, exit: "Ai01" };
    case "advanced":
      return { entry: "Ai01", exit: "Ai05" };
    case "mastery":
      return { entry: "Ai03", exit: "Ai05" };
  }
}
