import { motion } from "framer-motion";
import { Facebook, Github, Instagram, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  // Current year
  const currentYear = new Date().getFullYear();
  return (
    <footer className="relative bg-[#1E2527] text-white py-20 overflow-hidden">
      {/* Decorative shapes */}
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

      {/* Curved shapes on sides */}
      <div className="absolute left-0 top-1/4 w-[200px] h-[400px] border-[1px] border-gray-500 rounded-full opacity-30 -translate-x-1/2 bg-black">
        <div className="absolute inset-0 border-[1px] border-white opacity-5 rounded-full scale-95" />
      </div>
      <div className="absolute right-0 bottom-0 w-[550px] h-[700px] rounded-full opacity-30 translate-x-1/2 translate-y-1/2 bg-black z-10">
        <div className="absolute inset-0 border-[1px] border-white opacity-5 rounded-full scale-95" />
      </div>
      <div className="absolute right-0 bottom-0 w-[295px] h-[500px] border-[1px] border-gray-500 rounded-full opacity-30 translate-x-1/2 translate-y-1/2 z-20" />

      {/* Main content */}
      <div className="container mx-auto px-4">
        {/* CTA Section */}
        <div className="flex flex-col items-center justify-center mb-20 relative">
          {/* Small blue shape above HELLO */}
          <motion.div
            className="absolute -top-6 w-8 h-4 bg-[#4A7A9B] rounded-t-full opacity-80"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
          />
          <div className="flex items-center justify-between w-full max-w-3xl">
            <div className="flex flex-col items-start justify-center">
              <motion.p
                className="text-gray-400 text-sm font-black tracking-wider mb-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                HELLO 👋🏼
              </motion.p>
              <motion.h2
                className="text-5xl font-black font-poppins"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Ready to get started? Get in touch with us
              </motion.h2>
            </div>
            <motion.button
              className="px-12 py-2 border border-gray-600 rounded-md hover:bg-white hover:text-[#1A1D24] transition-colors ml-8 font-semibold text-[12px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              CONTACT
            </motion.button>
          </div>
        </div>

        {/* Border line */}
        <div className="border-b border-[1px] border-gray-900 my-10 -mt-10 w-[75%] mx-auto" />

        {/* Footer content with new layout */}
        <div className="flex justify-between mx-10">
          {/* Logo and social section */}
          <div className="w-1/4">
            <motion.h3
              className="text-2xl font-bold mb-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              PayeeCo.
            </motion.h3>
            <div className="flex space-x-4">
              {/* EMAIL */}
              <motion.a
                href="#"
                className="bg-slate-200 rounded-full p-4 hover:bg-gray-700 transition-colors group"
                whileHover={{ scale: 1.2 }}
              >
                <Mail
                  size={20}
                  className="text-black group-hover:text-white transition-colors"
                />
              </motion.a>

              {/* LINKEIN */}
              <motion.a
                href="#"
                className="bg-slate-200 rounded-full p-4 hover:bg-gray-700 transition-colors group"
                whileHover={{ scale: 1.2 }}
              >
                <Linkedin
                  size={20}
                  className="text-black group-hover:text-white transition-colors"
                />
              </motion.a>

              {/* FACEBOOK */}
              <motion.a
                href="#"
                className="bg-slate-200 rounded-full p-4 hover:bg-gray-700 transition-colors group"
                whileHover={{ scale: 1.2 }}
              >
                <Facebook
                  size={20}
                  className="text-black group-hover:text-white transition-colors"
                />
              </motion.a>

              {/* GITHUB */}
              <motion.a
                href="#"
                className="bg-slate-200 rounded-full p-4 hover:bg-gray-700 transition-colors group"
                whileHover={{ scale: 1.2 }}
              >
                <Github
                  size={20}
                  className="text-black group-hover:text-white transition-colors"
                />
              </motion.a>

              {/* INSTAGRAM */}
              <motion.a
                href="#"
                className="bg-slate-200 rounded-full p-4 hover:bg-gray-700 transition-colors group"
                whileHover={{ scale: 1.2 }}
              >
                <Instagram
                  size={20}
                  className="text-black group-hover:text-white transition-colors"
                />
              </motion.a>
            </div>
          </div>

          {/* Links section with reduced gap */}
          <div className="flex space-x-24">
            {/* About Us */}
            <div>
              <motion.h4
                className="text-[14px] font-bold mb-6 tracking-wide"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                ABOUT US
              </motion.h4>
              <motion.ul className="space-y-2 text-gray-400 text-[14px]">
                <motion.li whileHover={{ x: 5 }}>
                  <a
                    href="#"
                    className="hover:text-white tracking-wide link-underline"
                  >
                    Company
                  </a>
                </motion.li>
                <motion.li whileHover={{ x: 5 }}>
                  <a
                    href="#"
                    className="hover:text-white tracking-wide link-underline"
                  >
                    Our team
                  </a>
                </motion.li>
                <motion.li whileHover={{ x: 5 }}>
                  <a
                    href="#"
                    className="hover:text-white tracking-wide link-underline"
                  >
                    Life at Payee Co.
                  </a>
                </motion.li>
              </motion.ul>
            </div>

            {/* Products */}
            <div>
              <motion.h4
                className="text-[14px] font-bold mb-6 tracking-wide"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                PRODUCTS
              </motion.h4>
              <motion.ul className="space-y-2 text-gray-400 text-[14px]">
                <motion.li whileHover={{ x: 5 }}>
                  <a
                    href="#"
                    className="hover:text-white tracking-wide link-underline"
                  >
                    Techtube
                  </a>
                </motion.li>
                <motion.li whileHover={{ x: 5 }}>
                  <a
                    href="#"
                    className="hover:text-white tracking-wide link-underline"
                  >
                    Pay Easy
                  </a>
                </motion.li>
                <motion.li whileHover={{ x: 5 }}>
                  <a
                    href="#"
                    className="hover:text-white tracking-wide link-underline"
                  >
                    {" "}
                    Pay & Slay
                  </a>
                </motion.li>
              </motion.ul>
            </div>

            {/* Support */}
            <div>
              <motion.h4
                className="text-[14px] font-bold mb-6 tracking-wide"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                SUPPORT
              </motion.h4>
              <motion.ul className="space-y-2 text-gray-400 text-[14px]">
                <motion.li whileHover={{ x: 5 }}>
                  <a
                    href="#"
                    className="hover:text-white tracking-wide link-underline"
                  >
                    Raise a support ticket
                  </a>
                </motion.li>
                <motion.li whileHover={{ x: 5 }}>
                  <a
                    href="#"
                    className="hover:text-white tracking-wide link-underline"
                  >
                    Privacy & Terms
                  </a>
                </motion.li>
                <motion.li whileHover={{ x: 5 }}>
                  <a
                    href="#"
                    className="hover:text-white tracking-wide link-underline"
                  >
                    Site Map
                  </a>
                </motion.li>
              </motion.ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <motion.div
          className="mt-16 mx-10 pt-8 flex justify-center text-sm text-gray-500 font-extrabold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <p>PAYEE CO PTY LTD © {currentYear}</p>
          <p className="mx-1">•</p>
          <p className="mr-28">ALL RIGHTS RESERVED</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
