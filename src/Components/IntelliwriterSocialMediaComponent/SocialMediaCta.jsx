import React from "react";
import card1 from "../../assets/intelliWriterImgs/land_bg.webp";

export const SocialMediaCta = () => {
  return (
    <section
      className=" bg-[#0F062C] relative bg-no-repeat  bg-cover bg-center flex flex-col justify-center items-center w-full  "
      style={{ backgroundImage: `url(${card1})` }}
    >
      <div className=" container mx-auto max-w-7xl pt-20  pb-16 ">
        <div className=" flex flex-col gap-12 justify-center items-center ">
          <h2 className=" text-3xl text-center md:px-0 px-3">
            Start generating your Social Media content now for free
          </h2>
          <a
            href=""
            className=" bg-violet-900 font-medium py-3 px-8 rounded-3xl"
          >
            Register
          </a>
        </div>
      </div>
    </section>
  );
};
