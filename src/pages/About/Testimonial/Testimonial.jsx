import { useEffect } from "react";
import { useState } from "react";
import TestiomonialData from "./TestiomonialData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import "./Testimonail.css";

const Testimonial = () => {
  const [testimonial, setTestimonial] = useState([]);
  useEffect(() => {
    fetch("https://re-zancuisine-server-re-zan.vercel.app/testimonial")
      .then((res) => res.json())
      .then((data) => setTestimonial(data));
  }, []);

  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      pagination={{
        clickable: true,
        color: "red",
      }}
      modules={[Pagination]}
      className="mySwiper mb-20"
    >
      {" "}
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
        {testimonial.map((datas) => (
          <>
            <SwiperSlide className="mb-12">
              {" "}
              <TestiomonialData key={datas.id} data={datas}></TestiomonialData>
            </SwiperSlide>
          </>
        ))}
      </div>
    </Swiper>
  );
};

export default Testimonial;
