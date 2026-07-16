/**
 * LegalPage — Dedicated Template
 *
 * Shared by "/privacy-policy/" and "/terms-and-conditions/" — both source
 * pages have the same simple shape: intro paragraph, then a series of
 * heading + paragraph sections. Content is copied verbatim from the
 * source WordPress pages.
 */

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { LegalPageContent } from "@/data/legalPages";

export default function LegalPage({ content }: { content: LegalPageContent }) {
  const { badgeLabel, heading, heroImage, heroImageAlt, intro, sections } = content;

  return (
    <>
      <Navbar />

      {/* ============================================================
          Hero — dark gradient background image, badge, heading
      ============================================================ */}
      <section
        className="relative w-full min-h-[360px] flex items-end overflow-hidden"
        aria-label={`${heading} hero`}
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

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 pt-28 pb-12 w-full">
          <div className="max-w-2xl">
            <p className="flex items-center gap-2 text-advenco-teal text-[11px] font-semibold tracking-[0.25em] uppercase mb-5">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              {badgeLabel}
            </p>
            <h1
              className="font-heading text-white font-bold leading-[1.1]"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}
            >
              {heading}
            </h1>
          </div>
        </div>
      </section>

      {/* ============================================================
          Intro + Sections
      ============================================================ */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
          <div className="max-w-3xl space-y-4 mb-12">
            <p className="text-advenco-muted leading-relaxed">{intro}</p>
          </div>

          <div className="max-w-3xl space-y-10">
            {sections.map((section) => (
              <div key={section.heading ?? section.paragraphs[0]} className="space-y-3">
                {section.heading && (
                  <h2 className="font-heading text-xl sm:text-2xl text-advenco-graphite-mid font-semibold leading-snug">
                    {section.heading}
                  </h2>
                )}
                {section.paragraphs.map((para) => (
                  <p key={para} className="text-advenco-muted leading-relaxed text-sm sm:text-base">
                    {para}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
