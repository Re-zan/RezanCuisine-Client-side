import React from "react";
import { FaCalculator, FaEye, FaUserClock, FaThumbsUp } from "react-icons/fa";
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";

const Chefsection = ({ chefData }) => {
  const { id, img_url, chef, years_of_experience, num_recipes, likes } =
    chefData;
  return (
    <div className="card  bg-base-100 shadow-xl rounded-none">
      <figure>
        <LazyLoad width={500} effect={blur}>
          <img
            src={img_url}
            alt={chef}
            className=" h-60 w-full object-cover relative img_hover"
          />
        </LazyLoad>

        <Link to={`/chefrecipes/${id}`}>
          <div className="badge border-0 absolute top-0 end-0 p-4 mt-5 me-5 bg-red-600">
            <FaEye className="me-2"></FaEye> View Recipes
          </div>
        </Link>
      </figure>
      <div className="card-body py-10">
        <h2 className=" text-center title_text text-red-600 text-2xl mb-6">
          {chef}
        </h2>

        <div className="card-actions flex justify-between">
          <div className="flex items-center">
            {" "}
            <FaUserClock className="me-2 text-red-700"></FaUserClock>
            <span>: {years_of_experience} year </span>
          </div>
          <div className="flex items-center">
            <FaCalculator className="me-2 text-red-700"></FaCalculator>{" "}
            <span>{num_recipes} recipes</span>
          </div>
          <div className="flex items-center">
            {" "}
            <FaThumbsUp className="me-2 text-red-700"></FaThumbsUp>{" "}
            <span>: {likes} </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chefsection;
