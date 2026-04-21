"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";

const navItems = [
  { label: "קורסים", href: "/courses" },
  { label: "מדרג ההסמכה", href: "/certification" },
  { label: "לעצמאיים", href: "/solo" },
  { label: "לארגונים", href: "/business" },
  { label: "המומחים", href: "/#champions" },
  { label: "בלוג", href: "/#free" },
];

export function Header({ forceDark = false }: { forceDark?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={
          "fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:pt-6 " +
          (scrolled ? "pt-3 sm:pt-4" : "")
        }
      >
        <div
          className={
            "pointer-events-auto flex w-full max-w-[1180px] items-center justify-between gap-6 rounded-full border px-4 py-2 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:px-5 " +
            (scrolled || forceDark
              ? "border-[color:var(--color-bronze)]/25 bg-[color:var(--color-ink)]/85 backdrop-blur-xl shadow-[0_18px_40px_-24px_rgba(0,0,0,0.6)]"
              : "border-white/10 bg-white/5 backdrop-blur-md")
          }
        >
          <a href="/" className="flex items-center gap-3 rounded-full py-1 pr-1">
            <span className="inline-block scale-[2.4] translate-x-[-5px]"><Logo tone="bronze" size="sm" /></span>
            <span className="hidden flex-col leading-[1.5] sm:flex">
              <span className="font-display text-[15px] font-medium tracking-tight text-[color:var(--color-paper-soft)]">
                המרכז הרב-תחומי
              </span>
              <span className="font-display text-[15px] font-medium tracking-tight text-[color:var(--color-paper-soft)]">
                להכשרות Ai
              </span>
            </span>
          </a>

          <nav
            aria-label="ניווט ראשי"
            className="hidden items-center gap-1 lg:flex"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-[16px] font-medium text-[color:var(--color-paper-soft)]/85 transition-colors hover:bg-white/5 hover:text-[color:var(--color-paper-soft)]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#lead"
              className="hidden h-10 items-center gap-2 rounded-full border border-[color:var(--color-bronze)] bg-[color:var(--color-bronze)]/10 px-5 text-[13px] font-medium text-[color:var(--color-bronze)] transition-all duration-300 hover:bg-[color:var(--color-bronze)]/18 md:inline-flex"
            >
              תיאום ייעוץ
            </a>
            <button
              type="button"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "סגור תפריט" : "פתח תפריט"}
              onClick={() => setMenuOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-[color:var(--color-paper-soft)] transition-colors hover:bg-white/10 lg:hidden"
            >
              {menuOpen ? (
                <X className="h-4 w-4" strokeWidth={1.6} />
              ) : (
                <Menu className="h-4 w-4" strokeWidth={1.6} />
              )}
            </button>
          </div>
        </div>
      </header>

      {menuOpen ? (
        <div
          className="fixed inset-0 z-40 flex flex-col items-stretch justify-end bg-[color:var(--color-ink)]/95 backdrop-blur-2xl lg:hidden"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex flex-col gap-6 px-8 pb-24 pt-28">
            <nav className="flex flex-col divide-y divide-white/10">
              {navItems.map((item, idx) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-5 font-display text-3xl font-medium text-[color:var(--color-paper-soft)] transition-colors hover:text-[color:var(--color-bronze)]"
                  style={{
                    animation: `slideUpIn 520ms cubic-bezier(0.22,1,0.36,1) ${idx * 70}ms both`,
                  }}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <Button as="a" href="#lead" variant="primary" size="lg">
              לתיאום ייעוץ
            </Button>
          </div>
        </div>
      ) : null}
    </>
  );
}
