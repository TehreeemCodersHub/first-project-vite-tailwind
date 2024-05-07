import { MoveRight } from "lucide-react";
import popularMoviesOne from "../../assets/GoodNovelPicture/topTrendingThree.jpg";
import popularMoviesTwo from "../../assets/GoodNovelPicture/topTrendingOne.jpg";
import popularMoviesThree from "../../assets/GoodNovelPicture/topTrendingTwo.jpg";
import topTrendingImg from "../../assets/GoodNovelPicture/topTrending.png";
// import topTrendingOneImg from "../../assets/GoodNovelPicture/topTrendingOne.jpg";
import React from "react";

const TrendingMovies = () => {
  return (
    <section className=" bg-white">
      <div className=" container max-w-7xl mx-auto py-12 xl:px-10 ">
        {/* upper wrapper */}
        <div className="grid grid-cols-12 ">
          <div className=" col-span-8">
            <div className="text-black upper-wrapper grid items-center px-4 grid-cols-12">
              <h2 className=" text-3xl font-bold col-span-10">Popular</h2>
              <div className=" text-primaryColor flex items-center ">
                <span className=" text-sm  col-span-2">More</span>
                <span className="">
                  <MoveRight />
                </span>
              </div>
            </div>
            {/* trending movies started */}
            <div className=" Movie__Banner-wrapper mt-9 bg-darkBackground rounded-lg  w-full">
              <div className="image__wrapper pt-20 px-5">
                <div className="grid grid-cols-3 justify-center items-end ">
                  <div className="col-span-1 flex justify-end ">
                    <img
                      src={popularMoviesOne}
                      alt="Main Banner Image "
                      className="rounded-lg w-[150px] h-[207px]"
                    />
                  </div>
                  <div className="col-span-1 flex justify-center">
                    <img
                      src={popularMoviesTwo}
                      alt="Main Banner Image"
                      className="rounded-lg w-[220x] h-[290px]"
                    />
                  </div>
                  <div className="col-span-1">
                    <img
                      src={popularMoviesThree}
                      alt="Main Banner Image"
                      className="rounded-lg w-[150px] h-[200px]"
                    />
                  </div>
                </div>
                <div className="top__trending">
                  <img
                    src={topTrendingImg}
                    alt="Main Banner Image"
                    className="rounded-lg w-full mt-[-25px]"
                  />
                </div>
              </div>
              <div className=" trending__banner-desc  grid grid-cols-3">
                <div className="col-span-1">
                  <h3 className="  text-lg  text-neutral-700 text-end font-bold ">
                    I Am The Luna
                  </h3>
                </div>
                <div className="col-span-1"></div>
                <div className="col-span-1"></div>
              </div>
            </div>

            {/* trending movies ended */}
          </div>
          <div className=" col-span-4"></div>
        </div>

        {/* lower wrapper */}
      </div>
    </section>
  );
};

export default TrendingMovies;
