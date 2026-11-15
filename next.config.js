/** @type {import('next').NextConfig} */

// Case studies used to live at the site root with mixed-case URLs.
// Keep old links (CV, LinkedIn, search results) working.
const legacyProjectPaths = {
  "/sdax": "sdax",
  "/autovinhub": "autovinhub",
  "/littleMyanmar": "little-myanmar",
  "/JPAuctionSheet": "jp-auction-sheet",
  "/yunhome": "yunhome",
  "/viabell": "viabell",
  "/amSkin": "am-skin",
  "/pinkpop-pos": "pinkpop-pos",
};

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return Object.entries(legacyProjectPaths).map(([source, slug]) => ({
      source,
      destination: `/projects/${slug}`,
      permanent: true,
    }));
  },
};

module.exports = nextConfig;
