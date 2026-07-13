/**
 * QualitySections Component â€” Advenco Blinds & Shutters
 *
 * Three alternating image+text sections from the WordPress page:
 *  1. Quality Assurance (image left, text right)
 *  2. Expert Installation (text left, image right)
 *  3. Customer Satisfaction Guaranteed (image left, text right)
 *
 * Each section uses:
 *  - Full bleed image with left border accent
 *  - Section label (teal uppercase tracking)
 *  - Large heading
 *  - Body text
 *  - Bullet list with teal dots
 *
 * Design: Same light grey/white alternating bg, blue bullet dots.
 */

import Image from "next/image";

/* ---------- Section Data ---------- */

interface QualitySection {
  id: string;
  label: string;
  heading: string;
  body: string;
  bullets: string[];
  image: string;
  imageAlt: string;
  /** true = image on left, false = image on right */
  imageLeft: boolean;
  bg: string;
}

const qualitySections: QualitySection[] = [
  {
    id: "quality-assurance",
    label: "Quality Assurance",
    heading: "Crafted to the Highest Standards",
    body: "At Advenco, quality is our top priority. We source only the finest materials and components to ensure durability, reliability, and long-lasting performance. Each product is meticulously inspected and tested to meet the highest standards of craftsmanship and excellence.",
    bullets: [
      "Finest sourced materials",
      "Rigorous inspection & testing",
      "Built to stand the test of time",
    ],
    image:
      "https://advencoblindsandshutters.co.uk/wp-content/uploads/2024/10/Quality-Assurance.webp",
    imageAlt: "Close-up of high-quality plantation shutter hardware and craftsmanship",
    imageLeft: true,
    bg: "bg-[#f8f7f4]",
  },
  {
    id: "expert-installation",
    label: "Expert Installation",
    heading: "Seamless from First Meeting to Final Fitting",
    body: "Our team of experienced professionals is dedicated to delivering a seamless and hassle-free experience from start to finish. From initial consultation to final installation, we are here to guide you every step of the way.",
    bullets: [
      "Responsive customer support",
      "Comprehensive warranties",
      "Service that exceeds expectations",
    ],
    image:
      "https://advencoblindsandshutters.co.uk/wp-content/uploads/2024/10/advenco-blind-home-page-expert-installation.webp",
    imageAlt: "Advenco professional installer fitting window blinds",
    imageLeft: false,
    bg: "bg-white",
  },
  {
    id: "customer-satisfaction",
    label: "Customer Satisfaction",
    heading: "Your Satisfaction is Our Ultimate Goal",
    body: "At Advenco, we value our customers above all else. Your satisfaction is our ultimate goal, and we strive to exceed your expectations with every interaction. From responsive customer support to comprehensive warranties, we are committed to providing you with the highest level of service.",
    bullets: [
      "Responsive customer support",
      "Comprehensive warranties",
      "Service that exceeds expectations",
    ],
    image:
      "https://advencoblindsandshutters.co.uk/wp-content/uploads/2024/10/advenco-customer-satisfaction-home-page.webp",
    imageAlt: "Happy customer with beautiful Advenco blinds in their living room",
    imageLeft: true,
    bg: "bg-[#f8f7f4]",
  },
];

/* ---------- Single Section Component ---------- */

function SectionItem({ section }: { section: QualitySection }) {
  return (
    <section
      id={section.id}
      aria-labelledby={`${section.id}-heading`}
      className={`${section.bg} py-16 lg:py-20`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
            !section.imageLeft ? "lg:grid-flow-col-dense" : ""
          }`}
        >
          {/* ---- Image ---- */}
          <div className={`relative ${!section.imageLeft ? "lg:col-start-2" : ""}`}>
            <div className="relative overflow-hidden rounded-sm border-l-4 border-[#00aeef]">
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

          {/* ---- Text Content ---- */}
          <div className={`space-y-5 ${!section.imageLeft ? "lg:col-start-1 lg:row-start-1" : ""}`}>
            {/* Section label */}
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#00aeef]">
              {section.label}
            </p>

            {/* Heading */}
            <h2
              id={`${section.id}-heading`}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1e293b] leading-tight"
              style={{ fontFamily: "var(--font-heading, Outfit, sans-serif)" }}
            >
              {section.heading}
            </h2>

            {/* Body */}
            <p className="text-[#64748b] leading-relaxed text-base">
              {section.body}
            </p>

            {/* Bullets */}
            <ul className="space-y-2.5 pt-1" aria-label={`${section.heading} features`}>
              {section.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <span
                    className="mt-2 shrink-0 w-2 h-2 rounded-full bg-[#00aeef]"
                    aria-hidden="true"
                  />
                  <span className="text-[#475569] text-sm">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Parent Component ---------- */

export default function QualitySections() {
  return (
    <>
      {qualitySections.map((section) => (
        <SectionItem key={section.id} section={section} />
      ))}
    </>
  );
}
