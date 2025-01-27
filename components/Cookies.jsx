import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Titan_One } from "next/font/google";
import Link from "next/link";

const titan = Titan_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-rampart",
});

const Cookies = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleCookiesAlert = (accepted) => {
    setShowAlert(false);
    const cookiePreferencesObj = {
      acceptedCookies: accepted,
      askAgainDate: accepted ? null : new Date().getTime() + 1000 * 60 * 1,
    };
    localStorage.setItem("cookieObject", JSON.stringify(cookiePreferencesObj));
  };

  useEffect(() => {
    const cookieObjJson = localStorage.getItem("cookieObject");
    if (cookieObjJson) {
      const { acceptedCookies, askAgainDate } = JSON.parse(cookieObjJson);
      if (!acceptedCookies && new Date().getTime() > askAgainDate) {
        setShowAlert(true);
      }
    } else {
      setShowAlert(true);
    }
  }, []);

  return (
    <motion.div
      key="cookieAlertComponent"
      className="fixed bottom-4 md:bottom-8 left-12 right-2 md:right-2 md:left-auto transform md:-translate-x-1/2 z-40 max-w-5xl w-auto md:px-6"
      initial={{ x: "100%" }}
      animate={{
        x: "0",
        y: showAlert ? 0 : "150%",
        transitionEnd: { display: showAlert ? "block" : "none" },
      }}
      transition={{ type: "spring", duration: 1 }}
    >
      <div className="bg-violet px-3 md:px-4 py-4 md:py-2 rounded-2xl md:rounded-full shadow-lg flex flex-col md:flex-row items-center justify-between text-black gap-4 md:gap-0">
        <div className="flex flex-col md:flex-row items-center text-center md:text-left w-full md:w-auto">
          <Image
            src="/Home/cookies.png"
            width={50}
            height={50}
            alt="Cookie Icon"
            className="mb-2 md:mb-0 md:mr-4 w-12 md:w-[60px]"
          />
          <div className="max-w-xl">
            <h2 className={`text-lg md:text-xl font-black ${titan.className}`}>
              Cookie?
            </h2>
            <p className="text-[11px] md:text-[13px] px-4 md:px-0 md:mr-10">
              We use cookies to optimize your browsing experience for the
              purpose of personalizing and measuring the effectiveness of ads.
              By clicking "Allow All", you consent to our use of cookies.
              <Link
                href="https://www.cookiesandyou.com/"
                className="underline font-semibold text-blue ml-1"
                target="_blank"
                rel="noreferrer noopener"
              >
                Learn More
              </Link>
            </p>
          </div>
        </div>

        <div className="flex xs:flex-row gap-2 md:w-auto">
          <button
            onClick={() => handleCookiesAlert(true)}
            className="px-6 md:px-10 py-2 md:py-3 bg-primary text-violet rounded-full hover:bg-transparent hover:text-primary border-2 border-primary hover:border-primary transition-colors text-xs md:text-xs font-bold w-auto xs:w-auto"
          >
            Allow
          </button>
          <button
            onClick={() => handleCookiesAlert(false)}
            className="px-6 md:px-10 py-2 md:py-3 bg-transparent border-2 border-primary text-blue hover:text-violet rounded-full hover:bg-primary transition-colors text-xs md:text-xs font-bold w-auto xs:w-auto"
          >
            Decline
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Cookies;
