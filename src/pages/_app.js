import Head from "next/head";
import { Poppins } from "next/font/google";

import "@/styles/globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
  variable: "--font-poppins",
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Weblio - Izrada web stranica</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={`${poppins.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
