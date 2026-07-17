/**
 * Blog Post Detail Pages — Shared Content Schema
 *
 * Each source WordPress blog post is a long-form article: an H1 title,
 * intro paragraph(s), then a sequence of H2/H3 sections with paragraphs
 * and optional bullet lists, ending in a closing paragraph. The schema
 * below is a generic ordered list of sections so each post's real
 * structure can be represented as-is, verbatim.
 */

export interface BlogBullet {
  /** Optional bold lead-in rendered before the rest of the bullet text (source pages bold a short label at the start of each bullet). */
  label?: string;
  text: string;
}

export interface BlogSection {
  /** Heading level as used on the source page — h2 for main sections, h3 for sub-sections (e.g. "1. Living Room Elegance"). */
  level: 2 | 3;
  heading: string;
  paragraphs: string[];
  bullets?: BlogBullet[];
}

export interface BlogPostDetail {
  slug: string;
  title: string;
  category?: string;
  /** Original source URL, kept for reference/traceability. */
  sourceUrl: string;
  metaTitle: string;
  metaDescription: string;

  /** Featured/listing image — reused from blogPage.ts blogPosts entry. */
  image: string;
  imageAlt: string;

  /** Intro paragraph(s) before the first named section. */
  introParagraphs: string[];

  /** All named sections, in source order, verbatim. */
  sections: BlogSection[];

  /** Closing CTA paragraph(s), verbatim. */
  closingParagraphs: string[];
}
