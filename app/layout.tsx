import type { Metadata, Viewport } from "next";
import { Fraunces, Nunito_Sans } from "next/font/google";
import "./globals.css";

/** Display serif — soft/wonk axes read craft, market-day, a little playful. */
const headingFont = Fraunces({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  axes: ["SOFT", "WONK"],
});

/** Rounded humanist sans — warmer and more “table” than geometric UI faces. */
const bodyFont = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Bare Larder | The chip, reimagined.",
  description:
    "Christchurch tallow chips from our kitchen: taste tested with family and friends for flavour and crunch, sold at weekend markets, made to New Zealand food safety standards.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0F2318",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-NZ" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body className="font-sans text-base">{children}</body>
    </html>
  );
}
