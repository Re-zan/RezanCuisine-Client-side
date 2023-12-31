import React from "react";

const Heading = (props) => {
  return (
    <div className="text-center my-20">
      <h2 className="title_text text-4xl my-7 text-red-700">{props.title}</h2>
      <p className="descripction leading-7">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi magnam
        itaque cumque vel assumenda <br></br> fuga rem voluptatum eos eum porro
        delectus, quidem, corrupti alias eveniet tempore nihil!
      </p>
    </div>
  );
};

export default Heading;
