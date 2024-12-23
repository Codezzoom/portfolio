import React from "react";
import { DiCssdeck } from "react-icons/di";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-gray-800 h-20 flex items-center sticky top-0 z-10">
      <div className="flex justify-between items-center h-16 w-full px-6 max-w-6xl">
        {/* Logo */}
        <a href="/" className="flex items-center text-white cursor-pointer">
          <DiCssdeck size="3rem" />
          <span className="ml-2 font-bold text-lg">Portfolio</span>
        </a>

        {/* Hamburger Icon for Small Screens */}
        <div className="md:hidden">
          <FaBars
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-2xl cursor-pointer"
          />
        </div>

        {/* Navigation Items */}
        <ul className="hidden md:flex items-center gap-8">
          <li>
            <a
              href="#"
              className="text-gray-300 hover:text-blue-500 transition"
            >
              Link 1
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-300 hover:text-blue-500 transition"
            >
              Link 2
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-300 hover:text-blue-500 transition"
            >
              Link 3
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-300 hover:text-blue-500 transition"
            >
              Link 4
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-300 hover:text-blue-500 transition"
            >
              Link 5
            </a>
          </li>
        </ul>

        {/* GitHub Button */}
        <div className="hidden md:flex items-center">
          <a
            href={""} // Add GitHub link here
            target="_blank"
            rel="noreferrer"
            className="border border-blue-500 px-4 py-2 rounded-full text-blue-500 hover:bg-blue-500 hover:text-white transition"
          >
            Link 6
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-gray-700 z-20 shadow-lg rounded-lg p-6 md:hidden">
          <ul className="flex flex-col gap-4">
            <li>
              <a
                href="#"
                className="text-gray-300 hover:text-blue-500 transition"
                onClick={() => setIsOpen(false)}
              >
                Link 1
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-300 hover:text-blue-500 transition"
                onClick={() => setIsOpen(false)}
              >
                Link 2
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-300 hover:text-blue-500 transition"
                onClick={() => setIsOpen(false)}
              >
                Link 3
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-300 hover:text-blue-500 transition"
                onClick={() => setIsOpen(false)}
              >
                Link 4
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-300 hover:text-blue-500 transition"
                onClick={() => setIsOpen(false)}
              >
                Link 5
              </a>
            </li>
          </ul>
          <a
            href={""} // Add GitHub link here
            target="_blank"
            rel="noreferrer"
            className="block mt-6 px-4 py-2 bg-blue-500 text-white rounded-full text-center"
          >
            Github Profile
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
