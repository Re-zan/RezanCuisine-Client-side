import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import bannerImg from "../../assets/images/Banner/banner2.jpg";
import { FaCalculator, FaPeopleArrows, FaThumbsUp } from "react-icons/fa";
import Heading from "../../components/Heading/Heading";

const ChefDetailsPage = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const { img_url, chef, bio, years_of_experience, num_recipes, likes } = data;
  console.log(data);
  return (
    <div>
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
          <div className="max-w-md">
            <img src={img_url} alt="" className="h-full w-full rounded-full " />{" "}
          </div>
        </div>
      </div>
      {/* banner part end */}
      <div className="my_conatiner my-20">
        <Heading title={`${chef} best recipes`}></Heading>

        <div className=" collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
          <input type="checkbox" className="peer" />
          <div className="collapse-title ">Click me to show/hide content</div>
          <div className="collapse-content ">
            <p>hello</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefDetailsPage;
