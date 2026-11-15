import type { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";

import CaseStudyPage from "../../components/CaseStudyPage";
import {
  absoluteUrl,
  getProjectBySlug,
  personalProfile,
  projects,
} from "../../data/portfolio";

interface ProjectPageProps {
  slug: string;
}

export default function ProjectPage({ slug }: ProjectPageProps) {
  // getStaticPaths only emits known slugs, so this lookup always succeeds.
  const project = getProjectBySlug(slug)!;
  const url = absoluteUrl(`/projects/${project.slug}`);
  const title = `${project.title} | ${personalProfile.name}`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={project.tagline} />
        <link rel="canonical" href={url} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={project.tagline} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={absoluteUrl(project.image.src)} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <CaseStudyPage project={project} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: projects.map((project) => ({ params: { slug: project.slug } })),
  // Unknown slugs get a real 404 instead of a blank page.
  fallback: false,
});

export const getStaticProps: GetStaticProps<ProjectPageProps> = async ({ params }) => ({
  props: { slug: String(params?.slug) },
});
