import React from "react";
import { FaUserAlt } from "react-icons/fa";

const Trending = ({ chefData }) => {
  const { chef, best_recipes } = chefData;
  return (
    <div className="card bg-white shadow-xl rounded-none">
      <figure>
        <img
          src={best_recipes[0].recipe_img}
          alt={chef}
          className=" h-80 w-full object-cover relative img_hover"
        />

        <div className="badge border-0 absolute top-0 end-0 p-4 mt-5 me-5 bg-red-600">
          <FaUserAlt className="me-2"></FaUserAlt> by {chef}
        </div>
      </figure>
      <div className="card-body py-10">
        <h2 className=" text-center title_text text-red-600 text-2xl ">
          {best_recipes[0].name}
        </h2>
      </div>
    </div>
  );
};

export default Trending;
