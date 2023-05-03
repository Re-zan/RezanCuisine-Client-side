import React, { useContext, useState } from "react";
import { Form, Link } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProviders";
const Login = () => {
  const { login, googleLogin } = useContext(AuthContext);
  //states

  const [error, setError] = useState("");
  //login start

  const handelarLogin = (event) => {
    event.preventDefault();
    setError("");
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((reult) => {
        const loggedUser = reult.user;
        form.reset();
      })
      .catch((error) => {
        setError("User's email address or password doesn't match");
      });
  };

  const handeleraGoogle = () => {
    googleLogin();
  };

  return (
    <div className=" text-center bg-[#FAF9F6] sm:py-7 md:py-32">
      <div className="my_conatiner">
        <Form
          onSubmit={handelarLogin}
          className="sm:w-6/12 md:w-8/12 sm:px-6 md:px-24 py-10 sm:mx-0 md:mx-auto   bg-red-50 border rounded  shadow-lg"
        >
          <h2 className="title_text py-5 text-4xl">Login Here</h2>
          <div className="form-control">
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered my-2 py-4 rounded-none"
              name="email"
            />
          </div>
          <div className="form-control">
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered my-2 py-4 rounded-none"
              name="password"
            />
            <label className="label">
              <a
                href="#"
                className="label-text-alt link link-hover text-red-700"
              >
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-2">
            <button className="btn bttn">Login</button>
            <p className="text-red-800 my-4 text-lg">{error}</p>
            <p className=" text-gray-600 my-3">
              Don't have an account{" "}
              <Link to="/register" className="text-red-700 ">
                {" "}
                Sign Up
              </Link>
            </p>
            <p className="my-5 text-gray-600 "> ---------- Or ----------</p>
          </div>

          <div>
            <button
              className="btn btn-outline btn-info mb-3 w-full "
              onClick={handeleraGoogle}
            >
              {" "}
              <FaGoogle className="me-2"></FaGoogle>Google
            </button>
          </div>

          <button className="btn btn-outline  w-full">
            {" "}
            <FaGithub className="me-2"></FaGithub>GitHub
          </button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
