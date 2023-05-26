import imgWho from "../../../assets/images/Banner/cooking-lessons-.jpg";
const WhoWeAre = () => {
  return (
    <div className="mt-40 mb-20">
      <div className="grid md:grid-cols-2 ">
        <div className=" shadow-xl rounded-lg">
          <img
            src={imgWho}
            alt="Who we are"
            className=" h-full w-full rounded-lg shadow-xl"
          />
        </div>
        <div className=" pl-6 py-10">
          <h4 className="title_text text-4xl text-red-700 font-semibold">
            Who we are
          </h4>
          <p className=" w-[500px] py-5">
            At Re-zanCuisine, we are a culinary team driven by a relentless
            passion for creating extraordinary dining experiences. Our talented
            chefs, led by renowned culinary master Chef [Name], weave together
            flavors from diverse cuisines with innovative techniques, resulting
            in dishes that are both visually stunning and delightfully
            flavorful. We take pride in sourcing the finest, seasonal
            ingredients, prioritizing quality, sustainability, and supporting
            local suppliers. Beyond the plate, we strive to provide impeccable
            service, ensuring each guest feels warmly welcomed and attended to.
            Join us at Re-zanCuisine and embark on a gastronomic adventure where
            creativity, excellence, and memorable moments converge.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
