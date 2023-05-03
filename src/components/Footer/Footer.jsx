import React from "react";
import fb from "../../assets/images/icons/fb.png";
import insta from "../../assets/images/icons/insta_.png";
import twitter from "../../assets/images/icons/twitter.png";

import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      {/* footer text part start */}
      <div className="text-center bg-slate-700 p-10 md:p-20 text-white">
        <h2 className=" title_text text-4xl"> Re-zanCuisine Developer </h2>
        <p className="descripction my-4 leading-8">
          Lorem Ipsum is simply dummy text of the printing and typesetting{" "}
          industry. It has survived not only five centuries,<br></br> but also
          the leap into electronic typesetting, remaining essentially unchanged.{" "}
        </p>
        <div className=" pt-6 flex mx-auto w-44">
          <Link to="https://www.facebook.com/">
            <img
              src={fb}
              alt="facebook"
              className="object-cover w-10 bg-slate-50 rounded-full mr-4 p-2"
            />
          </Link>
          <Link to="https://twitter.com/">
            <img
              src={twitter}
              alt="facebook"
              className="object-cover w-10 bg-slate-50 rounded-full mr-4 p-2"
            />
          </Link>

          <Link to="https://www.instagram.com/">
            {" "}
            <img
              src={insta}
              alt="facebook"
              className="object-cover w-12 bg-slate-50 rounded-full mr-4 p-3"
            />
          </Link>
        </div>
      </div>
      {/* footer text part end */}
      {/* footer bottom start */}
      <div className=" bg-gray-800  flex justify-between text-white items-center px-11 py-7">
        <p className="text-center lg:text-left">
          Copyright{" "}
          <span className="mx-1">
            {" "}
            &#169;2023{" "}
            <Link
              to="/"
              className="btn btn-ghost normal-case  text-xl hover:bg-transparent  -ms-2"
            >
              Re-zan<span className=" text-red-600">Cuisine</span>
            </Link>{" "}
          </span>{" "}
        </p>

        {/* footer menu part start */}
        <div className="navbar-center hidden md:block lg:flex">
          <ul className="menu menu-horizontal px-1">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "text-red-600" : "")}
            >
              <li className="mx-3 text-xl font-medium">Home</li>
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "text-red-600" : "")}
            >
              <li className="mx-3 text-xl font-medium">About</li>
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? "text-red-600" : "")}
            >
              <li className="mx-3 text-xl font-mediu">Blog</li>
            </NavLink>
          </ul>
        </div>
        {/* footer menu part end */}
      </div>

      {/* footer bottom end */}
    </footer>
  );
};

export default Footer;
