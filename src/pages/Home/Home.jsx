import React from "react";
import Banner from "../../components/Banner/Banner";
import Chefsection from "../../components/ChefSection/Chefsection";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const chefDatas = useLoaderData();
  console.log(chefDatas);
  return (
    <div>
      {/* banner part start */}
      <Banner></Banner>
      <div className="my_conatiner my-36">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {chefDatas.map((data) => (
            <Chefsection key={data.id} chefData={data}></Chefsection>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
