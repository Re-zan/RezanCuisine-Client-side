import React from "react";
import Banner from "../../components/Banner/Banner";
import bannerImg from "../../assets/images/Banner/banner3.jpg";
import Heading from "../../components/Heading/Heading";
import Pdf from "react-to-pdf";
import blogImg from "../../components/Animate/blog.json";
import Lottie from "lottie-react";

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
        <Heading title="Your Frquent Questions"></Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 mb-10">
          <div>
            <div className=" w-10/12 mx-auto collapse collapse-plus border border-base-300 bg-white my-8">
              <input type="checkbox" className="peer" />
              <div className="collapse-title title_text text-red-700  text-2xl shadow-lg">
                Q: Tell us the differences between uncontrolled and controlled
                components ?
              </div>
              <div className="collapse-content ">
                <div ref={ref}>
                  <p className="descripction my-6">
                    Controlled components which are controlled by React and
                    uncontrolled components which are controlled by DOM.
                  </p>
                </div>
                <Pdf targetRef={ref} filename="code-example.pdf">
                  {({ toPdf }) => (
                    <button onClick={toPdf} className="bttn ">
                      Download This As A Pdf File
                    </button>
                  )}
                </Pdf>
              </div>
            </div>

            <div className=" w-10/12 mx-auto collapse collapse-plus border border-base-300 bg-white my-8">
              <input type="checkbox" className="peer" />
              <div className="collapse-title title_text text-red-700  text-2xl shadow-lg">
                Q: How to validate React props using PropTypes ?
              </div>
              <div className="collapse-content ">
                <div ref={ref}>
                  <p className="descripction my-6">
                    PropTypes are string, number, bool, array, object, func,
                    symbol, node etc. So if we need to validate React props
                    using PropTypes then we can do this by using prop-types
                    package.
                  </p>
                </div>
                <Pdf targetRef={ref} filename="code-example.pdf">
                  {({ toPdf }) => (
                    <button onClick={toPdf} className="bttn">
                      Download This As A Pdf File
                    </button>
                  )}
                </Pdf>
              </div>
            </div>

            <div className=" w-10/12 mx-auto collapse collapse-plus border border-base-300 bg-white my-8">
              <input type="checkbox" className="peer" />
              <div className="collapse-title title_text text-red-700  text-2xl shadow-lg">
                Q: Tell us the difference between nodejs and express js ?
              </div>
              <div className="collapse-content ">
                <div ref={ref}>
                  <p className="descripction my-6">
                    Nodejs is a javascript run time and Express js is a famous
                    Nodejs framework.
                  </p>
                </div>
                <Pdf targetRef={ref} filename="code-example.pdf">
                  {({ toPdf }) => (
                    <button onClick={toPdf} className="bttn ">
                      Download This As A Pdf File
                    </button>
                  )}
                </Pdf>
              </div>
            </div>

            <div className=" w-10/12 mx-auto collapse collapse-plus border border-base-300 bg-white my-8">
              <input type="checkbox" className="peer" />
              <div className="collapse-title title_text text-red-700  text-2xl shadow-lg">
                Q: What is a custom hook, and why will you create a custom hook?
              </div>
              <div className="collapse-content ">
                <div ref={ref}>
                  <p className="descripction my-6">
                    Custom hook isn't a build-in react hook. A react developer
                    makes coustom hook. What a coustom hook will return and the
                    arguments are decided by the react developer. A custom React
                    JS hook is created by using the ‘use’ prefix. For eg, a
                    custom hook can be named ‘useCounter’ . It is easy to make.
                    It makes developer code cleaner.
                  </p>
                </div>
                <Pdf targetRef={ref} filename="code-example.pdf">
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
      </div>
    </div>
  );
};

export default Blog;
