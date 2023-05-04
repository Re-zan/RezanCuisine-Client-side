import React from "react";
import "./Banner.css";
import bannerImg from "../../assets/images/Banner/banner.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className="flex justify-center items-center text-center banner bg-cover bg-no-repeat h-[750px]"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className=" w-7/12  my-24 banner_content">
        {" "}
        <h2 className="title_text text-2xl md:text-4xl lg:text-6xl text-red-700 font-semibold">
          Re-zanCuisine has many <br></br> amazing recipes...
        </h2>
        <p className="my-10  text-gray-800 text-base md:text-xl font-medium">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
          repellendus sapiente voluptatum quisquam. Provident quis odio animi
          dolorem illum asperiores cum molestiae, omnis incidunt totam voluptas,
          optio quo expedita mollitia minus fuga accusantium odit suscipit.
        </p>
        <Link to="/">
          {" "}
          <button className="btn bttn "> Explore The Recipes</button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
