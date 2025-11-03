import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-scroll";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import logo from "../assets/img/logo-header.png";

const navLink = [
  { label: "Home", redirectLink: "hero" },
  { label: "About Us", redirectLink: "about-us" },
  { label: "Products", redirectLink: "products" },
  { label: "Why Choose Us", redirectLink: "why-choose-us" },
  { label: "Contact Us", redirectLink: "contact-us" },
];

const Navbar = () => {
  const [active, setActive] = useState(navLink[0].label);
  const sidebarRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = event => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        !event.target.closest('[aria-label="Toggle menu"]')
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    gsap.registerPlugin(SplitText);

    const splitTextAnimation = () => {
      gsap.set(".split", { opacity: 1 });

      const split = new SplitText(".split", {
        type: "words",
        wordsClass: "word++",
        wordDelimiter: String.fromCharCode(8205),
      });

      gsap.from(split.words, {
        y: -100,
        opacity: 0,
        rotation: "random(-20, 20)",
        stagger: 0.1,
        duration: 1.5,
        ease: "back",
      });
    };

    document.fonts.ready.then(() => {
      splitTextAnimation();
    });
  }, []);

  return (
    <nav className="h-auto w-full py-4 3xl:py-6 xl:backdrop-blur-sm   fixed top-0 left-0 z-50">
      <div className="h-auto w-full container  flex flex-row justify-between items-center">
        <img
          src={logo}
          alt="logo"
          className="max-w-[264px] max-h-[50px] h-full w-full object-cover"
        />
        {/* navbar desktop */}
        <ul className=" hidden xl:flex flex-row gap-x-12 items-center">
          {navLink.map((nav, idx) => (
            <li
              key={idx}
              className={`split hover:text-light-ocean-blue font-semibold cursor-pointer ease-in-out duration-500 text-base  ${
                active === nav.label ? "text-light-ocean-blue" : "text-white"
              }`}
            >
              <Link
                to={nav.redirectLink}
                duration={500}
                onClick={() => setActive(nav.label)}
                className="split"
              >
                {nav.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative xl:hidden w-8 h-8 flex flex-col justify-center items-center gap-1.5 cursor-pointer"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-7 h-0.5 bg-white rounded-full transform transition-all duration-500 ease-in-out ${
              isOpen ? "rotate-45 absolute" : ""
            }`}
          />
          <span
            className={`block w-7 h-0.5 bg-white rounded-full transform transition-all duration-500 ease-in-out ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-7 h-0.5 bg-white rounded-full transform transition-all duration-500 ease-in-out ${
              isOpen ? "-rotate-45 absolute" : ""
            }`}
          />
        </button>

        {/* navbar mobile */}
        <div
          ref={sidebarRef}
          className={`fixed flex flex-col bg-side_nav backdrop-blur-md    gap-y-8 py-5 px-5 top-0 left-0 h-full w-[280px] bg-primary-color   shadow-lg transform transition-transform duration-500 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <Link to="/" className="cursor-pointer">
            <img
              src={logo}
              alt="logo"
              className="max-w-[264px] max-h-[50px] h-full w-full object-cover"
            />
          </Link>
          <ul className=" flex  xl:hidden flex-col gap-y-4 ">
            {navLink.map((nav, idx) => (
              <li
                key={idx}
                className={`  cursor-pointer font-semibold ease-in-out duration-500 text-base  ${
                  active === nav.label ? "text-light-ocean-blue" : "text-white"
                } `}
              >
                <Link
                  to={nav.redirectLink}
                  duration={500}
                  onClick={() => {
                    setActive(nav.redirectLink);
                    setIsOpen(false);
                  }}
                >
                  {nav.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
