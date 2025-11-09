import React from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

const footerLink = [
  {
    label: "Contact us",
    redirectLink: "/contact-us",
  },
  {
    label: "Privacy policies",
    redirectLink: "/privacy-policy",
  },
  {
    label: "Terms & Conditions",
    redirectLink: "/terms-and-conditions",
  },
];

const Footer = () => {
  return (
    <footer className="h-auto w-full relative ">
      <div className="container flex flex-col">
        <div className=" xl:ml-80 2xl:ml-[400px] flex flex-col gap-y-4 xl:flex-row justify-between mb-10    ">
          <p className=" font-sf-pro text-white font-semibold ">
            All Copywrite Reserved By
          </p>
          <ul className="flex flex-row justify-between sm:justify-normal sm:gap-x-6 lg:gap-x-12 items-center ">
            {footerLink.map((footer, idx) => {
              return (
                <Link
                  to={footer.redirectLink}
                  key={idx}
                  className=" hover:text-light-ocean-blue cursor-pointer font-semibold ease-in-out duration-500  text-sm sm:text-base  text-white"
                >
                  {" "}
                  {footer.label}{" "}
                </Link>
              );
            })}
          </ul>
        </div>
        <img
          src={logo}
          className="w-full h-full max-h-[271px]"
          alt="not found"
        />
      </div>
    </footer>
  );
};

export default Footer;
