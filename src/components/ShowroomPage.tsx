/**
 * ShowroomPage — Dedicated Template
 *
 * Shared by "/advenco-blinds-and-shutters-showroom-in-morley/" and
 * "/maidenhead-showroom/" — both source pages share the same shape:
 *  1. Navbar
 *  2. Hero — dark gradient background image, badge, heading (same pattern
 *     as every other product page)
 *  3. Intro paragraph
 *  4. "Why Choose" section — numbered points
 *  5. Collection section — product-range subsections with bullet lists
 *  6. "Why Visit" section — subsections
 *  7. Optional closing paragraphs
 *  8. "How to Find Us" — address / hours / phone / email block (verbatim
 *     per-page contact details, which differ from the sitewide standard
 *     shown in the Navbar/Footer/ContactSection)
 *  9. ContactSection + Footer — reused site-wide
 *
 * Content is copied verbatim from the source WordPress pages.
 */

import Image from "next/image";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import type { ShowroomPageContent, ShowroomSubsection } from "@/data/showroomPages";

export default function ShowroomPage({ content }: { content: ShowroomPageContent }) {
  const {
    badgeLabel,
    heroHeading,
    heroSubheading,
    heroBody,
    heroImage,
    heroImageAlt,
    intro,
    whyChooseHeading,
    whyChooseIntro,
    whyChoosePoints,
    collectionHeading,
    collectionIntro,
    collectionSections,
    visitHeading,
    visitIntro,
    visitSections,
    closingParagraphs,
    midImage,
    midImageAlt,
    secondImage,
    secondImageAlt,
    findUsHeading,
    address,
    hours,
    phone,
    email,
  } = content;

  return (
    <>
      <Navbar />

      {/* ============================================================
          Hero — dark gradient background image, badge, heading
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
          <p className="max-w-3xl text-advenco-muted leading-relaxed text-base sm:text-lg">
            {intro}
          </p>
        </div>
      </section>

      {/* ============================================================
          Why Choose — numbered points
      ============================================================ */}
      <section className="bg-advenco-alabaster py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
          <h2 className="font-heading text-3xl sm:text-4xl text-advenco-graphite-mid font-bold leading-tight mb-5 max-w-3xl">
            {whyChooseHeading}
          </h2>
          {whyChooseIntro &&
            whyChooseIntro.split("\n\n").map((para) => (
              <p key={para} className="max-w-3xl text-advenco-muted leading-relaxed mb-8 whitespace-pre-line">
                {para}
              </p>
            ))}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {whyChoosePoints.map((point, i) => (
              <div key={point.title} className="p-6 bg-white border border-advenco-border rounded-sm">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex items-center justify-center w-8 h-8 shrink-0 rounded-full bg-advenco-teal/10 text-advenco-teal font-heading font-bold text-sm">
                    {i + 1}
                  </span>
                  <h3 className="font-heading font-semibold text-advenco-graphite-mid text-base">
                    {point.title}
                  </h3>
                </div>
                <p className="text-advenco-muted text-sm leading-relaxed">{point.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          Collection — product-range subsections with bullets
      ============================================================ */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
          <h2 className="font-heading text-3xl sm:text-4xl text-advenco-graphite-mid font-bold leading-tight mb-5 max-w-3xl">
            {collectionHeading}
          </h2>
          {collectionIntro && (
            <p className="max-w-3xl text-advenco-muted leading-relaxed mb-10">{collectionIntro}</p>
          )}
          <div className="space-y-10">
            {collectionSections.map((section) => (
              <SubsectionBlock key={section.heading} section={section} />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          Mid-page showcase image — matches source page image placement
      ============================================================ */}
      <section className="bg-white pb-16 lg:pb-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
          <div className="relative w-full aspect-video sm:aspect-21/9 overflow-hidden rounded-sm border-l-4 border-advenco-teal">
            <Image
              src={midImage}
              alt={midImageAlt}
              fill
              className="object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ============================================================
          Why Visit — subsections
      ============================================================ */}
      <section className="bg-advenco-alabaster py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
          <h2 className="font-heading text-3xl sm:text-4xl text-advenco-graphite-mid font-bold leading-tight mb-5 max-w-3xl">
            {visitHeading}
          </h2>
          {visitIntro && (
            <p className="max-w-3xl text-advenco-muted leading-relaxed mb-10">{visitIntro}</p>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {visitSections.map((section) => (
              <div key={section.heading} className="p-6 bg-white border border-advenco-border rounded-sm">
                <h3 className="font-heading font-semibold text-advenco-graphite-mid text-base mb-2.5">
                  {section.heading}
                </h3>
                <p className="text-advenco-muted text-sm leading-relaxed">{section.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          Second showcase image — matches source page image placement
      ============================================================ */}
      <section className="bg-advenco-alabaster py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
          <div className="relative w-full aspect-video sm:aspect-21/9 overflow-hidden rounded-sm border-l-4 border-advenco-teal">
            <Image
              src={secondImage}
              alt={secondImageAlt}
              fill
              className="object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ============================================================
          Closing paragraphs (Maidenhead only)
      ============================================================ */}
      {closingParagraphs && closingParagraphs.length > 0 && (
        <section className="bg-white py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
            <div className="max-w-3xl space-y-5">
              {closingParagraphs.map((para) => (
                <p key={para} className="text-advenco-muted leading-relaxed">{para}</p>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ============================================================
          How to Find Us — address / hours / phone / email
      ============================================================ */}
      <section className="bg-advenco-graphite py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
          <h2 className="font-heading text-3xl sm:text-4xl text-white font-bold leading-tight mb-8">
            {findUsHeading}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 shrink-0 mt-0.5 text-advenco-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-7-6.1-7-11a7 7 0 0 1 14 0c0 4.9-7 11-7 11Z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
              <div>
                <p className="text-white/90 text-sm leading-relaxed">{address}</p>
                <p className="text-white/60 text-sm mt-1">{hours}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 shrink-0 mt-0.5 text-advenco-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h1.5a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106a1.125 1.125 0 0 0-1.173.417l-.97 1.293a11.25 11.25 0 0 1-6.23-6.23l1.292-.97a1.125 1.125 0 0 0 .418-1.173L8.09 3.852A1.125 1.125 0 0 0 7 3H5.625A2.25 2.25 0 0 0 3.375 5.25v1.5Z" />
              </svg>
              <div>
                <a href={`tel:${phone.replace(/\s/g, "")}`} className="text-white/90 text-sm font-semibold hover:text-advenco-teal transition-colors block">
                  {phone}
                </a>
                <a href={`mailto:${email}`} className="text-white/60 text-sm mt-1 hover:text-advenco-teal transition-colors block">
                  {email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </>
  );
}

/* ---------- Subsection with optional bullets ---------- */

function SubsectionBlock({ section }: { section: ShowroomSubsection }) {
  return (
    <div className="max-w-3xl">
      <h3 className="font-heading font-semibold text-advenco-graphite-mid text-xl mb-3">
        {section.heading}
      </h3>
      <p className="text-advenco-muted leading-relaxed mb-4">{section.body}</p>
      {section.bullets && (
        <ul className="space-y-2.5">
          {section.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-3">
              <span className="mt-2 shrink-0 w-2 h-2 rounded-full bg-advenco-teal" aria-hidden="true" />
              <span className="text-advenco-graphite-mid text-sm leading-relaxed">{bullet}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
