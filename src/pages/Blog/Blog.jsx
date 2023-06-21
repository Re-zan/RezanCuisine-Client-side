import React from "react";
import Banner from "../../components/Banner/Banner";
import bannerImg from "../../assets/images/Banner/banner3.jpg";
import Heading from "../../components/Heading/Heading";
import Pdf from "react-to-pdf";
import blogImg from "../../components/Animate/blog.json";
import Lottie from "lottie-react";
import LazyLoad from "react-lazy-load";
import blogImg1 from "../../assets/images/Blogs/blog1.jpg";
import blogImg2 from "../../assets/images/Blogs/blog2.jpg";
import blogImg3 from "../../assets/images/Blogs/blog3.jpg";
import { FaUserAlt } from "react-icons/fa";

const ref = React.createRef();
const Blog = () => {
  return (
    <div>
      {/* banner part start */}
      <Banner
        imgData={`${bannerImg}`}
        title="Here you can read amazings blog about food recipes"
        btnDes="Explore the recipes"
      ></Banner>
      {/* banner part end */}
      <div className="my_conatiner">
        {/* blogs part start */}
        <Heading title="Blogs"></Heading>
        <div className="grid grid-cols-1 lg:grid-cols-3 my-10 gap-10">
          <div className="card   shadow-xl rounded-none bg-white">
            <figure>
              <LazyLoad width={500} effect={blur}>
                <img
                  src={blogImg1}
                  alt="Michelle Rodriguez"
                  className=" h-[300px] w-full object-cover relative img_hover"
                />
              </LazyLoad>

              <div className="badge border-0 absolute top-0 end-0 p-4 mt-5 me-5 bg-red-600 text-white">
                <FaUserAlt className="me-2"></FaUserAlt> Michelle Rodriguez
              </div>
            </figure>
            <div className="card-body py-10 text-center">
              <h2 className=" text-center title_text text-red-600 text-2xl mb-6">
                Tasty Tidbits
              </h2>

              <div className="card-actions flex justify-between">
                <p>
                  Explore a treasure trove of delectable recipes that cater to
                  every palate. From comforting classics to innovative
                  creations, Tasty Tidbits will inspire your culinary
                  adventures. Get ready to tantalize your taste buds.
                </p>
              </div>
            </div>
          </div>
          <div className="card   shadow-xl rounded-none bg-white">
            <figure>
              <LazyLoad width={500} effect={blur}>
                <img
                  src={blogImg3}
                  alt="Alexandra Chen"
                  className=" h-[300px] w-full object-cover relative img_hover"
                />
              </LazyLoad>

              <div className="badge border-0 absolute top-0 end-0 p-4 mt-5 me-5 bg-red-600 text-white">
                <FaUserAlt className="me-2"></FaUserAlt> Alexandra Chen
              </div>
            </figure>
            <div className="card-body py-10 text-center">
              <h2 className="  title_text text-red-600 text-2xl mb-6">
                Globetrotting Flavors
              </h2>

              <div className="card-actions flex justify-between">
                <p>
                  Embark on a global culinary adventure with Globetrotting
                  Flavors. Discover diverse cuisines, traditional cooking
                  techniques, and unique ingredients that will transport your
                  taste buds to far-off lands.
                </p>
              </div>
            </div>
          </div>

          <div className="card   shadow-xl rounded-none bg-white">
            <figure>
              <LazyLoad width={500} effect={blur}>
                <img
                  src={blogImg2}
                  alt="Sophie Thompson"
                  className=" h-[300px] w-full object-cover relative img_hover"
                />
              </LazyLoad>

              <div className="badge border-0 absolute top-0 end-0 p-4 mt-5 me-5 bg-red-600 text-white">
                <FaUserAlt className="me-2"></FaUserAlt> Sophie Thompson
              </div>
            </figure>
            <div className="card-body py-10 text-center">
              <h2 className="  title_text text-red-600 text-2xl mb-6">
                Healthy Kitchen
              </h2>

              <div className="card-actions flex justify-between">
                <p>
                  Unlock the secrets of a nourishing kitchen with Healthy
                  Kitchen. From wholesome recipes to nutritional tips, explore a
                  world of healthy eating options that promote wellness and
                  vitality.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* blogs part end */}
        {/* faq part start */}
        <Heading title="Your Frquent Questions"></Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 mb-10">
          <div>
            <div className=" w-10/12 mx-auto collapse collapse-plus border border-base-300 bg-white my-8 ">
              <input type="checkbox" className="peer" />
              <div className="collapse-title title_text text-red-700  text-2xl shadow-lg">
                Q: What type of cuisine does Re-zanCuisine specialize in?
              </div>
              <div className="collapse-content ">
                <div ref={ref}>
                  <p className="descripction my-6">
                    Re-zanCuisine specializes in a fusion of diverse cuisines,
                    blending traditional flavors with contemporary techniques.
                    Our menu showcases an innovative combination of culinary
                    styles, ensuring a unique and unforgettable dining
                    experience.
                  </p>
                </div>
                <Pdf targetRef={ref} filename="Re-zanCuisine.pdf">
                  {({ toPdf }) => (
                    <button onClick={toPdf} className="bttn ">
                      Download Pdf
                    </button>
                  )}
                </Pdf>
              </div>
            </div>

            <div className=" w-10/12 mx-auto collapse collapse-plus border border-base-300 bg-white my-8">
              <input type="checkbox" className="peer" />
              <div className="collapse-title title_text text-red-700  text-2xl shadow-lg">
                Q: Is Re-zanCuisine suitable for dietary restrictions or special
                dietary needs?
              </div>
              <div className="collapse-content ">
                <div ref={ref}>
                  <p className="descripction my-6">
                    Absolutely! At Re-zanCuisine, we understand the importance
                    of catering to dietary restrictions and special dietary
                    needs. Our chefs are skilled at accommodating various
                    dietary requirements, including vegetarian, vegan,
                    gluten-free, and allergies. Please inform us of any specific
                    dietary needs when making your reservation, and our team
                    will ensure a delightful dining experience tailored to your
                    preferences.
                  </p>
                </div>
                <Pdf targetRef={ref} filename="Re-zanCuisine.pdf">
                  {({ toPdf }) => (
                    <button onClick={toPdf} className="bttn">
                      Download Pdf
                    </button>
                  )}
                </Pdf>
              </div>
            </div>

            <div className=" w-10/12 mx-auto collapse collapse-plus border border-base-300 bg-white my-8">
              <input type="checkbox" className="peer" />
              <div className="collapse-title title_text text-red-700  text-2xl shadow-lg">
                Q: How can I make a reservation at Re-zanCuisine?
              </div>
              <div className="collapse-content ">
                <div ref={ref}>
                  <p className="descripction my-6">
                    Making a reservation at Re-zanCuisine is easy. You can call
                    our reservation line at [phone number] during our operating
                    hours or visit our website and use the online reservation
                    form. Our friendly staff will assist you in securing a table
                    for your desired date and time, ensuring a seamless dining
                    experience.
                  </p>
                </div>
                <Pdf targetRef={ref} filename="Re-zanCuisine.pdf">
                  {({ toPdf }) => (
                    <button onClick={toPdf} className="bttn ">
                      Download Pdf
                    </button>
                  )}
                </Pdf>
              </div>
            </div>

            <div className=" w-10/12 mx-auto collapse collapse-plus border border-base-300 bg-white my-8">
              <input type="checkbox" className="peer" />
              <div className="collapse-title title_text text-red-700  text-2xl shadow-lg">
                Q: Does Re-zanCuisine offer private dining or event catering
                services?
              </div>
              <div className="collapse-content ">
                <div ref={ref}>
                  <p className="descripction my-6">
                    Yes, Re-zanCuisine offers private dining and event catering
                    services. Whether you're planning an intimate gathering, a
                    corporate event, or a special celebration, our team is
                    dedicated to creating a memorable experience. Please contact
                    our events department or visit our website for more
                    information on our private dining options and event catering
                    services.
                  </p>
                </div>
                <Pdf targetRef={ref} filename="Re-zanCuisine.pdf">
                  {({ toPdf }) => (
                    <button onClick={toPdf} className="bttn">
                      Download Pdf
                    </button>
                  )}
                </Pdf>
              </div>
            </div>
          </div>
          <div>
            {" "}
            <Lottie animationData={blogImg} loop={true} />
          </div>
        </div>
        {/* faq part end */}
      </div>
    </div>
  );
};

export default Blog;
