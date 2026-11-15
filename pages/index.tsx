import type { GetStaticProps } from "next";
import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Main from "../components/Main";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import { absoluteUrl, getYearsOfExperience, personalProfile } from "../data/portfolio";

interface HomeProps {
  yearsOfExperience: number;
}

export default function Home({ yearsOfExperience }: HomeProps) {
  return (
    <>
      <Head>
        <title>Zay Lin Htet | Senior Full-Stack Software Engineer</title>
        <meta
          name="description"
          content={`Portfolio for Zay Lin Htet, a senior full-stack software engineer with ${yearsOfExperience}+ years of experience delivering business-critical fintech, automotive, healthcare, government, and telecommunications applications across Myanmar, Singapore, and Thailand.`}
        />
        <meta
          name="keywords"
          content="Zay Lin Htet, senior full-stack software engineer, Node.js engineer, NestJS engineer, Go engineer, Next.js engineer, Laravel engineer, Agile Scrum software engineer, software engineer portfolio"
        />
        <meta property="og:title" content="Zay Lin Htet | Senior Full-Stack Software Engineer" />
        <meta
          property="og:description"
          content="Portfolio and case studies covering full-cycle delivery, secure APIs, payment integrations, platform modernization, and production reliability."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={personalProfile.website} />
        <link rel="canonical" href={personalProfile.website} />
        <meta property="og:image" content={absoluteUrl(personalProfile.aboutImage.src)} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <main className="page-shell">
        <Main yearsOfExperience={yearsOfExperience} />
        <About yearsOfExperience={yearsOfExperience} />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

// Computed on the server rather than in the browser so the server HTML and
// the hydrated page always agree. Revalidating daily rolls the figure over
// on the anniversary without needing a redeploy.
export const getStaticProps: GetStaticProps<HomeProps> = async () => ({
  props: { yearsOfExperience: getYearsOfExperience() },
  revalidate: 60 * 60 * 24,
});
