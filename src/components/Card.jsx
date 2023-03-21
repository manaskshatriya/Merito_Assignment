import React from "react";

export default function Card(props) {
    console.log(props);
  return (
    <div>
      <div class="container">

        <div class="overlay-container border-[#FB9D0C] border-2">
          <img
            src={props.image}
            class="image"
          />
          <div class="overlay overlay-top">
            <div className="text text-3xl font-bold">{props.title}</div>
          </div>
        </div>

       
      </div>
    </div>
  );
}
