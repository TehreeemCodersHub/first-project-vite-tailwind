import React from "react";
import card1 from "../../assets/intelliWriterImgs/socialStep1.webp";
import card2 from "../../assets/intelliWriterImgs/socialStep2.webp";
import card3 from "../../assets/intelliWriterImgs/socialStep3.webp";
import card4 from "../../assets/intelliWriterImgs/socialStep4.webp";

export const SocialMediaStep = () => {
  const data_value = [
    {
      img: card1,
      title: "step1",
      para: "Access Intelliwriter AI Social media Generator: Open your preferred web browser and navigate to the Intelliwriter.io website. Login and from the user dashboard Click on Social Media",
    },
    {
      img: card2,
      title: "step2",
      para: "Access Intelliwriter AI Social media Generator: Open your preferred web browser and navigate to the Intelliwriter.io website. Login and from the user dashboard Click on Social Media",
    },
    {
      img: card3,
      title: "step3",
      para: "Access Intelliwriter AI Social media Generator: Open your preferred web browser and navigate to the Intelliwriter.io website. Login and from the user dashboard Click on Social Media",
    },
    {
      img: card4,
      title: "step4",
      para: "Access Intelliwriter AI Social media Generator: Open your preferred web browser and navigate to the Intelliwriter.io website. Login and from the user dashboard Click on Social Media",
    },
  ];

  return (
    <section className="bg-[#0F062C] relative">
      <div className="container mx-auto md:px-2 px-4 max-w-7xl pt-20 pb-10">
        <div className="flex flex-col">
          <h2 className="uppercase font-normal lg:text-6xl text-5xl  relative">
            <span className="border-text opacity-50 bg-transparent bg-clip-text ">
              How Content
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-300 to-pink-500 text-transparent bg-clip-text font-medium absolute  lg:top-8  top-6  left-7">
              Generates
            </span>
          </h2>
          <p className="pt-16 font-medium text-xl text-white">
            Embark on an unstoppable journey of your with our AI Social Media –
            where your text come to life with captivating social media materials
            in just a few clicks!
          </p>
        </div>
        <div className="pt-20">
          <div className="grid grid-cols-12 gap-7 ">
            {data_value.map((item, index) => {
              return (
                <div key={index} className="md:col-span-6 col-span-12 mb-10">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="rounded-lg h-80 shadow-[#ac7aeb] shadow-2xl "
                  />
                  <div className="content justify-center text-center flex flex-col gap-3">
                    <h2 className="pt-6 text-3xl">{item.title}</h2>
                    <p className="font-light text-xl">{item.para}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
