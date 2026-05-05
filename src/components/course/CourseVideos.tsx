"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import type { Course } from "@/data/courses";

type CourseVideosProps = {
  course: Course;
};

export function CourseVideos({ course }: CourseVideosProps) {
  const videos = course.introVideos ?? [];
  if (videos.length === 0) return null;

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
        <Reveal className="mb-14 flex flex-col gap-4">
          <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-[color:var(--color-bronze)]">
            צפייה חופשית
          </span>
          <h2
            id="videos-title"
            className="font-display text-[clamp(2rem,4vw,2.8rem)] font-medium leading-[1.05] text-[color:var(--color-paper-soft)]"
          >
            תראו לפני שתחליטו
          </h2>
        </Reveal>

        <Reveal
          delay={0.15}
          className={`grid gap-6 ${videos.length > 1 ? "md:grid-cols-2" : "max-w-2xl"}`}
        >
          {videos.map((v, i) => (
            <VideoCard
              key={v.videoUrl}
              speaker={v.speaker}
              videoUrl={v.videoUrl}
              thumbUrl={v.thumbUrl}
              delay={i * 0.1}
            />
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function VideoCard({
  speaker,
  videoUrl,
  thumbUrl,
  delay,
}: {
  speaker: string;
  videoUrl: string;
  thumbUrl?: string;
  delay: number;
}) {
  const [playing, setPlaying] = useState(false);
  const playSrc = videoUrl.includes("?")
    ? `${videoUrl}&autoplay=true`
    : `${videoUrl}?autoplay=true`;

  return (
    <article
      style={{ animationDelay: `${delay}s` }}
      className="group flex flex-col gap-5 overflow-hidden rounded-[24px] border border-[color:var(--color-bronze)]/15 bg-[#26262A] transition-colors hover:border-[color:var(--color-bronze)]/45"
    >
      <div className="relative aspect-video w-full overflow-hidden bg-[color:var(--color-ink)]">
        {playing ? (
          <iframe
            src={playSrc}
            title={speaker}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="group/btn relative block h-full w-full cursor-pointer"
            aria-label={`הפעל סרטון של ${speaker}`}
          >
            {thumbUrl ? (
              <Image
                src={thumbUrl}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-cover object-center"
                unoptimized
                aria-hidden="true"
              />
            ) : (
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-br from-[color:var(--color-ink)] via-[#26262A] to-[color:var(--color-ink-soft)]"
              />
            )}
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/10"
            />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-[color:var(--color-bronze)] text-[color:var(--color-ink)] shadow-[0_8px_32px_-8px_rgba(229,184,155,0.4)] transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/btn:scale-110">
                <Play
                  className="h-6 w-6 translate-x-0.5"
                  strokeWidth={0}
                  fill="currentColor"
                  aria-hidden="true"
                />
              </span>
            </span>
          </button>
        )}
      </div>
    </article>
  );
}
