/**
 * AreasPage — Dedicated Template
 *
 * Renders the "/areas/" page:
 *  1. Navbar
 *  2. Hero — dark gradient background image, badge, heading (same pattern
 *     as every other product page; source page has no unique photo, so a
 *     real shutter photo already on the site is reused here)
 *  3. Intro line + full town list, in source order, as a responsive grid
 *  4. ContactSection + Footer — reused site-wide
 */

import Link from "next/link";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { areasHero, areasIntro, areasList } from "@/data/areasPage";

export default function AreasPage() {
  return (
    <>
      <Navbar />

      {/* ============================================================
          Hero — dark gradient background image, badge, heading
      ============================================================ */}
      <section
        className="relative w-full min-h-[480px] flex items-end overflow-hidden"
        aria-label="Areas We Cover hero"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${areasHero.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          role="img"
          aria-label={areasHero.imageAlt}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-advenco-graphite/95 via-advenco-graphite/70 to-advenco-graphite/20" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 pt-32 pb-16 w-full">
          <div className="max-w-2xl">
            <p className="flex items-center gap-2 text-advenco-teal text-[11px] font-semibold tracking-[0.25em] uppercase mb-5">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447 2.724A1 1 0 0 1 2 21.882V6.618a1 1 0 0 1 .553-.894L9 3m0 17l6 3m-6-3V3m6 17l5.447 2.724A1 1 0 0 0 22 21.882V6.618a1 1 0 0 0-.553-.894L15 3m0 17V3m0 0L9 3" />
              </svg>
              {areasHero.badgeLabel}
            </p>
            <h1
              className="font-heading text-white leading-[1.1] mb-6"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
            >
              <span className="font-light block">{areasHero.heading}</span>
              <span className="font-bold italic text-advenco-teal block">{areasHero.subheading}</span>
            </h1>
            <p className="text-white/75 text-base sm:text-lg leading-relaxed max-w-xl">
              {areasHero.body}
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================
          Town List
      ============================================================ */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
          <h2 className="font-heading text-2xl sm:text-3xl text-advenco-graphite-mid font-bold leading-tight mb-10">
            {areasIntro}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-4">
            {areasList.map((area, i) => (
              <Link
                key={`${area.name}-${i}`}
                href={area.href}
                className="group flex items-center gap-2.5"
              >
                <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-advenco-teal" aria-hidden="true" />
                <span className="text-advenco-graphite-mid text-sm leading-relaxed group-hover:text-advenco-teal transition-colors">
                  {area.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </>
  );
}
