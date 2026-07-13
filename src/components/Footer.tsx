/**
 * Footer Component â€” Advenco Blinds & Shutters
 *
 * Dark graphite footer with 4 columns:
 *  - Column 1: Logo, company description, social media links
 *  - Column 2: Navigation (Quick Links)
 *  - Column 3: Products
 *  - Column 4: Contact info + "Shop Online" button
 *
 * Bottom bar: copyright + "Back to Top" link.
 *
 * Matches the Base44 design reference footer exactly.
 * Content from the WordPress footer.
 */

import Link from "next/link";
import Image from "next/image";

/* ---------- Footer Link Data ---------- */

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "#products" },
  { label: "Why Us", href: "#why-us" },
  { label: "Our Process", href: "#our-process" },
  { label: "Contact", href: "#contact" },
];

const productLinks = [
  { label: "Plantation Shutters", href: "/shutters/" },
  { label: "Roller Blinds", href: "/roller-blinds/" },
  { label: "Venetian Blinds", href: "/venetian-blinds/" },
  { label: "Roman Blinds", href: "/roman-blinds/" },
  { label: "Vertical Blinds", href: "/vertical-blinds/" },
  { label: "Motorised Solutions", href: "/motorised-blinds/" },
];

/* ---------- Component ---------- */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      className="bg-[#060e1c] text-white border-t-4 border-[#00aeef]"
    >
      {/* ============================================================
          Main Footer Grid â€” 4 columns
      ============================================================ */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* ---- Column 1: Brand ---------- */}
          <div className="space-y-5">
            {/* Logo */}
            <Link href="/" aria-label="Advenco Home">
              <Image
                src="https://advencoblindsandshutters.co.uk/wp-content/uploads/2024/10/Advenco-Logo.webp"
                alt="Advenco Blinds and Shutters"
                width={60}
                height={60}
                className="w-14 h-14 object-contain brightness-0 invert"
                loading="lazy"
              />
            </Link>

            {/* Company description */}
            <p className="text-white/50 text-sm leading-relaxed">
              Premium window blinds and shutters, crafted in Britain and installed with
              precision across the UK.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3 pt-1">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/AdvencoblindsandShutterss/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Advenco on Facebook"
                className="w-9 h-9 flex items-center justify-center border border-white/15 rounded-full hover:border-[#00aeef] hover:bg-[#00aeef]/10 transition-all"
              >
                <svg className="w-4 h-4 text-white/60" viewBox="0 0 512 512" fill="currentColor" aria-hidden="true">
                  <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/advencoblindandshutters/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Advenco on Instagram"
                className="w-9 h-9 flex items-center justify-center border border-white/15 rounded-full hover:border-[#00aeef] hover:bg-[#00aeef]/10 transition-all"
              >
                <svg className="w-4 h-4 text-white/60" viewBox="0 0 448 512" fill="currentColor" aria-hidden="true">
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </a>
            </div>
          </div>

          {/* ---- Column 2: Navigation ---------- */}
          <nav aria-label="Footer navigation">
            <h3 className="text-xs font-light tracking-[0.2em] uppercase text-white/40 mb-5">
              Navigation
            </h3>
            <ul className="space-y-3 list-none p-0 m-0">
              {navigationLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/55 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* ---- Column 3: Products ---------- */}
          <nav aria-label="Products navigation">
            <h3 className="text-xs font-light tracking-[0.2em] uppercase text-white/40 mb-5">
              Products
            </h3>
            <ul className="space-y-3 list-none p-0 m-0">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/55 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* ---- Column 4: Contact ---------- */}
          <div>
            <h3 className="text-xs font-light tracking-[0.2em] uppercase text-white/40 mb-5">
              Contact
            </h3>
            <div className="space-y-4">
              {/* Phone */}
              <a
                href="tel:08000541880"
                className="flex items-center gap-2 text-white/55 hover:text-white text-sm transition-colors"
                aria-label="Call 0800 054 1880"
              >
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 448 512" fill="currentColor" aria-hidden="true">
                  <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h352a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48zm-16.39 307.37l-15 65A15 15 0 0 1 354 416C194 416 64 286.29 64 126a15.7 15.7 0 0 1 11.63-14.61l65-15A18.23 18.23 0 0 1 144 96a16.27 16.27 0 0 1 13.79 9.09l30 70A17.9 17.9 0 0 1 189 181a17 17 0 0 1-5.5 11.61l-37.89 31a231.91 231.91 0 0 0 110.78 110.78l31-37.89A17 17 0 0 1 299 291a17.85 17.85 0 0 1 5.91 1.21l70 30A16.25 16.25 0 0 1 384 336a17.41 17.41 0 0 1-.39 3.37z" />
                </svg>
                0800 054 1880
              </a>

              {/* Email */}
              <a
                href="mailto:info@advencoblindsandshutters.co.uk"
                className="flex items-start gap-2 text-white/55 hover:text-white text-sm transition-colors break-all"
                aria-label="Email info@advencoblindsandshutters.co.uk"
              >
                <svg className="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 512 512" fill="currentColor" aria-hidden="true">
                  <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" />
                </svg>
                info@advencoblindsandshutters.co.uk
              </a>

              {/* Shop Online CTA */}
              <a
                id="footer-shop-online-btn"
                href="https://www.onlineblindsexpress.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 px-5 py-2.5 border border-white/20 hover:border-[#00aeef] hover:bg-[#00aeef]/10 text-white/55 hover:text-white text-xs font-semibold tracking-widest uppercase rounded-sm transition-all"
              >
                Shop Online
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================
          Bottom Bar â€” copyright + back to top
      ============================================================ */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">
            &copy; {currentYear} Advenco Blinds &amp; Shutters. All rights reserved.
          </p>
          <a
            href="#hero"
            className="flex items-center gap-1.5 text-white/30 hover:text-white/60 text-xs transition-colors"
            aria-label="Back to top of page"
          >
            Back to top
            <svg className="w-3.5 h-3.5 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
