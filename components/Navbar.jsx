import React, { useEffect, useState } from "react";
import Link from "next/link";
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
    setActiveItem(href); // Set active state immediately on click

    if (href === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.querySelector(href);
      if (element) {
        const offset = element.offsetTop - 100; // Adjust offset as needed
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
      className="px-5 py-2 pt-1 md:pt-4 md:px-4 md:text-center"
    >
      <a href={href} onClick={handleClick}>
        <p
          className={`transition duration-500 ease-in-out transform md:hover:-translate-y-2 text-white font-bold ${
            activeItem === href ? "text-violet" : "md:hover:text-violet"
          }`}
        >
          {title}
        </p>
      </a>
      <Image
        src="/Navbar/nav_active.svg"
        alt="nav-active"
        className={`hidden md:block transition-opacity duration-500 mx-auto ${
          activeItem === href ? "opacity-100" : "opacity-0"
        }`}
        width={60}
        height={60}
        priority
      />
    </motion.li>
  );
};

const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [isScreenScrolled, setIsScreenScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("/");

  useEffect(() => {
    const handleScroll = () => {
      setIsScreenScrolled(window.scrollY >= 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
    <div
      className={`mx-auto bg-blue w-full fixed z-30 ${
        isScreenScrolled && "shadow-2xl"
      }`}
    >
      <nav className="block md:flex justify-between items-center p-2 px-8">
        <div className="flex justify-between items-center">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              setActiveItem("/");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <Image
              src="/Navbar/logo.png"
              alt="logo"
              className={`pl-30 my-2 transition-all transform hover:scale-75 cursor-pointer ${
                isScreenScrolled ? "w-12 md:w-14" : "w-16 md:w-20"
              }`}
              width={100}
              height={100}
              priority
            />
          </a>
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
        {showMobileNav && (
          <div
            className={
              showMobileNav ? "block pt-3 transition-all" : "hidden md:block"
            }
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
          </div>
        )}

        {/* Desktop Navigation */}
        <div className={`hidden md:block`}>
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
    </div>
  );
};

export default Navbar;
