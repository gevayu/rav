import type {
  CertificationTier,
  Course,
  CourseFormat,
  CourseLevel,
} from "@/data/courses";

export const LEVEL_LABELS: Record<CourseLevel, string> = {
  foundation: "מבוא",
  advanced: "מתקדם",
  mastery: "מאסטר",
};

export const FORMAT_LABELS: Record<CourseFormat, string> = {
  live: "לייב",
  hybrid: "היברידי",
  "self-paced": "בקצב עצמי",
};

export const LEVEL_ORDER: CourseLevel[] = ["foundation", "advanced", "mastery"];
export const FORMAT_ORDER: CourseFormat[] = ["live", "hybrid", "self-paced"];

export const CERTIFICATION_TIERS: Record<
  CertificationTier,
  { label: string; name: string }
> = {
  AI01: { label: "AI01", name: "יסוד" },
  AI05: { label: "AI05", name: "מקצועי" },
  AI09: { label: "AI09", name: "מאסטר" },
};

export const CERTIFICATION_ORDER: CertificationTier[] = ["AI01", "AI05", "AI09"];

type CertificationPath = {
  entry: CertificationTier | null;
  exit: CertificationTier;
};

export function getCertificationPath(course: Course): CertificationPath {
  if (course.certification) return course.certification;
  switch (course.level) {
    case "foundation":
      return { entry: null, exit: "AI01" };
    case "advanced":
      return { entry: "AI01", exit: "AI05" };
    case "mastery":
      return { entry: "AI05", exit: "AI09" };
  }
}
