import React, { useEffect, useState } from "react";
import Image from "next/image";
import navLinks from "../data/NavLinks";
import { FaBars } from "react-icons/fa";
import { motion } from "framer-motion";

const NavItem = ({
  href,
  title,
  custom,
  variants,
  activeItem,
  setActiveItem,
}) => {
  const handleClick = (e) => {
    e.preventDefault();
    setActiveItem(href);

    if (href === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.querySelector(href);
      if (element) {
        const offset = element.offsetTop - 100;
        window.scrollTo({
          top: offset,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <motion.li
      custom={custom}
      initial="hidden"
      animate="visible"
      variants={variants}
      className="px-5 -py-2 pt-1 md:pt-4 md:px-2 md:text-center flex flex-col items-center gap-0"
    >
      <a href={href} onClick={handleClick}>
        <p
          className={`transition-all duration-500 ease-in-out transform md:hover:-translate-y-2 text-white font-extrabold ${
            activeItem === href ? "text-white" : "md:hover:text-white"
          }`}
        >
          {title}
        </p>
      </a>
      <motion.div
        animate={{
          opacity: activeItem === href ? 1 : 0,
          y: activeItem === href ? 0 : 10,
        }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src="/Navbar/nav_active.svg"
          alt="nav-active"
          className="hidden md:block"
          width={70}
          height={70}
          priority
        />
      </motion.div>
    </motion.li>
  );
};

const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [isScreenScrolled, setisScreenScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("/");

  const addShadowtoNav = () => {
    window.scrollY >= 100
      ? setisScreenScrolled(true)
      : setisScreenScrolled(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", addShadowtoNav);
    return () => {
      window.removeEventListener("scroll", addShadowtoNav);
    };
  }, []);

  const navVariants = {
    hidden: {
      opacity: 0,
      x: 50,
    },
    visible: (custom) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: custom * 0.2,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <motion.div
      className={`mx-auto bg-gradient-to-r from-[#1c2d4a] to-primary w-full fixed z-30 ${
        isScreenScrolled ? "shadow-xl" : ""
      }`}
    >
      <nav className="block md:flex justify-between items-center h-full px-8">
        <div className="flex justify-between items-center h-full">
          <motion.a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              setActiveItem("/");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center h-full"
          >
            <motion.div
              className="relative"
              style={{
                width: "100px",
                height: "100px",
              }}
              animate={{
                scale: isScreenScrolled ? 0.7 : 1,
              }}
              transition={{
                duration: 0.3,
                ease: "backOut",
              }}
            >
              <Image
                src="/Navbar/logo.png"
                alt="logo"
                className="cursor-pointer object-contain transition-all"
                fill
                sizes="80px"
                priority
              />
            </motion.div>
          </motion.a>
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-white focus:outline-none"
              onClick={() => setShowMobileNav(!showMobileNav)}
            >
              <FaBars size={18} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={showMobileNav ? "block pt-3" : "hidden md:block"}
          initial={false}
          animate={{
            height: showMobileNav ? "auto" : 0,
            opacity: showMobileNav ? 1 : 0,
          }}
          transition={{
            duration: 0.8,
            ease: "backOut",
          }}
          onClick={() => setShowMobileNav(false)}
        >
          <ul className="md:flex md:flex-row border-pink border-2 md:border-none">
            {navLinks.map((item, index) => (
              <NavItem
                key={item.href}
                href={item.href}
                title={item.title}
                custom={index}
                variants={navVariants}
                activeItem={activeItem}
                setActiveItem={setActiveItem}
              />
            ))}
          </ul>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <ul className="md:flex md:flex-row">
            {navLinks.map((item, index) => (
              <NavItem
                key={item.href}
                href={item.href}
                title={item.title}
                custom={index}
                variants={navVariants}
                activeItem={activeItem}
                setActiveItem={setActiveItem}
              />
            ))}
          </ul>
        </div>
      </nav>
    </motion.div>
  );
};

export default Navbar;
