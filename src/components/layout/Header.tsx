"use client";

import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";

type NavItem = {
  label: string;
  href: string;
  disabled?: boolean;
  submenu?: { label: string; href: string }[];
};

const courseSubmenu = [
  { label: "קטלוג הקורסים",                                      href: "/courses" },
  { label: "Ai לשופטים, עורכי דין ומשפטנים",                    href: "/courses/ai-law-applied" },
  { label: "Ai לרופאים, אחיות וצוותים רפואיים",                  href: "/courses/ai-medicine" },
  { label: "Ai לרואי חשבון ותפקידים פיננסיים",                  href: "/courses/ai-finance" },
  { label: "Ai למשקיעי נדל״ן ומתווכים",                          href: "/courses/ai-realestate" },
  { label: "Ai למנהלי פרוייקטים בדגש על הנדסה אזרחית",            href: "/courses/ai-engineering" },
];

const navItems: NavItem[] = [
  { label: "אודות", href: "/about" },
  { label: "קורסים", href: "/courses", submenu: courseSubmenu },
  { label: "תחומים מקצועיים", href: "/#sectors" },
  { label: "המומחים", href: "/#champions" },
  { label: "מדרג ההסמכה", href: "/#certification" },
  { label: "קהילתיות", href: "/#community" },
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
          <a href="/" className="flex items-end gap-3 rounded-full py-1 pr-1 -translate-y-[9px]">
            <span className="inline-block scale-[2.76] translate-x-[-5px]"><Logo tone="bronze" size="sm" /></span>
            <span className="hidden flex-col leading-[1.2] sm:flex translate-x-[-5px] translate-y-[5px]">
              <span className="font-display text-[14px] font-medium tracking-tight text-[color:var(--color-paper-soft)]">
                המרכז הרב-תחומי
              </span>
              <span className="font-display text-[14px] font-medium tracking-tight text-[color:var(--color-paper-soft)]">
                להכשרות Ai
              </span>
            </span>
          </a>

          <nav
            aria-label="ניווט ראשי"
            className="hidden items-center gap-1 lg:flex"
          >
            {navItems.map((item) => {
              if (item.disabled) {
                return (
                  <span
                    key={item.href}
                    className="rounded-full px-4 py-2 text-[16px] font-medium text-[color:var(--color-paper-soft)]/85 cursor-default"
                  >
                    {item.label}
                  </span>
                );
              }
              if (item.submenu) {
                return (
                  <div key={item.href} className="group relative">
                    <a
                      href={item.href}
                      className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[16px] font-medium text-[color:var(--color-paper-soft)]/85 transition-colors hover:bg-white/5 hover:text-[color:var(--color-paper-soft)]"
                    >
                      {item.label}
                      <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" strokeWidth={1.8} aria-hidden="true" />
                    </a>
                    <div
                      role="menu"
                      className="invisible absolute right-0 top-full z-50 mt-3 w-[340px] origin-top-right scale-95 rounded-[20px] border border-[color:var(--color-bronze)]/25 bg-[color:var(--color-ink)]/95 p-2 opacity-0 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.6)] backdrop-blur-xl transition-all duration-200 group-hover:visible group-hover:scale-100 group-hover:opacity-100"
                    >
                      {item.submenu.map((sub) => (
                        <a
                          key={sub.href}
                          role="menuitem"
                          href={sub.href}
                          className="block rounded-full px-4 py-2.5 text-right text-[14px] text-[color:var(--color-paper-soft)]/80 transition-colors hover:bg-[color:var(--color-bronze)]/12 hover:text-[color:var(--color-bronze)]"
                        >
                          {sub.label}
                        </a>
                      ))}
                    </div>
                  </div>
                );
              }
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-4 py-2 text-[16px] font-medium text-[color:var(--color-paper-soft)]/85 transition-colors hover:bg-white/5 hover:text-[color:var(--color-paper-soft)]"
                >
                  {item.label}
                </a>
              );
            })}
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
          <div className="flex flex-col gap-6 px-8 pb-24 pt-28 overflow-y-auto">
            <nav className="flex flex-col divide-y divide-white/10">
              {navItems.map((item, idx) => {
                if (item.disabled) {
                  return (
                    <span
                      key={item.href}
                      className="py-5 font-display text-3xl font-medium text-[color:var(--color-paper-soft)] cursor-default"
                      style={{ animation: `slideUpIn 520ms cubic-bezier(0.22,1,0.36,1) ${idx * 70}ms both` }}
                    >
                      {item.label}
                    </span>
                  );
                }
                return (
                  <div
                    key={item.href}
                    style={{ animation: `slideUpIn 520ms cubic-bezier(0.22,1,0.36,1) ${idx * 70}ms both` }}
                  >
                    <a
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="block py-5 font-display text-3xl font-medium text-[color:var(--color-paper-soft)] transition-colors hover:text-[color:var(--color-bronze)]"
                    >
                      {item.label}
                    </a>
                    {item.submenu && (
                      <div className="flex flex-col gap-1 pb-4 pr-4">
                        {item.submenu.map((sub) => (
                          <a
                            key={sub.href}
                            href={sub.href}
                            onClick={() => setMenuOpen(false)}
                            className="text-[15px] text-[color:var(--color-paper-soft)]/70 transition-colors hover:text-[color:var(--color-bronze)]"
                          >
                            ← {sub.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
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
