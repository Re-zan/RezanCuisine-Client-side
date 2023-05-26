import React from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
const Popular = ({ data }) => {
  const { name, rating, recipe_img } = data;
  return (
    <div className="card bg-white shadow-xl rounded-none ">
      <figure>
        <img
          src={recipe_img}
          alt={name}
          className=" h-60 w-full object-cover relative img_hover"
        />
      </figure>
      <div className="card-body py-10">
        <h2 className=" text-center title_text text-red-600 text-xl mb-6">
          {name}
        </h2>
        <div className="flex items-center justify-center">
          <Rating
            style={{
              maxWidth: 120,
              width: "100%",
              marginRight: "10px",
              color: "red",
            }}
            readOnly
            orientation="horizantal"
            value={rating}
          />
          <span>{rating}</span>
        </div>
      </div>
    </div>
  );
};

export default Popular;
