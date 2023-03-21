import React from "react";

export default function Footer() {
  return (
    <div className="bg-black text-white p-10">
      <div className="md:flex justify-around " >
        <div className="my-8">
          <h1 className="m-2 text-[#FB9D0C]  text-xl font-semibold" >Contact us</h1>
          <ul className="space-y-1 mx-2 text-gray-300 font-medium " >
            <li>Phone +91 72766-30705</li>
            <li>Email admin@merito.in</li>
            <li>Address Baner, Pune, Maharashtra 411045</li>
          </ul>
        </div>
        <div className="my-8">
          <h1 className="m-2 text-[#FB9D0C]  text-xl font-semibold" >CAREER CORNER</h1>
          <ul className="space-y-1 mx-2 text-gray-300 font-medium " >
            <li>Our Programs</li>
            <li>Our Story</li>
            <li>Our Brands</li>
            <li>Social Initiatives</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="my-8">
          {" "}
          <h1 className="m-2 text-[#FB9D0C]  text-xl font-semibold" >OUR BRANDS</h1>
          <ul className="space-y-1 mx-2 text-gray-300 font-medium " >
            <li>Merito.ai</li>
            <li>Merito Academy</li>
            <li>Helppad</li>
          </ul>
        </div>
      </div>
      <div></div>
    </div>
  );
}
