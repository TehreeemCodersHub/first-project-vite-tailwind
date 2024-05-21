import React from "react";

export const SocialMediaFeatures = () => {
  const cards__Content = [
    {
      label: "#",
      title: "Hashtags",
      para: "Generate #hashtags for social network content.",
    },
    {
      label: "#",
      title: "Social Post",
      para: "Generate social posts ready to be published on social platforms.",
    },
    {
      label: "#",
      title: "Social Post Caption",
      para: "Generate social posts caption ready to grab attention.",
    },
    {
      label: "#",
      title: "Tweet",
      para: "Generate engaging tweets based on a description.",
    },
    {
      label: "#",
      title: "Tweet Thread",
      para: "Generate engaging twitter threads based on a description.",
    },
    {
      label: "#",
      title: "Video Description",
      para: "Generate compelling video descriptions based on a description.",
    },
    {
      label: "#",
      title: "Video Script",
      para: "Generate compelling video scripts based on a description.",
    },
    {
      label: "#",
      title: "Video Tags",
      para: "Generate compelling video tags based on a video title.",
    },
  ];
  return (
    <section className=" bg-[#0F062C] relative">
      <div className=" container mx-auto md:px-2 px-4 max-w-7xl pt-20 pb-10 ">
        <div className=" flex flex-col lg:px-0 px-3  ">
          <h2 className="  uppercase font-normal lg:text-6xl text-5xl relative">
            <span className="  border-text opacity-50  bg-transparent bg-clip-text ">
              Unlock your
            </span>
            <br />
            <span className=" bg-gradient-to-r from-purple-300 to-pink-500 text-transparent bg-clip-text font-medium absolute lg:top-8  top-6  left-7">
              {" "}
              POTENTIAL
            </span>
          </h2>
          <p className=" pt-16 font-medium text-xl text-white">
            Embracing the age of Artifical Intelligence. Discover Boundless
            power and impact of AI Social Media.
          </p>
        </div>
        <div className=" pt-20 lg:px-0 px-4 ">
          <div className=" grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
            {cards__Content.map((item, index) => (
              <div className=" col-span-1 " key={index}>
                <div className="box__wrapper flex flex-col rounded-lg h-72 overflow-hidden border px-6 pt-12 border-[#FFFFFF14] text-white backdrop-blur-md">
                  <div className="absolute -bottom-4 -right-4 bg-[#ac7aeb] w-28 h-28 blur-[80px]"></div>
                  <div className="absolute -bottom-4 -right-4 bg-gray-800 w-16 h-16 blur-[50px]"></div>
                  <div className="absolute top-4 left-4 bg-gray-800 w-16 h-16 blur-[50px]"></div>
                  <div className="bg-[#fef9c3] m-2 block w-10 h-10 rounded-md text-[#facc15] text-2xl p-2">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 448 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M440.667 182.109l7.143-40c1.313-7.355-4.342-14.109-11.813-14.109h-74.81l14.623-81.891C377.123 38.754 371.468 32 363.997 32h-40.632a12 12 0 0 0-11.813 9.891L296.175 128H197.54l14.623-81.891C213.477 38.754 207.822 32 200.35 32h-40.632a12 12 0 0 0-11.813 9.891L132.528 128H53.432a12 12 0 0 0-11.813 9.891l-7.143 40C33.163 185.246 38.818 192 46.289 192h74.81L98.242 320H19.146a12 12 0 0 0-11.813 9.891l-7.143 40C-1.123 377.246 4.532 384 12.003 384h74.81L72.19 465.891C70.877 473.246 76.532 480 84.003 480h40.632a12 12 0 0 0 11.813-9.891L151.826 384h98.634l-14.623 81.891C234.523 473.246 240.178 480 247.65 480h40.632a12 12 0 0 0 11.813-9.891L315.472 384h79.096a12 12 0 0 0 11.813-9.891l7.143-40c1.313-7.355-4.342-14.109-11.813-14.109h-74.81l22.857-128h79.096a12 12 0 0 0 11.813-9.891zM261.889 320h-98.634l22.857-128h98.634l-22.857 128z"></path>
                    </svg>
                  </div>
                  <div className="content__wrapper flex flex-col py-5">
                    <h1 className="text-2xl">{item.title}</h1>
                    <p className="text-sm pt-3">{item.para}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
