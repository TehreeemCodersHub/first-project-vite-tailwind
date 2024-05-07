import React from "react";
import BannerImg from "../../assets/GoodNovelPicture/banner-img.jpg";

const GoodNovelBanner = () => {
  return (
    <div>
      <div className="banner--ssection ">
        <img
          src={BannerImg}
          alt="Good Novel BannerImg"
          className=" w-[100%] object-cover"
        />
      </div>
    </div>
  );
};

export default GoodNovelBanner;
