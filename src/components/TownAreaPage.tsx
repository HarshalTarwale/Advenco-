/**
 * TownAreaPage — Dedicated Template
 *
 * Shared by all "/areas/<town-slug>/" pages. Source WordPress town pages
 * each have unique, individually-written copy but a consistent visual
 * shape:
 *  1. Navbar
 *  2. Hero — dark gradient background image, badge, heading (same pattern
 *     as every other product page; source pages reuse generic product
 *     icons with no unique photo, so a real WP photo matching the page's
 *     style/description is used here instead)
 *  3. Intro heading + paragraph(s)
 *  4. Remaining sections, in source order, alternating background tint
 *  5. Closing CTA paragraph
 *  6. ContactSection + Footer — reused site-wide
 */

import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import type { TownPageContent } from "@/data/areas/types";

export default function TownAreaPage({ content }: { content: TownPageContent }) {
  const {
    badgeLabel,
    heroHeading,
    heroSubheading,
    heroBody,
    heroImage,
    heroImageAlt,
    introHeading,
    introParagraphs,
    sections,
    closingBody,
  } = content;

  return (
    <>
      <Navbar />

      {/* ============================================================
          Hero — dark gradient background image, badge, heading
      ============================================================ */}
      <section
        className="relative w-full min-h-[560px] flex items-end overflow-hidden"
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

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 pt-36 pb-16 w-full">
          <div className="max-w-2xl">
            <p className="flex items-center gap-2 text-advenco-teal text-[11px] font-semibold tracking-[0.25em] uppercase mb-5">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-7-6.1-7-11a7 7 0 0 1 14 0c0 4.9-7 11-7 11Z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
              {badgeLabel}
            </p>
            <h1
              className="font-heading text-white leading-[1.1] mb-6"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
            >
              <span className="font-light block">{heroHeading}</span>
              <span className="font-bold italic text-advenco-teal block">{heroSubheading}</span>
            </h1>
            <p className="text-white/75 text-base sm:text-lg leading-relaxed max-w-xl">
              {heroBody}
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================
          Intro
      ============================================================ */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
          <div className="max-w-3xl space-y-5">
            <h2 className="font-heading text-3xl sm:text-4xl text-advenco-graphite-mid font-bold leading-tight">
              {introHeading}
            </h2>
            {introParagraphs.map((para) => (
              <p key={para} className="text-advenco-muted leading-relaxed">{para}</p>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          Remaining sections — alternating background tint
      ============================================================ */}
      {sections.map((section, i) => (
        <section
          key={section.heading}
          className={i % 2 === 0 ? "bg-advenco-alabaster py-16 lg:py-20" : "bg-white py-16 lg:py-20"}
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
            <div className="max-w-3xl space-y-4">
              <h3 className="font-heading text-2xl sm:text-3xl text-advenco-graphite-mid font-bold leading-tight">
                {section.heading}
              </h3>
              <p className="text-advenco-muted leading-relaxed">{section.body}</p>
              {section.bullets && (
                <ul className="space-y-2.5 pt-1">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="mt-2 shrink-0 w-2 h-2 rounded-full bg-advenco-teal" aria-hidden="true" />
                      <span className="text-advenco-graphite-mid text-sm leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </section>
      ))}

      {/* ============================================================
          Closing CTA
      ============================================================ */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
          <p className="max-w-3xl text-advenco-muted leading-relaxed">{closingBody}</p>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </>
  );
}
