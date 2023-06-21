const AllrecipesData = ({ data }) => {
  const { cooking_method, ingredients, name, recipe_img } = data;
  return (
    <div>
      <div className="card  bg-white shadow-xl rounded-none">
        <figure>
          <img
            src={recipe_img}
            alt={name}
            className=" h-[450px] w-full img_hover"
          />
        </figure>
        <div className="card-body">
          <h2 className=" title_text text-red-700  text-2xl text-center">
            {name}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-10 title_text text-red-600">
              <p className="decoration-solid text-2xl mb-4">Ingredients:</p>
              <ul>
                {ingredients.map((ing) => (
                  <li className="list-disc ms-4 descripction">{ing} </li>
                ))}
              </ul>
            </div>
            <div className="py-10 ms-4 md:ms-0 me-5 px-0 md:px-8 lg:px-0 title_text text-red-600">
              <p className="decoration-solid text-2xl mb-4">Cooking method:</p>
              <ul>
                {cooking_method.map((cook) => (
                  <li className="list-decimal descripction ms-4">{cook} </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllrecipesData;
