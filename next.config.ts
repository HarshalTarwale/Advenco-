import type { NextConfig } from "next";

/**
 * Next.js Configuration — Advenco Blinds & Shutters
 *
 * Key settings:
 *  - reactCompiler: enabled for automatic memoization (React 19)
 *
 * All imagery is served from /public/images, so no remote image hosts are
 * configured — next/image optimises everything from local files.
 */
const nextConfig: NextConfig = {
  /* React Compiler — auto-memoises components in React 19 */
  reactCompiler: true,
};

export default nextConfig;
