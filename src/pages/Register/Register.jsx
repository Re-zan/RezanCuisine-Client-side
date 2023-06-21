import React, { useContext, useState } from "react";
import { Form, Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
const Register = () => {
  //context
  const { register, profile } = useContext(AuthContext);

  //states
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  //register start
  const handalerRegister = (event) => {
    event.preventDefault();
    setError("");
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    if (password.length < 6) {
      setError("The password is less than 6 characters");
      return;
    }

    register(email, password)
      .then((resutlt) => {
        const loggedUser = resutlt.user;
        profile(loggedUser, name, photo);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };
  return (
    <div className=" text-center bg-[#FAF9F6] sm:py-7 md:py-32">
      <div className="my_conatiner">
        <Form
          onSubmit={handalerRegister}
          className="sm:w-6/12 md:w-8/12 sm:px-6 md:px-24 py-10 sm:mx-0 md:mx-auto  bg-red-50  border rounded shadow-lg"
        >
          <h2 className="title_text py-5 text-4xl ">Register Now</h2>

          <div className="form-control  ">
            <input
              type="text"
              placeholder="Enter your name"
              className="input input-bordered   md:my-2 md:py-4 rounded-none "
              name="name"
            />
          </div>
          <div className="form-control">
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered my-2 py-4 rounded-none "
              name="email"
              required
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              placeholder="Enter your photo url:"
              className="input input-bordered my-2 py-4 rounded-none "
              name="photo"
            />
          </div>
          <div className="form-control">
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered my-2 py-4 rounded-none "
              name="password"
              required
            />
          </div>
          <div className="form-control mt-2">
            <button className="btn bttn">Register</button>
            <p className=" text-gray-600 my-3">
              Do have an account then{" "}
              <Link to="/login" className="text-red-700 ">
                {" "}
                LogIn
              </Link>
            </p>

            <p className="text-red-800">{error}</p>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Register;
