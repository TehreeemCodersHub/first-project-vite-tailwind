import React from "react";
import MainLayout from "../layout/MainLayout";

const Features = () => {
  return (
    <MainLayout>
      <div className=" h-screen grid bg-slate-900 place-content-center ">
        <h1 className=" text-6xl text-white xl:text-red-600 lg:text-green-600 md:text-cyan-600 sm:text-yellow-600 text-white">
          {" "}
          hey i am features page{" "}
        </h1>
      </div>
      <div className=" bg-slate-300 h-screen">
        <div className="  bg-white rounded-xl p-6 max-w-sm mx-auto drop-shadow-2xl">
          <img
            src="https://t4.ftcdn.net/jpg/04/91/22/89/240_F_491228976_rZjwTmWQ94slThBfaxYLO2HFpBZCerlE.jpg"
            alt=""
          />
          <div className="">
            <div className=" text-neutral-800 place-content-center grid">
              Tailwind
              <p>By tehreem ssaleem</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="  bg-white rounded-xl p-6 max-w-sm mx-auto drop-shadow-md">
          <img
            src="https://t4.ftcdn.net/jpg/04/91/22/89/240_F_491228976_rZjwTmWQ94slThBfaxYLO2HFpBZCerlE.jpg"
            alt=""
            className=" h-12 w-12"
          />
          <div className="">
            <div className=" text-neutral-800 place-content-center grid space-x-3">
              <h3 className=" space-x-4  text-6xl  ">Tailwind </h3>
              <p className=" space-y-4">By tehreem ssaleem</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-5 gap-4">
          <div>01</div>
          <div>02</div>
          <div>03</div>
          <div>04</div>
          <div>05</div>
          <div className="grid grid-cols-subgrid gap-4 col-span-2">
            <div className="col-start-2">06</div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Features;
