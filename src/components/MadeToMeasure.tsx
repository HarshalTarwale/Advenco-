/**
 * MadeToMeasure Component â€” Advenco Blinds & Shutters
 *
 * SEO-rich text section from the WordPress homepage that describes
 * the Made-to-Measure window blinds and shutters service.
 * Uses original WordPress content verbatim.
 *
 * This is a light background section with:
 *  - Large heading
 *  - Two paragraphs of body text
 *  - Bulleted list of blind types
 */

export default function MadeToMeasure() {
  /* Blind types list from the original WordPress content */
  const blindTypes = [
    "Cheap and beautiful Custom Roller Blinds",
    "Fabric Materials Roman Blinds",
    "Real Wood Luxurious Wooden Blinds",
    "Day special Custom Vision Blinds",
    "Unique and Privacy special Vertical Blinds",
    "Conservatory Blinds in many designs, colors and materials",
    "Affordable Metal Venetians and Windows Shutters",
  ];

  return (
    <section
      id="made-to-measure"
      aria-labelledby="made-to-measure-heading"
      className="bg-white py-16 lg:py-20"
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-12 lg:px-20">

        {/* Section Heading Group */}
        <div className="mb-8">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#1e293b] mb-4">
            The Collection
          </p>
          <h2
            id="made-to-measure-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#1e293b]"
          >
            Curated for{" "}
            <em
              className="font-bold italic"
              style={{ fontFamily: "var(--font-heading, Outfit, sans-serif)" }}
            >
              Every{" "}
            </em>
            Space
          </h2>
        </div>

        {/* First body paragraph */}
        <div className="space-y-5 text-[#64748b] leading-relaxed text-base mb-8">
          <p>
            Are you looking to enhance the brightness, vibrancy, and appeal of your interiors with
            precisely tailored window blinds that perfectly fit your windows of any size or shape?
            Advenco offers high-quality Made-to-Measure window blinds in UK and window shutters in UK
            that are meticulously crafted to your specifications, ensuring a seamless fit for all
            dimensions and designs. Our customizable options allow you to create blinds that match
            your exact requirements, with a variety of materials, designs, and styles to choose from.
          </p>

          {/* Second body paragraph */}
          <p>
            Why settle for anything less than perfection? Advenco ensures a superior window blinds
            experience by providing precise measurements and complimentary installation services. Say
            goodbye to ill-fitting, off-the-shelf blinds &ndash; our Made-to-Measure Blinds are tailored
            to meet your needs, eliminating the hassle of DIY installation. We have many different
            types of windows blinds, including:
          </p>
        </div>

        {/* Blind types list */}
        <ul
          className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3"
          aria-label="Types of window blinds available"
        >
          {blindTypes.map((type) => (
            <li key={type} className="flex items-start gap-3">
              <span
                className="mt-2 shrink-0 w-2 h-2 rounded-full bg-[#00aeef]"
                aria-hidden="true"
              />
              <span className="text-[#475569] text-sm">{type}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
