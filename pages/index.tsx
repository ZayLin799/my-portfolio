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
        <title>Zay Lin Htet | Senior Full-Stack Developer</title>
        <meta
          name="description"
          content="Portfolio for Zay Lin Htet, a senior full-stack developer with 5+ years of experience delivering fintech, automotive, healthcare, government, and telecom applications across Myanmar, Singapore, and Thailand."
        />
        <meta
          name="keywords"
          content="Zay Lin Htet, senior full-stack developer, Node.js developer, NestJS developer, Next.js developer, Laravel developer, software engineer portfolio"
        />
        <meta property="og:title" content="Zay Lin Htet | Senior Full-Stack Developer" />
        <meta
          property="og:description"
          content="Portfolio and case studies covering full-cycle delivery, secure APIs, payment integrations, platform modernization, and production reliability."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={personalProfile.website} />
        <link rel="canonical" href={personalProfile.website} />
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
