import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import bannerImg from "../../assets/images/Banner/banner2.jpg";
import {
  FaCalculator,
  FaHeart,
  FaPeopleArrows,
  FaThumbsUp,
} from "react-icons/fa";
import Heading from "../../components/Heading/Heading";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { ToastContainer, toast } from "react-toastify";

const ChefDetailsPage = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const {
    img_url,
    chef,
    bio,
    years_of_experience,
    num_recipes,
    likes,
    best_recipes,
  } = data;

  const [hiddenBtn, setHiddenBtn] = useState(true);
  const handelarReact = () => {
    toast.success("This is my favourite recipe");
  };
  return (
    <div>
      <ToastContainer></ToastContainer>
      {/* banner part start */}
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${bannerImg})`,
          height: "950px",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center lg:text-left text-neutral-content grid grid-cols-1 lg:grid-cols-2  gap-2  bg-base-100 p-4 lg:p-20 my-8  lg:my-20  bg-opacity-40 z-0">
          <div className="max-w-md z-10">
            <h1 className="mb-5 text-4xl lg:text-5xl text-red-700 font-semibold title_text">
              {chef}
            </h1>
            <p className="mb-5 descripction text-gray-900 py-5 z-10">{bio}</p>

            <div className="card-actions flex justify-between text-gray-900 border-t-2 py-4 border-red-700">
              <div className="flex items-center">
                {" "}
                <FaPeopleArrows className="me-2 text-red-700"></FaPeopleArrows>
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
          <div className="max-w-md  ">
            <img
              src={img_url}
              alt=""
              className="h-full w-full rounded-full img_hover hover:border-red-500 hover:border-2"
            />{" "}
          </div>
        </div>
      </div>
      {/* banner part end */}

      <div className="my_conatiner my-20">
        {/* headeing part start  */}
        <Heading title={`${chef} Best Recipes`}></Heading>
        {/* headeing part end  */}

        {/*  chef content start  */}
        {best_recipes.map((recipe) => {
          return (
            <div className=" w-10/12 mx-auto collapse collapse-plus border border-base-300 bg-white my-8">
              <input type="checkbox" className="peer" />
              <div className="collapse-title title_text text-red-700  text-2xl shadow-lg">
                {recipe.name}
              </div>
              <div className="collapse-content">
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  <div className="p-10 title_text text-red-600">
                    <p className="decoration-solid text-2xl mb-4">
                      Ingredients:
                    </p>
                    <ul>
                      {recipe.ingredients.map((ing) => (
                        <li className="list-disc ms-4 descripction">{ing} </li>
                      ))}
                    </ul>
                  </div>
                  <div className="py-10 ms-4 md:ms-0 me-5 px-0 md:px-8 lg:px-0 title_text text-red-600">
                    <p className="decoration-solid text-2xl mb-4">
                      Cooking method:
                    </p>
                    <ul>
                      {recipe.cooking_method.map((cook) => (
                        <li className="list-decimal descripction ms-4">
                          {cook}{" "}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="py-10 ">
                    <img
                      src={recipe.recipe_img}
                      alt={recipe.name}
                      className="h-full img_hover w-full "
                    />
                  </div>
                </div>

                <div className="border-t-2 py-4 border-red-700 flex justify-between">
                  <div
                    className={`${hiddenBtn ? "" : "hidden"}`}
                    onClick={handelarReact}
                  >
                    <button
                      className="btn bttn "
                      onClick={() => setHiddenBtn(!hiddenBtn)}
                    >
                      Favorite recipe{" "}
                      <span className="ms-3">
                        <FaHeart />
                      </span>{" "}
                    </button>
                  </div>

                  <div className="flex items-center">
                    <Rating
                      style={{
                        maxWidth: 120,
                        width: "100%",
                        marginRight: "10px",
                        color: "red",
                      }}
                      readOnly
                      orientation="horizantal"
                      value={recipe.rating}
                    />
                    <span>{recipe.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        {/*  chef content end  */}
      </div>
    </div>
  );
};

export default ChefDetailsPage;
