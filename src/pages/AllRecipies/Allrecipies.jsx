import { useLoaderData } from "react-router-dom";
import Heading from "../../components/Heading/Heading";
import AllrecipesData from "./AllrecipesData";

const Allrecipies = () => {
  const datas = useLoaderData();
  //most popular datas
  const ALlData = [];
  for (let getDatas of datas) {
    for (let allDB of getDatas.best_recipes) {
      ALlData.push(allDB);
    }
  }

  return (
    <div className="my_conatiner my-20">
      <Heading title="All recipies"></Heading>

      <div className="grid  grid-cols-1 md:grid-cols-2 p-5 lg:p-0 gap-16 my-16">
        {ALlData.map((data) => (
          <AllrecipesData key={data.id} data={data}></AllrecipesData>
        ))}
      </div>
    </div>
  );
};

export default Allrecipies;
