import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Main from "../components/Main";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <>
      <Head>
        <title>Zay Lin Htet | Software Developer</title>
        <meta
          name="description"
          content="Software Developer with experience building reliable, scalable, and user-focused web applications."
        />
        <link rel="icon" href="/fav.png" />
      </Head>

      <main>
        <Main />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
