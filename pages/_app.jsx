import Head from "next/head";
import "../styles/globals.css";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Geist, Geist_Mono } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import { CubeTransition } from "@/components/CubeTransition";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

function MyApp({ Component, pageProps }) {
  const [showAnimation, setShowAnimation] = useState(true);

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
      <AnimatePresence>
        {showAnimation ? (
          <CubeTransition onComplete={() => setShowAnimation(false)} />
        ) : (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* <Home /> */}
            <Component {...pageProps} />
            <ToastContainer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default MyApp;
