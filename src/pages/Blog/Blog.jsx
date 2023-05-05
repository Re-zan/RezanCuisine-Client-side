import React from "react";
import Banner from "../../components/Banner/Banner";
import bannerImg from "../../assets/images/Banner/banner3.jpg";
import Heading from "../../components/Heading/Heading";
import Pdf from "react-to-pdf";

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
                  <h1>Hello CodeSandbox</h1>
                  <h2>Start editing to see some magic happen!</h2>
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
                Q: Tell us the differences between uncontrolled and controlled
                components ?
              </div>
              <div className="collapse-content ">
                <div ref={ref}>
                  <h1>Hello CodeSandbox</h1>
                  <h2>Start editing to see some magic happen!</h2>
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
                Q: Tell us the differences between uncontrolled and controlled
                components ?
              </div>
              <div className="collapse-content ">
                <div ref={ref}>
                  <h1>Hello CodeSandbox</h1>
                  <h2>Start editing to see some magic happen!</h2>
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
                Q: Tell us the differences between uncontrolled and controlled
                components ?
              </div>
              <div className="collapse-content ">
                <div ref={ref}>
                  <h1>Hello CodeSandbox</h1>
                  <h2>Start editing to see some magic happen!</h2>
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
          <div>fddh</div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
