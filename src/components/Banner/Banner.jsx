import React from "react";
import "./Banner.css";

import { Link } from "react-router-dom";

const Banner = (props) => {
  return (
    <div
      className="flex justify-center items-center text-center banner bg-cover bg-no-repeat h-[750px]"
      style={{ backgroundImage: `url(${props.imgData})` }}
    >
      <div className=" w-7/12  my-28 md:my-24 banner_content p-3 bg-base-100 md:bg-transparent bg-opacity-60 lg:bg-opacity-0">
        {" "}
        <h2 className="title_text text-2xl md:text-4xl lg:text-6xl text-red-700 font-semibold">
          {props.title}
        </h2>
        <p className="my-10  text-gray-800 text-base md:text-xl font-medium ">
          {props.desc}
        </p>
        <Link to="/allrecipies">
          {" "}
          <button className="btn bttn "> {props.btnDes}</button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
