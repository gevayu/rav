import { Play } from "lucide-react";
import type { Course } from "@/data/courses";

type CourseVideosProps = {
  course: Course;
};

const videos = [
  {
    id: "intro",
    label: "סרטון היכרות",
    caption: (name: string) => `${name} מספרת על הקורס, למי הוא מיועד ומה תקבלו ממנו.`,
  },
];

export function CourseVideos({ course }: CourseVideosProps) {
  return (
    <section
      aria-labelledby="videos-title"
      className="relative bg-[color:var(--color-ink)] py-24 sm:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-[color:var(--color-bronze)]/25 to-transparent"
      />

      <div className="mx-auto max-w-[1240px] px-6 sm:px-10">
        <div className="mb-14 flex flex-col gap-4">
          <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-[color:var(--color-bronze)]">
            צפייה חופשית
          </span>
          <h2
            id="videos-title"
            className="font-display text-[clamp(2rem,4vw,2.8rem)] font-medium leading-[1.05] text-[color:var(--color-paper-soft)]"
          >
            תראו לפני שתחליטו
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-1 max-w-2xl">
          {videos.map((v) => (
            <article
              key={v.id}
              className="group flex flex-col gap-5 overflow-hidden rounded-[24px] border border-[color:var(--color-bronze)]/15 bg-[#26262A] transition-colors hover:border-[color:var(--color-bronze)]/45"
            >
              <div className="relative aspect-video w-full bg-[color:var(--color-ink)] cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-[color:var(--color-signal)] shadow-[0_8px_32px_-8px_rgba(6,78,59,0.6)] transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110">
                    <Play
                      className="h-6 w-6 text-white"
                      strokeWidth={2}
                      fill="currentColor"
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium tracking-[0.06em] text-[color:var(--color-paper-soft)] backdrop-blur-sm">
                    {v.label}
                  </span>
                  <span className="text-[12px] text-[color:var(--color-paper-soft)]/50">
                    {v.id === "intro" ? "4:32" : "12:18"}
                  </span>
                </div>
              </div>

              <div className="px-7 pb-7">
                <p className="text-[14px] leading-relaxed text-[color:var(--color-paper-soft)]/65">
                  {v.caption(course.instructorName)}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
