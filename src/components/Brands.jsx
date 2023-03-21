import React from "react";
import Card from "./Card";


export default function Brands() {
  const data= [
    {
      id: 1,
      title: "Merito Academy",
      image: "/assets/brand1.webp",
    },
    {
      id: 2,
      title: "Merito.in",
      image: "/assets/brand2.webp",
    }
  ]
  return (
    <div className="m-10 mt-20" >
      <div className="flex items-center justify-center m-4 ">
        <h1 className="md:text-3xl text-xl underline  font-extrabold text-[#FB9D0C] ">
          Our Brands
        </h1>
      </div>
      <div className="md:flex justify-around items-center" >
        {data.map((item) => (
          <div className="m-10" >
            <Card
              key={item.id}
              title={item.title}
              image={item.image}
            />
          </div>
        ))}
        {/* <div  className="m-10">
          <Card />
        </div>
        <div className="m-10" >
          
          <Card />
        </div> */}
      </div>
    </div>
  );
}
