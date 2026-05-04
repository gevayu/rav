import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

type Partner = { name: string; file: string; dark?: boolean };

const BASE_PARTNERS: Partner[] = [
  { name: "המיזם הלאומי לשילוב חרדים בהייטק", file: "haredi-hitech.jpg", dark: true },
  { name: "ג'וינט ישראל", file: "jdc.png" },
  { name: "שירות התעסוקה הישראלי", file: "employment-service.jpg" },
  { name: "המכללה האקדמית ספיר", file: "sapir-college.png" },
  { name: "משרד הביטחון", file: "mod.jpg" },
  { name: "Python Institute", file: "python-institute.png" },
];

const partners: Partner[] = Array.from({ length: 5 }, () => BASE_PARTNERS).flat();

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
