import React, { useContext } from "react";
import { Form, Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

const Profile = () => {
  const { user, profile } = useContext(AuthContext);
  const handelarUpdate = (event) => {
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;

    profile(user, name, photo);
    form.reset();
  };
  return (
    <div className=" text-center bg-[#FAF9F6] sm:py-7 md:py-32">
      <div className="my_conatiner ">
        <Form
          onSubmit={handelarUpdate}
          className="sm:w-6/12 md:w-8/12 sm:px-6 md:px-24 py-10 sm:mx-0 md:mx-auto  bg-red-50  border rounded shadow-lg "
        >
          <div>
            <img
              src={user?.photoURL}
              alt={user?.displayName}
              className="mx-auto rounded-full w-6/12"
            />
          </div>
          <div className="form-control  ">
            <input
              type="text"
              placeholder="Enter your name"
              className="input input-bordered   md:my-2 md:py-4 rounded-none"
              name="name"
            />
          </div>

          <div className="form-control">
            <input
              type="text"
              placeholder="Enter your photo"
              className="input input-bordered my-2 py-4 rounded-none"
              name="photo"
            />
          </div>

          <div className="form-control my-2">
            <button className="btn bttn">Update your profile</button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Profile;
