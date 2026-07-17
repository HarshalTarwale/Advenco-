/**
 * Town Area Pages — Shared Content Schema
 *
 * Each source WordPress "/areas/advenco-window-blinds-and-shutters-<town>/"
 * page has genuinely unique, individually-written copy (not a find/replace
 * template) — section names, framing, and highlighted products all differ
 * per town. The schema below is a generic ordered list of sections so each
 * town's real structure can be represented as-is, verbatim.
 */

export interface TownSection {
  heading: string;
  body: string;
  bullets?: string[];
  /** Optional real inline image from the source page, matching its position. */
  image?: string;
  imageAlt?: string;
  /** true = image on left, false = image on right. Defaults to right if omitted. */
  imageLeft?: boolean;
}

export interface TownPageContent {
  slug: string;
  town: string;
  /** Original source URL, kept for reference/traceability. */
  sourceUrl: string;
  metaTitle: string;
  metaDescription: string;

  badgeLabel: string;
  heroHeading: string;
  heroSubheading: string;
  heroBody: string;
  /** Real WP image, chosen to match the page's style/description. */
  heroImage: string;
  heroImageAlt: string;

  /** Title + intro paragraph(s) from the source page. */
  introHeading: string;
  introParagraphs: string[];

  /** All remaining named sections, in source order, verbatim. */
  sections: TownSection[];

  /** Closing CTA paragraph, verbatim. */
  closingBody: string;
}
