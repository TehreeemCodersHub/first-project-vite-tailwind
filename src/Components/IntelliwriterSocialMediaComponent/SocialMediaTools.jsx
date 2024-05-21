import React from "react";

export const SocialMediaTools = () => {
  return (
    <section className="bg-[#0F062C] relative">
      <div className="container mx-auto md:px-2 px-4 max-w-7xl pt-20 pb-10">
        <div className="flex flex-col">
          <h2 className="uppercase font-normal lg:text-6xl text-5xl relative">
            <span className="border-text opacity-50 bg-transparent bg-clip-text ">
              Discover More
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-300 to-pink-500 text-transparent bg-clip-text font-medium absolute lg:top-8  top-6  left-7">
              Ai Tools
            </span>
          </h2>
          <p className="pt-16 font-medium text-xl text-white">
            Unlock the power of AI with our suite of innovative tools, designed
            to simplify your tasks and elevate your productivity to new heights!
          </p>
        </div>
        <div className="pt-20">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  justify-center gap-7 ">
            <div className=" col-span-1 bg-[#12113F] flex justify-center items-center h-28 rounded-full">
              <div className="content__wrapper flex text-center justify-center items-center gap-7  ">
                <div className="svg__wrapper bg-green-100 text-green-500 rounded-full w-12 h-12 flex justify-center items-center">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M172.2 226.8c-14.6-2.9-28.2 8.9-28.2 23.8V301c0 10.2 7.1 18.4 16.7 22 18.2 6.8 31.3 24.4 31.3 45 0 26.5-21.5 48-48 48s-48-21.5-48-48V120c0-13.3-10.7-24-24-24H24c-13.3 0-24 10.7-24 24v248c0 89.5 82.1 160.2 175 140.7 54.4-11.4 98.3-55.4 109.7-109.7 17.4-82.9-37-157.2-112.5-172.2zM209 0c-9.2-.5-17 6.8-17 16v31.6c0 8.5 6.6 15.5 15 15.9 129.4 7 233.4 112 240.9 241.5.5 8.4 7.5 15 15.9 15h32.1c9.2 0 16.5-7.8 16-17C503.4 139.8 372.2 8.6 209 0zm.3 96c-9.3-.7-17.3 6.7-17.3 16.1v32.1c0 8.4 6.5 15.3 14.8 15.9 76.8 6.3 138 68.2 144.9 145.2.8 8.3 7.6 14.7 15.9 14.7h32.2c9.3 0 16.8-8 16.1-17.3-8.4-110.1-96.5-198.2-206.6-206.7z" />
                  </svg>
                </div>
                <h2 className=" text-xl">Blogs contents</h2>
              </div>
            </div>
            <div className=" col-span-1 bg-[#12113F] flex justify-center items-center h-28 rounded-full">
              <div className="content__wrapper flex text-center justify-center items-center gap-7  ">
                <div className="svg__wrapper bg-blue-100 text-blue-500 rounded-full w-12 h-12 flex justify-center items-center">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M496 288H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm0-128H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16z" />
                  </svg>
                </div>
                <h2 className=" text-xl">Marketing Agency</h2>
              </div>
            </div>
            <div className=" col-span-1 bg-[#12113F] flex justify-center items-center h-28 rounded-full">
              <div className="content__wrapper flex text-center justify-center items-center gap-7  ">
                <div className="svg__wrapper bg-red-100 text-red-500 rounded-full w-12 h-12 flex justify-center items-center">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 576 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M552 64H88c-13.255 0-24 10.745-24 24v8H24c-13.255 0-24 10.745-24 24v272c0 30.928 25.072 56 56 56h472c26.51 0 48-21.49 48-48V88c0-13.255-10.745-24-24-24zM56 400a8 8 0 0 1-8-8V144h16v248a8 8 0 0 1-8 8zm236-16H140c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm208 0H348c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm-208-96H140c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm208 0H348c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm0-96H140c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h360c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12z"></path>
                  </svg>
                </div>
                <h2 className=" text-xl">Websites Developer</h2>
              </div>
            </div>
            <div className=" col-span-1 bg-[#12113F] flex justify-center items-center h-28 rounded-full">
              <div className="content__wrapper flex text-center justify-center items-center gap-7  ">
                <div className="svg__wrapper bg-violet-100 text-violet-500 rounded-full w-12 h-12 flex justify-center items-center">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 448 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z" />
                  </svg>
                </div>
                <h2 className=" text-xl">Course Builder</h2>
              </div>
            </div>
            <div className=" col-span-1 bg-[#12113F] flex justify-center items-center h-28 rounded-full">
              <div className="content__wrapper flex text-center justify-center items-center gap-7  ">
                <div className="svg__wrapper bg-sky-100 text-sky-500 rounded-full w-12 h-12 flex justify-center items-center">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M464 448H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48zM112 120c-30.928 0-56 25.072-56 56s25.072 56 56 56 56-25.072 56-56-25.072-56-56-56zM64 384h384V272l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L208 320l-55.515-55.515c-4.686-4.686-12.284-4.686-16.971 0L64 336v48z" />
                  </svg>
                </div>
                <h2 className=" text-xl">Image Generator</h2>
              </div>
            </div>
            <div className=" col-span-1 bg-[#12113F] flex justify-center items-center h-28 rounded-full">
              <div className="content__wrapper flex text-center justify-center items-center gap-7  ">
                <div className="svg__wrapper bg-orange-500 text-orange-100 rounded-full w-12 h-12 flex justify-center items-center">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32z" />
                  </svg>
                </div>
                <h2 className=" text-xl">Chat Application</h2>
              </div>
            </div>

            <div className=" col-span-1 bg-[#12113F] flex justify-center items-center h-28 rounded-full">
              <div className="content__wrapper flex text-center justify-center items-center gap-7  ">
                <div className="svg__wrapper bg-stone-100 text-stone-500 rounded-full w-12 h-12 flex justify-center items-center">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" />
                    <path d="M11.25 5h1.5v10h-1.5zM8.5 7H10v6H8.5zM6 9h1.5v2H6zM14 7h1.5v6H14zM16.5 9H18v2h-1.5z" />
                  </svg>
                </div>
                <h2 className=" text-xl">Speech to Text</h2>
              </div>
            </div>
            <div className=" col-span-1 bg-[#12113F] flex justify-center items-center h-28 rounded-full">
              <div className="content__wrapper flex text-center justify-center items-center gap-7  ">
                <div className="svg__wrapper  bg-slate-400 text-green-500 rounded-full w-12 h-12 flex justify-center items-center">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 15h16" />
                    <path d="M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                    <path d="M4 20h12" />
                  </svg>
                </div>
                <h2 className=" text-xl">Image Generator</h2>
              </div>
            </div>
            <div className=" col-span-1 bg-[#12113F] flex justify-center items-center h-28 rounded-full">
              <div className="content__wrapper flex text-center justify-center items-center gap-7  ">
                <div className="svg__wrapper bg-green-100 text-green-500 rounded-full w-12 h-12 flex justify-center items-center">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 15h16" />
                    <path d="M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                    <path d="M4 20h12" />
                  </svg>
                </div>
                <h2 className=" text-xl">Image Captiom</h2>
              </div>
            </div>
            <div className=" col-span-1 bg-[#12113F] flex justify-center items-center h-28 rounded-full">
              <div className="content__wrapper flex text-center justify-center items-center gap-7  ">
                <div className="svg__wrapper bg-green-100 text-green-500 rounded-full w-12 h-12 flex justify-center items-center">
                  <span
                    className="items-center justify-center block w-8 h-8 rounded-md text-lg p-2 "
                    style={{ backgroundColor: "#ff0000", color: "#ffffff" }}
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 576 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
                    </svg>
                  </span>
                </div>
                <h2 className=" text-xl"> Youtube Content</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
