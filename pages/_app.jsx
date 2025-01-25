import Head from "next/head";
import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Geist, Geist_Mono } from "next/font/google";

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
      <ToastContainer />
    </div>
  );
}

export default MyApp;
