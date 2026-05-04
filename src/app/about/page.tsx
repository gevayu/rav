import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Eyebrow } from "@/components/ui/Eyebrow";

export const metadata: Metadata = {
  title: "אודות | המרכז הרב-תחומי להכשרות Ai",
  description: "המרכז הרב-תחומי להכשרות Ai - אודות",
};

export default function AboutPage() {
  return (
    <>
      <Header forceDark />
      <main className="bg-[color:var(--color-paper-soft)]">
        <section className="relative pt-40 pb-24 sm:pt-48 sm:pb-28">
          <div className="mx-auto max-w-[860px] px-6 sm:px-10">
            <Eyebrow tone="bronze">אודות</Eyebrow>
            <h1 className="mt-6 font-display text-[clamp(2.4rem,5.5vw,4rem)] font-medium leading-[1.05] tracking-tight text-[color:var(--color-ink)]">
              המרכז הרב-תחומי להכשרות Ai
            </h1>
            <p className="mt-8 text-lg leading-relaxed text-[color:var(--color-ink-muted)]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <figure className="mt-12">
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl ring-1 ring-[color:var(--color-ink)]/10 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.25)]">
                <iframe
                  src="https://www.youtube.com/embed/Ssv1xPEnpmY"
                  title="גל גנוט, ממייסדי המרכז, מסביר על חשיבות הכשרות ה-Ai המקצועיות"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                  className="absolute inset-0 h-full w-full"
                />
              </div>
              <figcaption className="mt-3 text-center text-[13px] text-[color:var(--color-ink-muted)]">
                גל גנוט, ממייסדי המרכז, מסביר על חשיבות הכשרות ה-Ai המקצועיות
              </figcaption>
            </figure>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
