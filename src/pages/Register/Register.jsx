import React from "react";
import { Form, Link } from "react-router-dom";
const Register = () => {
  return (
    <div className=" text-center bg-[#FAF9F6] sm:py-7 md:py-32">
      <div className="my_conatiner">
        <Form className="sm:w-6/12 md:w-8/12 sm:px-6 md:px-24 py-10 sm:mx-0 md:mx-auto  bg-red-50  border rounded shadow-lg">
          <h2 className="title_text py-3">Register Now</h2>

          <div className="form-control  ">
            <input
              type="text"
              placeholder="Enter your name"
              className="input input-bordered   md:my-2 md:py-4 rounded-none"
              required
            />
          </div>
          <div className="form-control">
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered my-2 py-4 rounded-none"
              required
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              placeholder="Enter your photo"
              className="input input-bordered my-2 py-4 rounded-none"
              required
            />
          </div>
          <div className="form-control">
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered my-2 py-4 rounded-none"
              required
            />
          </div>
          <div className="form-control mt-2">
            <button className="btn bttn">Login</button>
            <p className=" text-gray-600 my-3">
              Do have an account then{" "}
              <Link to="/login" className="text-red-700 ">
                {" "}
                LogIn
              </Link>
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Register;
