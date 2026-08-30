import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        // Reachable from the site, but excluded from search-engine indexing
        // and scraping, see profile.ts `resumeUrl` for where this is linked.
        source: "/resume.pdf",
        headers: [{ key: "X-Robots-Tag", value: "noindex" }],
      },
    ];
  },
};

export default nextConfig;
