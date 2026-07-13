/**
 * OurProcess Component â€” Advenco Blinds & Shutters
 *
 * "Your Partner in Home Transformation" â€” 3-step process section.
 *
 * Design (matching the provided screenshot):
 *  - Light grey/white background
 *  - "OUR PROCESS" label in teal, centered
 *  - Large heading: "Your Partner in Home Transformation" with italic part
 *  - Subtitle in grey
 *  - Three steps in a row, separated by thin horizontal dividers
 *  - Each step has:
 *      â€¢ Large, very faint teal step number (01, 02, 03)
 *      â€¢ Thin top border
 *      â€¢ Bold step title
 *      â€¢ Grey description text (small)
 *
 * Content sourced from the WordPress homepage.
 */

/* ---------- Process Step Data ---------- */

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

const steps: ProcessStep[] = [
  {
    number: "01",
    title: "Free Consultation",
    description:
      "Schedule a complimentary session with our experts to discuss your vision and explore the perfect options for your space.",
  },
  {
    number: "02",
    title: "Made to Measure",
    description:
      "Every blind and shutter is custom-crafted to your exact specifications, ensuring a flawless fit for any window size or shape.",
  },
  {
    number: "03",
    title: "Competitive Prices",
    description:
      "We offer options to suit all budgets, with a price match guarantee ensuring the best value for your investment.",
  },
];

/* ---------- Component ---------- */

export default function OurProcess() {
  return (
    <section
      id="our-process"
      aria-labelledby="our-process-heading"
      className="bg-[#f8f9fc] py-16 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">

        {/* ============================================================
            Section Header â€” centred
        ============================================================ */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          {/* "OUR PROMISE" label in dark grey (#1e293b) */}
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[#1e293b]">
            Our Promise
          </p>
          {/* Main heading: regular weight + italic part */}
          <h2
            id="our-process-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#1e293b] leading-tight"
          >
            The Advenco{" "}
            <em
              className="font-bold italic"
              style={{ fontFamily: "var(--font-heading, Outfit, sans-serif)" }}
            >
              Difference
            </em>
          </h2>
          {/* Subtitle */}
          <p className="text-[#94a3b8] text-sm leading-relaxed">
            From initial consultation to final installation, we guide you every step of the way.
          </p>
        </div>

        {/* ============================================================
            Three Steps Row â€” matching the screenshot design
        ============================================================ */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#e2e8f0]">
          {steps.map((step) => (
            <div
              key={step.number}
              id={`process-step-${step.number}`}
              className="px-0 md:px-10 py-8 md:py-0 first:pl-0 last:pr-0"
            >
              {/* Large faded step number â€” very light teal, decorative */}
              <span
                className="block text-[5rem] font-bold leading-none mb-4"
                style={{ color: "rgba(0, 174, 239, 0.12)" }}
                aria-hidden="true"
              >
                {step.number}
              </span>

              {/* Step title â€” bold, dark */}
              <h3 className="font-light text-[#1e293b] text-base mb-3">
                {step.title}
              </h3>

              {/* Description â€” small, light grey */}
              <p className="text-[#94a3b8] text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* ============================================================
            CTA Button
        ============================================================ */}
        <div className="text-center mt-14">
          <a
            id="process-book-consultation-btn"
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#00aeef] hover:bg-[#0099d4] text-white text-sm font-bold tracking-widest uppercase transition-colors rounded-sm"
          >
            Book a Free Consultation
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
