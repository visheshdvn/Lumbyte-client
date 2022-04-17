import React, { useState, useEffect } from "react";
// third party packages
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "../../utils/axios";
import Link from "next/link";
// utilities
import NoIndex from "../../utils/headTags/admin/noIndex";
// components
import Layout from "../../components/layouts/auth/signInRegister";
import RegisterForm from "../../components/elements/forms/register";
import "react-toastify/dist/ReactToastify.css";
import { useSession } from "next-auth/react";
import { useTheme } from "next-themes";
import Router from "next/router";

const SignUp = () => {
  const { theme } = useTheme();

  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "authenticated" && session) {
      Router.replace("/");
    }
  }, [status, session]);

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

  async function registerUser(e) {
    e.preventDefault();
    const { firstname, lastname, username, email, password } = details;

    if (
      firstname.trim() === "" ||
      username.trim() === "" ||
      email.trim() === "" ||
      password.trim() === ""
    ) {
      toast.error("Please fill in all fields", { theme });
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
      toast.success("Registration successfull", { theme });
      Router.push("/auth/signin?registration=success");
    } catch (error) {
      error.response?.data?.errors.map((err) =>
        toast.error(err.msg, { duration: 5000, theme })
      );
    }
  }

  return (
    <>
      <NoIndex />
      {/* body */}
      <Layout
        bannerAlt="Your ideas matters. - LumBytes"
        bannerURL="https://lumbytes-general.s3.eu-west-1.amazonaws.com/Frame+35.jpg"
      >
        <div className="w-full max-w-xs">
          <h1 className="font-primary mb-8 text-center text-4xl font-bold">
            LumBytes
          </h1>
          <h2 className="font-primary mb-8 text-center text-base font-bold">
            Register
          </h2>

          <RegisterForm
            onSubmitHandler={registerUser}
            updateFormData={updateDetails}
            formData={details}
          />

          <h3 className="line-across relative z-10 mx-auto mb-5 text-center">
            <span className="font-primary bg-white px-2 text-sm font-bold">
              OR
            </span>
          </h3>

          <Link href={"/auth/signin"} passHref>
            <a>
              <p className="font-primary flex h-10 w-full transform items-center justify-center rounded-sm border border-black text-sm font-bold text-black transition-all duration-700 hover:bg-black hover:text-white">
                Sign In Instead
              </p>
            </a>
          </Link>
        </div>
      </Layout>
    </>
  );
};

export default SignUp;
