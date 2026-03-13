import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Main from "../components/Main";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import { personalProfile } from "../data/portfolio";

export default function Home() {
  return (
    <>
      <Head>
        <title>Zay Lin Htet | Full-stack Software Developer</title>
        <meta
          name="description"
          content="Recruiter-focused portfolio for Zay Lin Htet, a full-stack software developer with 5+ years of experience across fintech, govtech, healthtech, and commerce."
        />
        <meta
          name="keywords"
          content="Zay Lin Htet, full-stack developer, Node.js developer, Next.js developer, Laravel developer, software engineer portfolio"
        />
        <meta property="og:title" content="Zay Lin Htet | Full-stack Software Developer" />
        <meta
          property="og:description"
          content="Portfolio and case studies covering full-stack product delivery, platform migration, and production software engineering."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={personalProfile.website} />
        <link rel="canonical" href={personalProfile.website} />
        <link rel="icon" href="/fav.png" />
      </Head>

      <main className="page-shell">
        <Main />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
