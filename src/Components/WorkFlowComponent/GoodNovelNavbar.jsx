import React from "react";
import GoodNovelLogo from "../../assets/GoodNovelPicture/logoGoodNovel.png";
import { goodNovelNavItems } from "../../constants";

const GoodNovelNavbar = () => {
  return (
    <nav className=" z-50 bg-navbarColor py-2 sticky top-0 ">
      <div className=" container  mx-auto relative text-base px-3  text-textColor ">
        <div className=" flex items-center justify-between ">
          <div className="menu__logo wrapper flex items-center">
            <div className="logo__wrapper shrink-0 w-40 h-12">
              <img src={GoodNovelLogo} alt="Good Novel logo" />
            </div>
            <ul className="hidden lg:flex space-x-6 ms-6 font-medium active:text-primaryColor  ">
              {goodNovelNavItems.map((item, index) => (
                <li className="hover:text-primaryColor" key={index}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="right__side-menu ">
            <div className="input__wrapper flex space-x-4 items-center">
              <input
                type="search"
                placeholder="  Search"
                className=" rounded-lg bg-[#F0F0F0] h-8 outline-0 border-0 text-sm hover:cursor-pointer text-gray-400"
              />

              <ul className=" flex space-x-4 font-medium">
                <li className="hover:text-primaryColor">Library</li>
                <li className="hover:text-primaryColor"> English</li>
              </ul>
              <a
                href="#"
                className=" bg-primaryColor text-sm text-white rounded-lg  py-2 px-5 font-medium    "
              >
                {" "}
                Login
              </a>
              {/* <div className=" right__side-menu flex space-x-3 ">
            
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default GoodNovelNavbar;
