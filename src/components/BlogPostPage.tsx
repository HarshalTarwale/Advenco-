/**
 * BlogPostPage — Dedicated Template
 *
 * Renders each "/blog/<slug>/" detail page:
 *  1. Navbar
 *  2. Hero — dark gradient background image, title, category badge (same
 *     pattern as every other page)
 *  3. Article body — intro, then sections (h2/h3 headings, paragraphs,
 *     optional bullet lists), then closing paragraphs — verbatim from the
 *     source WordPress post
 *  4. Related Posts — 3 other posts, chosen at random on each render
 *  5. ContactSection + Footer — reused site-wide
 */

import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { blogPosts, type BlogPost } from "@/data/blogPage";
import type { BlogPostDetail } from "@/data/blog/types";

function pickRelatedPosts(currentSlug: string, count: number): BlogPost[] {
  const others = blogPosts.filter((post) => post.slug !== currentSlug);
  const shuffled = [...others].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

export default function BlogPostPage({ content }: { content: BlogPostDetail }) {
  const { title, category, image, imageAlt, introParagraphs, sections, closingParagraphs, slug } = content;
  const relatedPosts = pickRelatedPosts(slug, 3);

  return (
    <>
      <Navbar />

      {/* ============================================================
          Hero — dark gradient background image, badge, heading
      ============================================================ */}
      <section
        className="relative w-full min-h-[420px] flex items-end overflow-hidden"
        aria-label={`${title} hero`}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          role="img"
          aria-label={imageAlt}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-advenco-graphite/95 via-advenco-graphite/70 to-advenco-graphite/20" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 pt-32 pb-16 w-full">
          <div className="max-w-3xl">
            {category && (
              <p className="flex items-center gap-2 text-advenco-teal text-[11px] font-semibold tracking-[0.25em] uppercase mb-5">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 19.5A2.5 2.5 0 0 0 6.5 22H20V4H6.5A2.5 2.5 0 0 0 4 6.5v13Z" />
                </svg>
                {category}
              </p>
            )}
            <h1
              className="font-heading text-white font-bold leading-[1.15]"
              style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
            >
              {title}
            </h1>
          </div>
        </div>
      </section>

      {/* ============================================================
          Article Body
      ============================================================ */}
      <article className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
          <div className="max-w-3xl space-y-5">
            {introParagraphs.map((para) => (
              <p key={para} className="text-advenco-muted leading-relaxed">{para}</p>
            ))}
          </div>

          <div className="max-w-3xl mt-10 space-y-8">
            {sections.map((section) => (
              <div key={section.heading} className="space-y-3">
                {section.level === 2 ? (
                  <h2 className="font-heading text-2xl sm:text-3xl text-advenco-graphite-mid font-bold leading-tight">
                    {section.heading}
                  </h2>
                ) : (
                  <h3 className="font-heading text-xl text-advenco-graphite-mid font-semibold leading-snug">
                    {section.heading}
                  </h3>
                )}
                {section.paragraphs.map((para) => (
                  <p key={para} className="text-advenco-muted leading-relaxed">{para}</p>
                ))}
                {section.bullets && (
                  <ul className="space-y-3 pt-1">
                    {section.bullets.map((bullet) => (
                      <li key={bullet.label ?? bullet.text} className="flex items-start gap-3">
                        <span className="mt-2 shrink-0 w-2 h-2 rounded-full bg-advenco-teal" aria-hidden="true" />
                        <span className="text-advenco-muted text-sm leading-relaxed">
                          {bullet.label && (
                            <strong className="text-advenco-graphite-mid font-semibold">{bullet.label}: </strong>
                          )}
                          {bullet.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {closingParagraphs.length > 0 && (
            <div className="max-w-3xl mt-10 space-y-4">
              {closingParagraphs.map((para) => (
                <p key={para} className="text-advenco-muted leading-relaxed">{para}</p>
              ))}
            </div>
          )}
        </div>
      </article>

      {/* ============================================================
          Related Posts — 3 random posts
      ============================================================ */}
      {relatedPosts.length > 0 && (
        <section className="bg-advenco-alabaster py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
            <h2 className="font-heading text-2xl sm:text-3xl text-advenco-graphite-mid font-bold leading-tight mb-10 text-center">
              <span className="text-advenco-teal">Related</span> Posts
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((post) => (
                <RelatedPostCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </section>
      )}

      <ContactSection />
      <Footer />
    </>
  );
}

/* ---------- Related Post Card ---------- */

function RelatedPostCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}/`}
      className="group flex flex-col bg-white border border-advenco-border rounded-sm overflow-hidden hover:shadow-lg transition-shadow"
    >
      <div className="relative w-full aspect-4/3 overflow-hidden">
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {post.category && (
          <span className="absolute top-3 right-3 bg-white/95 text-advenco-graphite-mid text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full">
            {post.category}
          </span>
        )}
      </div>
      <div className="flex flex-col flex-1 p-5">
        <h3 className="font-heading font-semibold text-advenco-teal text-base leading-snug mb-2.5 group-hover:text-advenco-teal-dark transition-colors">
          {post.title}
        </h3>
        <p className="text-advenco-muted text-sm leading-relaxed flex-1">{post.excerpt}</p>
        <span className="inline-flex items-center gap-2 mt-4 text-advenco-teal text-xs font-bold tracking-widest uppercase">
          Read More
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
