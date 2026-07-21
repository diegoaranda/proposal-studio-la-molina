import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";

const manrope = localFont({
  src: "../assets/fonts/manrope-latin-variable.woff2",
  variable: "--font-manrope",
  weight: "200 800",
  style: "normal",
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

const newsreader = localFont({
  src: "../assets/fonts/newsreader-latin-variable.woff2",
  variable: "--font-newsreader",
  weight: "200 800",
  style: "normal",
  display: "swap",
  fallback: ["Georgia", "serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "Cada flor cuenta una historia | La Molina Florería",
  description: "Imaginemos el siguiente capítulo de La Molina Florería, Karen.",
  openGraph: {
    title: "Cada flor cuenta una historia",
    description: "Imaginemos el siguiente capítulo de La Molina Florería, Karen.",
    type: "website",
    locale: "es_PE",
    images: ["/opengraph-image"],
  },
  robots: {
    index: false,
    follow: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={cn(manrope.variable, newsreader.variable, "font-sans")}>
      <body>{children}</body>
    </html>
  );
}
