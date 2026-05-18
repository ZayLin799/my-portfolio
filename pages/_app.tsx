import type { AppProps } from 'next/app';
import Head from 'next/head';

import Navbar from '../components/Navbar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const themeScript = `
    (function () {
      try {
        var storedTheme = localStorage.getItem("portfolio-theme");
        var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        var theme = storedTheme === "dark" || storedTheme === "light"
          ? storedTheme
          : prefersDark
            ? "dark"
            : "light";
        document.documentElement.dataset.theme = theme;
      } catch (error) {}
    })();
  `;

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/fav.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/fav.png" type="image/png" />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </Head>
      <div>
        <Navbar />
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
