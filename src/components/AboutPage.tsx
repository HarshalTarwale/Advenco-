/**
 * AboutPage — Dedicated Template
 *
 * Renders the "/about-us/" page:
 *  1. Navbar
 *  2. Hero — dark gradient background image, badge, heading (same pattern
 *     as every other page)
 *  3. Intro (Who We Are) + side image
 *  4. Vision / Quality text sections
 *  5. Product range grid
 *  6. Why Choose Advenco — points grid
 *  7. Customer Promise
 *  8. Banner image
 *  9. Closing (Contact Us) statement
 * 10. ContactSection + Footer — reused site-wide
 *
 * Content is copied verbatim from the source WordPress page.
 */

import Image from "next/image";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import {
  aboutHero,
  aboutIntro,
  aboutSections,
  productRangeIntro,
  productRangeItems,
  whyChooseIntro,
  whyChooseBody,
  whyChoosePoints,
  customerPromise,
  aboutClosing,
  aboutSideImage,
  aboutBannerImage,
} from "@/data/aboutPage";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* ============================================================
          Hero — dark gradient background image, badge, heading
      ============================================================ */}
      <section
        className="relative w-full min-h-[480px] flex items-end overflow-hidden"
        aria-label="About Us hero"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${aboutHero.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          role="img"
          aria-label={aboutHero.imageAlt}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-advenco-graphite/95 via-advenco-graphite/70 to-advenco-graphite/20" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 pt-32 pb-16 w-full">
          <div className="max-w-2xl">
            <p className="flex items-center gap-2 text-advenco-teal text-[11px] font-semibold tracking-[0.25em] uppercase mb-5">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z" />
              </svg>
              {aboutHero.badgeLabel}
            </p>
            <h1
              className="font-heading text-white leading-[1.1] mb-6"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
            >
              <span className="font-light block">{aboutHero.heading}</span>
              <span className="font-bold italic text-advenco-teal block">{aboutHero.subheading}</span>
            </h1>
            <p className="text-white/75 text-base sm:text-lg leading-relaxed max-w-xl">
              {aboutHero.body}
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================
          Who We Are — intro + side image
      ============================================================ */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-5">
              <h2 className="font-heading text-3xl sm:text-4xl text-advenco-graphite-mid font-bold leading-tight">
                {aboutIntro.heading}
              </h2>
              <p className="text-advenco-muted leading-relaxed text-base">{aboutIntro.body}</p>
            </div>
            <div className="relative overflow-hidden rounded-sm border-l-4 border-advenco-teal">
              <Image
                src={aboutSideImage.image}
                alt={aboutSideImage.imageAlt}
                width={700}
                height={527}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          Vision / Quality — text-only sections
      ============================================================ */}
      {aboutSections.map((section, i) => (
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
            </div>
          </div>
        </section>
      ))}

      {/* ============================================================
          Product Range grid
      ============================================================ */}
      <section className="bg-advenco-alabaster py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
          <h2 className="font-heading text-3xl sm:text-4xl text-advenco-graphite-mid font-bold leading-tight mb-5 max-w-3xl">
            Our Range of Products
          </h2>
          <p className="max-w-3xl text-advenco-muted leading-relaxed mb-10">{productRangeIntro}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {productRangeItems.map((item) => (
              <div key={item.heading} className="p-6 bg-white border border-advenco-border rounded-sm">
                <h3 className="font-heading font-semibold text-advenco-graphite-mid text-base mb-2.5">
                  {item.heading}
                </h3>
                <p className="text-advenco-muted text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          Why Choose Advenco — points grid
      ============================================================ */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
          <h2 className="font-heading text-3xl sm:text-4xl text-advenco-graphite-mid font-bold leading-tight mb-5 max-w-3xl">
            {whyChooseIntro}
          </h2>
          <p className="max-w-3xl text-advenco-muted leading-relaxed mb-10">{whyChooseBody}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {whyChoosePoints.map((point, i) => (
              <div key={point.heading} className="p-6 bg-advenco-alabaster border border-advenco-border rounded-sm">
                <div className="flex items-center gap-3 mb-2.5">
                  <span className="flex items-center justify-center w-8 h-8 shrink-0 rounded-full bg-advenco-teal/10 text-advenco-teal font-heading font-bold text-sm">
                    {i + 1}
                  </span>
                  <h3 className="font-heading font-semibold text-advenco-graphite-mid text-base">
                    {point.heading}
                  </h3>
                </div>
                <p className="text-advenco-muted text-sm leading-relaxed">{point.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          Customer Promise
      ============================================================ */}
      <section className="bg-advenco-alabaster py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
          <div className="max-w-3xl space-y-4">
            <h3 className="font-heading text-2xl sm:text-3xl text-advenco-graphite-mid font-bold leading-tight">
              {customerPromise.heading}
            </h3>
            <p className="text-advenco-muted leading-relaxed">{customerPromise.body}</p>
          </div>
        </div>
      </section>

      {/* ============================================================
          Banner Image
      ============================================================ */}
      <section className="relative w-full h-[320px] sm:h-[420px] overflow-hidden">
        <Image
          src={aboutBannerImage.image}
          alt={aboutBannerImage.imageAlt}
          fill
          className="object-cover"
          loading="lazy"
        />
      </section>

      {/* ============================================================
          Closing — Contact Us
      ============================================================ */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
          <div className="max-w-3xl space-y-4">
            <h3 className="font-heading text-2xl sm:text-3xl text-advenco-graphite-mid font-semibold">
              {aboutClosing.heading}
            </h3>
            <p className="text-advenco-muted leading-relaxed">{aboutClosing.body}</p>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </>
  );
}
