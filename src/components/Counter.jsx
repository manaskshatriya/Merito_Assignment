import React from "react";
import CountUp from "react-countup";

export default function Counter() {
  return (
    <div className="md:m-10 lg:mt-24 mt-24 m-4 md:mx-20 border-4 shadow-md hover:scale-105 transition ease-in-out duration-350 shadow-[#FB9D0C]  border-[#FB9D0C]" >
      <div className="flex items-center justify-center m-4 ">
        <h1 className="md:text-3xl text-xl underline  font-extrabold text-[#FB9D0C] ">
          Our Impact
        </h1>
      </div>
      <div className="md:flex    items-center justify-evenly">
        <div className="m-4 text-center">
          <CountUp className="text-2xl md:text-5xl text-[#FB9D0C] font-bold" end={300} duration={5} />
          <h2 className=" text-lg md:text-xl p-2 px-4" >Career Guidance Sessions</h2>
        </div>
        <div className="m-4 text-center" >
          {" "}
          <CountUp className="text-2xl md:text-5xl text-[#FB9D0C] font-bold" end={10} duration={5} />
          <h2 className=" text-lg md:text-xl p-2 px-4" >Years in Action</h2>{" "}
        </div>
        <div className="m-4 text-center" >
          {" "}
          <CountUp className="text-2xl md:text-5xl text-[#FB9D0C] font-bold" end={50000} duration={5} />
          <h2 className=" text-lg md:text-xl p-2 px-4" >Students & Professionals</h2>{" "}
        </div>
      </div>
    </div>
  );
}
