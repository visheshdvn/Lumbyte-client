import React, { useState } from "react";
// third party packages
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
// utilities
import NoIndex from "../../utils/noIndex";
// components
import Navbar from "../../components/Navbar";

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
      <ToastContainer
        position="top-right"
        autoClose={3000}
        // hideProgressBar={true}
      />
      <Navbar />
      <div className="body-top-spacing relative h-screen">
        <div className="border absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-2">
          <div className="flex-1 mx-2 mb-5">
            <label className="block text-xs font-raleway font-semibold mb-1">
              First name
            </label>
            <input
              type="text"
              name="firstname"
              className="border border-black-10 rounded-sm focus:outline-none w-60 py-2 px-2"
              value={details.firstname}
              onChange={updateDetails}
            />
          </div>
          <div className="flex-1 mx-2 mb-5">
            <label className="block text-xs font-raleway font-semibold mb-1">
              Last name
            </label>
            <input
              type="text"
              name="lastname"
              className="border border-black-10 rounded-sm focus:outline-none w-60 py-2 px-2"
              value={details.lastname}
              onChange={updateDetails}
            />
          </div>
          <div className="flex-1 mx-2 mb-5">
            <label className="block text-xs font-raleway font-semibold mb-1">
              Username
            </label>
            <input
              type="text"
              name="username"
              className="border border-black-10 rounded-sm focus:outline-none w-60 py-2 px-2"
              value={details.username}
              onChange={updateDetails}
            />
          </div>
          <div className="mx-2 mb-5 relative">
            <label className="block text-xs font-raleway font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="border border-black-10 rounded-sm focus:outline-none w-60 py-2 px-2"
              value={details.email}
              onChange={updateDetails}
            />
            <p className="text-xs absolute hidden text-red-600">Error</p>
          </div>
          <div className="flex-1 mx-2 mb-5">
            <label className="block">Password</label>
            <input
              type="password"
              name="password"
              className="border border-black-10 rounded-sm focus:outline-none w-60 py-2 px-2"
              value={details.password}
              onChange={updateDetails}
            />
          </div>
          <div className="flex justify-center">
            <button
              className="border border-blue-600 py-2 px-4 bg-blue-600 text-white hover:bg-blue-500 font-semibold"
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
