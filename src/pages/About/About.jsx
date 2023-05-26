import React from "react";
import Banner from "../../components/Banner/Banner";
import ImgBanner from "../../assets/images/Banner/banner1.png";
import WhoWeAre from "./Who We Are/WhoWeAre";
import Heading from "../../components/Heading/Heading";
import Chefsection from "../../components/ChefSection/Chefsection";
import { useLoaderData } from "react-router-dom";
import Testimonial from "./Testimonial/Testimonial";

const About = () => {
  const chefDatas = useLoaderData();
  return (
    <div>
      {/* banner part start */}
      <Banner
        imgData={ImgBanner}
        btnDes="Explore The recipes"
        title="Elevating Culinary Artistry with Unforgettable Flavors"
        desc="Where passion, innovation, and flavors harmonize to create an extraordinary dining experience that will leave you inspired and craving for more."
      ></Banner>
      {/* banner part end */}
      <div className="my_conatiner">
        {/* who we are part start */}
        <WhoWeAre></WhoWeAre>
        {/* who we are part end */}

        {/* our chefs part start */}
        <Heading title="Our Best Chefs"></Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 my-10 ">
          {chefDatas.map((data) => (
            <Chefsection key={data.id} chefData={data}></Chefsection>
          ))}
        </div>
        {/* our chefs part end */}

        {/* testimonial part start */}
        <Heading title="What Our Client Says to Us"></Heading>
        <Testimonial></Testimonial>
        {/* testimonial part end */}
      </div>
    </div>
  );
};

export default About;
