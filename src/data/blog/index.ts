/**
 * Blog Post Detail Pages — Registry
 *
 * Maps each post's URL slug to its content module. New posts are added
 * here as their data files are built out in src/data/blog/<slug>.ts
 */

import type { BlogPostDetail } from "./types";

type Loader = () => Promise<{ default: BlogPostDetail }>;

export const blogRegistry: Record<string, Loader> = {
  "elegant-bay-window-shutters-to-brighten-your-home": () => import("./elegant-bay-window-shutters-to-brighten-your-home"),
  "window-shutters-for-all-seasons-summer-winter-benefits": () => import("./window-shutters-for-all-seasons-summer-winter-benefits"),
  "add-blind-screens-to-your-bay-windows-for-extra-privacy": () => import("./add-blind-screens-to-your-bay-windows-for-extra-privacy"),
  "the-little-upgrade-that-transforms-your-living-room": () => import("./the-little-upgrade-that-transforms-your-living-room"),
  "top-living-room-blind-styles-for-uk-homes": () => import("./top-living-room-blind-styles-for-uk-homes"),
  "best-bedroom-window-blinds-for-a-cozy-and-stylish-look": () => import("./best-bedroom-window-blinds-for-a-cozy-and-stylish-look"),
  "top-5-benefits-of-installing-perfect-fit-blinds-in-your-home": () => import("./top-5-benefits-of-installing-perfect-fit-blinds-in-your-home"),
  "the-ultimate-guide-to-buying-window-shutters-in-the-uk": () => import("./the-ultimate-guide-to-buying-window-shutters-in-the-uk"),
  "perfect-fit-roller-blinds-for-every-space": () => import("./perfect-fit-roller-blinds-for-every-space"),
  "top-5-window-blinds-trends-in-the-uk-for-2025-a-look-ahead-with-advenco-blinds": () => import("./top-5-window-blinds-trends-in-the-uk-for-2025-a-look-ahead-with-advenco-blinds"),
  "blinds-vs-shutters-which-is-best-for-your-windows": () => import("./blinds-vs-shutters-which-is-best-for-your-windows"),
  "the-benefits-of-installing-shutters-in-your-uk-home": () => import("./the-benefits-of-installing-shutters-in-your-uk-home"),
  "best-blinds-for-privacy-without-blocking-natural-light": () => import("./best-blinds-for-privacy-without-blocking-natural-light"),
  "choosing-the-right-window-shutters-for-every-room-in-your-house": () => import("./choosing-the-right-window-shutters-for-every-room-in-your-house"),
  "a-complete-guide-to-shutters-styles-materials-and-benefits": () => import("./a-complete-guide-to-shutters-styles-materials-and-benefits"),
  "how-to-choose-the-right-blinds-shutters-a-complete-guide-by-advenco-blinds": () => import("./how-to-choose-the-right-blinds-shutters-a-complete-guide-by-advenco-blinds"),
  "best-shutters-for-windows-in-the-uk-top-picks-by-advenco-blinds": () => import("./best-shutters-for-windows-in-the-uk-top-picks-by-advenco-blinds"),
};

export async function getBlogPostContent(slug: string): Promise<BlogPostDetail | null> {
  const loader = blogRegistry[slug];
  if (!loader) return null;
  const mod = await loader();
  return mod.default;
}

export function getAllBlogSlugs(): string[] {
  return Object.keys(blogRegistry);
}
