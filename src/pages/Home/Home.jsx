import React from "react";
import Banner from "../../components/Banner/Banner";
import Chefsection from "../../components/ChefSection/Chefsection";
import { useLoaderData } from "react-router-dom";
import Heading from "../../components/Heading/Heading";
import Popular from "../../components/Poppular/Popular";
import mostFavImg from "../../assets/images/Banner/156-v_m1.jpg";
import Trending from "../../components/Trending/Trending";
import contact from "../../components/Animate/contact.json";
import Lottie from "lottie-react";
import LazyLoad from "react-lazy-load";
import bannerImg from "../../assets/images/Banner/banner.jpg";

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

  //most trending
  const mostTrendingData = [];
  for (let datas of chefDatas) {
    if (datas.likes > 200) {
      mostTrendingData.push(datas);
    }
  }

  return (
    <div>
      {/* banner part start */}
      <Banner
        imgData={`${bannerImg}`}
        title="Re-zanCuisine has many amazing recipes... "
        btnDes="Explore The Recipes"
        desc=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
        repellendus sapiente voluptatum quisquam. Provident quis odio animi
        dolorem illum asperiores cum molestiae, omnis incidunt totam voluptas,
        optio quo expedita mollitia minus fuga accusantium odit suscipit."
      ></Banner>
      {/* banner part end */}
      <div className="my_conatiner my-36">
        {/* chef section start */}
        <Heading title="Our Best Chefs"></Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 my-10 ">
          {chefDatas.map((data) => (
            <Chefsection key={data.id} chefData={data}></Chefsection>
          ))}
        </div>
        {/* chef section end */}
        {/* most popular section start */}
        <Heading title="Most Popular Recipes"></Heading>
        <div className="grid grid-cols-1 lg:grid-cols-2  my-14 lg:ml-12 md:ml-0 bg-white">
          <div className="grid grid-cols-1  md:grid-cols-2 gap-6">
            {mostPopularData.map((data) => (
              <Popular data={data}></Popular>
            ))}
          </div>
          <div className="relative ">
            <LazyLoad height={862}>
              <img
                src={mostFavImg}
                alt="Most favorite datas"
                className="h-full lg:w-[550px] md:w-full "
              />
            </LazyLoad>
          </div>
        </div>
        {/* most popular section end */}

        {/* trending part start */}
        <Heading title="Most Trending Recipes"></Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 my-10 ">
          {mostTrendingData.map((data) => (
            <Trending key={data.id} chefData={data}></Trending>
          ))}
        </div>
        {/* trending part end */}

        {/* contact part start  */}
        <div className="grid grid-cols-1 lg:grid-cols-2 my-20 ">
          <div className="text-center lg:text-left mt-7 md:mt-40">
            <h2 className="title_text text-4xl my-7 text-red-700">
              Contact Yet !!
            </h2>
            <p className="descripction leading-7">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi
              magnam itaque cumque vel assumenda fuga rem voluptatum eos eum
              porro delectus, quidem, corrupti alias eveniet tempore nihil!
            </p>
            <button className="bttn my-6"> Contact Now</button>
          </div>
          <div>
            <Lottie animationData={contact} loop={true} />
          </div>
        </div>
        {/* contact part end  */}
      </div>
    </div>
  );
};

export default Home;
