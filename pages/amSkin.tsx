import Head from "next/head";

import CaseStudyPage from "../components/CaseStudyPage";
import { getProjectBySlug } from "../data/portfolio";

const project = getProjectBySlug("amSkin");

export default function AmSkinPage() {
  if (!project) return null;

  return (
    <>
      <Head>
        <title>{project.title} | Zay Lin Htet</title>
        <meta name="description" content={project.tagline} />
      </Head>
      <CaseStudyPage project={project} />
    </>
  );
}
