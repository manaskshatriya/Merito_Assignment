import React from "react";
import Card from "./Card";

export default function Initiatives() {
  const data1 = [
    {
      id: 1,
      title: "Helppad",
      image: "/assets/i1.webp",
    },
    {
      id: 2,
      title: "#LeadTheChange",
      image: "/assets/i2.webp",
    },
  ];
  const data2 = [
    {
      id: 3,
      title: "#WeFightCC",
      image: "/assets/i3.webp",
    },
    {
      id: 4,
      title: "Enlight",
      image: "/assets/i4.webp",
    },
  ];
  return (
    <div className="m-10 mt-20">
      <div className="flex items-center justify-center m-4 ">
        <h1 className="md:text-3xl text-xl underline  font-extrabold text-[#FB9D0C] ">
          Social Initiatives
        </h1>
      </div>
      <div className="md:flex justify-around items-center">
      {data1.map((item) => (
          <div className="m-10" >
            <Card
              key={item.id}
              title={item.title}
              image={item.image}
            />
          </div>
        ))}
      </div>
      <div className="md:flex justify-around items-center">
      {data2.map((item) => (
          <div className="m-10" >
            <Card
              key={item.id}
              title={item.title}
              image={item.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
