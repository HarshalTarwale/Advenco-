/**
 * Root Layout — Advenco Blinds & Shutters
 *
 * Fonts:
 *  - Outfit      → headings (h1–h6), display text (--font-heading / --font-display)
 *  - Space Grotesk → body copy, paragraphs, labels, inputs, buttons (--font-body)
 *
 * Both fonts are loaded via next/font/google with CSS variable tokens that
 * Tailwind v4 picks up through @theme in globals.css.
 */

import type { Metadata } from "next";
import { Outfit, Space_Grotesk } from "next/font/google";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

/* ─────────────────────────────────────────────────
   Font Loaders
───────────────────────────────────────────────── */

/** Outfit — used for all headings, display text, and UI labels */
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",   // maps to Tailwind token
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

/** Space Grotesk — used for body copy, paragraphs, inputs, buttons */
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",      // maps to Tailwind token
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

/* ─────────────────────────────────────────────────
   SEO Metadata
───────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Advenco Blinds and Shutters | High-Quality Window Blinds & Shutters",
  description:
    "Explore a wide selection of high-quality window blinds and shutters at Advenco. Discover motorized, roller, Venetian, and custom-made solutions for your home or business.",
  keywords:
    "window blinds UK, plantation shutters, roller blinds, venetian blinds, motorised blinds, made to measure blinds",
  openGraph: {
    title: "Advenco Blinds and Shutters | High-Quality Window Blinds & Shutters",
    description:
      "Premium window blinds and shutters in the UK. Bespoke plantation shutters, roller blinds, and motorised solutions. Free consultation and installation.",
    url: "https://advencoblindsandshutters.co.uk",
    siteName: "Advenco Blinds and Shutters",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://advencoblindsandshutters.co.uk/wp-content/uploads/2024/10/why-choose-advenco-window-blinds-and-shutters-in-uk-home-page.webp",
        width: 1200,
        height: 800,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Advenco Blinds and Shutters | High-Quality Window Blinds & Shutters",
    description: "Premium window blinds and shutters in the UK.",
  },
  icons: {
    icon: "https://advencoblindsandshutters.co.uk/wp-content/uploads/2024/10/cropped-favicon-32x32.webp",
    apple: "https://advencoblindsandshutters.co.uk/wp-content/uploads/2024/10/cropped-favicon-180x180.webp",
  },
};

/* ─────────────────────────────────────────────────
   Root Layout
───────────────────────────────────────────────── */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${outfit.variable} ${spaceGrotesk.variable}`}
    >
      <body className="min-h-full flex flex-col bg-white">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
