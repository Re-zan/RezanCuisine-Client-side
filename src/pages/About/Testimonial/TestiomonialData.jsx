const TestiomonialData = ({ data }) => {
  const { name, occupation, img, testimonial } = data;
  return (
    <div className=" shadow-lg  rounded-r-[50px]   py-16 px-8 border ">
      <img src={img} alt={name} className=" w-[300px]  rounded-full mx-auto" />
      <div className="text-center py-10">
        <h3 className="title_text text-4xl text-red-700 font-semibold">
          {name}
        </h3>
        <p className="font-semibold text-lg py-5 italic">{occupation}</p>
        <p className=" h-[100px]">{testimonial}</p>
      </div>
    </div>
  );
};

export default TestiomonialData;
