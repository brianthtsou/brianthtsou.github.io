import React, { useState } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white text-black fixed top-0 w-full z-10">
      <div className="container mx-auto px-4 py-5 md:flex items-center justify-between gap-6">
        {/* <!--Logo --> */}
        <div className="flex items-center justify-between md:w-auto w-full">
          <a href="#" className="py-5 px-2 text-black flex-1 font-bold text-xl">
            Brian Tsou
          </a>

          {/* <!--Mobile menu icon --> */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} aria-label="Toggle menu">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="hidden md:flex md:flex-row flex-col items-center justify-end md:space-x-1 pb-3 md:pb-0 navigation-menu">
          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-100}
            className="py-2 px-4 block cursor-pointer"
          >
            About
          </Link>
          <Link
            to="experience"
            smooth={true}
            duration={500}
            offset={-100}
            className="py-2 px-4 block cursor-pointer"
          >
            Experience
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            offset={-100}
            className="py-2 px-4 block cursor-pointer"
          >
            Projects
          </Link>
          <Link
            to="contactme"
            smooth={true}
            duration={500}
            offset={-100}
            className="py-2 px-4 block cursor-pointer"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <div className="flex flex-col space-y-2">
              <Link
                to="about"
                smooth={true}
                duration={500}
                offset={-100} // Adjust offset for mobile
                onClick={toggleMenu} // Close menu on click
                className="py-2 px-4 block cursor-pointer"
              >
                About
              </Link>
              <Link
                to="experience"
                smooth={true}
                duration={500}
                offset={-100} // Adjust offset for mobile
                onClick={toggleMenu} // Close menu on click
                className="py-2 px-4 block cursor-pointer"
              >
                Experience
              </Link>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                offset={-100} // Adjust offset for mobile
                onClick={toggleMenu} // Close menu on click
                className="py-2 px-4 block cursor-pointer"
              >
                Projects
              </Link>
              <Link
                to="contactme"
                smooth={true}
                duration={500}
                offset={-100} // Adjust offset for mobile
                onClick={toggleMenu} // Close menu on click
                className="py-2 px-4 block cursor-pointer"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
