import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
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
  const vibrationControls = useAnimation();

  const handleCookiesAlert = (accepted) => {
    setShowAlert(false);
    const cookiePreferencesObj = {
      acceptedCookies: accepted,
      askAgainDate: accepted
        ? null // user accepted cookies, no need to ask again
        : new Date().getTime() + 1000 * 60 * 60 * 24 * 5, // current time + 5 days
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

  // Trigger vibration every 10 seconds
  useEffect(() => {
    if (showAlert) {
      const interval = setInterval(() => {
        vibrationControls.start({
          x: [-16, 16, -16, 16, 0],
          transition: { duration: 0.5 },
        });
      }, 10000);

      return () => clearInterval(interval);
    }
  }, [showAlert, vibrationControls]);

  return (
    <motion.div
      key="cookieAlertComponent"
      className="fixed bottom-8 right-2 transform -translate-x-1/2 z-40 max-w-5xl w-full px-6"
      initial={{ x: "100%" }}
      animate={{
        x: "0",
        y: showAlert ? 0 : "150%",
        transitionEnd: { display: showAlert ? "block" : "none" },
      }}
      transition={{ type: "spring", duration: 1 }}
    >
      <motion.div
        className="bg-violet px-4 py-2 rounded-full shadow-lg flex items-center justify-between text-black"
        animate={vibrationControls}
      >
        <div className="flex items-center">
          <Image
            src={"/cookies.png"}
            width={60}
            height={60}
            alt="Cookie Icon"
            className="mr-4"
          />
          <div className="max-w-xl">
            <h2 className={`text-xl font-black ${titan.className}`}>Cookie?</h2>
            <p className="text-[13px]">
              We use cookies to optimize your browsing experience for the
              purpose of personalizing and measuring the effectiveness of ads.
              By clicking "Allow All", you consent to our use of cookies.
              <Link
                href={"https://www.cookiesandyou.com/"}
                className="underline font-semibold text-blue ml-1"
                target="_blank"
                rel="noreferrer noopener"
              >
                Learn More
              </Link>
            </p>
          </div>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => handleCookiesAlert(true)}
            className="px-10 py-3 bg-blue text-violet rounded-full hover:bg-[#373c58] transition-colors text-sm font-bold"
          >
            Allow all
          </button>
          <button
            onClick={() => handleCookiesAlert(false)}
            className="px-10 py-3 bg-transparent border-2 border-blue text-blue hover:text-violet rounded-full hover:bg-blue transition-colors text-sm font-bold"
          >
            Decline
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Cookies;
