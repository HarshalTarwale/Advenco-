/**
 * CommercialBlindPage — Shared Template
 *
 * Renders one "Commercial Blinds" sub-category page (Hospitals, Commercial
 * Buildings, Schools, Hotels, Colleges). Layout matches the new Base44
 * design reference (advenco-light-studio.base44.app/blinds-for-hospitals):
 *
 *  1. Navbar
 *  2. Hero — dark gradient background image, badge, heading, CTA
 *  3. "Why Window Blinds Matter" — intro (label/heading/body + image) then
 *     a 5-card benefits grid
 *  4. "Why Choose Advenco" — 5-card differentiators grid
 *  5. ContactSection (Bespoke Consultation) — reused site-wide
 *  6. Footer — reused site-wide
 *
 * Only content/images change between pages; the structure and styling stay
 * identical so all 5 Commercial Blinds pages read as one consistent set.
 */

import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import MidPageCTA, { productNameFromSlug } from "@/components/MidPageCTA";
import type { CommercialBlindPageContent, BenefitCard, DifferentiatorCard, ExtraSection } from "@/data/commercialBlindsPages";

/* ---------- Icon Set ---------- */
/* Small line-icon library covering every icon key used across the 5 pages. */

function Icon({ name, className = "w-5 h-5" }: { name: string; className?: string }) {
  const common = {
    className,
    fill: "none" as const,
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    strokeWidth: 1.75,
    "aria-hidden": true as const,
  };
  switch (name) {
    case "sun":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="4" />
          <path strokeLinecap="round" d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
      );
    case "eye":
      return (
        <svg {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    case "leaf":
      return (
        <svg {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 21c9 0 14-5 14-14V5h-2C8 5 5 12 5 21Z" />
          <path strokeLinecap="round" d="M5 21c0-4 2-7 6-10" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" />
        </svg>
      );
    case "wrench":
      return (
        <svg {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 0 0 5.4-5.4l-2.8 2.8-2-2 2.8-2.8Z" />
        </svg>
      );
    case "sparkles":
      return (
        <svg {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8" />
        </svg>
      );
    case "layers":
      return (
        <svg {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="m12 3 9 5-9 5-9-5 9-5Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="m3 13 9 5 9-5" />
        </svg>
      );
    case "award":
      return (
        <svg {...common}>
          <circle cx="12" cy="8" r="5" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 12.5 7 21l5-2.5L17 21l-1.5-8.5" />
        </svg>
      );
    case "shield-check":
      return (
        <svg {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="m9 12 2 2 4-4" />
        </svg>
      );
    case "users":
      return (
        <svg {...common}>
          <circle cx="9" cy="8" r="3" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M2 20c0-3.3 3.1-6 7-6s7 2.7 7 6" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 6.3a3 3 0 0 1 0 5.9M22 20c0-2.8-2.2-5.1-5-5.8" />
        </svg>
      );
    case "pound":
      return (
        <svg {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 21h9M7 21c1.2-1 1.5-2 1.5-3.5V13H7m1.5 0h5M8.5 13V9a3.5 3.5 0 0 1 6.5-1.8" />
        </svg>
      );
    default:
      return null;
  }
}

/* ---------- Component ---------- */

export default function CommercialBlindPage({ content }: { content: CommercialBlindPageContent }) {
  const productName = productNameFromSlug(content.slug);

  return (
    <>
      <Navbar />

      {/* ============================================================
          Hero — dark gradient background image, badge, heading, CTA
      ============================================================ */}
      <section
        className="relative w-full min-h-[640px] flex items-end overflow-hidden"
        aria-label={`${content.heroHeadingLines.join(" ")} hero`}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${content.heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          role="img"
          aria-label={content.heroImageAlt}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-advenco-graphite/95 via-advenco-graphite/70 to-advenco-graphite/20" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 pt-40 pb-20 w-full">
          <div className="max-w-2xl">
            <p className="flex items-center gap-2 text-advenco-teal text-[11px] font-semibold tracking-[0.25em] uppercase mb-5">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z" />
              </svg>
              {content.badgeLabel}
            </p>
            <h1
              className="font-heading text-white leading-[1.1] mb-6"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
            >
              <span className="font-light block">{content.heroHeadingLines[0]}</span>
              <span className="font-bold italic text-advenco-teal block">{content.heroHeadingLines[1]}</span>
            </h1>
            <div className="text-white/75 text-base sm:text-lg leading-relaxed max-w-xl mb-9 space-y-4">
              {content.heroBody.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
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
          Why Window Blinds Matter — intro + 5-card benefits grid
      ============================================================ */}
      <section className="bg-white py-16 lg:py-24" aria-labelledby="importance-heading">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">
            {/* Text */}
            <div className="space-y-5">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-advenco-teal">
                {content.importanceLabel}
              </p>
              <h2
                id="importance-heading"
                className="font-heading text-3xl sm:text-4xl lg:text-5xl text-advenco-graphite-mid leading-tight"
              >
                <span className="font-light block">{content.importanceHeadingLines[0]}</span>
                <span className="font-bold italic block">{content.importanceHeadingLines[1]}</span>
              </h2>
              <div className="text-advenco-muted leading-relaxed text-base max-w-lg space-y-4">
                {content.importanceBody.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="relative overflow-hidden rounded-sm border-l-4 border-advenco-teal">
              <Image
                src={content.sideImage}
                alt={content.sideImageAlt}
                width={700}
                height={470}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Benefits grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5" role="list">
            {content.benefits.map((benefit, i) => (
              <BenefitCardItem key={benefit.title} benefit={benefit} index={i + 1} />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          Mid-page CTA — right after the benefits grid, while interest
          in this specific product is freshest
      ============================================================ */}
      <MidPageCTA productName={productName} />

      {/* ============================================================
          Why Choose Advenco — 5-card differentiators grid
      ============================================================ */}
      <section className="bg-advenco-alabaster py-16 lg:py-24" aria-labelledby="why-choose-heading">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-advenco-teal mb-4">
              The Advenco Difference
            </p>
            <h2
              id="why-choose-heading"
              className="font-heading text-3xl sm:text-4xl lg:text-5xl text-advenco-graphite-mid leading-tight"
            >
              <span className="font-light block">Why Choose Advenco</span>
              <span className="font-bold italic block">Blinds &amp; Shutters?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5" role="list">
            {content.differentiators.map((item) => (
              <DifferentiatorCardItem key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          Extra Sections — product breakdowns, buying guides, case
          studies, etc. pulled from the source page. Alternates white/
          alabaster backgrounds to match the rest of the page rhythm.
      ============================================================ */}
      {content.extraSections?.map((section, i) => (
        <ExtraSectionBlock key={section.heading} section={section} alt={i % 2 === 1} />
      ))}

      {/* ============================================================
          Full-width banner image
      ============================================================ */}
      <section className="relative w-full h-90 sm:h-110 overflow-hidden">
        <Image
          src={content.bannerImage}
          alt={content.bannerImageAlt}
          fill
          className="object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-advenco-graphite/30" aria-hidden="true" />
      </section>

      {/* ============================================================
          Closing statement
      ============================================================ */}
      <section className="bg-advenco-alabaster py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
          {content.closingImage && (
            <div className="relative overflow-hidden rounded-sm border-l-4 border-advenco-teal mb-12 max-w-3xl">
              <Image
                src={content.closingImage}
                alt={content.closingImageAlt ?? content.closingHeading}
                width={700}
                height={470}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          )}
          <div className="max-w-3xl">
            <h3 className="font-heading text-2xl sm:text-3xl text-advenco-graphite-mid font-semibold mb-4">
              {content.closingHeading}
            </h3>
            <div className="text-advenco-muted leading-relaxed space-y-4">
              {content.closingBody.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </>
  );
}

/* ---------- Extra Section Block ---------- */

function ExtraSectionBlock({ section, alt }: { section: ExtraSection; alt: boolean }) {
  return (
    <section className={alt ? "bg-advenco-alabaster py-16 lg:py-20" : "bg-white py-16 lg:py-20"}>
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        <div className="max-w-3xl space-y-5">
          <h3 className="font-heading text-2xl sm:text-3xl text-advenco-graphite-mid font-semibold">
            {section.heading}
          </h3>
          <div className="text-advenco-muted leading-relaxed space-y-4">
            {section.paragraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          {section.bullets && section.bullets.length > 0 && (
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
  );
}

/* ---------- Card Sub-Components ---------- */

function BenefitCardItem({ benefit, index }: { benefit: BenefitCard; index: number }) {
  return (
    <div role="listitem" className="flex gap-5 p-6 border border-advenco-border rounded-sm bg-white">
      <div className="shrink-0 w-11 h-11 flex items-center justify-center rounded-md bg-advenco-teal/10 text-advenco-teal">
        <Icon name={benefit.icon} />
      </div>
      <div>
        <p className="text-[11px] font-semibold text-advenco-teal/70 mb-1">
          {String(index).padStart(2, "0")}
        </p>
        <h3 className="font-heading font-semibold text-advenco-graphite-mid text-base mb-2">
          {benefit.title}
        </h3>
        <p className="text-advenco-muted text-sm leading-relaxed">{benefit.body}</p>
      </div>
    </div>
  );
}

function DifferentiatorCardItem({ item }: { item: DifferentiatorCard }) {
  return (
    <div role="listitem" className="p-6 bg-white rounded-sm">
      <div className="w-11 h-11 flex items-center justify-center rounded-md bg-advenco-teal/10 text-advenco-teal mb-4">
        <Icon name={item.icon} />
      </div>
      <h3 className="font-heading font-semibold text-advenco-graphite-mid text-base mb-2">
        {item.title}
      </h3>
      <p className="text-advenco-muted text-sm leading-relaxed">{item.body}</p>
    </div>
  );
}
