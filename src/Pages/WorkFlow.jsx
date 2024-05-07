import React from "react";
import GoodNovelNavbar from "../Components/WorkFlowComponent/GoodNovelNavbar";
import GoodNovelBanner from "../Components/WorkFlowComponent/GoodNovelBanner";
import PopularMovieCategory from "../Components/WorkFlowComponent/PopularMovieCategory";
import TrendingMovies from "../Components/WorkFlowComponent/TrendingMovies";

const WorkFlow = () => {
  return (
    <div>
      <GoodNovelNavbar />
      <GoodNovelBanner />
      <PopularMovieCategory />
      <TrendingMovies />
    </div>
  );
};

export default WorkFlow;
