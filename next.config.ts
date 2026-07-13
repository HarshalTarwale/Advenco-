import type { NextConfig } from "next";

/**
 * Next.js Configuration — Advenco Blinds & Shutters
 *
 * Key settings:
 *  - reactCompiler: enabled for automatic memoization (React 19)
 *  - images.remotePatterns: allows loading images from the WordPress site
 *    (advencoblindsandshutters.co.uk) via next/image with optimisation
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
    ],
  },
};

export default nextConfig;
