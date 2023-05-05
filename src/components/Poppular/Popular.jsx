import React from "react";

const Popular = ({ data }) => {
  const { name, rating, recipe_img } = data;
  return (
    <div className="card  bg-base-100 shadow-xl rounded-none">
      <figure>
        <img
          src={recipe_img}
          alt={name}
          className=" h-60 w-full object-cover relative img_hover"
        />
      </figure>
      <div className="card-body py-10">
        <h2 className=" text-center title_text text-red-600 text-2xl mb-6">
          {name}
        </h2>
      </div>
    </div>
  );
};

export default Popular;
