import React from "react";
import intelliWriterLogo from "../../assets/intelliWriterImgs/Logo.webp";
import insta from "../../assets/intelliWriterImgs/insta.png";
import facebook from "../../assets/intelliWriterImgs/facebook.png";
import linkedin from "../../assets/intelliWriterImgs/linkedin.png";
import twitter from "../../assets/intelliWriterImgs/twitter.png";

export const SocialMediaFooter = () => {
  return (
    <footer className="bg-[#0F062C] text-white p-10">
      <div className="max-w-7xl mx-auto flex flex-col border-t-2 mt-10 border-[#FFFFFF14]  pt-12 md:flex-row justify-between ">
        <div className="mb-6 md:mb-0 w-1/3">
          <div className="flex items-center mb-4">
            <img
              src={intelliWriterLogo}
              alt="website logo"
              className=" h-20  w-44 shrink-0  object-contain "
            />
          </div>
          <p>
            At IntelliWriter, we are passionate about the power of technology to
            revolutionize the way we create content.
          </p>
          <div className="flex mt-4">
            <a href="#" className="mr-4">
              <img
                src={insta}
                alt="website logo"
                className=" h-10 w-10 shrink-0  object-contain "
              />
            </a>
            <a href="#" className="mr-4">
              <img
                src={facebook}
                alt="website logo"
                className=" h-10 w-10 shrink-0  object-contain "
              />
            </a>
            <a href="#" className="mr-4">
              <img
                src={linkedin}
                alt="website logo"
                className=" h-10 w-10 shrink-0  object-contain "
              />
            </a>
            <a href="#">
              <img
                src={twitter}
                alt="website logo"
                className=" h-10 w-10 shrink-0  object-contain "
              />
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm pe-40">
          <div>
            <h6 className="font-semibold  text-lg mb-3">General</h6>
            <ul className=" flex flex-col gap-3">
              <li>
                <a href="#" className="hover:text-zinc-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-zinc-300">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-zinc-300">
                  APIs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-zinc-300">
                  Blogs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-zinc-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="font-semibold text-lg mb-3">Features</h6>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="#" className="hover:text-zinc-300">
                  Social Content
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-zinc-300">
                  Blog Content
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-zinc-300">
                  Website Content
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-zinc-300">
                  Marketing Content
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-zinc-300">
                  Image Generator
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-zinc-300">
                  Voice Generator
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-zinc-300">
                  Text Generator
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-zinc-300">
                  Chatting
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="font-semibold text-lg mb-3">Important Links</h6>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="#" className="hover:text-zinc-300">
                  Terms and conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-zinc-300">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-zinc-300">
                  Privacy policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center border-t-2  border-[#FFFFFF14]  pt-10 text-zinc-400 mt-10 text-sm">
        <span className=" text-pink-500">©IntelliWriter.io </span>
        All rights reserved.
      </div>
    </footer>
  );
};
