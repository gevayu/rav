import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Eyebrow } from "@/components/ui/Eyebrow";

export const metadata: Metadata = {
  title: "הצהרת נגישות | המרכז הרב-תחומי להכשרות Ai",
  description: "המרכז הרב-תחומי להכשרות Ai - הצהרת נגישות",
};

export default function AccessibilityPage() {
  return (
    <>
      <Header forceDark />
      <main className="bg-[color:var(--color-paper-soft)]">
        <section className="relative pt-40 pb-24 sm:pt-48 sm:pb-28">
          <div className="mx-auto max-w-[860px] px-6 sm:px-10">
            <Eyebrow tone="bronze">הצהרת נגישות</Eyebrow>
            <h1 className="mt-6 font-display text-[clamp(2.4rem,5.5vw,4rem)] font-medium leading-[1.05] tracking-tight text-[color:var(--color-ink)]">
              הצהרת נגישות
            </h1>
            <p className="mt-8 text-lg leading-relaxed text-[color:var(--color-ink-muted)]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
