/**
 * BlogPage — Dedicated Template
 *
 * Renders the "/blog/" listing page:
 *  1. Navbar
 *  2. Hero — dark gradient background image, badge, heading (same pattern
 *     as every other product page)
 *  3. Post card grid — image, category tag, title, excerpt, "Read More"
 *  4. ContactSection + Footer — reused site-wide
 *
 * Post titles, excerpts, categories, and featured images are copied
 * verbatim from the source WordPress blog listing.
 */

import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { blogHero, blogPosts, type BlogPost } from "@/data/blogPage";

export default function BlogPage() {
  return (
    <>
      <Navbar />

      {/* ============================================================
          Hero — dark gradient background image, badge, heading
      ============================================================ */}
      <section
        className="relative w-full min-h-[480px] flex items-end overflow-hidden"
        aria-label="Advenco Blog hero"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${blogHero.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          role="img"
          aria-label={blogHero.imageAlt}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-advenco-graphite/95 via-advenco-graphite/70 to-advenco-graphite/20" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 pt-32 pb-16 w-full">
          <div className="max-w-2xl">
            <p className="flex items-center gap-2 text-advenco-teal text-[11px] font-semibold tracking-[0.25em] uppercase mb-5">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 19.5A2.5 2.5 0 0 0 6.5 22H20V4H6.5A2.5 2.5 0 0 0 4 6.5v13Z" />
              </svg>
              {blogHero.badgeLabel}
            </p>
            <h1
              className="font-heading text-white leading-[1.1] mb-6"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
            >
              <span className="font-light block">{blogHero.heading}</span>
              <span className="font-bold italic text-advenco-teal block">{blogHero.subheading}</span>
            </h1>
            <p className="text-white/75 text-base sm:text-lg leading-relaxed max-w-xl">
              {blogHero.body}
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================
          Post Card Grid
      ============================================================ */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <PostCard key={post.title} post={post} />
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </>
  );
}

/* ---------- Post Card ---------- */

function PostCard({ post }: { post: BlogPost }) {
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
      </div>
      <div className="flex flex-col flex-1 p-6">
        {post.category && (
          <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-advenco-teal mb-3">
            {post.category}
          </p>
        )}
        <h2 className="font-heading font-semibold text-advenco-graphite-mid text-lg leading-snug mb-3">
          {post.title}
        </h2>
        <p className="text-advenco-muted text-sm leading-relaxed flex-1">{post.excerpt}</p>
        <span className="inline-flex items-center gap-2 mt-5 text-advenco-teal text-xs font-bold tracking-widest uppercase">
          Read More
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
