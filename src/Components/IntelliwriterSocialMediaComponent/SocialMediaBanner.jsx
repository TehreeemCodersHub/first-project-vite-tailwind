import React from "react";
import intelliWriterLogo from "../../assets/intelliWriterImgs/socialmediaBg.jpeg";

export const SocialMediaBanner = () => {
  return (
    <section className=" bg-gradient-to-b from-[#471c7c]/40 [#030616]/20 mt-12 relative banner__section">
      <div className="container mx-auto max-w-7xl pt-24 pb-5">
        <div className="flex lg:flex-row flex-col lg:justify-between justify-center items-center">
          <div className="lg:w-1/2 w-full lg:px-2 px-3 ">
            <h1 className="font-medium text-5xl">
              IntelliWriter Free Platform For AI Social Media Generator
            </h1>
            <p className="pt-5 pb-11  text-white opacity-80">
              Viral magic! AI crafts captions, titles & hashtags that skyrocket
              your reach. Ditch writer's block. Unleash AI to generate
              buzzworthy social content in seconds.
            </p>
            <a
              href=""
              className="bg-violet-900 font-medium py-3 px-8 rounded-3xl"
            >
              Try Intelliwriter Social Media Generator For Free!
            </a>
          </div>
          <div className="lg:w-1/2 lg:px-0 px-4 w-full flex lg:mt-0 mt-28  lg:justify-end justify-center">
            <img
              src={intelliWriterLogo}
              alt="website logo"
              className=" lg:w-96 w-100  object-contain rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
