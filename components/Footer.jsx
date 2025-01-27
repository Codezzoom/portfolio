import { motion } from "framer-motion";
import { useRouter } from "next/router";
import socialMedia from "@/data/SocialMedia";
import { Facebook, Github, Instagram, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const router = useRouter();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-t from-[#142035] to-primary text-white py-10 md:py-20 overflow-hidden">
      {/* Arc shape - responsive height */}
      <motion.div className="absolute top-0 w-full">
        <svg
          viewBox="0 0 1440 150"
          className="w-full h-auto"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,150 C480,0 960,0 1440,150 L1440,0 L0,0 Z"
            fill="#19263e"
          />
        </svg>
      </motion.div>

      {/* Decorative shapes - hidden on mobile */}
      <div className="hidden md:block">
        <motion.div
          className="absolute top-0 left-0 w-32 h-16 bg-[#68A69B] rounded-b-full opacity-80"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8 }}
        />
        <motion.div
          className="absolute top-0 right-0 w-32 h-16 bg-[#4A7A9B] rounded-b-full opacity-80"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
      </div>

      {/* Curved shapes - hidden on mobile */}
      <div className="hidden md:block">
        <div className="absolute left-0 top-1/4 w-[200px] h-[400px] border-[1px] border-gray-500 rounded-full opacity-30 -translate-x-1/2 bg-black">
          <div className="absolute inset-0 border-[1px] border-white opacity-5 rounded-full scale-95" />
        </div>
        <div className="absolute right-0 bottom-0 w-[550px] h-[700px] rounded-full opacity-30 translate-x-1/2 translate-y-1/2 bg-black z-10">
          <div className="absolute inset-0 border-[1px] border-white opacity-5 rounded-full scale-95" />
        </div>
        <div className="absolute right-0 bottom-0 w-[295px] h-[500px] border-[1px] border-gray-500 rounded-full opacity-30 translate-x-1/2 translate-y-1/2 z-20" />
      </div>

      <div className="container mx-auto px-4">
        {/* CTA Section */}
        <div className="flex flex-col items-center justify-center mb-10 md:mb-20 relative">
          <motion.div
            className="absolute -top-6 w-8 h-4 bg-[#4A7A9B] rounded-t-full opacity-80 hidden md:block"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
          />

          <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-3xl gap-6 md:gap-0">
            <div className="flex flex-col items-center md:items-start justify-center text-center md:text-left">
              <motion.p className="text-gray-400 text-sm font-black tracking-wider mb-1">
                HELLO 👋🏼
              </motion.p>
              <motion.h2 className="text-3xl md:text-5xl font-black font-poppins">
                Ready to get started? Get in touch with me
              </motion.h2>
            </div>
            <motion.button
              className="px-8 md:px-12 py-2 border border-gray-500 rounded-md hover:bg-white hover:text-[#1A1D24] transition-colors md:ml-8 font-semibold text-[12px]"
              whileHover={{ scale: 1.05 }}
              onClick={() => router.push("#contact")}
            >
              CONTACT
            </motion.button>
          </div>
        </div>

        <div className="border-b border-[1px] border-gray-900 my-10 -mt-10 w-full md:w-[75%] mx-auto" />

        {/* Footer content */}
        <div className="flex flex-col md:flex-row justify-between mx-4 md:mx-10 gap-10 md:gap-0">
          {/* Logo and social section */}
          <div className="w-full md:w-1/4 flex flex-col items-center md:items-start">
            <motion.img
              src="/Navbar/logo.png"
              alt="logo"
              className="w-24 md:w-28 h-24 md:h-28 mb-2"
            />

            <div className="flex flex-wrap xl:flex-nowrap justify-center gap-4">
              {[
                { icon: Mail, link: socialMedia[0].link },
                { icon: Linkedin, link: socialMedia[1].link },
                { icon: Facebook, link: socialMedia[2].link },
                { icon: Github, link: socialMedia[3].link },
                { icon: Instagram, link: socialMedia[4].link },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  className="bg-slate-200 rounded-full p-3 md:p-4 hover:bg-gray-700 transition-colors group"
                  whileHover={{ scale: 1.2 }}
                >
                  <social.icon
                    size={18}
                    className="text-black group-hover:text-white transition-colors"
                  />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links section */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-24 text-center md:text-left">
            {/* About Us */}
            <div>
              <motion.h4 className="text-[14px] font-bold mb-4 md:mb-6 tracking-wide">
                ABOUT US
              </motion.h4>
              <motion.ul className="space-y-2 text-gray-400 text-[14px]">
                {["Home", "Skills", "Education"].map((item) => (
                  <motion.li key={item} whileHover={{ x: 5 }}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="hover:text-white tracking-wide link-underline"
                    >
                      {item}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            </div>

            {/* Expertise */}
            <div>
              <motion.h4 className="text-[14px] font-bold mb-4 md:mb-6 tracking-wide">
                EXPERTISE
              </motion.h4>
              <motion.ul className="space-y-2 text-gray-400 text-[14px]">
                {[
                  ["Projects", "#projects"],
                  ["Experience", "#experience"],
                  ["Contact Us", "#contact"],
                ].map(([text, link]) => (
                  <motion.li key={text} whileHover={{ x: 5 }}>
                    <a
                      href={link}
                      className="hover:text-white tracking-wide link-underline"
                    >
                      {text}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            </div>

            {/* Support */}
            <div>
              <motion.h4 className="text-[14px] font-bold mb-4 md:mb-6 tracking-wide">
                SUPPORT
              </motion.h4>
              <motion.ul className="space-y-2 text-gray-400 text-[14px]">
                {[
                  ["Raise a support ticket", "#"],
                  ["Privacy & Terms", "#"],
                  ["Site Map", "#contact"],
                ].map(([text, link]) => (
                  <motion.li key={text} whileHover={{ x: 5 }}>
                    <a
                      href={link}
                      className="hover:text-white tracking-wide link-underline"
                    >
                      {text}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <motion.div className="mt-10 md:mt-16 mx-4 md:mx-10 pt-8 flex flex-col md:flex-row justify-center items-center text-xs md:text-sm text-gray-500 font-extrabold gap-2 md:gap-0">
          <p>CRAFTED WITH</p>
          <span className="mx-2">❤️</span>
          <p>BY AR Developer © {currentYear}</p>
          <p className="hidden md:block mx-1">•</p>
          <p>ALL RIGHTS RESERVED</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
