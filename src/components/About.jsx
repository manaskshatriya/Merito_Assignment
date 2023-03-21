import React from "react";

export default function About() {
  return (
    <div className="md:m-10 m-4 md:mx-20 border-x-4 shadow-md hover:scale-105 transition ease-in-out duration-350 shadow-[#FB9D0C]  border-[#FB9D0C]" >
      <div className=" flex justify-center items-center ">
        <h1 className="md:text-3xl text-xl underline  font-extrabold text-[#FB9D0C] " >About Us</h1>
      </div>
      <div className="flex text-base md:text-lg justify-center items-center m-3 pb-4 md:m-6 md:pb-6 text-center" >
        <p>
          Career Corner is a career services platform founded by COEP and IIM
          Ahmedabad alumnus with the goal of equipping students and
          professionals for their career development. Since its inception in
          2011 as DISHA, Career Corner has assisted over 50,000 students and
          professionals in choosing the RIGHT career for them. <br /> <br /> We have launched
          career-oriented programs alongside social initiatives geared towards
          helping people gain professional excellence.
        </p>
      </div>
    </div>
  );
}
