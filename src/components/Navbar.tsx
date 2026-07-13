/**
 * Navbar Component — Advenco Blinds & Shutters
 *
 * A two-tier navigation:
 *  - Top utility bar: email, phone, and "FREE CONSULTATION & INSTALLATION" tagline
 *  - Main nav bar: logo, nav links (with dropdowns), and "Get A Quote" CTA button
 *
 * Features:
 *  - Sticky on scroll with shadow
 *  - Mobile hamburger menu with slide-in drawer
 *  - Accessible keyboard navigation
 *  - Matches the new design's white nav with teal CTA button
 */

"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

/* ---------- Type Definitions ---------- */

interface NavItem {
  label: string;
  href: string;
  dropdown?: { label: string; href: string }[];
}

/* ---------- Navigation Data ---------- */

const navItems: NavItem[] = [
  { label: "HOME", href: "/" },
  {
    /* BLINDS — dropdown with product sub-categories */
    label: "BLINDS",
    href: "#",
    dropdown: [
      { label: "Roller Blinds",          href: "/roller-blinds/" },
      { label: "Roman Blinds",           href: "/roman-blinds/" },
      { label: "Wooden Blinds",          href: "/wooden-blinds/" },
      { label: "Venetian Blinds",        href: "/venetian-blinds/" },
      { label: "Vertical Blinds",        href: "/vertical-blinds/" },
      { label: "Day & Night Blinds",     href: "/day-night-blinds/" },
      { label: "Motorised Blinds",       href: "/motorised-blinds/" },
      { label: "Conservatory Blinds",    href: "/conservatory-blinds/" },
    ],
  },
  { label: "SHUTTERS",     href: "/shutters/" },
  {
    /* AREAS — dropdown with showroom locations */
    label: "AREAS",
    href: "#",
    dropdown: [
      { label: "Morley Showroom",     href: "/advenco-blinds-and-shutters-showroom-in-morley/" },
      { label: "Maidenhead Showroom", href: "/maidenhead-showroom/" },
      { label: "All Areas",           href: "/areas/" },
    ],
  },
  { label: "BLINDS SCREEN", href: "/blinds-screens/" },
  { label: "BLOGS",         href: "/blog/" },
  { label: "CONTACT US",    href: "/contact-us/" },
];

/* ---------- Component ---------- */

