import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

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

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/fav.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/fav.png" type="image/png" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script
          id="portfolio-theme"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: themeScript }}
        />
      </body>
    </Html>
  )
}
