/**
 * ShuttersPage — Dedicated Template
 *
 * Mirrors the exact section order and layout of the source WordPress page
 * (advencoblindsandshutters.co.uk/shutters/) rebuilt in the new design
 * system (teal/graphite palette, Outfit/Space Grotesk fonts):
 *
 *  1. Navbar
 *  2. Solid dark hero — title only, no image (matches source: no hero image)
 *  3. "Full Height Shutters" — text-only, bullet list
 *  4. "Made in Britain" — text-only, bullet list
 *  5. "Tier on Tier Plantation Shutters" — text-only, no bullets
 *  6. "Café Style Shutters" — image LEFT, text RIGHT
 *  7. "Full Height Shutters" (2nd) — text LEFT, image RIGHT
 *  8. "Tier on Tier Shutters — Maximum Flexibility" — image LEFT, text RIGHT
 *  9. "Bay Window Shutters" — text LEFT, image RIGHT
 * 10. "Free Window Measuring and Shutter Fitting" — image LEFT, text RIGHT
 * 11. "Enhance Your Windows" — text LEFT, image RIGHT
 * 12. "Full Window Control" — text-only, bullet list
 * 13. ContactSection + Footer — reused site-wide
 *
 * The alternating image/text rhythm and section order match the source
 * page one-for-one; only the visual styling (colours, fonts, spacing) is
 * the new design system.
 */

import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { shuttersContent } from "@/data/shuttersPage";

/* ---------- Highlight standalone "UK" in blue + bold, rest in default colour ---------- */

function HighlightUK({ text }: { text: string }) {
  const parts = text.split(/\b(UK)\b/g);
  return (
    <>
      {parts.map((part, i) =>
        part === "UK" ? (
          <span key={i} className="text-advenco-teal font-bold">
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

export default function ShuttersPage() {
  const {
    badgeLabel,
    heroHeading,
    heroSubheading,
    heroBody,
    heroImage,
    heroImageAlt,
    textSections,
    imageSections,
    closingHeading,
    closingBody,
  } = shuttersContent;

  return (
    <>
      <Navbar />

      {/* ============================================================
          Hero — dark gradient background image, badge, heading, CTA
          (same pattern as every other product page)
      ============================================================ */}
      <section
        className="relative w-full min-h-[640px] flex items-end overflow-hidden"
        aria-label={`${heroHeading} hero`}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          role="img"
          aria-label={heroImageAlt}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-advenco-graphite/95 via-advenco-graphite/70 to-advenco-graphite/20" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 pt-40 pb-20 w-full">
          <div className="max-w-2xl">
            <p className="flex items-center gap-2 text-advenco-teal text-[11px] font-semibold tracking-[0.25em] uppercase mb-5">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z" />
              </svg>
              {badgeLabel}
            </p>
            <h1
              className="font-heading text-white leading-[1.1] mb-6"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
            >
              <span className="font-light block">{heroHeading}</span>
              <span className="font-bold italic block">
                <HighlightUK text={heroSubheading} />
              </span>
            </h1>
            <p className="text-white/75 text-base sm:text-lg leading-relaxed max-w-xl mb-9">
              <HighlightUK text={heroBody} />
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-advenco-teal hover:bg-advenco-teal-dark text-white text-sm font-bold tracking-widest uppercase transition-colors rounded-sm"
            >
              Request A Consultation
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          Text-only sections (no image) — first 3 + intro paragraph
      ============================================================ */}
      {textSections.slice(0, 3).map((section, i) => (
        <TextSection key={section.heading} section={section} alt={i % 2 === 1} />
      ))}

      {/* ============================================================
          Alternating image/text sections — in exact source order
      ============================================================ */}
      {imageSections.map((section, i) => (
        <ImageSection key={section.heading} section={section} bgAlt={i % 2 === 0} />
      ))}

      {/* ============================================================
          Final text-only section — "Full Window Control" with bullets
      ============================================================ */}
      {textSections.slice(3).map((section, i) => (
        <TextSection key={section.heading} section={section} alt={i % 2 === 0} />
      ))}

      {/* ============================================================
          Closing statement
      ============================================================ */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
          <div className="max-w-3xl">
            <h3 className="font-heading text-2xl sm:text-3xl text-advenco-graphite-mid font-semibold mb-4">
              {closingHeading}
            </h3>
            <p className="text-advenco-muted leading-relaxed">{closingBody}</p>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </>
  );
}

/* ---------- Text-Only Section ---------- */

interface TextSectionData {
  label?: string;
  heading: string;
  body: string;
  bullets?: string[];
}

function TextSection({ section, alt }: { section: TextSectionData; alt: boolean }) {
  return (
    <section className={alt ? "bg-advenco-alabaster py-16 lg:py-20" : "bg-white py-16 lg:py-20"}>
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        <div className="max-w-3xl space-y-5">
          {section.label && (
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-advenco-teal">
              {section.label}
            </p>
          )}
          <h2 className="font-heading text-3xl sm:text-4xl text-advenco-graphite-mid font-bold leading-tight">
            <HighlightUK text={section.heading} />
          </h2>
          <p className="text-advenco-muted leading-relaxed text-base">
            <HighlightUK text={section.body} />
          </p>
          {section.bullets && (
            <ul className="space-y-2.5 pt-1">
              {section.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <span className="mt-2 shrink-0 w-2 h-2 rounded-full bg-advenco-teal" aria-hidden="true" />
                  <span className="text-advenco-graphite-mid text-sm leading-relaxed">
                    <HighlightUK text={bullet} />
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}

/* ---------- Alternating Image + Text Section ---------- */

interface ImageSectionData {
  heading: string;
  body: string;
  image: string;
  imageAlt: string;
  /** true = image on left, false = image on right (matches source page order) */
  imageLeft: boolean;
}

function ImageSection({ section, bgAlt }: { section: ImageSectionData; bgAlt: boolean }) {
  return (
    <section className={bgAlt ? "bg-advenco-alabaster py-16 lg:py-20" : "bg-white py-16 lg:py-20"}>
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
            !section.imageLeft ? "lg:grid-flow-col-dense" : ""
          }`}
        >
          {/* Image */}
          <div className={`relative ${!section.imageLeft ? "lg:col-start-2" : ""}`}>
            <div className="relative overflow-hidden rounded-sm border-l-4 border-advenco-teal">
              <Image
                src={section.image}
                alt={section.imageAlt}
                width={700}
                height={470}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Text */}
          <div className={`space-y-5 ${!section.imageLeft ? "lg:col-start-1 lg:row-start-1" : ""}`}>
            <h2 className="font-heading text-3xl sm:text-4xl text-advenco-graphite-mid font-bold leading-tight">
              <HighlightUK text={section.heading} />
            </h2>
            <p className="text-advenco-muted leading-relaxed text-base">
              <HighlightUK text={section.body} />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
