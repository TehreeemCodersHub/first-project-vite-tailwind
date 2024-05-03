import React from "react";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const Hero = () => {
  return (
    <div className=" flex flex-col items-center mt-6 lg:mt-20">
      <h1 className=" text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide lg:max-w-5xl">
        Virtual Build tools{" "}
        <span className=" bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          for Developers
        </span>
      </h1>
      <p className=" text-center text-lg mt-10 text-neutral-500 max-w-4xl ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ullam,
        tenetur hic, magnam atque suscipit quaerat quisquam similique
        necessitatibus molestiae ratione dicta natus.
      </p>
      <div className=" flex justify-center gap-5 my-10">
        <a href="#" className="py-2 px-3 border rounded-md align-baseline">
          {" "}
          Start For Free
        </a>
        <a
          href="#"
          className="py-3 px-3  rounded-md bg-gradient-to-r from-orange-500 to-orange-800"
        >
          Documentation
        </a>
      </div>
      <div className=" flex mt-10 justify-center ">
        <video
          autoPlay
          loop
          muted
          className=" rounded border w-1/2 border-orange-700 shadow-orange-400 mx-2 my-4  "
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support video tag
        </video>
        <video
          autoPlay
          loop
          muted
          className=" rounded border w-1/2 border-orange-700 shadow-orange-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Hero;
