import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigator = useNavigate();

  const handelLogOut = () => {
    logOut();
    navigator("/");
  };
  const handCursor = (e) => {
    e.target.style.cursor = "pointer";
  };
  const showName = () => {
    document.getElementById("displayName").innerText = user.displayName;
  };
  const disAbleName = () => {
    document.getElementById("displayName").innerText = "";
  };
  return (
    <div className="navbar bg-base-100 my_conatiner py-6">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "text-red-600" : "")}
            >
              <li className="mx-3 text-xl font-medium transition  duration-300 ease-in-out  hover:border-t-2 hover:border-red-800">
                Home
              </li>
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "text-red-600" : "")}
            >
              <li className="mx-3 text-xl font-medium transition  duration-300 ease-in-out  hover:border-t-2 hover:border-red-800">
                About
              </li>
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? "text-red-600" : "")}
            >
              <li className="mx-3 text-xl font-medium transition  duration-300 ease-in-out hover:border-t-2 hover:border-red-800">
                Blog
              </li>
            </NavLink>
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost normal-case sm:text-2xl md:text-3xl hover:bg-transparent hover:scale-y-50"
        >
          Re-zan<span className=" text-red-600">Cuisine</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "text-red-600" : "")}
          >
            <li className="mx-3 text-xl font-medium transition  duration-300 ease-in-out  hover:border-t-2 hover:border-red-800">
              Home
            </li>
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "text-red-600" : "")}
          >
            <li className="mx-3 text-xl font-medium transition  duration-300 ease-in-out  hover:border-t-2 hover:border-red-800">
              About
            </li>
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) => (isActive ? "text-red-600" : "")}
          >
            <li className="mx-3 text-xl font-medium transition  duration-300 ease-in-out hover:border-t-2 hover:border-red-800">
              Blog
            </li>
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="avatar indicator" name="name">
                <p
                  className="indicator-item badge bg-transparent text-red-500 text-xl border-0"
                  id="displayName"
                ></p>
                <div className="w-14 h-14 rounded-full">
                  <img
                    src={user.photoURL}
                    alt={user.displayName}
                    onMouseOver={showName}
                    onMouseOut={disAbleName}
                  />
                </div>
              </label>

              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <Link to="/profile">
                  {" "}
                  <li className="justify-between">Profile</li>
                </Link>

                <li onClick={handelLogOut} onMouseOver={handCursor} id="courP">
                  Logout
                </li>
              </ul>
            </div>
          </>
        ) : (
          <Link to="/login" className="btn bttn">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
