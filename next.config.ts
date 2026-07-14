import type { NextConfig } from "next";

/**
 * Next.js Configuration — Advenco Blinds & Shutters
 *
 * Key settings:
 *  - reactCompiler: enabled for automatic memoization (React 19)
 *  - images.remotePatterns: allows loading images from the WordPress site
 *    (advencoblindsandshutters.co.uk) and Unsplash (stock photography used
 *    on sub-pages that don't yet have real WordPress imagery) via
 *    next/image with optimisation
 */
const nextConfig: NextConfig = {
  /* React Compiler — auto-memoises components in React 19 */
  reactCompiler: true,

  /* Remote image domains for next/image optimisation */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "advencoblindsandshutters.co.uk",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
