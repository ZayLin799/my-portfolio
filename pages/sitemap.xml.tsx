import type { GetServerSideProps } from "next";

import { absoluteUrl, projects } from "../data/portfolio";

// Generated from the project list so new case studies are picked up
// automatically.
const buildSitemap = () => {
  const urls = ["/", ...projects.map((project) => `/projects/${project.slug}`)];
  const entries = urls
    .map((path) => `  <url><loc>${absoluteUrl(path)}</loc></url>`)
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</urlset>
`;
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader("Content-Type", "application/xml");
  res.setHeader("Cache-Control", "public, s-maxage=86400, stale-while-revalidate=3600");
  res.write(buildSitemap());
  res.end();
  return { props: {} };
};

export default function Sitemap() {
  return null;
}
