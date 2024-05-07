import React from "react";
import { MoveRight } from "lucide-react";
import { popularMovies } from "../../constants/index.jsx";

const PopularMovieCategory = () => {
  return (
    <section className=" bg-lightBackground justify-center">
      <div className=" conatiner max-w-7xl mx-auto py-12 xl:px-10 ">
        {/* upper wrapper */}
        <div className="text-black upper-wrapper grid items-center px-4 grid-cols-12">
          <h2 className=" text-3xl font-bold col-span-10">Popular</h2>
          <div className=" text-primaryColor flex items-center ">
            <span className=" text-sm  col-span-2">More</span>
            <span className="">
              <MoveRight />
            </span>
          </div>
        </div>
        {/* lower wrapper */}
        <div className=" grid grid-rows-2 grid-cols-3">
          {popularMovies.map((popularMovie, index) => (
            <div className=" col-span-1 p-4 w-full flex gap-3" key={index}>
              <img
                className="object-cover rounded-lg  w-28 h-40"
                src={popularMovie.img}
                alt="Popular Movie "
              />
              <div className="card--content flex flex-col gap-2">
                <h3 className=" text-lg font-bold text-black">
                  {popularMovie.title}
                </h3>
                <div className="movie__categorey space-x-3 items-center flex">
                  <span className=" text-primaryColor text-xs">
                    {popularMovie.category}
                  </span>
                  <span className=" text-neutral-800 text-xs">
                    {popularMovie.Director}
                  </span>
                </div>
                <p className=" text-sm  text-neutral-800 overflow-hidden  font-normal  line-clamp-3 ">
                  {popularMovie.description}
                </p>
                <div className="view__status space-x-4 flex">
                  <span className=" text-xs  text-neutral-500">
                    {popularMovie.views}
                  </span>
                  <span className="text-xs text-neutral-500">
                    {popularMovie.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* lower wrapper ended */}
      </div>
    </section>
  );
};

export default PopularMovieCategory;
