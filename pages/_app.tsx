import type { AppProps } from 'next/app';
import { Fraunces, Manrope } from 'next/font/google';
import Head from 'next/head';

import Navbar from '../components/Navbar';
import '../styles/globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={`${fraunces.variable} ${manrope.variable}`}>
        <Navbar />
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
