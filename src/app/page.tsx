/**
 * Home Page — Advenco Blinds & Shutters
 *
 * This is the main homepage assembled from reusable components.
 * Design follows the new Base44 reference (light/white theme with teal accents).
 * Content sourced from the WordPress site (advencoblindsandshutters.co.uk).
 *
 * Page Sections (in order):
 *  1. Navbar             — top utility bar + main navigation with dropdowns
 *  2. HeroSlider         — full-viewport slideshow with CTA buttons
 *  3. TrustBar           — Made in Britain, Price Match, Free Installation
 *  4. WhyChooseUs        — image + heading + body + bullets
 *  5. BeyondStyle        — advantages grid (light control, privacy, etc.)
 *  6. QualitySections    — Quality Assurance / Expert Installation / Customer Satisfaction
 *  7. OurProcess         — 3-step numbered cards (Consult → Measure → Fit)
 *  8. Testimonials       — 3 customer review cards
 *  9. MadeToMeasure      — SEO content section with product list
 * 10. ContactSection     — dark Bespoke Consultation + quote form
 * 11. Footer             — 4-column dark footer + copyright bar
 */

import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import TrustBar from "@/components/TrustBar";
import WhyChooseUs from "@/components/WhyChooseUs";
import BeyondStyle from "@/components/BeyondStyle";
import QualitySections from "@/components/QualitySections";
import OurProcess from "@/components/OurProcess";
import Testimonials from "@/components/Testimonials";
import MadeToMeasure from "@/components/MadeToMeasure";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      {/* ── 1. Navigation ──────────────────────────────────── */}
      <Navbar />

      {/* ── 2. Hero Slider ─────────────────────────────────── */}
      <HeroSlider />

      {/* ── 3. Trust Bar ───────────────────────────────────── */}
      <TrustBar />

      {/* ── 4. Why Choose Us ───────────────────────────────── */}
      <WhyChooseUs />

      {/* ── 5. Beyond Style (Advantages) ───────────────────── */}
      <BeyondStyle />

      {/* ── 6. Quality / Installation / Satisfaction Sections  */}
      <QualitySections />

      {/* ── 7. Our Process ─────────────────────────────────── */}
      <OurProcess />

      {/* ── 8. Testimonials ────────────────────────────────── */}
      <Testimonials />

      {/* ── 9. Made to Measure (SEO Content) ───────────────── */}
      <MadeToMeasure />

      {/* ── 10. Contact / Quote Form ───────────────────────── */}
      <ContactSection />

      {/* ── 11. Footer ─────────────────────────────────────── */}
      <Footer />
    </>
  );
}
