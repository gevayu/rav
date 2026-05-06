import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";
import { StickyLead } from "@/components/layout/StickyLead";
import { AccessibilityToggle } from "@/components/layout/AccessibilityToggle";

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

const SITE_URL = "https://www.ravthumi.ai";
const OG_IMAGE = {
  url: "/og-default.jpg",
  width: 1200,
  height: 630,
  alt: "המרכז הרב-תחומי להכשרות Ai",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "המרכז הרב-תחומי להכשרות Ai | השלב הבא של Ai - התמקצעות",
    template: "%s | המרכז הרב-תחומי להכשרות Ai",
  },
  description:
    "הכשרות Ai סקטוריאליות לעורכי דין, רופאים, אנשי נדל\"ן, מהנדסים ואנשי מקצוע. מכללה מפוקחת מטעם משרד העבודה - האגף להכשרה מקצועית. +4,500 בוגרים, +40 מדריכים מהתעשייה.",
  openGraph: {
    title: "המרכז הרב-תחומי להכשרות Ai",
    description:
      "לא מלמדים Ai. מלמדים איך ליישם את ה-Ai בתחום שלך. הכשרות סקטוריאליות ברמה הגבוהה בישראל.",
    locale: "he_IL",
    type: "website",
    siteName: "המרכז הרב-תחומי להכשרות Ai",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "המרכז הרב-תחומי להכשרות Ai",
    description:
      "הכשרות Ai סקטוריאליות לעורכי דין, רופאים, אנשי נדל\"ן ומהנדסים. מכללה מפוקחת.",
    images: ["/og-default.jpg"],
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
        <AccessibilityToggle />
      </body>
    </html>
  );
}
