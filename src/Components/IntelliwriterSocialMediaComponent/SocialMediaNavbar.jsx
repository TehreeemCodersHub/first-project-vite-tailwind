import React from "react";
import intelliWriterLogo from "../../assets/intelliWriterImgs/Logo.webp";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { socialMediaNavbar } from "../../constants";
import { Underline } from "lucide-react";

export const SocialMediaNavbar = () => {
  const [mobileDrawerOpen, setmobileDrawerOpen] = useState(false);
  function handlenavBar() {
    setmobileDrawerOpen(!mobileDrawerOpen);
  }
  return (
    <nav className=" z-50 bg-transparent py-2 sticky top-0  border-b border-slate-700">
      <div className=" container mx-auto text-base  max-w-7xl relative ">
        <div className=" flex items-center md:px-2 lg:px-0 px-4 justify-between">
          <div className=" menu__wrapper flex space-x-8  items-center">
            <div className=" image__wrapper w-32">
              <img
                src={intelliWriterLogo}
                alt="website logo"
                className=" h-20 shrink-0  object-contain "
              />
            </div>
            <div className="menu__wrapper">
              <ul className=" hidden lg:flex space-x-12 pt-2">
                {socialMediaNavbar.map((item, index) => (
                  <li
                    key={index}
                    className=" font-normal  text-lg   hover:underline decoration-purple-500 decoration-2 underline-offset-8"
                  >
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="hidden lg:flex button__wrapper  space-x-3">
            <a
              href=""
              className=" bg-violet-900 font-medium py-3 px-8 rounded-3xl"
            >
              Register
            </a>
            <a
              href=""
              className=" bg-transparent border-2  font-medium py-3  px-8 rounded-3xl"
            >
              Login
            </a>
          </div>

          {/* Responsivness navbar started here */}
          <div className=" lg:hidden md:flex flex-col justify-end">
            <button className="" onClick={handlenavBar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
          {/* Responsiv navbar ended here */}
          {/* Responsive menu started here */}

          {mobileDrawerOpen && (
            <div className=" flex flex-col bg-slate-50 mt-4 z-20 w-full justify-center items-center lg:hidden fixed  right-0 top-[67px]  ">
              {socialMediaNavbar.map((item, index) => (
                <ul className="">
                  <li
                    key={index}
                    className="  mt-4 font-normal  text-lg   hover:underline decoration-purple-500 decoration-2 underline-offset-8 text-black pb-5 "
                  >
                    <a href={item.href}>{item.label}</a>
                  </li>
                </ul>
              ))}
            </div>
          )}

          {/* Responsive menu ended here */}
        </div>
      </div>
    </nav>
  );
};
