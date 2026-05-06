import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

type Partner = { name: string; file: string; dark?: boolean };

// Source: analiza.college/about — 28 partner logos hosted by the parent group.
const BASE_PARTNERS: Partner[] = [
  { name: "ATIDIM", file: "analiza/atidim.png" },
  { name: "לוחמים להייטק", file: "analiza/lohamim-le-hitech.png" },
  { name: "שותף 01", file: "analiza/partner-01.png" },
  { name: "שותף 02", file: "analiza/partner-02.png" },
  { name: "שותף 03", file: "analiza/partner-03.png" },
  { name: "שותף 04", file: "analiza/partner-04.png" },
  { name: "שותף 05", file: "analiza/partner-05.png" },
  { name: "שותף 06", file: "analiza/partner-06.png" },
  { name: "שותף 07", file: "analiza/partner-07.png" },
  { name: "שותף 08", file: "analiza/partner-08.png" },
  { name: "שותף 09", file: "analiza/partner-09.png" },
  { name: "שותף 10", file: "analiza/partner-10.png" },
  { name: "שותף 11", file: "analiza/partner-11.png" },
  { name: "שותף 12", file: "analiza/partner-12.png" },
  { name: "שותף 13", file: "analiza/partner-13.png" },
  { name: "שותף 14", file: "analiza/partner-14.png" },
  { name: "שותף 15", file: "analiza/partner-15.png" },
  { name: "שותף 16", file: "analiza/partner-16.png" },
  { name: "שותף 17", file: "analiza/partner-17.png" },
  { name: "שותף 18", file: "analiza/partner-18.png" },
  { name: "שותף 19", file: "analiza/partner-19.png" },
  { name: "שותף 20", file: "analiza/partner-20.png" },
  { name: "שותף 21", file: "analiza/partner-21.png" },
  { name: "שותף 22", file: "analiza/partner-22.png" },
  { name: "שותף 23", file: "analiza/partner-23.png" },
  { name: "שותף 24", file: "analiza/partner-24.png" },
  { name: "שותף 25", file: "analiza/partner-25.png" },
  { name: "שותף 26", file: "analiza/partner-26.png" },
];

// Duplicate enough times so the marquee has continuous content during a full loop.
const partners: Partner[] = Array.from({ length: 2 }, () => BASE_PARTNERS).flat();

function LogoCard({ p }: { p: Partner }) {
  return (
    <div
      className={`flex h-24 w-44 shrink-0 items-center justify-center rounded-xl border px-5 ${
        p.dark
          ? "border-[color:var(--color-bronze)]/30 bg-[color:var(--color-ink)]"
          : "border-[color:var(--color-bronze)]/15 bg-white"
      }`}
    >
      <div className="relative h-14 w-full">
        <Image
          src={`/images/partners/${p.file}`}
          alt={p.name}
          fill
          className="object-contain"
          sizes="176px"
        />
      </div>
    </div>
  );
}

export function PartnersCarousel() {
  return (
    <section
      className="relative isolate overflow-hidden bg-[color:var(--color-cream)] pt-1 pb-5 sm:pt-2 sm:pb-7"
      aria-label="חברות שלמדו איתנו"
    >
      <div className="mx-auto mb-5 max-w-[1180px] px-6 sm:px-10">
        <Reveal className="flex flex-col items-center text-center">
          <span className="text-[11px] uppercase tracking-[0.24em] text-[color:var(--color-bronze-ink)]">
            חברות שלמדו איתנו
          </span>
        </Reveal>
      </div>

      <div
        className="group relative overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0, black 8%, black 92%, transparent 100%)",
        }}
      >
        {/* dir=ltr ensures LTR flex order so translateX(-50%) loops seamlessly */}
        <div dir="ltr" className="flex w-max animate-partners-marquee [animation-play-state:running] group-hover:[animation-play-state:paused]">
          <div className="flex shrink-0 items-center gap-6 pr-6">
            {partners.map((p, i) => (
              <LogoCard key={`a-${i}-${p.file}`} p={p} />
            ))}
          </div>
          <div className="flex shrink-0 items-center gap-6 pr-6" aria-hidden="true">
            {partners.map((p, i) => (
              <LogoCard key={`b-${i}-${p.file}`} p={p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
