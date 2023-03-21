import React from "react";
import Navbar from "../components/Navbar";
import Corousel from "../components/Corousel";
import About from "../components/About";
import Counter from "../components/Counter";
import Brands from "../components/Brands";
import Initiatives from "../components/Initiatives";  
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Corousel />
      <About/>
      <Counter/>
      <Brands/>
      <Initiatives/>
      <Testimonial/>
      <Footer/>
     
      
    </div>
  );
}
