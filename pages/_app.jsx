import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";
import "../styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

function MyApp({ Component, pageProps }) {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      {/* Global Head */}
      <Head>
        <title>Amritvir Randhawa | Software Developer</title>
        <meta name="title" content="Amritvir Randhawa | Software Developer" />
        <meta
          name="description"
          content="Amritvir is a full stack developer who crafts beautiful web and mobile apps."
        />
        <meta
          name="keywords"
          content="Amritvir is a full stack developer who crafts beautiful web and mobile apps."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
