import React from "react";
import { CheckCircle2 } from "lucide-react";
import codeImage from "../assets/code.jpg";
import { checklistItems } from "../constants";

const WorkFlowSection = () => {
  return (
    <div className=" relative">
      <div className="lg:mt-20 mt-10">
        <h2 className=" text-3xl sm:text-5xl lg:text-6xl text-center">
          Acclerate Your{""}{" "}
          <span className=" bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            {" "}
            Workflow{" "}
          </span>
        </h2>
      </div>
      <div className=" mt-11 flex flex-wrap justify-center items-center">
        <div className=" p-2 w-full lg:w-1/2">
          <img src={codeImage} alt="workflow text"></img>
        </div>
        <div className="flex flex-col w-full p-2 lg:w-1/2">
          {checklistItems.map((item, index) => (
            <div className="flex mb-12" key={index}>
              <div className=" text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 rounded-full">
                <CheckCircle2 />
              </div>
              <div className=" flex flex-col">
                <h5 className=" mt-1 mb-2 text-xl"> {item.title}</h5>
                <p className=" text-md text-neutral-500 ">
                  {" "}
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkFlowSection;

//   {

//   }
