import React from "react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className=" sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80 ">
      <div className=" container px-4 mx-auto relative text-sm">
        {/* logo section part */}
        <div className=" flex  justify-between items-center  ">
          <div className=" flex items-center flex-shrink-0 ">
            <img src={logo} className="w-10 h-10 mr-2" alt="website logo" />
            <span className=" text-xl tracking-tight"> VirtualR </span>
          </div>

          {/* menu part for the large screen started */}
          <ul className=" hidden lg:flex ml-14 space-x-12 ">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          {/* menu part for the large screen ended*/}
          {/* Now button started here */}
          <div className=" hidden lg:flex justify-center items-center space-x-12">
            <a href="#" className=" py-2 px-3 border rounded-md">
              {" "}
              Sign In
            </a>
            <a
              href="#"
              className=" bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md  "
            >
              Create an account
            </a>
          </div>
          {/* Now button Ended here */}

          {/* Responsive navbar started */}
          <div className="lg:hidden md:flex flex-col justify-end">
            <button className="" onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
          {/* Responsive navbar ended */}
          {/* Responsive menu started here  */}
          {mobileDrawerOpen && (
            <div className="flex z-20 flex-col bg-neutral-900 w-full p-12 justify-center items-center lg:hidden fixed right-0 top-[67px]">
              <ul>
                {navItems.map((item, index) => (
                  <li className=" py-4" key={index}>
                    <a href={item.href}> {item.label} </a>
                  </li>
                ))}
              </ul>
              <div className=" flex space-x-6">
                <a
                  href="#"
                  className="py-2 px-3 border rounded-md align-baseline"
                >
                  {" "}
                  Sign In
                </a>
                <a
                  href="#"
                  className="py-3 px-3  rounded-md bg-gradient-to-r from-orange-500 to-orange-800"
                >
                  Create an Account
                </a>
              </div>
            </div>
          )}
          {/* Responsive menu Ended here */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// !https://www.youtube.com/watch?v=EwzWg-Joxq0
