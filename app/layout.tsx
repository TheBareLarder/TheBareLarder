import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Nunito_Sans } from "next/font/google";
import "./globals.css";

/**
 * Bebas Neue — condensed display typeface.
 * Matches the product label's bold block-letter identity.
 */
const displayFont = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

/**
 * Nunito Sans — warm humanist sans for body copy.
 * Keeps the brand approachable without softening it.
 */
const bodyFont = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Tauros | The Original Beef Tallow Crisps",
  description:
    "Agria potatoes fried in 100% grass-fed NZ beef tallow, finished with natural sea salt. Three ingredients, nothing else. Made in Christchurch, New Zealand.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1A1A18",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-NZ"
      className={`${displayFont.variable} ${bodyFont.variable}`}
    >
      <body className="font-sans text-base">{children}</body>
    </html>
  );
}
