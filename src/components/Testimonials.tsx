/**
 * Testimonials Component â€” Advenco Blinds & Shutters
 *
 * Customer reviews section with three testimonial cards.
 * Matches the design: light background, white cards, italic quotes,
 * customer name in bold, and location in teal.
 *
 * Content: Real-sounding testimonials consistent with the Advenco brand
 * and matching the design reference.
 */

/* ---------- Testimonial Data ---------- */

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  location: string;
  stars: number;
}

const testimonials: Testimonial[] = [
  {
    id: "testimonial-sarah",
    quote:
      "Advenco transformed our living room completely. The craftsmanship is impeccable and the installation team was incredibly professional. Couldn't be happier with the plantation shutters!",
    author: "Sarah M.",
    location: "London",
    stars: 5,
  },
  {
    id: "testimonial-james",
    quote:
      "Excellent service from start to finish. The ordering process was seamless. Our motorised blinds work beautifully and the quality is outstanding. Highly recommend Advenco.",
    author: "James T.",
    location: "Manchester",
    stars: 5,
  },
  {
    id: "testimonial-emily",
    quote:
      "We had roller blinds fitted throughout our home. The difference they make to light control and the overall feel of our home is remarkable. Great value and brilliant service.",
    author: "Emily R.",
    location: "Bristol",
    stars: 5,
  },
];

/* ---------- Star Rating Component ---------- */

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5 mb-4" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 text-[#f59e0b]"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ))}
    </div>
  );
}

/* ---------- Component ---------- */

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="bg-[#f8f7f4] py-16 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">

        {/* ============================================================
            Section Header
        ============================================================ */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#00aeef]">
            Testimonials
          </p>
          <h2
            id="testimonials-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#1e293b] leading-tight"
          >
            What Our{" "}
            <em
              className="font-bold italic"
              style={{ fontFamily: "var(--font-heading, Outfit, sans-serif)" }}
            >
              Clients
            </em>{" "}
            Say
          </h2>
        </div>

        {/* ============================================================
            Testimonials Grid â€” 3 columns on desktop
        ============================================================ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <blockquote
              key={testimonial.id}
              id={testimonial.id}
              className="bg-white rounded-sm p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col"
            >
              {/* Star rating */}
              <StarRating count={testimonial.stars} />

              {/* Quote text */}
              <p className="text-[#64748b] text-sm leading-relaxed italic flex-1 mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Attribution */}
              <footer>
                <cite className="not-italic">
                  <span className="block font-semibold text-[#1e293b] text-sm">
                    {testimonial.author}
                  </span>
                  <span className="text-xs text-[#00aeef] font-medium mt-0.5 block">
                    {testimonial.location}
                  </span>
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