export default function Navbar() {
  // Scroll state — adds shadow to navbar when user scrolls down
  const [isScrolled, setIsScrolled] = useState(false);
  // Mobile menu open/close
  const [mobileOpen, setMobileOpen] = useState(false);
  // Track which dropdown is open (by label)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  /* ---- Scroll listener ---- */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ---- Close mobile menu on route change ---- */
  useEffect(() => {
    if (mobileOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [mobileOpen]);

  /* ---- Close dropdown when clicking outside ---- */
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (label: string) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

  return (
    <>
      {/* ============================================================
          Top Utility Bar — contact info + tagline
      ============================================================ */}
      <div className="bg-[#0f172a] text-white text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-2">
          {/* Left: email + phone */}
          <div className="flex items-center gap-6 flex-wrap">
            <a
              href="mailto:info@advencoblindsandshutters.co.uk"
              className="flex items-center gap-2 hover:text-[#00aeef] transition-colors"
              aria-label="Email Advenco"
            >
              {/* Envelope icon */}
              <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 512 512" fill="currentColor" aria-hidden="true">
                <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" />
              </svg>
              <span>info@advencoblindsandshutters.co.uk</span>
            </a>
            <a
              href="tel:08000541880"
              className="flex items-center gap-2 hover:text-[#00aeef] transition-colors"
              aria-label="Call Advenco"
            >
              {/* Phone icon */}
              <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 448 512" fill="currentColor" aria-hidden="true">
                <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h352a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48zm-16.39 307.37l-15 65A15 15 0 0 1 354 416C194 416 64 286.29 64 126a15.7 15.7 0 0 1 11.63-14.61l65-15A18.23 18.23 0 0 1 144 96a16.27 16.27 0 0 1 13.79 9.09l30 70A17.9 17.9 0 0 1 189 181a17 17 0 0 1-5.5 11.61l-37.89 31a231.91 231.91 0 0 0 110.78 110.78l31-37.89A17 17 0 0 1 299 291a17.85 17.85 0 0 1 5.91 1.21l70 30A16.25 16.25 0 0 1 384 336a17.41 17.41 0 0 1-.39 3.37z" />
              </svg>
              <span>0800 054 1880</span>
            </a>
          </div>

          {/* Right: tagline */}
          <span className="hidden sm:block font-medium tracking-wider text-xs text-white/70 uppercase">
            Free Consultation &amp; Installation
          </span>
        </div>
      </div>

      {/* ============================================================
          Main Navigation Bar
      ============================================================ */}
      <nav
        ref={navRef}
        role="navigation"
        aria-label="Main navigation"
        className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
          isScrolled ? "shadow-md" : "shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* ---- Logo ---- */}
            <Link href="/" className="flex items-center shrink-0" aria-label="Advenco Home">
              <Image
                src="https://advencoblindsandshutters.co.uk/wp-content/uploads/2024/10/Advenco-Logo.webp"
                alt="Advenco Blinds and Shutters Logo"
                width={60}
                height={60}
                priority
                className="w-12 h-12 lg:w-14 lg:h-14 object-contain"
              />
            </Link>

            {/* ---- Desktop Navigation Links ---- */}
            <ul className="hidden lg:flex items-center gap-1 xl:gap-2" role="menubar">
              {navItems.map((item) => (
                <li key={item.label} className="relative group" role="none">
                  {item.dropdown ? (
                    /* Items with dropdown */
                    <>
                      <button
                        role="menuitem"
                        aria-haspopup="true"
                        aria-expanded={openDropdown === item.label}
                        onClick={() => toggleDropdown(item.label)}
                        className="flex items-center gap-1 px-3 py-2 text-[12px] xl:text-[13px] font-semibold text-[#1e293b] hover:text-[#00aeef] transition-colors uppercase" style={{ fontFamily: 'var(--font-heading, Outfit, sans-serif)' }}
                      >
                        {item.label}
                        {/* Chevron icon */}
                        <svg
                          className={`w-3 h-3 transition-transform duration-200 ${
                            openDropdown === item.label ? "rotate-180" : ""
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      {/* Dropdown Panel */}
                      {openDropdown === item.label && (
                        <ul
                          role="menu"
                          aria-label={`${item.label} submenu`}
                          className="absolute top-full left-0 mt-1 w-56 bg-white shadow-xl rounded-lg border border-gray-100 py-2 z-50 animate-fade-in"
                        >
                          {item.dropdown.map((sub) => (
                            <li key={sub.label} role="none">
                              <Link
                                href={sub.href}
                                role="menuitem"
                                onClick={() => setOpenDropdown(null)}
                                className="block px-4 py-2.5 text-[13px] text-[#1e293b] hover:bg-[#f0f9ff] hover:text-[#00aeef] transition-colors"
                              >
                                {sub.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    /* Regular nav links */
                    <Link
                      href={item.href}
                      role="menuitem"
                      className="block px-3 py-2 text-[12px] xl:text-[13px] font-semibold text-[#1e293b] hover:text-[#00aeef] transition-colors uppercase" style={{ fontFamily: 'var(--font-heading, Outfit, sans-serif)' }}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {/* ---- CTA Button + Mobile Toggle ---- */}
            <div className="flex items-center gap-3">
              {/* Desktop CTA */}
              <Link
                id="get-a-quote-nav"
                href="#contact"
                className="hidden lg:inline-flex items-center px-5 py-2.5 bg-[#00aeef] hover:bg-[#0099d4] text-white text-xs font-bold tracking-widest uppercase transition-colors rounded-sm"
              >
                Get A Quote
              </Link>

              {/* Mobile hamburger button */}
              <button
                id="mobile-menu-toggle"
                onClick={() => setMobileOpen((prev) => !prev)}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
                className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-md hover:bg-gray-100 transition-colors"
              >
                <span
                  className={`block h-0.5 w-6 bg-[#1e293b] transition-all duration-300 ${
                    mobileOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-[#1e293b] transition-all duration-300 ${
                    mobileOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-[#1e293b] transition-all duration-300 ${
                    mobileOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* ============================================================
            Mobile Navigation Drawer
        ============================================================ */}
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className={`lg:hidden fixed inset-0 top-[calc(40px+64px)] z-40 bg-white overflow-y-auto transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="px-6 py-6 space-y-2">
            {navItems.map((item) => (
              <div key={item.label} className="border-b border-gray-100 last:border-0">
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className="flex items-center justify-between w-full py-3 text-sm font-semibold tracking-widest text-[#1e293b] uppercase"
                    >
                      {item.label}
                      <svg
                        className={`w-4 h-4 transition-transform ${
                          openDropdown === item.label ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openDropdown === item.label && (
                      <ul className="pl-4 pb-3 space-y-2">
                        {item.dropdown.map((sub) => (
                          <li key={sub.label}>
                            <Link
                              href={sub.href}
                              onClick={() => setMobileOpen(false)}
                              className="block py-1.5 text-sm text-[#64748b] hover:text-[#00aeef] transition-colors"
                            >
                              {sub.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-3 text-sm font-semibold text-[#1e293b] uppercase hover:text-[#00aeef] transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}

            {/* Mobile CTA */}
            <div className="pt-4">
              <Link
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center w-full py-3 bg-[#00aeef] hover:bg-[#0099d4] text-white text-sm font-bold tracking-widest uppercase rounded-sm transition-colors"
              >
                Get A Quote
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
