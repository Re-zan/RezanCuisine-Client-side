import React, { useState } from "react";
import Banner from "../../components/Banner/Banner";
import Chefsection from "../../components/ChefSection/Chefsection";
import { useLoaderData } from "react-router-dom";
import Heading from "../../components/Heading/Heading";
import Popular from "../../components/Poppular/Popular";
import mostFavImg from "../../assets/images/Banner/banner1.png";

const Home = () => {
  const chefDatas = useLoaderData();

  //most popular datas
  const mostPopularData = [];
  for (let datas of chefDatas) {
    for (let mostRD of datas.best_recipes) {
      if (mostRD.rating === 5) {
        mostPopularData.push(mostRD);
      }
    }
  }

  console.log(mostPopularData);

  return (
    <div>
      {/* banner part start */}
      <Banner></Banner>
      {/* banner part end */}
      <div className="my_conatiner my-36">
        {/* chef section start */}
        <Heading title="Our Best Chefs"></Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 my-10">
          {chefDatas.map((data) => (
            <Chefsection key={data.id} chefData={data}></Chefsection>
          ))}
        </div>
        {/* chef section end */}
        {/* most popular section start */}
        <Heading title="Most Popular Recipes"></Heading>
        <div className="grid grid-cols-1 lg:grid-cols-2  my-14 ">
          <div className="grid grid-cols-1  md:grid-cols-2 gap-6">
            {mostPopularData.map((data) => (
              <Popular data={data}></Popular>
            ))}
          </div>
          <div className="relative">
            <img
              src={mostFavImg}
              alt="Most favorite datas"
              className="h-full"
            />
            <div className="overly absolute top-0 end-0 bg-base-200 start-0 bottom-0 h-full bg-opacity-50">
              {" "}
            </div>
          </div>
        </div>
        {/* most popular section end */}
      </div>
    </div>
  );
};

export default Home;
