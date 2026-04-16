import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";
import { StickyLead } from "@/components/layout/StickyLead";

const polin = localFont({
  src: [
    { path: "../fonts/Polin-Light.woff2", weight: "300", style: "normal" },
    { path: "../fonts/Polin-Regular.woff2", weight: "400", style: "normal" },
    { path: "../fonts/Polin-Medium.woff2", weight: "500", style: "normal" },
    { path: "../fonts/Polin-Semibold.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-polin",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ai.rav-thumi.co.il"),
  title: {
    default: "המרכז הרב-תחומי להכשרות Ai | השלב הבא של AI — התמקצעות",
    template: "%s | המרכז הרב-תחומי להכשרות Ai",
  },
  description:
    "הכשרות AI סקטוריאליות לעורכי דין, רופאים, אנשי נדל\"ן, מהנדסים ואנשי מקצוע. מפוקח משרד העבודה, הביטחון והחינוך. +4,500 בוגרים, +40 מדריכים מהתעשייה.",
  openGraph: {
    title: "המרכז הרב-תחומי להכשרות Ai",
    description:
      "לא מלמדים AI. מלמדים איך ליישם את ה-AI בתחום שלך. הכשרות סקטוריאליות ברמה הגבוהה בישראל.",
    locale: "he_IL",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f2f6f8" },
    { media: "(prefers-color-scheme: dark)", color: "#1c1c1e" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={polin.variable}
    >
      <body className="min-h-screen antialiased">
        <NoiseOverlay />
        {children}
        <StickyLead />
      </body>
    </html>
  );
}
