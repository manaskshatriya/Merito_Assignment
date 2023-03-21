import React from "react";

export default function Testimonial() {
  const data = [
    {
      id: 1,
      name: "Shri Arvind Kejriwal",
      image: "/src/assets/t1.jpeg",
      post: "Chief Minister, Delhi",
      text: "Career guidance is very important for the kids and parents to know which area they can build their careers. I am very happy to see the way these programs are helping students ",
    },
    {
      id: 2,
      name: "Dr Kiran Bedi",
      image: "/src/assets/t2.jpeg",
      post: "Lieutenant Governor, Puducherry",
      text: "Every student is special and possesses unique potential which when harnessed at right time can make miracles. I am glad hat Career Corner is helping students with their guidance program",
    },
    {
      id: 3,
      name: "Prof Arvind Sahay",
      image: "/src/assets/t3.jpeg",
      post: "Dean IIM Ahmedabad",
      text: "I can see most of the are making default career choices like engineering and MBA however most of them need to ask what is  best career suitable career for me and choose the same",
    },
  ];
  return (
    <div className="m-10 mt-20">
      <div className="flex items-center justify-center m-4 ">
        <h1 className="md:text-3xl text-xl underline  font-extrabold text-[#FB9D0C] ">
          Testimonials
        </h1>
      </div>
      <div className="md:flex justify-between items-center" >
        {data.map((item) => (
          <div className="md:m-10 m-6 border-2 border-[#FB9D0C] p-4 shadow-md shadow-[#FB9D0C] hover:scale-105 transition ease-in-out duration-300  ">
            <div className="flex items-center justify-center " >
                <img className="rounded-full" src={item.image} alt="" />
            </div>
            <div className="text-center my-2  " >
                <h1 className="md:text-2xl font-bold text-xl" >{item.name}</h1>
                <p className="capitalize text-sm md:text-base" >{item.post}</p>
            </div>
            <div className="text-center md:text-lg my-4" >
                <p><span className="text-[#FB9D0C] " >"</span>  {item.text}<span className="text-[#FB9D0C] " >"</span>  </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
