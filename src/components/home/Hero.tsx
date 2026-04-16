"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Logo } from "@/components/brand/Logo";
import { heroGridInstructors } from "@/data/instructors";
import { ShieldCheck } from "lucide-react";

// Grid: 9 columns x 5 rows of faces, masked + layered with radial gradient.
const COLS = 9;
const ROWS = 5;
const cells = Array.from({ length: COLS * ROWS }, (_, i) => {
  const instructor = heroGridInstructors[i % heroGridInstructors.length];
  return { ...instructor, idx: i };
});

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-[color:var(--color-ink)] pt-36 pb-24 sm:pt-44 sm:pb-32"
      aria-label="השלב הבא של AI - התמקצעות מקצועית"
    >
      {/* Face grid background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          maskImage:
            "radial-gradient(ellipse 65% 55% at 50% 42%, black 25%, rgba(0,0,0,0.85) 45%, transparent 78%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 65% 55% at 50% 42%, black 25%, rgba(0,0,0,0.85) 45%, transparent 78%)",
        }}
      >
        <div
          className="grid h-full w-full gap-3 px-6 sm:gap-4 sm:px-10"
          style={{
            gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))`,
            gridTemplateRows: `repeat(${ROWS}, minmax(0, 1fr))`,
          }}
        >
          {cells.map((cell, i) => {
            const col = i % COLS;
            const row = Math.floor(i / COLS);
            const distFromCenter =
              Math.abs(col - (COLS - 1) / 2) + Math.abs(row - (ROWS - 1) / 2);
            const opacity = Math.max(0.18, 0.78 - distFromCenter * 0.09);
            const delay = (col + row) * 0.04;
            return (
              <motion.div
                key={cell.id}
                initial={reduce ? undefined : { opacity: 0, scale: 0.85, filter: "blur(12px)" }}
                animate={
                  reduce
                    ? undefined
                    : { opacity, scale: 1, filter: "blur(0px)" }
                }
                transition={{
                  duration: 1.1,
                  delay,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative aspect-square w-full overflow-hidden rounded-full ring-1 ring-[color:var(--color-bronze)]/30"
                style={{ opacity: reduce ? opacity : undefined }}
              >
                <Image
                  src={cell.url}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 60px, 100px"
                  className="object-cover grayscale-[30%] contrast-[0.9]"
                  unoptimized
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(28,28,30,0.55) 0%, rgba(28,28,30,0.15) 55%, rgba(229,184,155,0.18) 100%)",
                  }}
                  aria-hidden="true"
                />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Ambient bronze glow */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-[38%] h-[780px] w-[780px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, rgba(229,184,155,0.18) 0%, rgba(229,184,155,0.05) 35%, transparent 75%)",
        }}
      />

      {/* Content */}
      <div className="relative mx-auto flex max-w-[1100px] flex-col items-center gap-8 px-6 text-center sm:px-10">
        <motion.div
          initial={reduce ? undefined : { opacity: 0, y: 20 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <Logo className="mb-2 scale-125" />
        </motion.div>

        <motion.div
          initial={reduce ? undefined : { opacity: 0, y: 12 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
        >
          <Eyebrow>השלב הבא של AI</Eyebrow>
        </motion.div>

        <motion.h1
          initial={reduce ? undefined : { opacity: 0, y: 32, filter: "blur(10px)" }}
          animate={reduce ? undefined : { opacity: 1, y: 0, filter: "blur(0)" }}
          transition={{ duration: 1.1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[clamp(2.6rem,6.2vw,5rem)] font-medium leading-[0.95] tracking-tight text-[color:var(--color-paper-soft)]"
        >
          לא מלמדים AI.
          <br />
          <span className="text-[color:var(--color-bronze)]">
            מלמדים איך ליישם אותו
          </span>
          <br />
          בתחום שלך.
        </motion.h1>

        <motion.p
          initial={reduce ? undefined : { opacity: 0, y: 16 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="max-w-2xl text-lg leading-relaxed text-[color:var(--color-paper-soft)]/75 sm:text-xl"
        >
          הכשרות AI סקטוריאליות לעורכי דין, רופאים, אנשי נדל״ן, מהנדסים,
          אנשי כספים ועוד. את הקורס מעביר מומחה אמיתי מהתחום שלך —
          לא מרצה גנרי.
        </motion.p>

        <motion.div
          initial={reduce ? undefined : { opacity: 0, y: 16 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.85 }}
          className="mt-2 flex flex-col items-center gap-3 sm:flex-row sm:gap-4"
        >
          <Button as="a" href="/courses" variant="primary" size="lg">
            לקטלוג הקורסים
          </Button>
          <Button as="a" href="#lead" variant="secondary" size="lg">
            לתיאום ייעוץ
          </Button>
        </motion.div>

        <motion.div
          initial={reduce ? undefined : { opacity: 0 }}
          animate={reduce ? undefined : { opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-10 inline-flex items-center gap-3 rounded-full border border-[color:var(--color-bronze)]/30 bg-[color:var(--color-ink)]/60 px-5 py-2.5 backdrop-blur-sm"
        >
          <ShieldCheck
            className="h-4 w-4 text-[color:var(--color-bronze)]"
            strokeWidth={1.6}
          />
          <span className="text-[12px] font-medium tracking-wide text-[color:var(--color-paper-soft)]/80">
            מכללה מפוקחת · משרד העבודה, הביטחון והחינוך
          </span>
        </motion.div>
      </div>

      {/* Bottom fade to cream for smooth transition to SocialProofBar */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent via-[color:var(--color-ink)]/60 to-[color:var(--color-ink)]"
      />
    </section>
  );
}
