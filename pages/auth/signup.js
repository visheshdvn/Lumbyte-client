import React, { useState } from "react";
// third party packages
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
// utilities
import NoIndex from "../../utils/metaTags/admin/noIndex";
// components

const SignUp = () => {
  const [details, setDetails] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
  });

  const updateDetails = (e) => {
    setDetails({
      ...details,
      [e.target.name]: e.target.value,
    });
  };

  const registerUser = async () => {
    const { firstname, lastname, username, email, password } = details;

    if (
      firstname === "" ||
      lastname === "" ||
      username === "" ||
      email === "" ||
      password === ""
    ) {
      toast.error("Please fill in all fields");
      return;
    }

    try {
      const res = await axios.post("/auth/signup", {
        firstname,
        lastname,
        username,
        email,
        password,
      });
      console.log(res);
      toast.success("Successfully registered");
    } catch (error) {
      //   console.log(error.response.data);
      error.response.data.errors.map((err) =>
        toast.error(err.msg, { duration: 5000 })
      );
    }
  };

  return (
    <>
      <NoIndex />
      <div className="body-top-spacing relative h-screen">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform border p-2">
          <div className="mx-2 mb-5 flex-1">
            <label className="font-raleway mb-1 block text-xs font-semibold">
              First name
            </label>
            <input
              type="text"
              name="firstname"
              className="border-black-10 w-60 rounded-sm border py-2 px-2 focus:outline-none"
              value={details.firstname}
              onChange={updateDetails}
            />
          </div>
          <div className="mx-2 mb-5 flex-1">
            <label className="font-raleway mb-1 block text-xs font-semibold">
              Last name
            </label>
            <input
              type="text"
              name="lastname"
              className="border-black-10 w-60 rounded-sm border py-2 px-2 focus:outline-none"
              value={details.lastname}
              onChange={updateDetails}
            />
          </div>
          <div className="mx-2 mb-5 flex-1">
            <label className="font-raleway mb-1 block text-xs font-semibold">
              Username
            </label>
            <input
              type="text"
              name="username"
              className="border-black-10 w-60 rounded-sm border py-2 px-2 focus:outline-none"
              value={details.username}
              onChange={updateDetails}
            />
          </div>
          <div className="relative mx-2 mb-5">
            <label className="font-raleway mb-1 block text-xs font-semibold">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="border-black-10 w-60 rounded-sm border py-2 px-2 focus:outline-none"
              value={details.email}
              onChange={updateDetails}
            />
            <p className="absolute hidden text-xs text-red-600">Error</p>
          </div>
          <div className="mx-2 mb-5 flex-1">
            <label className="block">Password</label>
            <input
              type="password"
              name="password"
              className="border-black-10 w-60 rounded-sm border py-2 px-2 focus:outline-none"
              value={details.password}
              onChange={updateDetails}
            />
          </div>
          <div className="flex justify-center">
            <button
              className="border border-blue-600 bg-blue-600 py-2 px-4 font-semibold text-white hover:bg-blue-500"
              onClick={registerUser}
            >
              Sign Up!
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
