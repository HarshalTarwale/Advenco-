/**
 * ContactPage — Dedicated Template
 *
 * Renders the "/contact-us/" page:
 *  1. Navbar
 *  2. Hero — dark gradient background image, badge, heading (same pattern
 *     as every other product page)
 *  3. Showroom cards — Morley & Maidenhead, address + phone
 *  4. ContactSection (Bespoke Consultation + quote form) — reused site-wide
 *  5. Footer — reused site-wide
 *
 * Showroom addresses, phone, and email are copied verbatim from the source
 * WordPress contact page.
 */

import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { contactHero, showrooms, contactEmail } from "@/data/contactPage";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      {/* ============================================================
          Hero — dark gradient background image, badge, heading
      ============================================================ */}
      <section
        className="relative w-full min-h-[480px] flex items-end overflow-hidden"
        aria-label="Contact Us hero"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${contactHero.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          role="img"
          aria-label={contactHero.imageAlt}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-advenco-graphite/95 via-advenco-graphite/70 to-advenco-graphite/20" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 pt-32 pb-16 w-full">
          <div className="max-w-2xl">
            <p className="flex items-center gap-2 text-advenco-teal text-[11px] font-semibold tracking-[0.25em] uppercase mb-5">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z" />
              </svg>
              {contactHero.badgeLabel}
            </p>
            <h1
              className="font-heading text-white leading-[1.1] mb-6"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
            >
              <span className="font-light block">{contactHero.heading}</span>
              <span className="font-bold italic text-advenco-teal block">{contactHero.subheading}</span>
            </h1>
            <p className="text-white/75 text-base sm:text-lg leading-relaxed max-w-xl">
              {contactHero.body}
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================
          Showroom Cards
      ============================================================ */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl">
            {showrooms.map((showroom) => (
              <div key={showroom.name} className="p-6 border border-advenco-border rounded-sm bg-advenco-alabaster">
                <div className="w-11 h-11 flex items-center justify-center rounded-md bg-advenco-teal/10 text-advenco-teal mb-4">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-7-6.1-7-11a7 7 0 0 1 14 0c0 4.9-7 11-7 11Z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </div>
                <h3 className="font-heading font-semibold text-advenco-graphite-mid text-base mb-2">
                  {showroom.name}
                </h3>
                <p className="text-advenco-muted text-sm leading-relaxed">{showroom.address}</p>
                {showroom.phone && (
                  <a
                    href={`tel:${showroom.phone.replace(/\s/g, "")}`}
                    className="inline-block mt-2 text-advenco-teal text-sm font-semibold hover:text-advenco-teal-dark transition-colors"
                  >
                    {showroom.phone}
                  </a>
                )}
              </div>
            ))}
          </div>
          <p className="mt-8 text-advenco-muted text-sm">
            Email us anytime at{" "}
            <a href={`mailto:${contactEmail}`} className="text-advenco-teal font-semibold hover:text-advenco-teal-dark transition-colors">
              {contactEmail}
            </a>
          </p>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </>
  );
}
